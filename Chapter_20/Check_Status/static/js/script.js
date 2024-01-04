// script.js

(function () {
    const info = document.getElementById("info");
    let status = "";

    status = navigator.javaEnabled() ? "Enabled" : "Disabled";
    info.innerHTML += "Java Support is " + status + "<hr>";

    status = navigator.cookieEnabled ? "Enabled" : "Disabled";
    info.innerHTML += "Cookie Support is " + status + "<hr>";

    if (navigator.plugins.length !== 0) {
        info.innerHTML += "No. of Plugins: " + navigator.plugins.length;
        info.innerHTML += "<br>Example: " + navigator.plugins[0].name;
        info.innerHTML +=
            "<br>For: " + navigator.plugins[0].description + "<hr>";
    }

    if (navigator.mimeTypes.length !== 0) {
        info.innerHTML += "No. of MIME Types: " + navigator.mimeTypes.length;
        info.innerHTML += "<br>Example: " + navigator.mimeTypes[1].type;
        info.innerHTML += "<br>For: " + navigator.mimeTypes[1].description;
    }
})();
