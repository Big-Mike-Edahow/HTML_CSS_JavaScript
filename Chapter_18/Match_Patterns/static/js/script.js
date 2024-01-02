// script.js

(function () {
    const system = "Windows";
    const suite = "Office";
    const pattern = /ice/i;

    console.log("In " + system + "? " + pattern.test(system));
    console.log("In " + suite + "? " + pattern.test(suite));

    let result = pattern.exec(suite);
    if (result) {
        console.log("Found: " + result + " at " + result.index);
    } else {
        console.log("No Match Found");
    }

    let email = "mike@example";
    const format = /.+\@.+\..+/;
    console.log(email + " Valid? " + format.test(email));

    email += ".com";
    console.log(email + " Valid? " + format.test(email));
})();

