// script.js

(function () {
    let result;
    let yes = true;
    let no = false;

    result = yes && yes;
    console.log("Are both true? " + result);

    result = yes && no;
    console.log("Are both still true? " + result);

    result = yes || no;
    console.log("Are either true? " + result);

    result = no || no;
    console.log("Are either still true? " + result);

    console.log("Original value: " + yes);
    yes = !yes;
    console.log("Toggled value: " + yes);
})();

