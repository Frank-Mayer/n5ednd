export class PreferencesModel {
  public manualDiceRolling: boolean;

  constructor(data: Partial<PreferencesModel>) {
    this.manualDiceRolling = data.manualDiceRolling ?? true;
  }
}
