document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`you clicked ${gametype}`);
            }
        });
    }
});


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnwer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}