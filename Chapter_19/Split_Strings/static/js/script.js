// script.js

(function () {
    let definition =
        "JavaScript is the original dialect of the ECMAScript standard language.";

    let str = definition.slice(0, 27);
    str += definition.slice(62, 71);
    console.log(str);

    console.log(str.split(" ", 4));

    str = definition.substring(42, 52);
    str += definition.substring(10, 17);
    str += definition.substring(52, 70);

    console.log(str);
})();

