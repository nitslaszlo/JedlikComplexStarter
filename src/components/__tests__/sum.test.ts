import { sum } from "@/components/sum";

test("basic1", () => {
  expect(sum()).toBe(0);
});

test("basic2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("basic1async", async () => {
  expect(sum()).toBe(0);
});

test("basic2async", async () => {
  expect(sum(66, 34)).toBe(100);
}, 1000 /* optional timeout */);
