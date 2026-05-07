const fs = require("fs");
const path = require("path");

// ===============================
// CONFIG
// ===============================
const SITE_URL = "https://engg-tech.com";

const BLOG_DIR = path.join(__dirname, "blog");
const ARTICLES_DIR = path.join(__dirname, "articles");

// today as YYYY-MM-DD
const today = new Date().toLocaleDateString("en-CA", {
  timeZone: "Asia/Singapore"
});

// ===============================
// HELPERS
// ===============================
function urlBlock(loc, priority, changefreq) {

  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

}

// ===============================
// URL COLLECTION
// ===============================
let urls = [];

// ===============================
// STATIC PAGES
// ===============================
urls.push(

  urlBlock(`${SITE_URL}/`, "1.0", "weekly"),

  urlBlock(`${SITE_URL}/about/`, "0.8", "monthly"),

  urlBlock(`${SITE_URL}/services/`, "0.9", "weekly"),

  urlBlock(`${SITE_URL}/services/pu-grouting-singapore/`, "0.9", "monthly"),

  urlBlock(`${SITE_URL}/services/epoxy-grouting-singapore/`, "0.9", "monthly"),

  urlBlock(`${SITE_URL}/projects/`, "0.8", "monthly"),

  // BLOG
  urlBlock(`${SITE_URL}/blog/`, "0.7", "weekly"),

  // ARTICLES
  urlBlock(`${SITE_URL}/articles/`, "0.6", "weekly"),

  urlBlock(`${SITE_URL}/contact-us/`, "0.6", "monthly"),

  urlBlock(`${SITE_URL}/privacy-policy/`, "0.3", "yearly")

);

// ===============================
// BLOG POSTS
// ===============================
if (fs.existsSync(BLOG_DIR)) {

  const blogPosts = fs.readdirSync(BLOG_DIR, {
    withFileTypes: true
  })

  .filter(dir =>
    dir.isDirectory() &&
    fs.existsSync(
      path.join(BLOG_DIR, dir.name, "index.html")
    )
  )

  .map(dir => dir.name)

  .sort();

  blogPosts.forEach(slug => {

    urls.push(
      urlBlock(
        `${SITE_URL}/blog/${slug}/`,
        "0.6",
        "monthly"
      )
    );

  });

}

// ===============================
// ARTICLE POSTS
// ===============================
if (fs.existsSync(ARTICLES_DIR)) {

  const articlePosts = fs.readdirSync(ARTICLES_DIR, {
    withFileTypes: true
  })

  .filter(dir =>
    dir.isDirectory() &&
    fs.existsSync(
      path.join(ARTICLES_DIR, dir.name, "index.html")
    )
  )

  .map(dir => dir.name)

  .sort();

  articlePosts.forEach(slug => {

    urls.push(
      urlBlock(
        `${SITE_URL}/articles/${slug}/`,
        "0.5",
        "monthly"
      )
    );

  });

}

// ===============================
// SITEMAP OUTPUT
// ===============================
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>
`;

// ===============================
// WRITE FILE
// ===============================
fs.writeFileSync(
  path.join(__dirname, "sitemap.xml"),
  sitemap,
  "utf8"
);

console.log("✅ Sitemap generated: /sitemap.xml");