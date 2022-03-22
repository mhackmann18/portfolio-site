class MenuItem {
  #headerEl;
  #contentWrapperEl;
  #expanded;

  constructor(headerEl, contentWrapperEl){
    this.#headerEl = headerEl;
    this.#contentWrapperEl = contentWrapperEl;
    this.#expanded = false;
    this.init();
  }

  init(){
    this.#headerEl.onclick = () => {
      if(!this.#expanded){

        for(let className of this.#headerEl.classList){
          if(className === "text-orange"){
            this.#headerEl.classList.remove("text-orange-animated");
            this.#headerEl.classList.remove("text-orange");
            this.#headerEl.classList.add("text-black");
            break;
          } else if(className === "text-black"){
            this.#headerEl.classList.remove("text-black-animated");
            this.#headerEl.classList.remove("text-black");
            this.#headerEl.classList.add("text-orange");
            break;
          }
        }
    
        this.#headerEl.classList.add("translate");
    
        this.#contentWrapperEl.style.height = "75vh";
        this.#expanded = true;
      } else {
    
        for(let className of this.#headerEl.classList){
          if(className === "text-black"){
            this.#headerEl.classList.add("text-orange-animated");
            this.#headerEl.classList.remove("text-black");
            this.#headerEl.classList.add("text-orange");
            break;
          } else if(className === "text-orange"){
            this.#headerEl.classList.add("text-black-animated");
            this.#headerEl.classList.remove("text-orange");
            this.#headerEl.classList.add("text-black");
            break;
          }
        }
    
        this.#headerEl.classList.remove("translate");
    
        this.#contentWrapperEl.style.height = "0vh";
        this.#expanded = false;
      }
    }
  }
}
