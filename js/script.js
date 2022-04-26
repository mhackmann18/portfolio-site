'use strict';

const menuHeaders = document.getElementsByClassName("menu-item-header");
const contentWrappers = document.getElementsByClassName("content-wrapper");
const closeButtons = document.getElementsByClassName("close-btn");

for(let i = 0; i < 4; ++i){
  new MenuItem(menuHeaders[i], contentWrappers[i], closeButtons[i]);
}

document.getElementById("submit-btn").onclick = e => validateFormInputs(e);
