// script.js

(function () {
    let bodyTemp = 98.6;

    console.log("Original number: " + bodyTemp);
    console.log("Ceiling: \t" + Math.ceil(bodyTemp));
    console.log("Floor: \t\t" + Math.floor(bodyTemp));
    console.log("Round: \t\t" + Math.round(bodyTemp));

    console.log("\nOriginal number: 81.66");
    console.log("Imprecision. 81.66 * 15: \t\t\t\t" + 81.66 * 15);
    console.log("Corrected. (81.66 * 100 * 15) / 100: \t" + (81.66 * 100 * 15) / 100);

    console.log("\nValue of PI:");
    console.log("Float: \t\t" + Math.PI);
    console.log("Commuted: \t" + Math.round(Math.PI * 100) / 100);
})();

