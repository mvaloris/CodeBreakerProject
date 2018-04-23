let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer === '' || attempt === '') {
        setHiddenFields();
    }
    if (validateInput(input.value) === false) {
        return false;
    } else {
        attempt += 1;
    }
}

//implement new functions here

function setHiddenFields() {
    attempt = 0;
    answer.value = Math.floor(Math.random()* 10000).toString();
    while (answer.length < 4) {
        answer = '0' + answer;
    }
}

function setMessage (parameter) {
    message.innerHTML = parameter;
}

function validateInput (parameter) {
    if (parameter.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}