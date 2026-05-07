const fs = require("fs");
const path = require("path");

// ===============================
// CONFIG
// ===============================
const SITE_URL = "https://engg-tech.com";

const BLOG_DIR = path.join(__dirname, "blog");
const ARTICLES_DIR = path.join(__dirname, "articles");

// ===============================
// HELPERS
// ===============================
function getLastModified(filePath) {

  const stats = fs.statSync(filePath);

  return new Date(stats.mtime).toLocaleDateString("en-CA", {
    timeZone: "Asia/Singapore"
  });

}

function urlBlock(loc, lastmod, priority, changefreq) {

  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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

  urlBlock(
    `${SITE_URL}/`,
    getLastModified(path.join(__dirname, "index.html")),
    "1.0",
    "weekly"
  ),

  urlBlock(
    `${SITE_URL}/about/`,
    getLastModified(path.join(__dirname, "about-us.html")),
    "0.8",
    "monthly"
  ),

  urlBlock(
    `${SITE_URL}/services/`,
    getLastModified(path.join(__dirname, "services.html")),
    "0.9",
    "weekly"
  ),

  urlBlock(
    `${SITE_URL}/services/pu-grouting-singapore/`,
    getLastModified(path.join(__dirname, "services.html")),
    "0.9",
    "monthly"
  ),

  urlBlock(
    `${SITE_URL}/services/epoxy-grouting-singapore/`,
    getLastModified(path.join(__dirname, "services.html")),
    "0.9",
    "monthly"
  ),

  urlBlock(
    `${SITE_URL}/projects/`,
    getLastModified(path.join(__dirname, "projects.html")),
    "0.8",
    "monthly"
  ),

  // BLOG
  urlBlock(
    `${SITE_URL}/blog/`,
    getLastModified(path.join(BLOG_DIR, "index.html")),
    "0.7",
    "weekly"
  ),

  // ARTICLES
  urlBlock(
    `${SITE_URL}/articles/`,
    getLastModified(path.join(ARTICLES_DIR, "index.html")),
    "0.6",
    "weekly"
  ),

  urlBlock(
    `${SITE_URL}/contact-us/`,
    getLastModified(path.join(__dirname, "contact-us.html")),
    "0.6",
    "monthly"
  ),

  urlBlock(
    `${SITE_URL}/privacy-policy/`,
    getLastModified(path.join(__dirname, "privacy-policy.html")),
    "0.3",
    "yearly"
  )

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
        getLastModified(
          path.join(BLOG_DIR, slug, "index.html")
        ),
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
        getLastModified(
          path.join(ARTICLES_DIR, slug, "index.html")
        ),
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