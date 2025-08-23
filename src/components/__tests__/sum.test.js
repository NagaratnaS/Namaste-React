import { sum } from "../../components/Sum";

test("Function to add 2 numbers", () => {
  const res = sum(2, 3);
  expect(res).toBe(5);
});
