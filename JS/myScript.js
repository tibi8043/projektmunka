window.addEventListener("load", init, false);

function init() {

}

function $(id) {
    return document.getElementById(id);
}

const scroll = new SmoothScroll('.navbar a[href*="#"]',{speed: 800});