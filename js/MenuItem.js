class MenuItem {
  #headerEl;
  #contentWrapperEl;
  #closeBtn;
  #expanded;

  constructor(headerEl, contentWrapperEl, closeBtn){
    this.#headerEl = headerEl;
    this.#contentWrapperEl = contentWrapperEl;
    this.#closeBtn = closeBtn;
    this.#expanded = false;
    this.#init();
  }

  #init(){
    this.#headerEl.onclick = () => {
      if(!this.#expanded){
        this.#expandItem();
        this.#expanded = true;
      } else {
        this.#collapseItem();
        this.#expanded = false;
      }
    }

    this.#closeBtn.onclick = () => {
      this.#collapseItem();
      this.#expanded = false;
    }
  }

  #expandItem(){
    this.#closeBtn.style.display = "inline-block";

    if(this.#headerEl.classList.contains("text-color-1")){
      this.#headerEl.classList.remove("text-color-1-animated", "text-color-1");
      this.#headerEl.classList.add("text-color-2");
    } else {
      this.#headerEl.classList.remove("text-color-2-animated", "text-color-2");
      this.#headerEl.classList.add("text-color-1");
    }

    // Get item's y position relative to the document
    let itemY = this.#headerEl.parentElement.getBoundingClientRect().top + document.documentElement.scrollTop;
    this.#scrollToEl(itemY, 200);

    this.#headerEl.classList.add("translate");
    this.#contentWrapperEl.style.height = "75vh";
  }

  #collapseItem(){
    this.#closeBtn.style.display = "none";

    if(this.#headerEl.classList.contains("text-color-1")){
      this.#headerEl.classList.add("text-color-2-animated", "text-color-2");
      this.#headerEl.classList.remove("text-color-1");
    } else {
      this.#headerEl.classList.add("text-color-1-animated", "text-color-1");
      this.#headerEl.classList.remove("text-color-2");
    }

    this.#headerEl.classList.remove("translate");
    this.#contentWrapperEl.style.height = "0vh";
  }

  // scrollToEl function courtesy of https://stackoverflow.com/questions/17722497
  #scrollToEl(elementY, duration) { 
    var startingY = window.pageYOffset;
    var diff = elementY - startingY;
    var start;
  
    // Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      // Elapsed milliseconds since start of scrolling.
      var time = timestamp - start;
      // Get percent of completion in range [0, 1].
      var percent = Math.min(time / duration, 1);
  
      window.scrollTo(0, startingY + diff * percent);
  
      // Proceed with animation as long as we wanted it to.
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
}
