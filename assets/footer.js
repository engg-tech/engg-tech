document.addEventListener("DOMContentLoaded", () => {

  const footerHTML = `
<footer class="enggtech-footer">

  <div class="footer-inner">

    <!-- Stay Connected -->
    <div class="footer-column">
  <h2 class="footer-heading">About Us</h2>

  <p>
    Engg-Tech provides trusted fire protection, waterproofing, renovation, and M&E solutions for residential and commercial projects in Singapore.
  </p>

  <p>
    <a href="https://engg-tech.com/about-us/">
      Follow Us
    </a>
  </p>

<!-- Facebook -->
<a href="https://www.facebook.com/enggtech" target="_blank"
   style="display:inline-flex; align-items:center; justify-content:center;
          width:36px; height:36px; border-radius:50%;
          background:transparent; border:2px solid #FF6A00; color:#FF6A00; text-decoration:none;
          transition:all 0.2s; margin-right:8px;"
   onmouseover="this.style.background='#FF6A00'; this.querySelector('svg').style.fill='#fff';"
   onmouseout="this.style.background='transparent'; this.querySelector('svg').style.fill='#FF6A00';"
   aria-label="Facebook">
  <svg viewBox="0 0 320 512" width="14" height="14" fill="#FF6A00" xmlns="http://www.w3.org/2000/svg" style="transition:fill 0.2s;">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
</a>

<!-- Instagram -->
<a href="https://www.instagram.com/enggtechofficial/" target="_blank"
   style="display:inline-flex; align-items:center; justify-content:center;
          width:36px; height:36px; border-radius:50%;
          background:transparent; border:2px solid #FF6A00; color:#FF6A00; text-decoration:none;
          transition:all 0.2s;"
   onmouseover="this.style.background='#FF6A00'; this.querySelector('svg').style.fill='#fff';"
   onmouseout="this.style.background='transparent'; this.querySelector('svg').style.fill='#FF6A00';"
   aria-label="Instagram">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 27 26" fill="#FF6A00" style="transition:fill 0.2s;">
    <path d="M26.9922,13.12c0-1.952.0071-3.904-.0054-5.856a7.4912,7.4912,0,0,0-.12-1.3338,6.9762,6.9762,0,0,0-2.4989-4.1911,7.3149,7.3149,0,0,0-4.73-1.7279c-4.031-.02-8.0623-.0061-12.0935-.0071a7.347,7.347,0,0,0-3.6653.907,6.9367,6.9367,0,0,0-3.85,6.2265C-.025,11.0332.0121,14.93.0169,18.8272a6.5069,6.5069,0,0,0,.8908,3.3475A7.2785,7.2785,0,0,0,7.419,25.9708c4.0565.0558,8.1145.0148,12.1719.0131a7.6378,7.6378,0,0,0,4.9015-1.8408,6.9218,6.9218,0,0,0,2.4928-5.276C27.0143,16.9517,26.9915,15.0354,26.9922,13.12ZM13.4174,20.21a7.3625,7.3625,0,0,1-7.4061-7.2182,7.3505,7.3505,0,0,1,7.4992-7.2115,7.3516,7.3516,0,0,1,7.4852,7.2146A7.37,7.37,0,0,1,13.4174,20.21ZM22.4962,5.7791a1.48,1.48,0,0,1-1.5005-1.4476,1.5014,1.5014,0,0,1,3-.0009A1.481,1.481,0,0,1,22.4962,5.7791Z" style="fill-rule:evenodd"/>
    <path d="M13.4969,8.3571a4.7331,4.7331,0,0,0-4.8183,4.6445,4.74,4.74,0,0,0,4.8241,4.6413,4.74,4.74,0,0,0,4.8187-4.6466A4.7342,4.7342,0,0,0,13.4969,8.3571Z" style="fill-rule:evenodd"/>
  </svg>
</a>

</div>

    <!-- Explore Blog -->
    <div class="footer-column">
      <h2 class="footer-heading">Explore Our Resources</h2>
      <p>
        Practical fire safety tips, waterproofing guides, renovation insights, and industry knowledge for Singapore homes and businesses.
      </p>
      <p>
        <a class="footer-blog-link"
           href="https://engg-tech.com/articles/"
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

</footer>
`;

  document.getElementById("site-footer").innerHTML = footerHTML;

});