// execute after page load

window.onload = function digital_fun() {
  // toggle button
  let toggle = document.querySelector("#nav .toggle-btn");
  let collapse = document.querySelector("#nav .collapse");
  toggle.addEventListener("click", function (event) {
    console.log(toggle);
    collapse.classList.toggle("active");
  });

  //   masonry js
  let grid = document.querySelector(
    "#site-main .recent-work-area .images-flex"
  );
  let msnry = new Masonry(grid, {
    itemSelector: ".flex-item",
    gutter: 100,
    fitWidth: true,
  });
};
