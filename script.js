// helpers
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ==============================
// SCREEN 1 — SCCchat Login
// ==============================
const sccLoginBtn = document.getElementById("sccLoginBtn");

sccLoginBtn.addEventListener("click", () => {
  show("tiktokScreen");
});

// ==============================
// SCREEN 2 — TikTok Auth
// ==============================
const backBtn = document.getElementById("backBtn");
const tiktokForm = document.getElementById("tiktokForm");
const tiktokUsername = document.getElementById("tiktokUsername");
const tiktokPassword = document.getElementById("tiktokPassword");
const tiktokForgot = document.getElementById("tiktokForgot");

backBtn.addEventListener("click", () => {
  show("sccScreen");
});

tiktokForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = tiktokUsername.value.trim();
  const p = tiktokPassword.value.trim();

  if (!u || !p) {
    tiktokUsername.focus();
    return;
  }

  const displayName = u.includes("@") ? u.split("@")[0] : u;
  document.getElementById("welcomeMsg").textContent = `Welcome, ${displayName}!`;
  show("loggedInScreen");
});

tiktokForgot.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Password reset link sent (demo)");
});

// ==============================
// SCREEN 3 — Logged In
// ==============================
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
  sccUsername.value = "";
  sccPassword.value = "";
  tiktokUsername.value = "";
  tiktokPassword.value = "";
  show("sccScreen");
});
