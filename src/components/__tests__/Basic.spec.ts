test("hello world", () => {
  const str: string = "Hello, WORLD!";
  expect(typeof str).toBe("string");
  expect(str.toLocaleLowerCase()).toBe("hello, world!");
  expect(str.split(" ")[0]).toBe("Hello,");
  expect(str.split(" ")[1]).toBe("WORLD!");
});

test("fibonacci series", () => {
  const array: number[] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
  expect(array).toBeInstanceOf(Array);
});
