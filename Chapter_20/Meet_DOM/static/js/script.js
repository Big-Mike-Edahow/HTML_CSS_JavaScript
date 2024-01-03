// script.js

(function () {
    const list = document.getElementById("props");
    let property = null;

    for (property in window) {
        if (property) {
            list.innerHTML += "<li>" + property + "</li>";
        }
    }
})();

