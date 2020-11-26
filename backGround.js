const body = document.querySelector("body");

function paintImages() {
  const image = new Image();
  image.src = "./image/paper.jpg";
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  paintImages();
}

init();