document.addEventListener("DOMContentLoaded", () => {

  const now = new Date();
  const year = now.getFullYear();
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const formattedDate = `${months[now.getMonth()]} ${year}`;

  const footerHTML = `
<footer class="enggtech-footer">

  <div class="footer-inner">

    <!-- Follow Us -->
    <div class="footer-column">
      <h2 class="footer-heading">Follow Us</h2>
      <p>Stay updated with our trusted fire protection, waterproofing, and M&amp;E solutions across Singapore.</p>

      <a href="https://www.facebook.com/enggtech"
         target="_blank"
         rel="noopener noreferrer"
         class="footer-social-icon"
         aria-label="Facebook">
        <svg viewBox="0 0 320 512" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
      </a>

      <a href="https://www.instagram.com/enggtechofficial/"
         target="_blank"
         rel="noopener noreferrer"
         class="footer-social-icon"
         aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 27 26">
          <path d="M26.9922,13.12c0-1.952.0071-3.904-.0054-5.856a7.4912,7.4912,0,0,0-.12-1.3338,6.9762,6.9762,0,0,0-2.4989-4.1911,7.3149,7.3149,0,0,0-4.73-1.7279c-4.031-.02-8.0623-.0061-12.0935-.0071a7.347,7.347,0,0,0-3.6653.907,6.9367,6.9367,0,0,0-3.85,6.2265C-.025,11.0332.0121,14.93.0169,18.8272a6.5069,6.5069,0,0,0,.8908,3.3475A7.2785,7.2785,0,0,0,7.419,25.9708c4.0565.0558,8.1145.0148,12.1719.0131a7.6378,7.6378,0,0,0,4.9015-1.8408,6.9218,6.9218,0,0,0,2.4928-5.276C27.0143,16.9517,26.9915,15.0354,26.9922,13.12ZM13.4174,20.21a7.3625,7.3625,0,0,1-7.4061-7.2182,7.3505,7.3505,0,0,1,7.4992-7.2115,7.3516,7.3516,0,0,1,7.4852,7.2146A7.37,7.37,0,0,1,13.4174,20.21ZM22.4962,5.7791a1.48,1.48,0,0,1-1.5005-1.4476,1.5014,1.5014,0,0,1,3-.0009A1.481,1.481,0,0,1,22.4962,5.7791Z" style="fill-rule:evenodd"/>
          <path d="M13.4969,8.3571a4.7331,4.7331,0,0,0-4.8183,4.6445,4.74,4.74,0,0,0,4.8241,4.6413,4.74,4.74,0,0,0,4.8187-4.6466A4.7342,4.7342,0,0,0,13.4969,8.3571Z" style="fill-rule:evenodd"/>
        </svg>
      </a>

      <a href="https://www.linkedin.com/company/enggtechofficial/"
         target="_blank"
         rel="noopener noreferrer"
         class="footer-social-icon"
         aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98 1.98 1.98 0 0 1 1.98-1.98 1.98 1.98 0 0 1 1.98 1.98 1.98 1.98 0 0 1-1.98 1.98zm1.958 13.019H3.379V9h3.916v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>

    <!-- Explore Resources -->
    <div class="footer-column">
      <h2 class="footer-heading">Explore Our Resources</h2>
      <p>Practical fire safety tips, waterproofing guides, renovation insights, and industry knowledge for Singapore homes and businesses.</p>
      <p>
        <a class="footer-blog-link"
           href="https://engg-tech.com/articles/"
           title="Engg-Tech Singapore fire protection and M&E blog">
          Read Our Latest Articles &rarr;
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
      &copy; 2015&ndash;${year} Engg-Tech Pte. Ltd. All rights reserved. |
      <a href="https://engg-tech.com/privacy-policy/">Privacy Policy</a>
    </p>
    <p>
      Designed &amp; Maintained by
      <a href="https://engg-tech.com/">Engg-Tech Singapore</a>
    </p>
    <p><em>Last updated: ${formattedDate}</em></p>
    <small class="disclaimer">Disclaimer: This page may contain sponsored ads.</small>
  </div>

</footer>

<!-- ================================================
     WhatsApp Us — Floating Button + Popup
     Appears on every page via footer.js
================================================ -->
<div id="wa-float-btn"
     onclick="document.getElementById('wa-popup').style.display='flex'"
     style="position:fixed;bottom:24px;right:24px;z-index:9998;
            background:#25D366;color:#fff;border-radius:50px;
            padding:12px 20px;cursor:pointer;display:flex;align-items:center;
            gap:8px;box-shadow:0 4px 16px rgba(0,0,0,0.2);
            font-weight:700;font-size:0.95rem;
            transition:background 0.2s ease;"
     onmouseover="this.style.background='#1DA851'"
     onmouseout="this.style.background='#25D366'"
     aria-label="WhatsApp Us">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  WhatsApp Us
</div>

<!-- WhatsApp Us Popup -->
<div id="wa-popup"
     style="display:none;position:fixed;bottom:90px;right:24px;z-index:9999;
            background:#fff;border-radius:12px;padding:1.5rem;
            box-shadow:0 8px 32px rgba(0,0,0,0.18);width:280px;
            flex-direction:column;gap:0.75rem;">

  <!-- Close button -->
  <button onclick="document.getElementById('wa-popup').style.display='none'"
          style="position:absolute;top:10px;right:12px;background:none;border:none;
                 font-size:1.2rem;cursor:pointer;color:#888;line-height:1;"
          aria-label="Close">&#x2715;</button>

  <div style="display:flex;align-items:center;gap:8px;margin-bottom:0.25rem;">
    <div style="background:#25D366;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </div>
    <div>
      <p style="margin:0;font-weight:700;color:#0A2540;font-size:0.95rem;">WhatsApp Us</p>
    </div>
  </div>

  <p style="margin:0;font-size:0.85rem;color:#555;">
    Leave your WhatsApp number and we will contact you shortly.
  </p>

  <input type="tel" id="waPhone"
         placeholder="Phone number"
         style="width:100%;padding:10px 12px;border:1.5px solid #d0dae6;
                border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;"
         onfocus="this.style.borderColor='#25D366'"
         onblur="this.style.borderColor='#d0dae6'"/>

  <div id="waStatus" style="display:none;font-size:0.85rem;font-weight:600;text-align:center;padding:0.4rem;border-radius:6px;"></div>

  <button id="waSubmitBtn"
          onclick="submitWaCallback()"
          style="background:#25D366;color:#fff;border:none;padding:11px;
                 border-radius:6px;font-size:0.95rem;font-weight:700;
                 cursor:pointer;width:100%;transition:background 0.2s;"
          onmouseover="this.style.background='#1DA851'"
          onmouseout="this.style.background='#25D366'">
    Send My Number
  </button>

  <p style="margin:0;font-size:0.75rem;color:#888;text-align:center;">
  </p>
</div>

<script>
async function submitWaCallback() {
  const phone  = document.getElementById('waPhone').value.trim();
  const status = document.getElementById('waStatus');
  const btn    = document.getElementById('waSubmitBtn');

  if (!phone) {
    status.style.display = 'block';
    status.style.background = '#fde8e8';
    status.style.color = '#c0392b';
    status.textContent = 'Please enter your WhatsApp number.';
    return;
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.style.background = '#888';

  try {
    const params = new URLSearchParams();
    params.append('type', 'whatsapp_callback');
    params.append('phone', phone);

    await fetch('https://script.google.com/macros/s/AKfycby4XuwZWYK0MphbQbjrmO7M_9dUUrDb9MgZRMOHMAklwFzt3MNJUuohaBipWwMkYbud/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    status.style.display = 'block';
    status.style.background = '#e6f4ea';
    status.style.color = '#1a7a3a';
    status.textContent = '✅ Received! We will WhatsApp you shortly.';
    document.getElementById('waPhone').value = '';

  } catch (err) {
    status.style.display = 'block';
    status.style.background = '#fde8e8';
    status.style.color = '#c0392b';
    status.textContent = 'Something went wrong. Please try again.';
  }

  btn.textContent = 'Send My Number';
  btn.disabled = false;
  btn.style.background = '#25D366';
}
</script>
  `;

  const siteFooter = document.getElementById("site-footer");
  if (siteFooter) siteFooter.innerHTML = footerHTML;

});
