const menu = document.getElementsByClassName("fa-bars")[0];
const mainMenu = document.getElementsByClassName("main-menu")[0];
const dropBtn = document.getElementsByClassName("drop-btn")[0];
const dropDown = document.getElementsByClassName("drop-down")[0];
const subDropBtn = document.getElementsByClassName("sub-drop-btn")[0];
const subDropDown = document.getElementsByClassName("sub-drop-down")[0];

const onClick = () => {
  event.preventDefault();
  // if (event.target === menu) {
  //   mainMenu.classList.toggle("display");
  // } else if (event.target === dropBtn) {
  //   dropDown.classList.toggle("display");
  // } else if (event.target === subDropBtn) {
  //   subDropDown.classList.toggle("display");
  // } else {
  //   return;
  // }
  event.target === menu
    ? mainMenu.classList.toggle("display")
    : event.target === dropBtn
    ? dropDown.classList.toggle("display")
    : event.target === subDropBtn
    ? subDropDown.classList.toggle("display")
    : null;
};

menu.addEventListener("click", onClick);
dropBtn.addEventListener("click", onClick);
subDropBtn.addEventListener("click", onClick);
