document.addEventListener("DOMContentLoaded", () => {

  /* UPDATE DYNAMIC YEAR / DATE in static footer */
  const now = new Date();
  const year = now.getFullYear();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const yearEl = document.getElementById("footer-year");
  const dateEl = document.getElementById("footer-date");
  if (yearEl) yearEl.textContent = year;
  if (dateEl) dateEl.textContent = months[now.getMonth()] + " " + year;

  /* FLOATING ACTION BUTTONS + POPUPS */
  const fabHTML = `
<style>
.fab-stack{position:fixed;bottom:24px;right:24px;z-index:9998;display:flex;flex-direction:column;gap:12px;align-items:flex-end;}
.fab-btn{display:flex;align-items:center;justify-content:center;gap:0;border:none;cursor:pointer;border-radius:50px;padding:0;width:56px;height:56px;white-space:nowrap;transition:width 0.3s ease,gap 0.3s ease,padding 0.3s ease,box-shadow 0.2s ease;box-shadow:0 4px 16px rgba(0,0,0,0.2);}
.fab-btn:hover{width:185px;height:56px;border-radius:50px;padding:0 18px;gap:10px;box-shadow:0 6px 20px rgba(0,0,0,0.25);justify-content:flex-start;}
.fab-label{font-size:0.95rem;font-weight:700;opacity:0;max-width:0;overflow:hidden;transition:opacity 0.2s ease 0.1s,max-width 0.3s ease;color:#fff;}
.fab-btn:hover .fab-label{opacity:1;max-width:150px;}
.fab-wa{background:#25D366;}
.fab-cmb{background:#FF6A00;}
</style>
<div class="fab-stack">
  <button class="fab-btn fab-wa" id="fab-wa-btn" aria-label="WhatsApp Us">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="fab-label">WhatsApp Us</span>
  </button>
  <button class="fab-btn fab-cmb" id="fab-cmb-btn" aria-label="Call Me Back">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
    <span class="fab-label">Call Me Back</span>
  </button>
</div>

<div id="wa-popup" style="display:none;position:fixed;bottom:170px;right:24px;z-index:9999;background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);width:280px;flex-direction:column;gap:0.75rem;" role="dialog" aria-label="WhatsApp callback form">
  <button id="wa-popup-close" style="position:absolute;top:10px;right:12px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#888;" aria-label="Close">&#x2715;</button>
  <div style="display:flex;align-items:center;gap:8px;">
    <div style="background:#25D366;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
    <div><p style="margin:0;font-weight:700;color:#0A2540;font-size:0.95rem;">WhatsApp Us</p><p style="margin:0;font-size:0.75rem;color:#25D366;">&#9679; We will be in touch</p></div>
  </div>
  <p style="margin:0;font-size:0.85rem;color:#555;">Leave your number and we will contact you.</p>
  <input type="tel" id="waPhone" placeholder="Phone number" style="width:100%;padding:10px 12px;border:1.5px solid #d0dae6;border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;" aria-label="Your phone number">
  <div id="waStatus" style="display:none;font-size:0.85rem;font-weight:600;text-align:center;padding:0.4rem;border-radius:6px;" role="status"></div>
  <button id="waSubmitBtn" style="background:#25D366;color:#fff;border:none;padding:11px;border-radius:6px;font-size:0.95rem;font-weight:700;cursor:pointer;width:100%;">Send My Number</button>
</div>

<div id="cmb-popup" style="display:none;position:fixed;bottom:90px;right:24px;z-index:9999;background:#fff;border-radius:12px;padding:1.5rem;box-shadow:0 8px 32px rgba(0,0,0,0.18);width:280px;flex-direction:column;gap:0.75rem;" role="dialog" aria-label="Call me back form">
  <button id="cmb-popup-close" style="position:absolute;top:10px;right:12px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#888;" aria-label="Close">&#x2715;</button>
  <div style="display:flex;align-items:center;gap:8px;">
    <div style="background:#FF6A00;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg></div>
    <div><p style="margin:0;font-weight:700;color:#0A2540;font-size:0.95rem;">Call Me Back</p><p style="margin:0;font-size:0.75rem;color:#FF6A00;">&#9679; We will call you back</p></div>
  </div>
  <p style="margin:0;font-size:0.85rem;color:#555;">Leave your number and we will call you back.</p>
  <input type="tel" id="cmbPhone" placeholder="Phone number" style="width:100%;padding:10px 12px;border:1.5px solid #d0dae6;border-radius:6px;font-size:1rem;box-sizing:border-box;outline:none;" aria-label="Your phone number">
  <div id="cmbStatus" style="display:none;font-size:0.85rem;font-weight:600;text-align:center;padding:0.4rem;border-radius:6px;" role="status"></div>
  <button id="cmbSubmitBtn" style="background:#FF6A00;color:#fff;border:none;padding:11px;border-radius:6px;font-size:0.95rem;font-weight:700;cursor:pointer;width:100%;">Request Call Back</button>
</div>`;

  const fabContainer = document.createElement("div");
  fabContainer.innerHTML = fabHTML;
  document.body.appendChild(fabContainer);

  /* WIRE UP FAB BUTTON EVENTS */
  document.getElementById("fab-wa-btn").addEventListener("click", () => {
    document.getElementById("wa-popup").style.display = "flex";
  });
  document.getElementById("fab-cmb-btn").addEventListener("click", () => {
    document.getElementById("cmb-popup").style.display = "flex";
  });

  /* WIRE UP NAV CMB BUTTONS (popup now exists in DOM) */
  ["callbackMobileBtn", "callbackNavBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", () => {
      document.getElementById("cmb-popup").style.display = "flex";
    });
  });
  document.getElementById("wa-popup-close").addEventListener("click", () => {
    document.getElementById("wa-popup").style.display = "none";
  });
  document.getElementById("cmb-popup-close").addEventListener("click", () => {
    document.getElementById("cmb-popup").style.display = "none";
  });

  /* PHONE VALIDATION HELPER */
  function validatePhone(phone) {
    const digits = phone.replace(/[^0-9]/g, "");
    if (!phone) return "Please enter your phone number.";
    if (digits.length < 7) return "Minimum 7 digits required.";
    if (digits.length > 15) return "Maximum 15 digits allowed.";
    return null;
  }

  function showStatus(el, msg, isError) {
    el.style.display = "block";
    el.style.background = isError ? "#fde8e8" : "#e6f4ea";
    el.style.color = isError ? "#c0392b" : "#1a7a3a";
    el.textContent = msg;
  }

  const FORM_ENDPOINT = "https://script.google.com/macros/s/AKfycby4XuwZWYK0MphbQbjrmO7M_9dUUrDb9MgZRMOHMAklwFzt3MNJUuohaBipWwMkYbud/exec";

  /* WHATSAPP CALLBACK SUBMIT */
  document.getElementById("waSubmitBtn").addEventListener("click", async () => {
    const phone = document.getElementById("waPhone").value.trim();
    const status = document.getElementById("waStatus");
    const btn = document.getElementById("waSubmitBtn");
    const err = validatePhone(phone);
    if (err) { showStatus(status, err, true); return; }
    btn.textContent = "Sending..."; btn.disabled = true; btn.style.background = "#888";
    const fd = new FormData();
    fd.append("name", "WhatsApp Callback Request");
    fd.append("email", "whatsapp@engg-tech.com");
    fd.append("phone", phone);
    fd.append("message", "WHATSAPP CALLBACK REQUEST from website button.");
    await fetch(FORM_ENDPOINT, { method: "POST", mode: "no-cors", body: fd });
    showStatus(status, "Received! We will be in touch shortly.", false);
    document.getElementById("waPhone").value = "";
    btn.textContent = "Send My Number"; btn.disabled = false; btn.style.background = "#25D366";
    setTimeout(() => { document.getElementById("wa-popup").style.display = "none"; status.style.display = "none"; }, 3000);
  });

  /* CALL ME BACK SUBMIT */
  document.getElementById("cmbSubmitBtn").addEventListener("click", async () => {
    const phone = document.getElementById("cmbPhone").value.trim();
    const status = document.getElementById("cmbStatus");
    const btn = document.getElementById("cmbSubmitBtn");
    const err = validatePhone(phone);
    if (err) { showStatus(status, err, true); return; }
    btn.textContent = "Sending..."; btn.disabled = true; btn.style.background = "#888";
    const fd = new FormData();
    fd.append("name", "Call Back Request");
    fd.append("email", "callback@engg-tech.com");
    fd.append("phone", phone);
    fd.append("message", "CALL BACK REQUEST from website button.");
    await fetch(FORM_ENDPOINT, { method: "POST", mode: "no-cors", body: fd });
    showStatus(status, "Received! We will be in touch shortly.", false);
    document.getElementById("cmbPhone").value = "";
    btn.textContent = "Request Call Back"; btn.disabled = false; btn.style.background = "#FF6A00";
    setTimeout(() => { document.getElementById("cmb-popup").style.display = "none"; status.style.display = "none"; }, 3000);
  });

});
