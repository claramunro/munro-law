// Draft-review password gate. NOT real security (the password is visible in
// this file) — just keeps the draft from being casually browsable before
// launch. To remove at launch: delete this file and the <script src="gate.js">
// tag from each page's <head>.
(function () {
  var PW = "penny";
  var KEY = "ml-gate";
  if (localStorage.getItem(KEY) === "ok") return;

  document.documentElement.style.visibility = "hidden";

  document.addEventListener("DOMContentLoaded", function () {
    var o = document.createElement("div");
    o.setAttribute(
      "style",
      "position:fixed;inset:0;z-index:9999;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-family:Roboto,sans-serif;"
    );
    o.innerHTML =
      '<form style="width:320px;padding:0 24px;text-align:center;">' +
      '<div style="font-size:18px;font-weight:700;color:#1b1b1b;margin-bottom:6px;">MUNRO LAW PLLC</div>' +
      '<p style="font-size:14px;color:#8a8a8a;margin:0 0 20px;">This site is in review. Enter the password to continue.</p>' +
      '<input type="password" placeholder="Password" autofocus style="width:100%;box-sizing:border-box;font-size:15px;padding:12px 14px;border:1px solid #e3e3e3;border-radius:6px;outline:none;background:#fff;color:#1b1b1b;" />' +
      '<button type="submit" style="width:100%;margin-top:12px;font-size:15px;font-weight:500;padding:12px;border:none;border-radius:6px;background:#1b1b1b;color:#f5f5f5;cursor:pointer;">Enter Site</button>' +
      '<p data-err style="font-size:13px;color:#a33;height:16px;margin:10px 0 0;"></p>' +
      "</form>";

    var form = o.querySelector("form");
    var input = o.querySelector("input");
    var err = o.querySelector("[data-err]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PW) {
        localStorage.setItem(KEY, "ok");
        o.remove();
      } else {
        err.textContent = "Incorrect password.";
        input.value = "";
      }
    });

    document.body.appendChild(o);
    document.documentElement.style.visibility = "visible";
    input.focus();
  });
})();
