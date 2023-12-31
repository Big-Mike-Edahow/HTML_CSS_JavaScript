// script.js

(function () {
    let day = 0;

    try {
        if (day > 31) {
            throw new RangeError("Day Cannot Exceed 31");
        }
        if (day < 1) {
            throw "invalid";
        }
    } catch (err) {
        if (err === "invalid") {
            console.log("Variable has invalid value of " + day);
        } else {
            console.log(err.name + " Exception: " + err.message);
        }
    } finally {
        console.log("The script has ignored the error...");
    }
})();

