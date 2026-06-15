import fs from 'fs';
import path from 'path';

const src = path.resolve('dist/index.html');
const dest = path.resolve('dist/404.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Copied index.html to 404.html for GitHub Pages routing.');
} else {
  console.error('dist/index.html does not exist.');
}
