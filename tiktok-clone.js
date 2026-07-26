// ============================================
// Screen navigation helpers
// ============================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ============================================
// SCREEN 1 — SCCchat Login
// ============================================
const sccForm = document.getElementById("sccForm");
const sccUsername = document.getElementById("sccUsername");
const sccPassword = document.getElementById("sccPassword");
const sccLoading = document.getElementById("sccLoading");
const sccGuestBtn = document.getElementById("sccGuestBtn");
const sccCreateLink = document.getElementById("sccCreateLink");

sccForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = sccUsername.value.trim();
  const password = sccPassword.value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Show loading, then transition to TikTok auth
  sccLoading.classList.add("active");
  setTimeout(() => {
    sccLoading.classList.remove("active");
    showScreen("tiktokScreen");
  }, 1200);
});

sccGuestBtn.addEventListener("click", () => {
  showScreen("loggedInScreen");
  document.getElementById("sccWelcomeMsg").textContent = "Welcome, guest!";
});

sccCreateLink.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Account creation coming soon — log in with TikTok for now!");
});

// ============================================
// SCREEN 2 — TikTok Auth
// ============================================
const backBtn = document.getElementById("backBtn");
const tiktokForm = document.getElementById("tiktokForm");
const tiktokUsername = document.getElementById("tiktokUsername");
const tiktokPassword = document.getElementById("tiktokPassword");
const tiktokForgot = document.getElementById("tiktokForgot");
const tiktokSignup = document.getElementById("tiktokSignup");

backBtn.addEventListener("click", () => {
  showScreen("sccScreen");
});

tiktokForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = tiktokUsername.value.trim();
  const password = tiktokPassword.value.trim();

  if (!username || !password) {
    alert("Please enter both email/username and password.");
    return;
  }

  // Successful TikTok auth → go to SCCchat logged in
  const displayName = username.includes("@")
    ? username.split("@")[0]
    : username;

  document.getElementById("sccWelcomeMsg").textContent =
    `Welcome, ${displayName}!`;
  document.getElementById("sccAvatar").innerHTML =
    '<i class="fa-brands fa-tiktok"></i>';

  showScreen("loggedInScreen");
});

tiktokForgot.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Password reset link sent (demo)");
});

tiktokSignup.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Sign up on TikTok first, then come back to log in!");
});

// ============================================
// SCREEN 3 — Logged In
// ============================================
const sccLogoutBtn = document.getElementById("sccLogoutBtn");

sccLogoutBtn.addEventListener("click", () => {
  showScreen("sccScreen");
  sccUsername.value = "";
  sccPassword.value = "";
});
