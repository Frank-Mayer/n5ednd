import { getPreferencesData } from "../data/PreferencesData";

const manualRoll = <D extends Dice, R extends RollResult[D] = RollResult[D]>(
  dice: D
): Promise<R> =>
  new Promise((resolve, reject) => {
    const r = prompt(`D${dice} roll: `);
    if (r === null) {
      reject("Cancelled");
    } else {
      const result = parseInt(r, 10);
      if (isNaN(result)) {
        reject(`Invalid input: "${r}"`);
      } else {
        if (result < 1 || result > dice || result % 1 !== 0) {
          reject(`Invalid input: "${result}"`);
        } else {
          resolve(result as R);
        }
      }
    }
  });

const cpuRoll = <D extends Dice, R extends RollResult[D] = RollResult[D]>(
  dice: D
): Promise<R> =>
  new Promise((resolve) => {
    const r = Math.round(Math.random() * (dice - 1) + 1) as R;
    alert(`D${dice} roll: ${r}`);
    resolve(r);
  });

export const roll = <D extends Dice, R extends RollResult[D] = RollResult[D]>(
  dice: D
): Promise<R> => {
  if (getPreferencesData().manualDiceRolling) {
    return manualRoll(dice);
  } else {
    return cpuRoll(dice);
  }
};
