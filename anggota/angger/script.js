const button = document.querySelector(".btn-description");
const contentDescription = document.querySelector("#show-description");
console.log("🚀 ~ contentDescription:", contentDescription);
button.addEventListener("click", () => {
  if (contentDescription.style.display === "none") {
    button.innerText = "Close all description";
    contentDescription.style.display = "block";
  } else {
    button.innerText = "Show all description";
    contentDescription.style.display = "none";
  }
});
