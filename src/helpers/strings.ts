export const toSentenceCase = (s: string) => {
  try {
    return s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();
  } catch (e) {
    debugger;
    return "";
  }
};
