// Builds the site into docs/ (GitHub Pages: "Deploy from a branch" → main / docs). Commit and push afterwards.
import { execFileSync } from 'node:child_process';
import { cpSync, rmSync, writeFileSync } from 'node:fs';

const remote = execFileSync('git', ['remote', 'get-url', 'origin'], { encoding: 'utf8' }).trim();
const base = `/${remote.replace(/\.git$/, '').split(/[/:]/).pop()}`;
console.log(`Building for ${base}/`);

execFileSync('npx', ['next', 'build'], { stdio: 'inherit', env: { ...process.env, BASE_PATH: base } });
rmSync('docs', { recursive: true, force: true });
cpSync('out', 'docs', { recursive: true });
writeFileSync('docs/.nojekyll', '');
console.log('Site built in docs/. Commit and push to publish.');
