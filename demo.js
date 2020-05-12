function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hide")) {
    sidebar.classList.remove("hide");
  } else {
    sidebar.classList.add("hide");
  }
}
