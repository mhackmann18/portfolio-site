'use strict';

let sectionExpanded = false;
const menuHeaders = document.getElementsByClassName("menu-header");
const contentWrappers = document.getElementsByClassName("content-wrapper");

for(let i = 0; i < 4; ++i){
  new MenuItem(menuHeaders[i], contentWrappers[i]);
}
