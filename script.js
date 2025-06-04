document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value;

    const validUsername = "Admin";
    const validPassword = "zaq1@WSX";

    if (enteredUsername === validUsername && enteredPassword === validPassword) {
      window.location.href = "dashboard.html";
    } else {
      errorMessage.textContent = "Nieprawidłowa nazwa użytkownika lub hasło.";
    }
  });
});
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});
