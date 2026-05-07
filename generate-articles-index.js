const fs = require("fs");
const path = require("path");

// ===============================
// CONFIG
// ===============================
const ARTICLES_DIR = path.join(__dirname, "articles");
const INDEX_FILE = path.join(ARTICLES_DIR, "index.html");

// ===============================
// SAFETY CHECKS
// ===============================
if (!fs.existsSync(ARTICLES_DIR)) {
  throw new Error("articles folder not found");
}

if (!fs.existsSync(INDEX_FILE)) {
  throw new Error("articles/index.html not found");
}

// ===============================
// READ INDEX FILE
// ===============================
const html = fs.readFileSync(INDEX_FILE, "utf8");

// ===============================
// READ ARTICLE POSTS
// ===============================
const posts = fs.readdirSync(ARTICLES_DIR)
  .filter(file => file.endsWith(".html") && file !== "index.html")
  .sort();

// ===============================
// BUILD LIST
// ===============================
const list = posts.map(file => {

  const slug = file.replace(".html", "");

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());

  return `  <li><a href="/articles/${slug}">${title}</a></li>`;

}).join("\n");

// ===============================
// REPLACE LIST BLOCK
// ===============================
const updated = html.replace(

  /<!-- ARTICLE-LIST-START -->[\s\S]*?<!-- ARTICLE-LIST-END -->/,

  `<!-- ARTICLE-LIST-START -->
<ul class="blog-list">
${list}
</ul>
<!-- ARTICLE-LIST-END -->`

);

// ===============================
// WRITE BACK
// ===============================
fs.writeFileSync(INDEX_FILE, updated, "utf8");

console.log("✅ Articles index updated: /articles/index.html");