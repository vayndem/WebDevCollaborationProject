// $(document).ready(function () {
//   $("#sidebarCollapse").on("click", function () {
//     $("#sidebar").toggleClass("active");
//   });
// });

const sideBarCollapse = document.getElementById("sidebarCollapse");
const sidebar = document.getElementById("sidebar");

sideBarCollapse.addEventListener("click", () => {
  console.log("yese");
  sidebar.classList.toggle("active");
});
