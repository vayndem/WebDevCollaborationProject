const login = document.querySelector("#login");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const showPassword = document.querySelector("#show-password");

// hidden alert error
const alertError = document.querySelector("#alert-error");
alertError.style.display = "none";

// show password
showPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML = `<i class="bi bi-eye-slash fs-4"></i>`;
  } else {
    password.type = "password";
    showPassword.innerHTML = ` <i
    class="bi bi-eye fs-4"
  ></i>`;
  }
});

// event submit login
login.addEventListener("submit", (e) => {
  e.preventDefault();
  //   validasi login
  if (username.value === "admin" && password.value === "admin") {
    window.location.href = "../../index.html";
    alertError.style.display = "none";
  } else {
    alertError.style.display = "block";
  }
});
