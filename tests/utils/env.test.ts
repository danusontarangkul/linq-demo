import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getEnvVar } from "@/utils/env";

const TEST_VAR = "UNIT_TEST_ENV_VAR_XYZ";

describe("getEnvVar", () => {
  const original = process.env[TEST_VAR];

  beforeEach(() => {
    delete process.env[TEST_VAR];
  });

  afterEach(() => {
    if (original === undefined) {
      delete process.env[TEST_VAR];
    } else {
      process.env[TEST_VAR] = original;
    }
  });

  it("throws when the variable is missing", () => {
    expect(() => getEnvVar(TEST_VAR)).toThrow(/UNIT_TEST_ENV_VAR_XYZ/);
  });

  it("throws when the variable is empty", () => {
    process.env[TEST_VAR] = "";
    expect(() => getEnvVar(TEST_VAR)).toThrow(/UNIT_TEST_ENV_VAR_XYZ/);
  });

  it("returns the value when set", () => {
    process.env[TEST_VAR] = "ok";
    expect(getEnvVar(TEST_VAR)).toBe("ok");
  });
});
