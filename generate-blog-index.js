const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "blog");
const INDEX_FILE = path.join(BLOG_DIR, "index.html");

if (!fs.existsSync(BLOG_DIR)) throw new Error("blog folder not found");
if (!fs.existsSync(INDEX_FILE)) throw new Error("blog/index.html not found");

const html = fs.readFileSync(INDEX_FILE, "utf8");

const posts = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(dir => dir.isDirectory() && fs.existsSync(path.join(BLOG_DIR, dir.name, "index.html")))
  .map(dir => dir.name)
  .sort();

const list = posts.map(slug => {
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return `  <li><a href="/blog/${slug}/">${title}</a></li>`;
}).join("\n");

const updated = html.replace(
  /<!-- BLOG-LIST-START -->[\s\S]*?<!-- BLOG-LIST-END -->/,
  `<!-- BLOG-LIST-START -->\n<ul class="blog-list">\n${list}\n</ul>\n<!-- BLOG-LIST-END -->`
);

fs.writeFileSync(INDEX_FILE, updated, "utf8");
console.log("✅ Blog index updated");
