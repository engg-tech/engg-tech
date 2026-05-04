document.addEventListener("DOMContentLoaded", () => {

  const footerHTML = `
<footer class="enggtech-footer">

  <div class="footer-inner">

    <!-- Stay Connected -->
    <div class="footer-column">
      <h2 class="footer-heading">Stay Connected</h2>
      <p>Follow us for company updates, fire safety tips, and the latest projects in Singapore.</p>
      <p>
  <a href="https://linkedin.com/company/enggtechofficial" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
  <a href="https://facebook.com/enggtech" target="_blank" rel="noopener noreferrer">Facebook</a> |
  <a href="https://instagram.com/enggtechofficial" target="_blank" rel="noopener noreferrer">Instagram</a> |
  <a href="https://youtube.com/@enggtechofficial" target="_blank" rel="noopener noreferrer">YouTube</a>
      </p>
    </div>

    <!-- Explore Blog -->
    <div class="footer-column">
      <h2 class="footer-heading">Explore Our Blog</h2>
      <p>
        Practical fire safety tips, M&E guides, renovation insights, and industry knowledge
        written for Singapore homes and businesses.
      </p>
      <p>
        <a class="footer-blog-link"
           href="https://engg-tech.com/blog/"
           title="Engg-Tech Singapore fire protection and M&E blog">
          Read Our Latest Articles →
        </a>
      </p>
    </div>

    <!-- Contact -->
    <div class="footer-column">
      <h2 class="footer-heading">Contact Us</h2>
      <p>Email us today for trusted support in Singapore</p>
      <p><a href="mailto:info@engg-tech.com">info@engg-tech.com</a></p>
      <a class="footer-btn" href="https://engg-tech.com/contact-us/">
        Request with Online Form
      </a>
    </div>

  </div>

  <hr class="footer-divider">

  <div class="footer-bottom">

    <p>
      © 2015–<span id="copyYear"></span> Engg-Tech Pte. Ltd. All rights reserved. |
      <a href="https://engg-tech.com/privacy-policy/">Privacy Policy</a>
    </p>

    <p>
      Designed &amp; Maintained by
      <a href="https://engg-tech.com/">Engg-Tech Singapore</a>
    </p>

    <p><em id="lastUpdated"></em></p>

    <small class="disclaimer">Disclaimer: This page may contain sponsored ads.</small>

  </div>

  <!-- Auto-Year + Last Updated Script -->
  <script data-exec>
  (function() {
    const now = new Date();
    const year = now.getFullYear();

    const copyEl = document.getElementById("copyYear");
    if (copyEl) copyEl.textContent = year;

    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    const formattedDate = \`\${months[now.getMonth()]} \${year}\`;

    const updatedEl = document.getElementById("lastUpdated");
    if (updatedEl) updatedEl.textContent = \`Last updated: \${formattedDate}\`;
  })();
  </script>

  <!-- Force dynamic execution -->
  <img alt="" style="display:none"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    onload="document.querySelectorAll('script[data-exec]:not([data-ran])').forEach(s=>{
      let n=document.createElement('script');
      n.text=s.textContent;
      document.body.appendChild(n);
      s.dataset.ran=1;
    });">

  <!-- WhatsApp Button -->
  <a 
  href="https://wa.me/6591294851"
  target="_blank"
  rel="noopener"
  class="wa-desktop"
  aria-label="WhatsApp Us"
  style="
    position: fixed;
    top: 20%;
    transform: translateY(-50%);
    right: 20px;
    background: #25D366;
    color: #fff;
    padding: 14px 20px;
    border-radius: 14px;
    align-items: center;
    gap: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.2px;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: wa-notify-pulse 5s infinite;
    white-space: nowrap;
    text-decoration: none !important;
  "
>
  <span>WhatsApp Us!</span>

  <svg viewBox="0 0 32 32" width="24" height="24" fill="#fff">
    <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2.1 7.7L.5 31.6l8.4-2.2c2.2 1.2 4.7 1.8 7.1 1.8h.1c8.5 0 15.4-6.9 15.4-15.4C31.4 7.3 24.5.4 16 .4zm0 28.1c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.3-2-2-4.3-2-6.7C2.9 8.8 8.8 2.9 16 2.9s13.1 5.9 13.1 13.1-5.9 12.5-13.1 12.5zm7.2-9.7c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.2-.8.1-2.3-1.1-3.9-2-5.4-4.4-.4-.6.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.6c.2.3 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.4-.3-.8-.5z"/>
  </svg>
</a>

<!-- ===== MOBILE BUTTON ===== -->
<a 
  href="https://wa.me/6591294851"
  target="_blank"
  rel="noopener"
  class="wa-mobile"
  aria-label="WhatsApp"
  style="
    position: fixed;
    top: 20%;
    transform: translateY(-50%);
    right: 20px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: wa-notify-pulse 5s infinite;
  "
>
  <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
    <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2.1 7.7L.5 31.6l8.4-2.2c2.2 1.2 4.7 1.8 7.1 1.8h.1c8.5 0 15.4-6.9 15.4-15.4C31.4 7.3 24.5.4 16 .4zm0 28.1c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.3-2-2-4.3-2-6.7C2.9 8.8 8.8 2.9 16 2.9s13.1 5.9 13.1 13.1-5.9 12.5-13.1 12.5zm7.2-9.7c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.2-.8.1-2.3-1.1-3.9-2-5.4-4.4-.4-.6.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.6c.2.3 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.4-.3-.8-.5z"/>
  </svg>
</a>

<style>
@keyframes wa-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
  70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
}

/* ✅ Combined Notification + Pulse */
@keyframes wa-notify-pulse {
  0% { transform: translateY(-50%) scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
  70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
  85%, 100% { transform: translateY(-50%) scale(1); }
  88% { transform: translateY(-50%) scale(1.1); }
  90% { transform: translateY(-50%) translateX(-5px); }
  92% { transform: translateY(-50%) translateX(5px); }
  94% { transform: translateY(-50%) translateX(-3px); }
  96% { transform: translateY(-50%) translateX(3px); }
}

/* Desktop default */
.wa-desktop {
  display: flex;
}

.wa-mobile {
  display: none;
}

/* Mobile */
@media (max-width: 768px) {
  .wa-desktop {
    display: none !important;
  }
  .wa-mobile {
    display: flex !important;
  }
}
</style>
<!-- WhatsApp Button END-->

</footer>
`;

  document.getElementById("site-footer").innerHTML = footerHTML;

});