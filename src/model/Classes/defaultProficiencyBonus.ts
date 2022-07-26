export const defaultProficiencyBonus = (level: number): number => {
  switch (level) {
    case 1:
    case 2:
    case 3:
      return 3;
    case 4:
    case 5:
    case 6:
      return 4;
    case 7:
    case 8:
    case 9:
      return 5;
    case 10:
    case 11:
    case 12:
      return 6;
    case 13:
    case 14:
    case 15:
      return 7;
    case 16:
    case 17:
    case 18:
      return 8;
    case 19:
    case 20:
      return 9;
    default:
      if (level > 20) {
        return 10;
      } else {
        return 0;
      }
  }
};
