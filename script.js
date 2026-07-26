const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const forgotLink = document.getElementById("forgotLink");
const signupLink = document.getElementById("signupLink");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please enter both email/username and password.");
    return;
  }

  alert(`Logging in as ${username}`);
});

forgotLink.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Password reset link sent (demo)");
});

signupLink.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Redirecting to Sign up page");
});
