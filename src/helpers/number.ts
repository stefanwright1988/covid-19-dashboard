export const abbreviateNumber = (value: number, decPlaces: number) => {
  let retValue: string = "";
  if (value <= 999) {
    retValue = value.toString();
  }
  // thousands
  else if (value >= 1000 && value <= 999999) {
    retValue = (value / 1000).toFixed(decPlaces) + "K";
  }
  // millions
  else if (value >= 1000000 && value <= 999999999) {
    retValue = (value / 1000000).toFixed(decPlaces) + "M";
  }
  // billions
  else if (value >= 1000000000 && value <= 999999999999) {
    retValue = (value / 1000000000).toFixed(decPlaces) + "B";
  } else {
    retValue = value.toString();
  }
  return retValue;
};

export const difference = (num1: number, num2: number) => {
  return num2 - num1;
};

export const percentage = (num1: number, num2: number) => {
  return ((num1 / num2) * 100).toFixed(2);
};

export const roundDown = (number: number) => {
  let tensHundredsThousands;
  const numLength = number.toString().length;
  switch (numLength) {
    case 1:
      tensHundredsThousands = 1e1;
      break;
    case 2:
    case 3:
      tensHundredsThousands = 1e2;
      break;
    case 4:
    case 5:
      tensHundredsThousands = 1e3;
      break;
    case 6:
    case 7:
      tensHundredsThousands = 1e3;
      break;
    case 8:
    case 9:
      tensHundredsThousands = 1e3;
      break;
    default:
      tensHundredsThousands = 0;
      break;
  }
  return Math.floor(number / tensHundredsThousands) * tensHundredsThousands;
};
export const roundUp = (number: number) => {
  let tensHundredsThousands;
  const numLength = number.toString().length;
  switch (numLength) {
    case 1:
      tensHundredsThousands = 1e1;
      break;
    case 2:
    case 3:
      tensHundredsThousands = 1e2;
      break;
    case 4:
    case 5:
      tensHundredsThousands = 1e3;
      break;
    case 6:
    case 7:
      tensHundredsThousands = 1e3;
      break;
    case 8:
    case 9:
      tensHundredsThousands = 1e3;
      break;
    default:
      tensHundredsThousands = 0;
      break;
  }
  return Math.ceil(number / tensHundredsThousands) * tensHundredsThousands;
};
