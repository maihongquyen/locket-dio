import assert from "node:assert/strict";
import test from "node:test";

import {
  buildAppMetaHeaders,
  toSafeHeaderValue,
} from "../../src/libs/appMetaHeaders.js";

test("Vietnamese branding is transliterated before use in HTTP headers", () => {
  assert.equal(toSafeHeaderValue("Quyền"), "Quyen");
  assert.equal(toSafeHeaderValue("Đặng Nguyễn"), "Dang Nguyen");
});

test("all app metadata headers are ASCII-safe for XMLHttpRequest", () => {
  const headers = buildAppMetaHeaders({
    author: "Quyền",
    shortname: "quyenlocket",
    clientVersion: "Beta1.3.6",
    apiVersion: "v2.2.1",
    env: "production",
  });

  assert.equal(headers["x-app-author"], "Quyen");
  for (const value of Object.values(headers)) {
    assert.match(value, /^[\x20-\x7E]*$/);
  }
});
