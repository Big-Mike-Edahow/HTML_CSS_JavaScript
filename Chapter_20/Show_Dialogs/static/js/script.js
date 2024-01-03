// script.js

(function () {
    const info = document.getElementById("response");

    window.alert("Hello from JavaScript");

    info.innerHTML = "Confirm: " + window.confirm("Stop or Go?");

    info.innerHTML += "<br>Prompt: " + window.prompt("Yes or No?", "I love Purple People Eaters.");
})();

