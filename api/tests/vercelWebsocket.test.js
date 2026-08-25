const test = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { resolve } = require("node:path");

const repoRoot = resolve(__dirname, "../..");
const read = (file) => readFileSync(resolve(repoRoot, file), "utf8");

test("Vercel exposes a dedicated Socket.IO HTTP server function", () => {
  const config = JSON.parse(read("api/vercel.json"));
  const socketEntry = read("api/api/socket-io.js");
  const appEntry = read("api/app.js");

  assert.equal(config.functions["api/socket-io.js"].maxDuration, 60);
  assert.match(socketEntry, /module\.exports = server/);
  assert.match(appEntry, /path: isVercel \? "\/api\/socket-io\/" : "\/socket\.io\/"/);
  assert.match(appEntry, /module\.exports = \{ app, server, vercelHandler \}/);
});

test("production client uses the self-hosted same-origin Socket.IO proxy", () => {
  const configSource = read("src/config/apiConfig.js");
  const clientSource = read("src/socket/socketClient.js");
  const webServerSource = read("server.mjs");
  const viteSource = read("vite.config.js");

  assert.match(configSource, /configuredSocketHost \|\| BASE_SERVER_HOST/);
  assert.doesNotMatch(configSource, /huy-locket-api-huy-locket\.vercel\.app/);
  assert.match(webServerSource, /server\.on\("upgrade", proxyWebSocketUpgrade\)/);
  assert.match(viteSource, /ws:\s*prefix === "\/dio-api"/);
  assert.match(clientSource, /transports:\s*\["websocket"\]/);
  assert.doesNotMatch(clientSource, /transports:\s*\["websocket",\s*"polling"\]/);
});

test("production authentication stays on the self-hosted API", () => {
  assert.match(read(".env.production"), /^VITE_AUTH_API_URL=\/dio-api$/m);
});
