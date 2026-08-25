const fs = require('fs');

const upstream = String(process.env.LOCKET_API_UPSTREAM || '').replace(/\/$/, '');
if (!upstream) {
  throw new Error('Set LOCKET_API_UPSTREAM before running this legacy migration script.');
}

let data = fs.readFileSync('vercel.json', 'utf8');
data = data.replace(/https:\/\/api\.locket-dio\.com\//g, `${upstream}/`);
data = data.replace(/https:\/\/api\.locket-dio\.com/g, upstream);
data = data.replace(/"source": "\/dio-auth",\s*"destination": "https:\/\/auth\.locket-dio\.com\/"/g, `"source": "/dio-auth",\n      "destination": "${upstream}/"`);
data = data.replace(/"source": "\/dio-auth\/:path\*",\s*"destination": "https:\/\/auth\.locket-dio\.com\/:path\*"/g, `"source": "/dio-auth/:path*",\n      "destination": "${upstream}/:path*"`);
fs.writeFileSync('vercel.json', data);

let serverMjs = fs.readFileSync('server.mjs', 'utf8');
serverMjs = serverMjs.replace(
  /"https:\/\/api\.locket-dio\.com"/g,
  JSON.stringify(upstream)
);
fs.writeFileSync('server.mjs', serverMjs);
console.log('Updated the API endpoint from LOCKET_API_UPSTREAM.');
