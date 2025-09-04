const shareButton = document.getElementById("share-button");
const shareBar = document.getElementById("share-bar");
const shareBarButton = shareBar.querySelector(".share-button");

shareButton.addEventListener("click", () => {
  shareBar.classList.toggle("hidden");
});

shareBarButton.addEventListener("click", () => {
  shareBar.classList.add("hidden");
});
