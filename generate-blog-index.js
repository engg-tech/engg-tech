const fs = require("fs");
const path = require("path");

// ===============================
// CONFIG
// ===============================
const BLOG_DIR = path.join(__dirname, "blog");
const INDEX_FILE = path.join(BLOG_DIR, "index.html");

// ===============================
// SAFETY CHECKS
// ===============================
if (!fs.existsSync(BLOG_DIR)) {
  throw new Error("blog folder not found");
}

if (!fs.existsSync(INDEX_FILE)) {
  throw new Error("blog/index.html not found");
}

// ===============================
// READ INDEX FILE
// ===============================
const html = fs.readFileSync(INDEX_FILE, "utf8");

// ===============================
// READ BLOG FOLDERS
// ===============================
const posts = fs.readdirSync(BLOG_DIR, { withFileTypes: true })

  .filter(dir =>
    dir.isDirectory() &&
    fs.existsSync(
      path.join(BLOG_DIR, dir.name, "index.html")
    )
  )

  .map(dir => dir.name)

  .sort();

// ===============================
// BUILD LIST
// ===============================
const list = posts.map(slug => {

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  return `  <li><a href="/blog/${slug}/">${title}</a></li>`;

}).join("\n");

// ===============================
// REPLACE LIST BLOCK
// ===============================
const updated = html.replace(

  /<!-- BLOG-LIST-START -->[\s\S]*?<!-- BLOG-LIST-END -->/,

  `<!-- BLOG-LIST-START -->
<ul class="blog-list">
${list}
</ul>
<!-- BLOG-LIST-END -->`

);

// ===============================
// WRITE BACK
// ===============================
fs.writeFileSync(INDEX_FILE, updated, "utf8");

console.log("✅ Blog index updated");