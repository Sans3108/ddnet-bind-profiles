import { type Request, type Response, Router } from 'express';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { userInfo } from 'os';
import { join } from 'path';

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
  res.status(200).json({ pong: true });
});

router.get('/data', async (req: Request, res: Response) => {
  const winLoginName = userInfo().username;

  const fileName = join('c:', 'Users', winLoginName, 'Desktop', 'data.json');

  let data: string;

  if (existsSync(fileName)) {
    data = readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  } else {
    data = '{}';
  }

  const json = JSON.parse(data);

  writeFileSync(fileName, JSON.stringify(json, null, 2));

  res.status(200).json(json);
});

router.post('/data', async (req: Request, res: Response) => {
  const winLoginName = userInfo().username;

  const fileName = join('c:', 'Users', winLoginName, 'Desktop', 'data.json');

  writeFileSync(fileName, JSON.stringify(req.body, null, 2));

  res.status(200).json({ message: 'ok' });
});

router.get('/stop', () => {
  console.log('Stopping...');
  process.exit(0);
});

export default router;
