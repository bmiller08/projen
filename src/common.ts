export const PROJEN_RC = ".projenrc.js";
export const PROJEN_DIR = ".projen";
export const PROJEN_MARKER = "~~ Generated by " + "projen"; // we split into two so /this/ file does not match the marker

export const IS_TEST_RUN = process.env.NODE_ENV === "test";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const packageVersion = require("../package.json").version;

// if we are running with a test, report a fake stable version
export const PROJEN_VERSION = IS_TEST_RUN ? "99.99.99" : packageVersion;
