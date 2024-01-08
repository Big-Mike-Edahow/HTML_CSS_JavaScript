// script.js

function reactTo(list, event) {
    const info = document.getElementById("info");
    let index = list.options.selectedIndex;
    let city = list.options[index].value;
    info.innerHTML = event.type + "<br>Selected: ";
    info.innerHTML += city + "<br>Index: " + index;
}

const list = document.getElementById("list");

list.addEventListener("change", function () {
    reactTo(list, event);
});

addEventListener("load", function () {
    reactTo(list, event);
});

