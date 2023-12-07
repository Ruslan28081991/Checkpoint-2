const BURGER_OPENED_CLASSNAME = "burger__open";
const BURGER_BTN_OPENED_CLASSNAME = "burger-btn__open";
const BODY_FIXED_CLASSNAME_BUR = "body__fixed";

const bodyNodeBur = document.querySelector("body");
const burgerNode = document.querySelector(".burger");
const burgerBtnNode = document.querySelector(".burger__button");
const burgerContentNode = document.querySelector(".burger__contacts");

burgerBtnNode.addEventListener("click", toggleBurger);

burgerNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNodeBur.classList.toggle(BODY_FIXED_CLASSNAME_BUR);
  burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}
