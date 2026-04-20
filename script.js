document.addEventListener("DOMContentLoaded", function () {
const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const photos = ["family1.jpeg", "family2.jpeg", "family3.jpeg"];
const captions = ["My family and I at my last high school track meet.", "My St. Bernard, Layla, and I.", "My best friend and I "\fighting\" over a card game."];
let i = 0;

function change(direction) {
  i = (i + direction + photos.length) % photos.length;
  photo.src = photos[i];
  photo.classList.remove("fade");
  void photo.offsetWidth;
  photo.classList.add("fade");
  caption.textContent = captions[i];
  caption.classList.remove("fade");
  void caption.offsetWidth; 
  caption.classList.add("fade");
}

document.querySelector("#prev").addEventListener("click", function() {
  change(-1);
});

document.querySelector("#next").addEventListener("click", function() {
  change(1);
});

});
