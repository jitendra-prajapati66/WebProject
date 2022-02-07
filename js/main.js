const collapsables = document.querySelectorAll(".collapsables");
collapsables.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsables--expanded");
  })
);