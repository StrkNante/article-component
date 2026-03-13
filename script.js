const btnShare = document.querySelector("#btn-share");

const profile = document.querySelector("#profile");

const sharePopupGroupe = document.querySelector("#share-popup-groupe");

const footer = document.getElementsByClassName("footer")[0];

const toggleShare = () => {
  if (window.innerWidth < 768) {
  profile.classList.toggle("hidden");
  sharePopupGroupe.classList.toggle("active");
  footer.classList.toggle("share");
  btnShare.classList.toggle("share");
  }
  else {
    sharePopupGroupe.classList.toggle("active");
  }
};

btnShare.addEventListener("click", toggleShare);
