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
