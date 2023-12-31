// script.js

(function () {
    for (let i = 1; i < 3; i++) {
        console.log("Outer Loop: " + i);

        for (let j = 1; j < 4; j++) {
            if (i === 1 && j === 2) {
                console.log("\tSkipped: " + j);
                continue;
            }

            if (i === 2 && j === 2) {
                console.log("\tBroken: " + j);
                break;
            }

            console.log("\tInner Loop: " + j);
        }
    }
})();

