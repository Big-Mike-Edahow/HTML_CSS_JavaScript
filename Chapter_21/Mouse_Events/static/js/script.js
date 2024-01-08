// script.js

function reactTo(event, color) {
    document.getElementById("box").style.background = color;
    document.getElementById("info").innerText = event.type;
}

const box = document.getElementById("box");
const btn = document.getElementById("btn");

box.addEventListener("mouseover", function (event) {
    reactTo(event, "Red");
});

box.addEventListener("mouseout", function (event) {
    reactTo(event, "Purple");
});

box.addEventListener("mousedown", function (event) {
    reactTo(event, "Green");
});

box.addEventListener("mouseup", function (event) {
    reactTo(event, "Blue");
});

btn.addEventListener("click", function (event) {
    reactTo(event, "Orange");
});

