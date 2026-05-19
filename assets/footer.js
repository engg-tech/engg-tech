document.addEventListener("DOMContentLoaded", () => {

  const now = new Date();
  const year = now.getFullYear();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const formattedDate = months[now.getMonth()] + " " + year;

  const footerHTML = '<footer class="enggtech-footer">'
    + '<div class="footer-inner">'
    + '<div class="footer-column">'
    + '<h2 class="footer-heading">Follow Us</h2>'
    + '<p>Stay updated with our trusted fire protection, waterproofing, and M&amp;E solutions across Singapore.</p>'
    + '<a href="https://www.facebook.com/enggtech" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Facebook"><svg viewBox="0 0 320 512" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>'
    + '<a href="https://www.instagram.com/enggtechofficial/" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 27 26"><path d="M26.9922,13.12c0-1.952.0071-3.904-.0054-5.856a7.4912,7.4912,0,0,0-.12-1.3338,6.9762,6.9762,0,0,0-2.4989-4.1911,7.3149,7.3149,0,0,0-4.73-1.7279c-4.031-.02-8.0623-.0061-12.0935-.0071a7.347,7.347,0,0,0-3.6653.907,6.9367,6.9367,0,0,0-3.85,6.2265C-.025,11.0332.0121,14.93.0169,18.8272a6.5069,6.5069,0,0,0,.8908,3.3475A7.2785,7.2785,0,0,0,7.419,25.9708c4.0565.0558,8.1145.0148,12.1719.0131a7.6378,7.6378,0,0,0,4.9015-1.8408,6.9218,6.9218,0,0,0,2.4928-5.276C27.0143,16.9517,26.9915,15.0354,26.9922,13.12ZM13.4174,20.21a7.3625,7.3625,0,0,1-7.4061-7.2182,7.3505,7.3505,0,0,1,7.4992-7.2115,7.3516,7.3516,0,0,1,7.4852,7.2146A7.37,7.37,0,0,1,13.4174,20.21ZM22.4962,5.7791a1.48,1.48,0,0,1-1.5005-1.4476,1.5014,1.5014,0,0,1,3-.0009A1.481,1.481,0,0,1,22.4962,5.7791Z" style="fill-rule:evenodd"/><path d="M13.4969,8.3571a4.7331,4.7331,0,0,0-4.8183,4.6445,4.74,4.74,0,0,0,4.8241,4.6413,4.74,4.74,0,0,0,4.8187-4.6466A4.7342,4.7342,0,0,0,13.4969,8.3571Z" style="fill-rule:evenodd"/></svg></a>'
    + '<a href="https://www.linkedin.com/company/enggtechofficial/" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-1.98-1.98 1.98 1.98 0 0 1 1.98-1.98 1.98 1.98 0 0 1 1.98 1.98 1.98 1.98 0 0 1-1.98 1.98zm1.958 13.019H3.379V9h3.916v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>'
    + '</div>'
    + '<div class="footer-column">'
    + '<h2 class="footer-heading">Explore Our Resources</h2>'
    + '<p>Practical fire safety tips, waterproofing guides, renovation insights, and industry knowledge for Singapore homes and businesses.</p>'
    + '<p><a class="footer-blog-link" href="https://engg-tech.com/articles/">Read Our Latest Articles &rarr;</a></p>'
    + '</div>'
    + '<div class="footer-column">'
    + '<h2 class="footer-heading">Contact Us</h2>'
    + '<p>Email us today for trusted support in Singapore</p>'
    + '<p><a href="mailto:info@engg-tech.com">info@engg-tech.com</a></p>'
    + '<a class="footer-btn" href="https://engg-tech.com/contact-us/">Request with Online Form</a>'
    + '</div>'
    + '</div>'
    + '<hr class="footer-divider">'
    + '<div class="footer-bottom">'
    + '<p>&copy; 2015&ndash;' + year + ' Engg-Tech Pte. Ltd. All rights reserved. | <a href="https://engg-tech.com/privacy-policy/">Privacy Policy</a></p>'
    + '<p>Designed &amp; Maintained by <a href="https://engg-tech.com/">Engg-Tech Singapore</a></p>'
    + '<p><em>Last updated: ' + formattedDate + '</em></p>'
    + '<small class="disclaimer">Disclaimer: This page may contain sponsored ads.</small>'
    + '</div>'
    + '</footer>';

  const siteFooter = document.getElementById("site-footer");
  if (siteFooter) siteFooter.innerHTML = footerHTML;

  // Floating buttons
  const fab = document.createElement('div');
  fab.innerHTML = '<style>'
    + '.fab-stack{position:fixed;bottom:24px;right:24px;z-index:9998;display:flex;flex-direction:column;gap:12px;align-items:flex-end;}'
    + '.fab-btn{display:flex;align-items:center;justify-content:center;gap:0;border:none;cursor:pointer;border-radius:50px;padding:0;width:56px;height:56px;white-space:nowrap;transition:width 0.3s ease,gap 0.3s ease,padding 0.3s ease,box-shadow 0.2s ease;box-shadow:0 4px 16px rgba(0,0,0,0.2);}'
    + '.fab-btn:hover{width:185px;height:56px;border-radius:50px;padding:0 18px;gap:10px;box-shadow:0 6px 20px rgba(0,0,0,0.25);justify-content:flex-start;}'
    + '.fab-label{font-size:0.95rem;font-weight:700;opacity:0;max-width:0;overflow:hidden;transition:opacity 0.2s ease 0.1s,max-width 0.3s ease;color:#fff;}'
    + '.fab-btn:hover .fab-label{opacity:1;max-width:150px;}'
    + '.fab-wa{background:#25D366;}'
    + '.fab-cmb{background:#FF6A00;}'
    + '</style>'
    + '<div class="fab-stack">'
    + '<button class="fab-btn fab-wa" onclick="document.getElementById(\'wa-popup\').style.display=\'flex\'" aria-label="WhatsApp Us">'
    + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'
    + '<span class="fab-label">WhatsApp Us</span>'
    + '</button>'
    + '<button class="fab-btn fab-cmb" onclick="document.getElementById(\'cmb-popup\').style.display=\'flex\'" aria-label="Call Me Back">'
    + '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>'
    + '<span class="fab-label">Call Me Back</span>'
    + '</button>'
    + '</div>'
    + '<div id="wa-popup" style="display:none;position:fixed;bottom:170px;right:24px;z-index:9999;background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);width:280px;flex-direction:column;gap:0.75rem;">'
    + '<button onclick="document.getElementById(\'wa-popup\').style.display=\'none\'" style="position:absolute;top:10px;right:12px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#888;">&#x2715;</button>'
    + '<div style="display:flex;align-items:center;gap:8px;">'
    + '<div style="background:#25D366;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>'
    + '<div><p style="margin:0;font-weight:700;color:#0A2540;font-size:0.95rem;">WhatsApp Us</p><p style="margin:0;font-size:0.75rem;color:#25D366;">&#9679; We will be in touch</p></div>'
    + '</div>'
    + '<p style="margin:0;font-size:0.85rem;color:#555;">Leave your number and we will contact you.</p>'
    + '<input type="tel" id="waPhone" placeholder="Phone number" onkeypress="return /[0-9+\\s\\-().]/.test(event.key)" style="width:100%;padding:10px 12px;border:1.5px solid #d0dae6;border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;" onfocus="this.style.borderColor=\'#25D366\'" onblur="this.style.borderColor=\'#d0dae6\'">'
    + '<div id="waStatus" style="display:none;font-size:0.85rem;font-weight:600;text-align:center;padding:0.4rem;border-radius:6px;"></div>'
    + '<button id="waSubmitBtn" onclick="submitWaCallback()" style="background:#25D366;color:#fff;border:none;padding:11px;border-radius:6px;font-size:0.95rem;font-weight:700;cursor:pointer;width:100%;">Send My Number</button>'
    + '</div>'
    + '<div id="cmb-popup" style="display:none;position:fixed;bottom:90px;right:24px;z-index:9999;background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);width:280px;flex-direction:column;gap:0.75rem;">'
    + '<button onclick="document.getElementById(\'cmb-popup\').style.display=\'none\'" style="position:absolute;top:10px;right:12px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#888;">&#x2715;</button>'
    + '<div style="display:flex;align-items:center;gap:8px;">'
    + '<div style="background:#FF6A00;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg></div>'
    + '<div><p style="margin:0;font-weight:700;color:#0A2540;font-size:0.95rem;">Call Me Back</p><p style="margin:0;font-size:0.75rem;color:#FF6A00;">&#9679; We will call you back</p></div>'
    + '</div>'
    + '<p style="margin:0;font-size:0.85rem;color:#555;">Leave your number and we will call you back.</p>'
    + '<input type="tel" id="cmbPhone" placeholder="Phone number" onkeypress="return /[0-9+\\s\\-().]/.test(event.key)" style="width:100%;padding:10px 12px;border:1.5px solid #d0dae6;border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;" onfocus="this.style.borderColor=\'#FF6A00\'" onblur="this.style.borderColor=\'#d0dae6\'">'
    + '<div id="cmbStatus" style="display:none;font-size:0.85rem;font-weight:600;text-align:center;padding:0.4rem;border-radius:6px;"></div>'
    + '<button id="cmbSubmitBtn" onclick="submitCallBack()" style="background:#FF6A00;color:#fff;border:none;padding:11px;border-radius:6px;font-size:0.95rem;font-weight:700;cursor:pointer;width:100%;">Request Call Back</button>'
    + '</div>';

  document.body.appendChild(fab);

  window.submitWaCallback = async function() {
    const phone = document.getElementById('waPhone').value.trim();
    const status = document.getElementById('waStatus');
    const btn = document.getElementById('waSubmitBtn');
    if (!phone) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Please enter your phone number.'; return; }
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.length < 7) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Minimum 7 digits required.'; return; }
    if (digits.length > 15) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Maximum 15 digits allowed.'; return; }
    btn.textContent='Sending...'; btn.disabled=true; btn.style.background='#888';
    const fd = new FormData();
    fd.append('name','WhatsApp Callback Request');
    fd.append('email','whatsapp@engg-tech.com');
    fd.append('phone', phone);
    fd.append('message','WHATSAPP CALLBACK REQUEST from website button.');
    await fetch('https://script.google.com/macros/s/AKfycby4XuwZWYK0MphbQbjrmO7M_9dUUrDb9MgZRMOHMAklwFzt3MNJUuohaBipWwMkYbud/exec', {method:'POST',mode:'no-cors',body:fd});
    status.style.display='block'; status.style.background='#e6f4ea'; status.style.color='#1a7a3a'; status.textContent='Received! We will be in touch shortly.';
    document.getElementById('waPhone').value='';
    btn.textContent='Send My Number'; btn.disabled=false; btn.style.background='#25D366';
    setTimeout(() => { document.getElementById('wa-popup').style.display='none'; status.style.display='none'; }, 3000);
  };

  window.submitCallBack = async function() {
    const phone = document.getElementById('cmbPhone').value.trim();
    const status = document.getElementById('cmbStatus');
    const btn = document.getElementById('cmbSubmitBtn');
    if (!phone) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Please enter your phone number.'; return; }
    const digits = phone.replace(/[^0-9]/g, '');
    if (digits.length < 7) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Minimum 7 digits required.'; return; }
    if (digits.length > 15) { status.style.display='block'; status.style.background='#fde8e8'; status.style.color='#c0392b'; status.textContent='Maximum 15 digits allowed.'; return; }
    btn.textContent='Sending...'; btn.disabled=true; btn.style.background='#888';
    const fd = new FormData();
    fd.append('name','Call Back Request');
    fd.append('email','callback@engg-tech.com');
    fd.append('phone', phone);
    fd.append('message','CALL BACK REQUEST from website button.');
    await fetch('https://script.google.com/macros/s/AKfycby4XuwZWYK0MphbQbjrmO7M_9dUUrDb9MgZRMOHMAklwFzt3MNJUuohaBipWwMkYbud/exec', {method:'POST',mode:'no-cors',body:fd});
    status.style.display='block'; status.style.background='#e6f4ea'; status.style.color='#1a7a3a'; status.textContent='Received! We will be in touch shortly.';
    document.getElementById('cmbPhone').value='';
    btn.textContent='Request Call Back'; btn.disabled=false; btn.style.background='#FF6A00';
    setTimeout(() => { document.getElementById('cmb-popup').style.display='none'; status.style.display='none'; }, 3000);
  };

});
