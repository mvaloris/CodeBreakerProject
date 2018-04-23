let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer === '' || attempt === '') {
        setHiddenFields();
    }
}

//implement new functions here

function setHiddenFields() {
    attempt = 0;
    answer.value = Math.floor(Math.random()* 9999).toString();
    while (answer.length < 4) {
        answer = '0' + answer;
    }
}

function setMessage (parameter) {

}

setHiddenFields();
console.log(answer);