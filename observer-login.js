function loginObserver() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");

  errorDiv.textContent = "";

  // Basic validation
  if (!email || !password) {
    errorDiv.textContent = "Please enter email and password.";
    return;
  }

  // FRONTEND-ONLY AUTH (mirror agent login)
  localStorage.setItem("observerApproved", "true");

  // Redirect to observer dashboard
  window.location.href = "observer-dashboard.html";
}
