const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  loginBtn.innerText = "Logging in...";
  loginBtn.disabled = true;

  setTimeout(() => {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  }, 1200);
});

function register() {
  localStorage.setItem("auth", "true");
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "login.html";
}
