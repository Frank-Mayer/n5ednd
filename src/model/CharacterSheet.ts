import { EBackground } from "./Backgrounds/EBackground";
import { EClan } from "./Clans/EClan";
import { IClan } from "./Clans/IClan";
import { EClass } from "./Classes/EClass";
import type { IClass } from "./Classes/IClass";
import * as Classes from "./Classes/index";
import * as Clans from "./Clans/index";
import { Equipment } from "./Equipment";
import { Proficiency } from "./Proficiency";
import { Item } from "./Item";
import { Jutsu } from "./Jutsu";

const levelToExp = (level: number): number => {
  switch (level) {
    case 1:
      return 0;
    case 2:
      return 50;
    case 3:
      return 75;
    case 4:
      return 100;
    case 5:
      return 150;
    case 6:
      return 200;
    case 7:
      return 350;
    case 8:
      return 475;
    case 9:
      return 600;
    case 10:
      return 725;
    case 11:
      return 850;
    case 12:
      return 1000;
    case 13:
      return 1200;
    case 14:
      return 1400;
    case 15:
      return 1600;
    case 16:
      return 1800;
    case 17:
      return 2100;
    case 18:
      return 2400;
    case 19:
      return 2700;
    case 20:
      return 3000;
  }

  if (level > 20) {
    return 4000;
  } else {
    return 0;
  }
};

const expToLevel = (exp: number): number => {
  if (exp < 0) {
    return 0;
  }

  for (let i = 1; i <= 20; i++) {
    if (levelToExp(i) > exp) {
      return i - 1;
    }
  }

  return 20;
};

const importEnum = (e: any, value: string | number | undefined, def: any) => {
  if (value === undefined) {
    return def;
  } else if (isNaN(parseInt(String(value), 10))) {
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
  private characterClass: IClass;
  private characterClan: IClan;

  //#region tool methods
  public toJSON(): this {
    return {
      ...this,
      clan: this.clan,
      class: this.class,
      familiarSpirits: this.familiarSpirits.map((x) => x.toJSON()),
      speed: this.speed,
      hitDice: this.hitDice,
      chakraDice: this.chakraDice,
    };
  }

  public get isFamiliarSpirit(): boolean {
    return (
      this.class === EClass.FamiliarSpirit ||
      (this.class as any) === "FamiliarSpirit"
    );
  }

  protected get allProficiencies(): Proficiency[] {
    const proficiencies = [
      ...this.strengthProficiencies,
      ...this.dexterityProficiencies,
      ...this.constitutionProficiencies,
      ...this.intelligenceProficiencies,
      ...this.wisdomProficiencies,
      ...this.charismaProficiencies,
    ];
    return proficiencies;
  }

  private whitespaceRegex = /\s+/g;

  /**
   * Looks up the `Proficiency` with the given name, returning `undefined` if none is found.
   * @param name The name of the `Proficiency` to get.
   * @param p Set a specific boolean value to look for, otherwise this will be ignored.
   * @param h Set a specific boolean value to look for, otherwise this will be ignored.
   * @param e Set a specific boolean value to look for, otherwise this will be ignored.
   * @returns The `Proficiency` with the given name, or `undefined` if no `Proficiency` with that name exists.
   */
  public getProficiency(
    name: string,
    p?: boolean,
    h?: boolean,
    e?: boolean
  ): Proficiency | undefined {
    const compareName = name.replace(this.whitespaceRegex, "").toLowerCase();
    for (const proficiency of this.allProficiencies) {
      if (
        proficiency.label.replace(this.whitespaceRegex, "").toLowerCase() ===
          compareName &&
        (typeof p === "boolean" ? proficiency.p : true) &&
        (typeof h === "boolean" ? proficiency.h : true) &&
        (typeof e === "boolean" ? proficiency.e : true)
      ) {
        return proficiency;
      }
    }

    return undefined;
  }
  //#endregion

  //#region page 1 section 1
  public get proficiencyBonus() {
    return this.characterClass.proficiencyBonus(this.level);
  }

  public get passivePerception() {
    const perceptionProf = this.getProficiency("Perception");
    if (perceptionProf) {
      return 10 + perceptionProf.value;
    }
    return 10 + this.wisdomDice;
  }

  public get passiveInsight() {
    const perceptionProf = this.getProficiency("Perception");
    if (perceptionProf) {
      return 10 + perceptionProf.value;
    }
    return 10 + this.wisdomDice;
  }
  public willOfFire: number;
  //#endregion

  //#region page 1 section 2
  public name: string;
  public set clan(value: EClan) {
    const enumValue = importEnum(EClan, value, EClan.Uzumaki);
    this.characterClan = new (Clans.from(enumValue))();
  }
  public get clan() {
    return this.characterClan.ident;
  }

  public set class(value: EClass) {
    const enumValue = importEnum(EClass, value, EClass["Scout-Nin"]);
    this.characterClass = new (Classes.from(enumValue))();
  }
  public get class() {
    return this.characterClass.ident;
  }
  public playerName: string;
  public _level: number;
  public get level(): number {
    return this._level;
  }
  public set level(value: number) {
    this._level = value;
    const minXp = levelToExp(value);
    const maxXp = levelToExp(value + 1) - 1;
    this._xp = Math.min(Math.max(this._xp, minXp), maxXp);
  }
  public background: EBackground;
  public get rank(): string {
    if (this.level < 5) {
      return "D";
    }
    if (this.level < 9) {
      return "C";
    }
    if (this.level < 13) {
      return "B";
    }
    if (this.level < 17) {
      return "A";
    }
    return "S";
  }
  public _xp: number;
  public get xp(): number {
    return this._xp;
  }
  public set xp(value: number) {
    this._xp = value;
    this._level = expToLevel(value);
  }
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
  public get armorBonus() {
    let armor = 0;
    for (const item of this.equipment) {
      if (item.armor) {
        armor += item.armor;
      }
    }
    return armor;
  }
  public get armorClass() {
    return (
      10 +
      this.armorBonus +
      this.dexterityDice +
      Math.floor(this.proficiencyBonus / 2)
    );
  }
  public get initiative(): number {
    if (
      this.class === EClass["Hunter-Nin"] ||
      (this.class as any) === "Hunter-Nin"
    ) {
      return this.dexterityDice + this.proficiencyBonus;
    } else {
      return this.dexterityDice + Math.floor(this.proficiencyBonus / 2);
    }
  }
  public _speed: number;
  public get speed(): number {
    return this.isFamiliarSpirit ? this._speed : this.characterClan.speed;
  }
  public set speed(value: number) {
    if (this.isFamiliarSpirit) {
      this._speed = value;
    } else {
      alert("You can't change your speed");
    }
  }
  public _hitPointsMax: number;
  public get hitPointsMax(): number {
    if (this.level === 1) {
      return this.constitutionDice + this.hitDice;
    } else {
      return this._hitPointsMax;
    }
  }
  public set hitPointsMax(value: number) {
    if (this.level === 1) {
      this._hitPointsMax = this.constitutionDice + this.hitDice;
    } else {
      this._hitPointsMax = value;
    }
  }
  public hitPointsCurrent: number;
  public _chakraPointsMax: number;
  public get chakraPointsMax(): number {
    if (this.level === 1) {
      return this.chakraDice + this.constitutionDice;
    } else {
      return this._chakraPointsMax;
    }
  }
  public set chakraPointsMax(value: number) {
    if (this.level === 1) {
      this._chakraPointsMax = this.chakraDice + this.constitutionDice;
    } else {
      this._chakraPointsMax = value;
    }
  }
  public chakraPointsCurrent: number;

  public _hitDice: Dice;
  public get hitDice(): Dice {
    return this.isFamiliarSpirit ? this._hitDice : this.characterClass.hitDice;
  }
  public set hitDice(value: Dice) {
    if (this.isFamiliarSpirit) {
      this._hitDice = value;
    } else {
      alert("You can't change your hit dice");
    }
  }

  public _chakraDice: Dice;
  public get chakraDice(): Dice {
    return this.isFamiliarSpirit
      ? this._chakraDice
      : this.characterClass.chakraDice;
  }
  public set chakraDice(value: Dice) {
    if (this.isFamiliarSpirit) {
      this._chakraDice = value;
    } else {
      alert("You can't change your chakra dice");
    }
  }
  //#endregion

  //#region page 1 section 5
  public personalityTraits: string;
  public ideals: string;
  public bonds: string;
  public flaws: string;
  //#endregion

  //#region page 1 section 6
  public usableItems: Array<Item>;
  //#endregion

  //#region page 1 section 7
  public featuresTraitsProficiencies: Array<string>;
  //#endregion

  //#region page 1 section 8
  public ryo: number;
  public equipment: Array<Equipment>;
  //#endregion

  //#region page 2 section 2
  public age: number;
  public height: number;
  public weight: number;
  public eyes: string;
  public skin: string;
  public hair: string;
  //#endregion

  //#region page 2 section 3
  public appearance: string;
  //#endregion

  //#region page 2 section 4
  public villageRank: string;
  public alliesAndOrganizations: Array<string>;
  public natureAffinities: Array<string>;
  //#endregion

  //#region page 2 section 5
  public backstory: string;
  //#endregion

  //#region page 3 section 1
  public get ninjutsuAttackBonus(): number {
    return this.proficiencyBonus + this.intelligenceDice;
  }
  public get ninjutsuSaveDC(): number {
    return 8 + this.proficiencyBonus + this.intelligenceDice;
  }
  public get taijutsuAttackBonus(): number {
    return this.proficiencyBonus + this.strengthDice;
  }
  public get taijutsuSaveDC(): number {
    return 8 + this.proficiencyBonus + this.strengthDice;
  }
  public get genjutsuAttackBonus(): number {
    return this.proficiencyBonus + this.wisdomDice;
  }
  public get genjutsuSaveDC(): number {
    return 8 + this.proficiencyBonus + this.wisdomDice;
  }
  public jutsuList: Array<Jutsu>;
  //#endregion

  //#region additional features
  public familiarSpirits: Array<CharacterSheetModel>;
  //#endregion

  constructor(data: Partial<CharacterSheetModel>) {
    this.willOfFire = data.willOfFire ?? 0;

    this.name = data.name ?? "Naruto";
    this.clan = importEnum(EClan, data.clan, EClan.Uzumaki);
    this.characterClan ??= new (Clans.from(this.clan))();
    this.playerName = data.playerName ?? "Player 01";
    this.class = importEnum(EClass, data.class, EClass["Scout-Nin"]);
    this.characterClass ??= new (Classes.from(this.class))();
    this._level = data._level ?? 1;
    this.background = importEnum(
      EBackground,
      data.background,
      EBackground["Trouble Maker"]
    );
    this._xp = data._xp ?? 0;

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

    this._speed = data.speed ?? 30;
    this.hitPointsMax = data._hitPointsMax ?? 0;
    this._hitPointsMax ??= this.hitPointsMax;
    this.hitPointsCurrent = data.hitPointsCurrent ?? 0;
    this.chakraPointsMax = data._chakraPointsMax ?? 0;
    this._chakraPointsMax ??= this.chakraPointsMax;
    this.chakraPointsCurrent = data.chakraPointsCurrent ?? 0;
    this._hitDice = data.hitDice ?? 10;
    this._chakraDice = data.chakraDice ?? 10;

    this.personalityTraits = data.personalityTraits ?? "";
    this.ideals = data.ideals ?? "";
    this.bonds = data.bonds ?? "";
    this.flaws = data.flaws ?? "";
    this.featuresTraitsProficiencies = data.featuresTraitsProficiencies ?? [];

    this.usableItems = data.usableItems ?? [];

    this.age = data.age ?? 16; // years
    this.height = data.height ?? 5.75; // ft
    this.weight = data.weight ?? 155; // lb
    this.eyes = data.eyes ?? "Blue";
    this.skin = data.skin ?? "Light";
    this.hair = data.hair ?? "Blond";

    this.appearance = data.appearance ?? "";

    this.villageRank = data.villageRank ?? "";
    this.alliesAndOrganizations = data.alliesAndOrganizations ?? [];
    this.natureAffinities = data.natureAffinities ?? [];

    this.backstory = data.backstory ?? "";

    this.jutsuList = data.jutsuList
      ? data.jutsuList.map((x) => new Jutsu(x))
      : [];

    this.familiarSpirits = data.familiarSpirits
      ? data.familiarSpirits.map((x) => new CharacterSheetModel(x))
      : [];
  }
}
