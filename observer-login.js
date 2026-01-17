console.log("observer-login.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const toggleIcon = document.getElementById("togglePassword");
  const loginBtn = document.getElementById("loginBtn");

  // Guard checks
  if (!passwordInput || !emailInput || !toggleIcon || !loginBtn) {
    console.error("Observer login elements missing", {
      passwordInput,
      emailInput,
      toggleIcon,
      loginBtn,
    });
    return;
  }

  // 👁 Toggle password visibility
  toggleIcon.addEventListener("click", () => {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  });

  // 🔐 Login handler
  loginBtn.addEventListener("click", async () => {
    console.log("Observer login clicked");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch(
        `${window.API_BASE_URL}/observer/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      console.log("Observer login success", data);

      // Save token
      localStorage.setItem("observerToken", data.token);

      // Redirect
      window.location.href = "observer-dashboard.html";
    } catch (err) {
      console.error("Observer login error", err);
      alert("Server error. Please try again.");
    }
  });
});
