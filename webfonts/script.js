const menu = document.getElementsByClassName("fa-bars")[0];
const mainMenu = document.getElementsByClassName("main-menu")[0];
const dropBtn = document.getElementsByClassName("drop-btn")[0];
const dropDown = document.getElementsByClassName("drop-down")[0];
const subDropBtn = document.getElementsByClassName("sub-drop-btn")[0];
const subDropDown = document.getElementsByClassName("sub-drop-down")[0];

const onClick = () => {
  event.preventDefault();
  mainMenu.classList.toggle("display");
};

const onClick1 = () => {
  event.preventDefault();
  dropDown.classList.toggle("display");
};

const onClick2 = () => {
  event.preventDefault();
  subDropDown.classList.toggle("display");
};

menu.addEventListener("click", onClick);
dropBtn.addEventListener("click", onClick1);
subDropBtn.addEventListener("click", onClick2);
