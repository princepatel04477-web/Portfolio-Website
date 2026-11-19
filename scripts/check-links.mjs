import { projects } from '../src/data/projects.ts';

console.log(`\n🔍 Verifying all URLs in projects data layer (${projects.length} projects)...\n`);

let passed = 0;
let warnings = 0;
let totalChecked = 0;

async function checkUrl(name, type, url) {
  if (!url) return;
  totalChecked++;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      signal: controller.signal
    }).catch(async () => {
      // Fallback to GET if HEAD rejected
      return await fetch(url, {
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        signal: controller.signal
      });
    });
    clearTimeout(timeout);

    if (res.status >= 200 && res.status < 400) {
      console.log(`  ✅ [${res.status}] ${name} - ${type}: ${url}`);
      passed++;
    } else {
      console.warn(`  ⚠️  [${res.status}] ${name} - ${type}: ${url}`);
      warnings++;
    }
  } catch (err) {
    console.warn(`  ⚠️  [Offline/Timeout] ${name} - ${type}: ${url} (${err.message})`);
    warnings++;
  }
}

async function run() {
  for (const project of projects) {
    if (project.liveUrl) {
      await checkUrl(project.title, 'Live URL', project.liveUrl);
    }
    if (project.githubUrl) {
      await checkUrl(project.title, 'GitHub URL', project.githubUrl);
    }
  }

  console.log(`\n📋 Check Complete: ${passed} reachable, ${warnings} unreachable/rate-limited out of ${totalChecked} checked.\n`);
}

run();
