const express = require('express');
const next = require('next');
const db = require('./queries/queries');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/api/popular_locations', db.getPopularLocations);
  server.get('/api/search/:attraction', db.getSearchResults);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on http://localhost:3000');
  });
}).catch((ex) => {
  console.log(ex.stack);
  process.exit(1);
});
