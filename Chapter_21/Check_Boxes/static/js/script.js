// script.js

function reactTo(form, event) {
    let ok;
    let summary = "";

    for (let i = 0; i < form.Topping.length; i++) {
        if (form.Topping[i].checked) {
            summary += form.Topping[i].value + " ";
        }
    }

    ok = confirm("Submit These Choices?\n" + summary);
    if (!ok) {
        event.preventDefault();
    }
}

const form = document.getElementById("pizza");
form.addEventListener("submit", function (event) {
    reactTo(form, event);
});
form.Topping[0].checked = true;

