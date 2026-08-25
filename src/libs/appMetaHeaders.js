/**
 * Browser HTTP headers must contain byte-safe values. Keep Vietnamese branding
 * in the UI, but transliterate metadata such as "Quyền" before Axios hands it
 * to XMLHttpRequest.setRequestHeader().
 */
export function toSafeHeaderValue(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ĐÐ]/g, "D")
    .replace(/[đð]/g, "d")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
}

export function buildAppMetaHeaders(app = {}) {
  return {
    "x-app-author": toSafeHeaderValue(app.author),
    "x-app-name": toSafeHeaderValue(app.shortname),
    "x-app-client": toSafeHeaderValue(app.clientVersion),
    "x-app-api": toSafeHeaderValue(app.apiVersion),
    "x-app-env": toSafeHeaderValue(app.env),
  };
}
