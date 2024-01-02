// script.js

(function () {
    let hues = ["Red", "RED", "red", "Green", "Blue"];
    let nums = [1, 20, 3, 17, 14, 0.5];

    console.log("Colors: " + hues);
    console.log("Dictionary Sort: " + hues.sort());
    console.log("\nNumbers: " + nums);
    console.log("Dictionary Sort: " + nums.sort());

    console.log("Numerical Sort: " + nums.sort(sortNums));

    console.log("Reversed Sort: " + nums.reverse());
})();

function sortNums(numOne, numTwo) {
    return numOne - numTwo;
}

