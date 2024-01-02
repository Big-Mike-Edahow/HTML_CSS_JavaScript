// script.js

(function () {
    let result;
    let boolArray = [];

    console.log("Fill Elements...");

    for (let i = 1; i < 11; i++) {
        boolArray[i] = i % 2 === 0 ? true : false;
        console.log("Element " + i + ": " + boolArray[i]);
    }

    console.log("Read Elements...");
    result = "";

    for (let i = 1; i < boolArray.length; i++) {
        if (boolArray[i]) {
            result += i + " | ";
        }
    }

    console.log("True in Elements: " + result);

    result = "";

    for (let i = 1; i < boolArray.length; i++) {
        if (!boolArray[i]) {
            result += i + " | ";
        }
    }

    console.log("False in Elements: " + result);
})();


