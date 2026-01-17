console.log("observer-login.js loaded");

function togglePassword() {
  const input = document.getElementById("password");
  if (!input) {
    alert("password input not found");
    return;
  }
  input.type = input.type === "password" ? "text" : "password";
}

async function loginObserver() {
  alert("loginObserver fired");

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (!emailInput || !passwordInput) {
    alert("email or password input missing");
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  alert("Inputs captured correctly");
}
