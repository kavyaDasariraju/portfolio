function toggle(id) {
  let element = document.getElementById(id);

  let isOpen = element.classList.contains("open");

  document.querySelectorAll(".content").forEach((item) => {
    item.classList.remove("open");
  });

  if (!isOpen) {
    element.classList.add("open");
  }
}
