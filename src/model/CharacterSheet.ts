import { EBackground } from "./Backgrounds/EBackground";
import { EClan } from "./Clans/EClan";
import { EClass } from "./Classes/EClass";
import type { IClass } from "./Classes/IClass";
import * as Classes from "./Classes/index";
import { Equipment } from "./Equipment";

export class CharacterSheetModel {
  private readonly characterClass: IClass;

  //#region page 1 section 1
  public get proficiencyBonus() {
    return this.characterClass.proficiencyBonus(this.level);
  }

  public passivePerception: number;

  public passiveInsight: number;
  public willOfFire: number;
  //#endregion

  //#region page 1 section 2
  public name: string;
  public clan: EClan;
  public class: EClass;
  public playerName: string;
  public level: number;
  public background: EBackground;
  public rank: number;
  public xp: number;
  //#endregion

  //#region page 1 section 3
  public strength: number;
  public get strengthDice(): number {
    return Math.floor((this.strength - 10) / 2);
  }
  public dexterity: number;
  public get dexterityDice(): number {
    return Math.floor((this.dexterity - 10) / 2);
  }
  public constitution: number;
  public get constitutionDice(): number {
    return Math.floor((this.constitution - 10) / 2);
  }
  public intelligence: number;
  public get intelligenceDice(): number {
    return Math.floor((this.intelligence - 10) / 2);
  }
  public wisdom: number;
  public get wisdomDice(): number {
    return Math.floor((this.wisdom - 10) / 2);
  }
  public charisma: number;
  public get charismaDice(): number {
    return Math.floor((this.charisma - 10) / 2);
  }
  //#endregion

  //#region page 1 section 8
  public ryo: number;
  public equipment: Array<Equipment>;
  //#endregion

  constructor(data: Partial<CharacterSheetModel>) {
    this.passivePerception = data.passivePerception ?? 0;
    this.passiveInsight = data.passiveInsight ?? 0;
    this.willOfFire = data.willOfFire ?? 0;

    this.name = data.name ?? "Naruto";
    this.clan = data.clan ?? EClan.Uzumaki;
    this.playerName = data.playerName ?? "Player 01";
    this.class = data.class ?? EClass["Scout-Nin"];
    this.level = data.level ?? 1;
    this.background = data.background ?? EBackground["Trouble Maker"];
    this.rank = data.rank ?? 1;
    this.xp = data.xp ?? 0;
    this.characterClass = new (Classes.from(this.class))();

    this.strength = data.strength ?? 10;
    this.dexterity = data.dexterity ?? 10;
    this.constitution = data.constitution ?? 10;
    this.intelligence = data.intelligence ?? 10;
    this.wisdom = data.wisdom ?? 10;
    this.charisma = data.charisma ?? 10;

    this.ryo = data.ryo ?? 100;
    this.equipment = data.equipment ?? new Array();
  }
}
