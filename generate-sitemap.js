const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const SITE_URL = "https://engg-tech.com";

const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });

function getGitLastMod(filePath) {
  try {
    const relative = path.relative(__dirname, filePath);
    const result = execSync(
      `git log -1 --format=%ci -- "${relative}"`,
      { encoding: "utf8" }
    ).trim();
    if (!result) return today;
    return result.slice(0, 10);
  } catch (e) {
    return today;
  }
}

function urlBlock(loc, priority, changefreq, lastmod) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const staticPages = [
  { url: "/", file: "index.html", priority: "1.0", freq: "monthly" },
];

let urls = [];

staticPages.forEach(({ url, file, priority, freq }) => {
  const filePath = path.join(__dirname, file);
  const lastmod = getGitLastMod(filePath);
  urls.push(urlBlock(`${SITE_URL}${url}`, priority, freq, lastmod));
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");
console.log("✅ Sitemap generated: /sitemap.xml");
