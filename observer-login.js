// observer-login.js
// FINAL: Observer login flow test + proper form handling

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("observerLoginForm");

  // Safety check
  if (!form) {
    console.error("Observer login form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 🔑 STOP PAGE RELOAD

    console.log("Observer login submit fired");

    // TEMP SUCCESS REDIRECT (FLOW TEST)
    // This confirms JS + navigation are working
    window.location.href = "observer-dashboard.html";
    return;

    /*
    // 🔒 REAL LOGIN (we will enable this next)
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

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

      window.location.href = "observer-dashboard.html";
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error. Try again.");
    }
    */
  });
});
