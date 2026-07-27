// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

// Pre-select the practice area on the contact form from ?area= links
const areaSelect = document.querySelector("#area");
if (areaSelect) {
  const area = new URLSearchParams(window.location.search).get("area");
  if (area) {
    const match = [...areaSelect.options].find((o) => o.value === area);
    if (match) areaSelect.value = area;
  }
}

// TODO: wire form submission to email Jennifer + info@munrolawpllc.com
// (needs Jennifer's email address; use a form backend like Formspree/Basin)
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Draft site — form delivery isn't connected yet. Please email info@munrolawpllc.com.");
  });
}
