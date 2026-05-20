document.addEventListener("DOMContentLoaded", () => {

  /* HOMEPAGE: swap text brand to logo image on non-homepage */
  const brand = document.getElementById("nav-brand");
  if (brand) {
    const isHomepage = window.location.pathname === "/" || window.location.pathname === "/index.html";
    if (!isHomepage) {
      brand.innerHTML = `<img src="/assets/favicon/logo-180.png" alt="Engg-Tech Pte. Ltd. logo" width="48" height="48" fetchpriority="high" style="display:block;">`;
    }
  }

  /* ACTIVE NAV LINK */
  let path = window.location.pathname.toLowerCase()
    .replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
  if (path === "") path = "/";

  document.querySelectorAll("#navbarMenu .nav-link").forEach(a => {
    const url = new URL(a.href);
    let href = url.pathname.toLowerCase()
      .replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
    if (href === "") href = "/";
    if (path === "/" && href === "/") { a.classList.add("active"); return; }
    if (href.startsWith("/blog") && path.startsWith("/blog")) { a.classList.add("active"); return; }
    if (href !== "/" && path.startsWith(href)) a.classList.add("active");
  });

  /* SUBMENU ACTIVE LINKS */
  document.querySelectorAll(".submenu a").forEach(a => {
    const url = new URL(a.href);
    let href = url.pathname.toLowerCase()
      .replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "");
    if (href === "") href = "/";
    if (href !== "/" && path.startsWith(href)) {
      a.style.color = "var(--color-orange)";
      a.style.fontWeight = "700";
    }
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
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* MOBILE SUBMENU TAP TO EXPAND */
  document.querySelectorAll(".has-submenu > .nav-link, .has-submenu > a, .has-submenu > span").forEach(link => {
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

  /* CMB POPUP TRIGGERS */
  const cmbPopup = document.getElementById("cmb-popup");
  ["callbackMobileBtn", "callbackNavBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn && cmbPopup) {
      btn.addEventListener("click", () => { cmbPopup.style.display = "flex"; });
    }
  });

});
