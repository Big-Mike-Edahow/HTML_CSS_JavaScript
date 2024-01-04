// script.js

(function () {
    const list = document.getElementById("list");

    list.innerHTML = "<li>Browser: " + navigator.appName + "</li><br>";
    list.innerHTML += "<li>Code Name: " + navigator.appCodeName + "</li><br>";

    list.innerHTML += "<li>Version: " + navigator.appVersion + "</li><br>";
    list.innerHTML += "<li>Platform: " + navigator.platform + "</li><br>";

    if (window.addEventListener) {
        list.innerHTML += "<li>This is a modern DOM browser</li>";
    }
})();

