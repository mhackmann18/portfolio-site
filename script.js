let sectionExpanded = false;
const projectsTitle = document.getElementById("projects-title");

projectsTitle.onclick = e => {
  if(!sectionExpanded){
    let header = e.target;

    header.classList.remove("text-orange-animated");

    for(let className of header.classList){
      if(className === "text-orange"){
        header.classList.remove("text-orange");
        header.classList.add("text-black");
      }
    }

    header.classList.add("translate");

    let el = header.parentElement.nextSibling;

    while(!(el.className === "content-window")){
      el = el.nextSibling;
    }

    el.style.height = "75vh";
    sectionExpanded = true;
  } else {
    let header = e.target;

    header.classList.add("text-orange-animated");

    for(let className of header.classList){
      if(className === "text-black"){
        header.classList.remove("text-black");
        header.classList.add("text-orange");
      }
    }

    header.classList.remove("translate");

    let el = header.parentElement.nextSibling;

    while(!(el.className === "content-window")){
      el = el.nextSibling;
    }

    el.style.height = "0vh";
    sectionExpanded = false;
  }
}
