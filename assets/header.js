document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------
     NAVIGATION HTML
  ---------------------------------------- */
  const navHTML = `
<nav class="navbar-custom" aria-label="Main Navigation">
  <div class="navbar-container">

    <span class="navbar-brand">info@engg-tech.com</span>

    <button class="menu-toggle"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation menu">
      &#9776;
    </button>

    <div class="navbar-nav">
      <ul id="navbarMenu" role="list">
        <li><a class="nav-link" href="https://engg-tech.com/">Home</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/about-us/">About</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/services/">Services</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/projects/">Projects</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/blog/">Blog</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/contact-us/">Contact</a></li>
      </ul>
    </div>

  </div>
</nav>
  `;

  const siteNav = document.getElementById("site-nav");
  if (siteNav) siteNav.innerHTML = navHTML;

  /* ---------------------------------------
     ACTIVE LINK
  ---------------------------------------- */
  const links = document.querySelectorAll("#navbarMenu .nav-link");

  let path = window.location.pathname.toLowerCase();
  path = path.replace(/index\.html$/, "");
  path = path.replace(/\.html$/, "");
  path = path.replace(/\/$/, "");
  if (path === "") path = "/";

  links.forEach(a => {
    const url = new URL(a.href);
    let href = url.pathname.toLowerCase();
    href = href.replace(/index\.html$/, "");
    href = href.replace(/\.html$/, "");
    href = href.replace(/\/$/, "");
    if (href === "") href = "/";

    if (path === "/" && href === "/") {
      a.classList.add("active");
      return;
    }

    if (
      (href.startsWith("/blog") && path.startsWith("/blog")) ||
      (href.startsWith("/blog") && path.startsWith("/articles"))
    ) {
      a.classList.add("active");
      return;
    }

    if (href !== "/" && path.startsWith(href)) {
      a.classList.add("active");
    }
  });

  /* ---------------------------------------
     MOBILE MENU TOGGLE
  ---------------------------------------- */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("navbarMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.classList.toggle("show");
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

});
