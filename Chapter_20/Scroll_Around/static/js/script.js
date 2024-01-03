// script.js

(function () {
    const info = document.getElementById("info");

    for (let i = 0; i <= 40; i++) {
        info.innerHTML += i + "<br>";
    }

    window.scrollBy(200, info.clientHeight);

    info.innerHTML += "ScrollX: " + window.scrollX + " & ScrollY: " + window.scrollY + "<br>";
    info.innerHTML += "Client window height: " + info.clientHeight;
})();

