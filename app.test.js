const test = require('node:test');
const assert = require('node:assert');
const http = require('http');
const server = require('./app');

function get(path, port) {
  return new Promise((resolve, reject) => {
    http.get({ port, path }, (res) => {
      let body = '';
      res.on('data', (c) => (body += c));
      res.on('end', () => resolve({ status: res.statusCode, body }));
    }).on('error', reject);
  });
}

test('GET / returns greeting', async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const res = await get('/', port);
  assert.strictEqual(res.status, 200);
  assert.match(res.body, /Hello/);
  const health = await get('/health', port);
  assert.strictEqual(JSON.parse(health.body).status, 'ok');
  server.close();
});
