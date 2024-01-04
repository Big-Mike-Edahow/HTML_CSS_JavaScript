// script.js

const count = (function () {
    let num = 10;
    return function () {
        return num--;
    };
})();

function countDown() {
    const info = document.getElementById("info");
    let timerId = null;
    let num = count();

    if (num > 0) {
        info.innerHTML += "<span>" + num + "<br>" + "</span>";
        timerId = window.setTimeout(countDown, 1000);
    } else {
        info.innerHTML += "<span> <br>Lift Off! 🚀</span>";
        window.clearTimeout(timerId);
    }
}

countDown();

