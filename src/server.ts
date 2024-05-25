import { open } from 'out-url';
import app from './app.js';

if (process.platform !== 'win32') {
  console.log(`Platform \`${process.platform}\` is not supported by ddnet-bind-profiles!`);
  process.exit(1);
}

if (process.arch !== 'x64') {
  console.log(`Arch \`${process.arch}\` is not supported by ddnet-bind-profiles!`);
  process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  open(`http://127.0.0.1:${PORT}`);
});
