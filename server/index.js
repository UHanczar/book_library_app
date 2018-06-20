import express, { Router } from 'express';
import path from 'path';
import http from 'http';

const app = express();
const router = Router();
const port = process.env.PORT || '3030';
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/', router);
app.set('port', port);

router
  .get('/*', (req, res, next) => {
    const routePath = path.resolve(__dirname, '..', 'dist', 'index.html');
    res.sendFile(routePath);
  });

server.listen(port, () => console.log(`Server Running on port ${port}`));
