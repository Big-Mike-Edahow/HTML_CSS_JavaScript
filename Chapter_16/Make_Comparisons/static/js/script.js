/* script.js */

(function () {
    let comparison;
    let sum = 8;
    let str = "JavaScript";

    console.log("String: " + str);
    console.log("Number: " + sum);

    comparison = str === "JAVASCRIPT";
    console.log("\nIs " + str + " equal to JAVASCRIPT?");
    console.log("String Equality? " + comparison);

    comparison = str === "JavaScript";
    console.log("\nIs " + str + " equal to JavaScript?");
    console.log("String Equality? " + comparison);

    comparison = sum === 8;
    console.log("\nIs " + sum + " equal to 8?");
    console.log("Number Equality? " + comparison);

    comparison = sum > 5;
    console.log("\nIs " + sum + " greater than 5?");
    console.log("Greater Than? " + comparison);

    comparison = sum < 5;
    console.log("\nIs " + sum + " less than 5?");
    console.log("Less Than? " + comparison);

    comparison = sum <= 8;
    console.log("\nIs " + sum + " less than or equal to 8?");
    console.log("Less Than or Equal To? " + comparison);
})();

