import { expect, test } from "bun:test";
import { comparePassword, hashPassword } from "./password";

test("Password Hash Generate", () => {
  const password = "password";
  const hashedPassword = hashPassword(password);
  expect(hashedPassword).not.toEqual(password);
  const testPassword = comparePassword(password, hashedPassword);
  expect(testPassword).toBe(true);
});
