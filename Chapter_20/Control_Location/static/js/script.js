// script.js

(function () {
    const info = document.getElementById("info");
    let jump = confirm("Jump to Fragment?");

    if (jump) {
        location = location.href + "#frag";
    }

    info.innerHTML += "<hr>Href: " + location.href;
    info.innerHTML += "<br>Protocol: " + location.protocol;
    info.innerHTML += "<br>Host: " + location.host;
    info.innerHTML += "<br>Path: " + location.pathname;
    info.innerHTML += "<br>Hash: " + location.hash;
})();

