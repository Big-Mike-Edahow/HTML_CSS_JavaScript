// script.js

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = prompt("Please enter your name:", "");
    if (user !== "") {
        setCookie("username", user, 30);
        document.getElementById("person").innerHTML = "Hello " + user + "!";
    }
    
    let age = prompt("Please enter your age:", "");
    if (age !== "") {
        setCookie("age", age, 30);
        document.getElementById("age").innerHTML = "You are " + age + " years old!";
    }
}

