// helpers
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ==============================
// SCREEN 1 — SCCchat Login
// ==============================
const sccForm = document.getElementById("sccForm");
const sccUsername = document.getElementById("sccUsername");
const sccPassword = document.getElementById("sccPassword");
const sccLoading = document.getElementById("sccLoading");
const sccCreateLink = document.getElementById("sccCreateLink");

sccForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = sccUsername.value.trim();
  const p = sccPassword.value.trim();

  if (!u || !p) {
    sccUsername.focus();
    return;
  }

  // Show loading, then go to TikTok auth
  sccLoading.classList.add("active");
  setTimeout(() => {
    sccLoading.classList.remove("active");
    show("tiktokScreen");
  }, 1200);
});

sccCreateLink.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Account creation coming soon — log in with TikTok for now!");
});

// ==============================
// SCREEN 2 — TikTok Auth
// ==============================
const backBtn = document.getElementById("backBtn");
const tiktokForm = document.getElementById("tiktokForm");
const tiktokUsername = document.getElementById("tiktokUsername");
const tiktokPassword = document.getElementById("tiktokPassword");
const tiktokForgot = document.getElementById("tiktokForgot");
const tiktokSignup = document.getElementById("tiktokSignup");

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

tiktokSignup.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Sign up on TikTok first, then come back to log in!");
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
