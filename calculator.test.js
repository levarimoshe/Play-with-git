/**
 * Calculator Tests
 * These tests run automatically in CI/CD pipeline
 */

const { add, subtract, multiply, divide } = require("./calculator");

describe("Calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    test("adds negative numbers", () => {
      expect(add(-1, -1)).toBe(-2);
    });

    test("adds zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test("handles negative result", () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(6, 7)).toBe(42);
    });

    test("multiplies by zero", () => {
      expect(multiply(100, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(20, 4)).toBe(5);
    });

    test("handles decimal results", () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test("throws error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });
});
