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

    <!-- Call Me Back button -->
    <button id="callbackNavBtn"
            onclick="document.getElementById('cmb-popup').style.display='flex'"
            style="background:#FF6A00;color:#fff;border:none;padding:9px 18px;
                   border-radius:6px;font-size:0.9rem;font-weight:700;cursor:pointer;
                   white-space:nowrap;transition:background 0.2s;flex-shrink:0;"
            onmouseover="this.style.background='#0A2540'"
            onmouseout="this.style.background='#FF6A00'">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" style="vertical-align:middle;margin-right:5px;"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>Call Me Back
    </button>

  </div>
</nav>

<!-- Call Me Back Popup -->
<div id="cmb-popup"
     style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;
            background:rgba(0,0,0,0.5);z-index:99999;
            align-items:center;justify-content:center;">
  <div style="background:#fff;border-radius:12px;padding:2rem;width:90%;max-width:360px;
              position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.2);">

    <!-- Close -->
    <button onclick="document.getElementById('cmb-popup').style.display='none'"
            style="position:absolute;top:12px;right:16px;background:none;border:none;
                   font-size:1.3rem;cursor:pointer;color:#888;"
            aria-label="Close">&#x2715;</button>

    <h3 style="margin:0 0 0.5rem;color:#0A2540;font-size:1.2rem;">📞 Request a Call Back</h3>
    <p style="margin:0 0 1.25rem;color:#555;font-size:0.9rem;">
    </p>

    <input type="tel" id="cmbPhone"
           placeholder="Phone number"
           style="width:100%;padding:11px 14px;border:1.5px solid #d0dae6;
                  border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;
                  margin-bottom:0.75rem;"
           onfocus="this.style.borderColor='#FF6A00'"
           onblur="this.style.borderColor='#d0dae6'"/>

    <div id="cmbStatus" style="display:none;font-size:0.85rem;font-weight:600;
                                text-align:center;padding:0.5rem;border-radius:6px;
                                margin-bottom:0.75rem;"></div>

    <button id="cmbSubmitBtn"
            onclick="submitCallBack()"
            style="background:#FF6A00;color:#fff;border:none;padding:12px;
                   border-radius:6px;font-size:1rem;font-weight:700;
                   cursor:pointer;width:100%;transition:background 0.2s;"
            onmouseover="this.style.background='#0A2540'"
            onmouseout="this.style.background='#FF6A00'">
      Request Call Back
    </button>

  </div>
</div>

<script>
async function submitCallBack() {
  const phone  = document.getElementById('cmbPhone').value.trim();
  const status = document.getElementById('cmbStatus');
  const btn    = document.getElementById('cmbSubmitBtn');

  if (!phone) {
    status.style.display = 'block';
    status.style.background = '#fde8e8';
    status.style.color = '#c0392b';
    status.textContent = 'Please enter your phone number.';
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.background = '#888';

  const formData = new FormData();
  formData.append('name', 'Call Back Request');
  formData.append('email', 'callback@engg-tech.com');
  formData.append('phone', phone);
  formData.append('message', 'CALL BACK REQUEST from website button.');

  await fetch('https://script.google.com/macros/s/AKfycby4XuwZWYK0MphbQbjrmO7M_9dUUrDb9MgZRMOHMAklwFzt3MNJUuohaBipWwMkYbud/exec', {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  });

  status.style.display = 'block';
  status.style.background = '#e6f4ea';
  status.style.color = '#1a7a3a';
  status.textContent = '✅ Received! We will be in touch shortly.';
  document.getElementById('cmbPhone').value = '';

  btn.textContent = 'Request Call Back';
  btn.disabled = false;
  btn.style.background = '#FF6A00';

  setTimeout(() => {
    document.getElementById('cmb-popup').style.display = 'none';
    status.style.display = 'none';
  }, 3000);
}
</script>
  `;

  const siteNav = document.getElementById("site-nav");
  if (siteNav) siteNav.innerHTML = navHTML;

  /* ACTIVE LINK */
  const links = document.querySelectorAll("#navbarMenu .nav-link");
  let path = window.location.pathname.toLowerCase()
    .replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
  if (path === "") path = "/";

  links.forEach(a => {
    const url = new URL(a.href);
    let href = url.pathname.toLowerCase()
      .replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
    if (href === "") href = "/";
    if (path === "/" && href === "/") { a.classList.add("active"); return; }
    if (href.startsWith("/blog") && path.startsWith("/blog")) { a.classList.add("active"); return; }
    if (href !== "/" && path.startsWith(href)) a.classList.add("active");
  });

  /* MOBILE MENU TOGGLE */
  const toggle = document.querySelector(".menu-toggle");
  const menu   = document.getElementById("navbarMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.classList.toggle("show");
    });

    menu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (link.closest(".has-submenu") && window.innerWidth <= 768) return;
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      const callbackBtn = document.getElementById("callbackNavBtn");
      if (!toggle.contains(e.target) && !menu.contains(e.target) &&
          (!callbackBtn || !callbackBtn.contains(e.target))) {
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* MOBILE SUBMENU TAP TO EXPAND */
  document.querySelectorAll(".has-submenu > .nav-link, .has-submenu > a").forEach(link => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentLi = link.parentElement;
        const isOpen = parentLi.classList.contains("open");
        parentLi.parentElement.querySelectorAll(".has-submenu.open").forEach(el => {
          if (el !== parentLi) el.classList.remove("open");
        });
        parentLi.classList.toggle("open", !isOpen);
      }
    });
  });

});
