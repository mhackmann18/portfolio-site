class MenuItem {
  #headerEl;
  #contentWrapperEl;
  #expanded;

  constructor(headerEl, contentWrapperEl){
    this.#headerEl = headerEl;
    this.#contentWrapperEl = contentWrapperEl;
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
  }

  #expandItem(){
    if(this.#headerEl.classList.contains("text-orange")){
      this.#headerEl.classList.remove("text-orange-animated", "text-orange");
      this.#headerEl.classList.add("text-black");
    } else {
      this.#headerEl.classList.remove("text-black-animated", "text-black");
      this.#headerEl.classList.add("text-orange");
    }

    this.#headerEl.classList.add("translate");
    this.#contentWrapperEl.style.height = "75vh";
    this.#scrollToEl(this.#headerEl.parentElement.getBoundingClientRect().top, 200);
  }

  #collapseItem(){
    if(this.#headerEl.classList.contains("text-orange")){
      this.#headerEl.classList.add("text-black-animated", "text-black");
      this.#headerEl.classList.remove("text-orange");
    } else {
      this.#headerEl.classList.add("text-orange-animated", "text-orange");
      this.#headerEl.classList.remove("text-black");
    }

    this.#headerEl.classList.remove("translate");
    this.#contentWrapperEl.style.height = "0vh";
  }

  // Courtesy of https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
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
