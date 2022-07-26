export class Proficiency {
  label: string;
  value: number;
  p: boolean;
  h: boolean;
  e: boolean;

  constructor(data: Partial<Proficiency>) {
    console.debug("Proficiencies", data);
    this.label = data.label ?? "";
    this.value = data.value ?? 0;
    this.p = data.p ?? false;
    this.h = data.h ?? false;
    this.e = data.e ?? false;
  }
}
