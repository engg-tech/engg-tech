document.addEventListener("DOMContentLoaded", () => {

  const isHomepage = window.location.pathname === "/" || window.location.pathname === "/index.html";

  const brandHTML = isHomepage
    ? `<a class="navbar-brand" href="https://engg-tech.com/">Engg-Tech</a>`
    : `<a class="navbar-brand" href="https://engg-tech.com/" aria-label="Engg-Tech Home">
        <img src="/assets/favicon/logo-180.png" alt="Engg-Tech Pte. Ltd. logo" width="48" height="48" fetchpriority="high" style="display:block;">
      </a>`;

  const navHTML = `
<div class="topbar">
  <div class="topbar-container">
    <a href="mailto:info@engg-tech.com" class="topbar-email">info@engg-tech.com</a>
  </div>
</div>

<nav class="navbar-custom" aria-label="Main Navigation">
  <div class="navbar-container">

    ${brandHTML}

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

        <li class="has-submenu">
          <a class="nav-link" href="https://engg-tech.com/services/">Services</a>
          <ul class="submenu" role="list">
            <li class="has-submenu">
              <a href="https://engg-tech.com/services/waterproofing/">Waterproofing ›</a>
              <ul class="submenu" role="list">
                <li><a href="https://engg-tech.com/services/epoxy-grouting-singapore/">Epoxy Grout</a></li>
                <li><a href="https://engg-tech.com/services/pu-grouting-singapore/">PU Grout</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li><a class="nav-link" href="https://engg-tech.com/projects/">Projects</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/blog/">Blog</a></li>
        <li><a class="nav-link" href="https://engg-tech.com/contact-us/">Contact</a></li>
      </ul>
    </div>


  </div>
</nav>

