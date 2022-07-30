export class Jutsu {
  name: string;
  description: string;
  chakraCost: number;
  rank: string;
  castTime: string;

  constructor(data: Partial<Jutsu>) {
    this.name = data.name ?? "Jutsu";
    this.description = data.description ?? "no description";
    this.chakraCost = data.chakraCost ?? 0;
    this.rank = data.rank ?? "E";
    this.castTime = data.castTime ?? "";
  }
}
