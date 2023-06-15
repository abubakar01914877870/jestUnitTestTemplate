const { absolute, fizzbuzz, getCurrency, getAge, getString } = require("../../src/lib/lib");


describe("String: ", () => {
  it('should return "fizz" for numbers divisible by 3', () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
  });

  it('should return "buzz" for numbers divisible by 5', () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });

  it('should return "fizzbuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });

  it("should return the number itself for other numbers", () => {
    expect(fizzbuzz(7)).toBe(7);
    expect(fizzbuzz(14)).toBe(14);
    expect(fizzbuzz(22)).toBe(22);
  });

  it('Check string contain TEST', () => {
    expect(getString()).toMatch(/TEST/);
  });
});

describe("Array: ", () => {
  it("Check currency list", () => {
    expect(getCurrency()).toEqual(expect.arrayContaining(["BDT", "USD", "AUD"]));
  });
});

describe('Numbers: ', () => {
  it("Should return positive if number is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });
  it("Should return positive if number is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });
  it("Should return 0 if number is 0", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
  it('Check number should greater then or equal to 18', () => {
    expect(getAge()).toBeGreaterThanOrEqual(18);
  });
});



//String
//JSON object
