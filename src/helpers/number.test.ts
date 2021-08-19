import * as NumberFile from "./number";

describe("It should return 0", () => {
  test("when given 1", () => {
    expect(NumberFile.roundDown(1)).toBe(0);
  });
  test("when given 12", () => {
    expect(NumberFile.roundDown(12)).toBe(0);
  });
});
describe("It should return 100", () => {
  test("when given 123", () => {
    expect(NumberFile.roundDown(123)).toBe(100);
  });
});
describe("It should return 1000", () => {
  test("when given 1234", () => {
    expect(NumberFile.roundDown(1234)).toBe(1000);
  });
});
describe("It should return 12000", () => {
  test("when given 12345", () => {
    expect(NumberFile.roundDown(12345)).toBe(12000);
  });
});
describe("It should return 123000", () => {
  test("when given 123456", () => {
    expect(NumberFile.roundDown(123456)).toBe(123000);
  });
});
describe("It should return 1234000", () => {
  test("when given 1234567", () => {
    expect(NumberFile.roundDown(1234567)).toBe(1234000);
  });
});
