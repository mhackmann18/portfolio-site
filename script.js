'use strict';

let sectionExpanded = false;
const projectsTitle = document.getElementById("projects-title");
const contentWrapper = document.getElementsByClassName("content-wrapper");

new MenuItem(projectsTitle, contentWrapper[0]);
