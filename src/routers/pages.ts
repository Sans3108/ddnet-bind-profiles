import { type Request, type Response, Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.sendFile(join(__dirname, '../pages/index.html'));
});

router.get('/stop', (req: Request, res: Response) => {
  res.sendFile(join(__dirname, '../pages/stop.html'));
});

export default router;
