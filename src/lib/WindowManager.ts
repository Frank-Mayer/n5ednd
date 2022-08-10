export const thisUrl = new URL(window.location.href);

const windows: Array<Window> = [window];

export const isSubwindow = window.opener !== null;

if (window.opener) {
  if ((window.opener as Window).location.origin !== window.location.origin) {
    const err =
      "Panic Error: This window is not allowed to be opened from another origin.";
    alert(err);
    window.close();
    throw new Error(err);
  }

  if (!thisUrl.searchParams.has("familiarSpirit")) {
    const err =
      "Panic Error: Subwindows are only allowed to display Familiar Spirits";
    alert(err);
    window.close();
    throw new Error(err);
  }

  if (
    !Number.isInteger(
      Number.parseInt(thisUrl.searchParams.get("familiarSpirit")!, 10)
    )
  ) {
    const err = "Panic Error: Invalid index for Familiar Spirit";
    alert(err);
    window.close();
    throw new Error(err);
  }

  if (!thisUrl.searchParams.has("windowId")) {
    const err = "Panic Error: Subwindow is missing a WindowId";
    alert(err);
    window.close();
    throw new Error(err);
  }

  if (
    !Number.isInteger(
      Number.parseInt(thisUrl.searchParams.get("windowId")!, 10)
    )
  ) {
    const err = "Panic Error: Invalid index for WindowId";
    alert(err);
    window.close();
    throw new Error(err);
  }

  // on window close:
  window.addEventListener("beforeunload", () => {
    (window.opener as Window).postMessage(
      {
        type: "close",
        windowId: thisUrl.searchParams.get("windowId")!,
      },
      thisUrl.origin
    );
  });
} else {
  window.addEventListener("message", (ev) => {
    if (ev.data.type === "close" && typeof ev.data.windowId === "string") {
      const windowId = Number.parseInt(ev.data.windowId, 10);
      if (!Number.isNaN(windowId)) {
        const closed = windows.splice(windowId, 1);
        for (const w of closed) {
          w.close();
        }
      }
    }
  });

  // on window close:
  window.addEventListener("beforeunload", () => {
    for (const w of windows) {
      w.close();
    }
  });
}

export const subwindowDataForUpdateParent = {
  prop: "familiarSpirits",
  index: Number.parseInt(thisUrl.searchParams.get("familiarSpirit")!, 10),
};

export const openWindow = (...value: Array<[string, string | number]>) => {
  const newUrl = new URL(thisUrl.href);
  newUrl.searchParams.set("windowId", windows.length.toString(36));
  for (const v of value) {
    newUrl.searchParams.set(v[0], v[1].toString());
  }
  const newWindow = window.open(newUrl);
  if (newWindow) {
    windows.push(newWindow);
  } else {
    const err = "Failed to open new window";
    alert(err);
    throw new Error(err);
  }
};

export const updateChildren = () => {
  for (let i = windows.length - 1; i >= 1; i--) {
    windows[i].postMessage(
      {
        type: "property-changed-from-parent",
      },
      thisUrl.origin
    );
  }
};

type Message = {
  data: any;
};

type PipelineMessage = Message & {
  type: "message";
  id: string;
  window: number;
  answer: boolean;
};

export class Signal<T> {
  private value: T | undefined;

  private constructor(value?: T) {
    this.value = value;
  }

  static on<T>(s: T): Signal<T> {
    return new Signal(s);
  }

  static off<T>(): Signal<T> {
    return new Signal();
  }

  with<R>(callback: (value: T) => R): R | undefined {
    if (this.value) {
      return callback(this.value);
    } else {
      return undefined;
    }
  }
}

const newId = () => {
  const d = Date.now();
  const r = Math.random() * 1e9;
  return d.toString(36) + r.toString(36);
};

export const messageToParent = isSubwindow
  ? (message: Message) => {
      const id = newId();

      const prom = new Promise<any>((res) => {
        const callback = (ev: MessageEvent) => {
          const m = ev.data as PipelineMessage;
          if (m.id === id && m.answer) {
            window.removeEventListener("message", callback);
            res(m.data);
          }
        };

        window.addEventListener("message", callback, {
          passive: true,
        });

        window.setTimeout(() => {
          window.removeEventListener("message", callback);
          res("timeout");
        }, 1000);
      });

      if (window.opener) {
        window.opener.postMessage(
          {
            ...message,
            type: "message",
            id,
            window: Number.parseInt(thisUrl.searchParams.get("windowId")!, 10),
            answer: false,
          },
          thisUrl.origin
        );
      } else {
        const err =
          "Panic Error: Cannot send message to parent window, it does not exist";
        alert(err);
        window.close();
        throw new Error(err);
      }

      return prom;
    }
  : (_message: Message) => Promise.resolve("This is not a subwindow");

const messageFromChildrenEL = new Array<(message: Message) => Signal<any>>();
export const onMessageFromChildren = (
  callback: (message: any) => Signal<any>
) => {
  messageFromChildrenEL.push(callback);
};

window.addEventListener("message", (ev) => {
  const m = ev.data as PipelineMessage;
  if (m.type === "message" && !m.answer) {
    for (const c of messageFromChildrenEL) {
      c(m.data).with((data) => {
        const w = windows[m.window];
        w?.postMessage(
          {
            answer: true,
            id: m.id,
            data,
          } as PipelineMessage,
          thisUrl.origin
        );
      });
    }
  }
});
