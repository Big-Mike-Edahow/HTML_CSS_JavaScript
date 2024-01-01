// script.js

(function () {
    let jsString = "Text";
    let jsNumber = 125000;
    let jsBoolean = true;

    let jsObject = { firstName: "Mike", lastName: "Jackson" };
    let jsDate = new Date();
    let jsArray = [1, 2, 3];
    let jsRegExp = /ineasysteps/i;
    let jsMath = Math;
    let jsError = new Error("Error!");

    console.log("Date Object: " + jsDate);
    console.log("Locale Date String: " + jsDate.toLocaleString());

    console.log("\nFirst name: " + jsObject.firstName);
    console.log("Last name: " + jsObject.lastName);

    console.log("\nPrimitive Number: " + jsNumber);
    console.log("Locale Number String: " + jsNumber.toLocaleString());
})();

