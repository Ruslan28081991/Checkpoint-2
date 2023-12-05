const POPUP_OPENED_CLASSNAME = "popup__open";
const BODY_FIXED_CLASSNAME = "body__fixed";

const bodyNode = document.querySelector("body");
const popupNode = document.querySelector(".js-popup");
const btnOpenNode = document.querySelector(".service__btn");
const popupContentNode = document.querySelector(".popup__container");
const btnCloseNode = document.querySelector(".popup__close");

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}
