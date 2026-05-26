const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ===============================
// CONFIG
// ===============================
const SITE_URL = "https://engg-tech.com";

const BLOG_DIR = path.join(__dirname, "blog");
const ARTICLES_DIR = path.join(__dirname, "articles");

const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Singapore" });

// ===============================
// HELPERS
// ===============================
function getGitLastMod(filePath) {
  try {
    const relative = path.relative(__dirname, filePath);
    const result = execSync(
      `git log -1 --format=%ci -- "${relative}"`,
      { encoding: "utf8" }
    ).trim();
    if (!result) return today;
    return result.slice(0, 10); // YYYY-MM-DD
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

function urlBlockWithVideo(loc, priority, changefreq, lastmod, video) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <video:video>
      <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:content_loc>${video.contentUrl}</video:content_loc>
      <video:player_loc>${video.playerUrl}</video:player_loc>
      <video:publication_date>${video.date}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>`;
}

// ===============================
// STATIC PAGES
// ===============================
let urls = [];

const staticPages = [
  { url: "/",                                    file: "index.html",                                    priority: "1.0", freq: "weekly"  },
  { url: "/about-us/",                           file: "about-us/index.html",                           priority: "0.8", freq: "monthly" },
  { url: "/services/",                           file: "services/index.html",                           priority: "0.9", freq: "weekly"  },
  { url: "/services/pu-grouting-singapore/",     file: "services/pu-grouting-singapore/index.html",     priority: "0.9", freq: "monthly" },
  { url: "/services/epoxy-grouting-singapore/",  file: "services/epoxy-grouting-singapore/index.html",  priority: "0.9", freq: "monthly" },
  { url: "/projects/",                           file: "projects/index.html",                           priority: "0.8", freq: "monthly" },
  { url: "/blog/",                               file: "blog/index.html",                               priority: "0.7", freq: "weekly"  },
  { url: "/articles/",                           file: "articles/index.html",                           priority: "0.6", freq: "weekly"  },
  { url: "/contact-us/",                         file: "contact-us/index.html",                         priority: "0.6", freq: "monthly" },
  { url: "/privacy-policy/",                     file: "privacy-policy/index.html",                     priority: "0.3", freq: "yearly"  },
  { url: "/videos/pu-grouting-singapore-water-leakage-repair/", file: "videos/pu-grouting-singapore-water-leakage-repair/index.html", priority: "0.7", freq: "monthly" },
];

staticPages.forEach(({ url, file, priority, freq }) => {
  const filePath = path.join(__dirname, file);
  const lastmod = getGitLastMod(filePath);

  urls.push(urlBlock(`${SITE_URL}${url}`, priority, freq, lastmod));
});

// ===============================
// BLOG POSTS
// ===============================
if (fs.existsSync(BLOG_DIR)) {
  fs.readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(dir => dir.isDirectory() && fs.existsSync(path.join(BLOG_DIR, dir.name, "index.html")))
    .map(dir => dir.name)
    .sort()
    .forEach(slug => {
      const filePath = path.join(BLOG_DIR, slug, "index.html");
      const lastmod = getGitLastMod(filePath);
      urls.push(urlBlock(`${SITE_URL}/blog/${slug}/`, "0.6", "monthly", lastmod));
    });
}

// ===============================
// ARTICLE POSTS
// ===============================
if (fs.existsSync(ARTICLES_DIR)) {
  fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter(dir => dir.isDirectory() && fs.existsSync(path.join(ARTICLES_DIR, dir.name, "index.html")))
    .map(dir => dir.name)
    .sort()
    .forEach(slug => {
      const filePath = path.join(ARTICLES_DIR, slug, "index.html");
      const lastmod = getGitLastMod(filePath);
      urls.push(urlBlock(`${SITE_URL}/articles/${slug}/`, "0.5", "monthly", lastmod));
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
// VIDEO SITEMAP OUTPUT
// ===============================
const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">

  <url>
    <loc>https://engg-tech.com/videos/pu-grouting-singapore-water-leakage-repair/</loc>
    <video:video>
      <video:thumbnail_loc>https://img.youtube.com/vi/Ed1AlfDqRAg/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>PU Grouting Singapore Water Leakage Repair Before After | Engg-Tech</video:title>
      <video:description>Water leaking through your walls? Engg-Tech stops it for good using PU injection grouting waterproofing. No hacking required. Fast, clean and guaranteed results for HDB, condo and commercial properties in Singapore.</video:description>
      <video:content_loc>https://www.youtube.com/watch?v=Ed1AlfDqRAg</video:content_loc>
      <video:player_loc>https://www.youtube.com/embed/Ed1AlfDqRAg</video:player_loc>
      <video:publication_date>2026-05-22</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>

</urlset>
`;

fs.writeFileSync(path.join(__dirname, "video-sitemap.xml"), videoSitemap, "utf8");
console.log("✅ Video sitemap generated: /video-sitemap.xml");

fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");
console.log("✅ Sitemap generated: /sitemap.xml");
