import * as NumberFile from "./number";
describe("Rounding down numbers", () => {
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
});
describe("Rounding up numbers", () => {
  describe("It should return 10", () => {
    test("when given 1", () => {
      expect(NumberFile.roundUp(1)).toBe(10);
    });
  });
  describe("It should return 100", () => {
    test("when given 12", () => {
      expect(NumberFile.roundUp(12)).toBe(100);
    });
  });
  describe("It should return 200", () => {
    test("when given 123", () => {
      expect(NumberFile.roundUp(123)).toBe(200);
    });
  });
  describe("It should return 2000", () => {
    test("when given 1234", () => {
      expect(NumberFile.roundUp(1234)).toBe(2000);
    });
  });
  describe("It should return 13000", () => {
    test("when given 12345", () => {
      expect(NumberFile.roundUp(12345)).toBe(13000);
    });
  });
  describe("It should return 130000", () => {
    test("when given 123456", () => {
      expect(NumberFile.roundUp(123456)).toBe(130000);
    });
  });
  describe("It should return 1240000", () => {
    test("when given 1234567", () => {
      expect(NumberFile.roundUp(1234567)).toBe(1240000);
    });
  });
  describe("It should return 12400000", () => {
    test("when given 12345678", () => {
      expect(NumberFile.roundUp(12345678)).toBe(12400000);
    });
  });
  describe("It should return 123500000", () => {
    test("when given 123456789", () => {
      expect(NumberFile.roundUp(123456789)).toBe(123500000);
    });
  });
  describe("It should return 1240000", () => {
    test("when given 1234567890", () => {
      expect(NumberFile.roundUp(1234567890)).toBe(1235000000);
    });
  });
});
