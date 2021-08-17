window.addEventListener("load", init, false);

function init() {
  window.addEventListener("scroll", olloanimation, false);
}

function $(id) {
  return document.getElementById(id);
}

function olloanimation() {
  let bal = $("scissorLeft");
  let jobb = $("scissorRight");
  let value = window.scrollY;
  //bal.style.transform = "translateX(" + value * 0.1 + "%";
  
  if (value < 500) {
    bal.style.transform = "translateX(" + value * -0.07 + "vw)";
    jobb.style.transform = "translateX(" + value * 0.07 + "vw)";
  }
}
