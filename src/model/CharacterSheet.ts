import { EBackground } from "./Backgrounds/EBackground";
import { EClan } from "./Clans/EClan";
import { IClan } from "./Clans/IClan";
import { EClass } from "./Classes/EClass";
import type { IClass } from "./Classes/IClass";
import * as Classes from "./Classes/index";
import * as Clans from "./Clans/index";
import { Equipment } from "./Equipment";
import { Proficiency } from "./Proficiency";

const importEnum = (e: any, value: string | number | undefined, def: any) => {
  if (value === undefined) {
    return def;
  } else if (isNaN(parseInt(String(value)))) {
    return e[value];
  } else {
    return value;
  }
};

const emptyProficiency = (label: string = "Saving Throw"): Proficiency => ({
  label,
  value: 0,
  p: false,
  h: false,
  e: false,
});

export class CharacterSheetModel {
  private readonly characterClass: IClass;
  private readonly characterClan: IClan;

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
  public _strengthProficiencies: Array<Proficiency>;
  public set strengthProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.strengthDice;
      } else {
        item.value = this.strengthDice;
      }
    }
    this._strengthProficiencies = value;
  }
  public get strengthProficiencies() {
    for (const item of this._strengthProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.strengthDice;
      } else {
        item.value = this.strengthDice;
      }
    }
    return this._strengthProficiencies;
  }
  public dexterity: number;
  public get dexterityDice(): number {
    return Math.floor((this.dexterity - 10) / 2);
  }
  public _dexterityProficiencies: Array<Proficiency>;
  public get dexterityProficiencies() {
    for (const item of this._dexterityProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.dexterityDice;
      } else {
        item.value = this.dexterityDice;
      }
    }
    return this._dexterityProficiencies;
  }
  public set dexterityProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.dexterityDice;
      } else {
        item.value = this.dexterityDice;
      }
    }
    this._dexterityProficiencies = value;
  }
  public constitution: number;
  public get constitutionDice(): number {
    return Math.floor((this.constitution - 10) / 2);
  }
  public _constitutionProficiencies: Array<Proficiency>;
  public get constitutionProficiencies() {
    for (const item of this._constitutionProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.constitutionDice;
      } else {
        item.value = this.constitutionDice;
      }
    }
    return this._constitutionProficiencies;
  }
  public set constitutionProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.constitutionDice;
      } else {
        item.value = this.constitutionDice;
      }
    }
    this._constitutionProficiencies = value;
  }
  public intelligence: number;
  public get intelligenceDice(): number {
    return Math.floor((this.intelligence - 10) / 2);
  }
  public _intelligenceProficiencies: Array<Proficiency>;
  public get intelligenceProficiencies() {
    for (const item of this._intelligenceProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.intelligenceDice;
      } else {
        item.value = this.intelligenceDice;
      }
    }
    return this._intelligenceProficiencies;
  }
  public set intelligenceProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.intelligenceDice;
      } else {
        item.value = this.intelligenceDice;
      }
    }
    this._intelligenceProficiencies = value;
  }
  public wisdom: number;
  public get wisdomDice(): number {
    return Math.floor((this.wisdom - 10) / 2);
  }
  public _wisdomProficiencies: Array<Proficiency>;
  public get wisdomProficiencies() {
    for (const item of this._wisdomProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.wisdomDice;
      } else {
        item.value = this.wisdomDice;
      }
    }
    return this._wisdomProficiencies;
  }
  public set wisdomProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.wisdomDice;
      } else {
        item.value = this.wisdomDice;
      }
    }
    this._wisdomProficiencies = value;
  }
  public charisma: number;
  public get charismaDice(): number {
    return Math.floor((this.charisma - 10) / 2);
  }
  public _charismaProficiencies: Array<Proficiency>;
  public get charismaProficiencies() {
    for (const item of this._charismaProficiencies) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.charismaDice;
      } else {
        item.value = this.charismaDice;
      }
    }
    return this._charismaProficiencies;
  }
  public set charismaProficiencies(value: Array<Proficiency>) {
    for (const item of value) {
      if (item.p) {
        item.value = this.proficiencyBonus + this.charismaDice;
      } else {
        item.value = this.charismaDice;
      }
    }
    this._charismaProficiencies = value;
  }
  //#endregion

  //#region page 1 section 4
  public armorClass: number;
  public initiative: number;
  public get speed(): number {
    return this.characterClan.speed;
  }
  public hitPointsMax: number;
  public hitPointsCurrent: number;
  public chakraPointsMax: number;
  public chakraPointsCurrent: number;
  public hitDie: number;
  public chakraDie: number;
  //#endregion

  //#region page 1 section 5
  public personalityTraits: string;
  public ideals: string;
  public bonds: string;
  public flaws: string;
  //#endregion

  //#region page 1 section 6
  public featuresTraitsProficiencies: Array<string>;
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
    this.clan = importEnum(EClan, data.clan, EClan.Uzumaki);
    this.playerName = data.playerName ?? "Player 01";
    this.class = importEnum(EClass, data.class, EClass["Scout-Nin"]);
    this.level = data.level ?? 1;
    this.background = importEnum(
      EBackground,
      data.background,
      EBackground["Trouble Maker"]
    );
    this.rank = data.rank ?? 1;
    this.xp = data.xp ?? 0;
    this.characterClass = new (Classes.from(this.class))();
    this.characterClan = new (Clans.from(this.clan))();

    this.strength = data.strength ?? 10;
    this._strengthProficiencies = data._strengthProficiencies
      ? data._strengthProficiencies.map((x) => new Proficiency(x))
      : [
          emptyProficiency(),
          emptyProficiency("Athletics"),
          emptyProficiency("Martal Arts"),
        ];
    this.dexterity = data.dexterity ?? 10;
    this._dexterityProficiencies = data._dexterityProficiencies
      ? data._dexterityProficiencies.map((x) => new Proficiency(x))
      : [
          emptyProficiency(),
          emptyProficiency("Acrobatics"),
          emptyProficiency("Sleight of Hand"),
          emptyProficiency("Stealth"),
        ];
    this.constitution = data.constitution ?? 10;
    this._constitutionProficiencies = data._constitutionProficiencies
      ? data._constitutionProficiencies.map((x) => new Proficiency(x))
      : [emptyProficiency(), emptyProficiency("Chakra Control")];
    this.intelligence = data.intelligence ?? 10;
    this._intelligenceProficiencies = data._intelligenceProficiencies
      ? data._intelligenceProficiencies.map((x) => new Proficiency(x))
      : [
          emptyProficiency(),
          emptyProficiency("Crafting"),
          emptyProficiency("History"),
          emptyProficiency("Investigation"),
          emptyProficiency("Nature"),
          emptyProficiency("Ninshou"),
        ];
    this.wisdom = data.wisdom ?? 10;
    this._wisdomProficiencies = data._wisdomProficiencies
      ? data._wisdomProficiencies.map((x) => new Proficiency(x))
      : [
          emptyProficiency(),
          emptyProficiency("Animal Handling"),
          emptyProficiency("Illusion"),
          emptyProficiency("Insight"),
          emptyProficiency("Medicine"),
          emptyProficiency("Perception"),
          emptyProficiency("Survival"),
        ];
    this.charisma = data.charisma ?? 10;
    this._charismaProficiencies = data._charismaProficiencies
      ? data._charismaProficiencies.map((x) => new Proficiency(x))
      : [
          emptyProficiency(),
          emptyProficiency("Deception"),
          emptyProficiency("Intimidation"),
          emptyProficiency("Performance"),
          emptyProficiency("Persuasion"),
        ];

    this.ryo = data.ryo ?? 100;
    this.equipment = data.equipment
      ? data.equipment.map((x) => new Equipment(x))
      : [];

    this.armorClass = data.armorClass ?? 0;
    this.initiative = data.initiative ?? 0;
    this.hitPointsMax = data.hitPointsMax ?? 0;
    this.hitPointsCurrent = data.hitPointsCurrent ?? 0;
    this.chakraPointsMax = data.chakraPointsMax ?? 0;
    this.chakraPointsCurrent = data.chakraPointsCurrent ?? 0;
    this.hitDie = data.hitDie ?? 0;
    this.chakraDie = data.chakraDie ?? 0;

    this.personalityTraits = data.personalityTraits ?? "";
    this.ideals = data.ideals ?? "";
    this.bonds = data.bonds ?? "";
    this.flaws = data.flaws ?? "";
    this.featuresTraitsProficiencies = data.featuresTraitsProficiencies ?? [];
  }
}
