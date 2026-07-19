"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AddNun(num1, num2) {
    return num1 + num2;
}
function SubNun(num1, num2) {
    return num1 - num2;
}
function MulNun(num1, num2) {
    return num1 * num2;
}
function DivNun(num1, num2) {
    return num1 / num2;
}
function onClickFunc() {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 10);
    const numTag = document.getElementById("num1");
    const num2Tag = document.getElementById("num2");
    numTag.textContent = `${num1}`;
    num2Tag.textContent = `${num2}`;
    const answer = document.getElementById("answer");
    const addTextAnswer = `${num1} + ${num2} = ${AddNun(num1, num2)}`;
    answer.textContent = addTextAnswer;
}
const addButton = document.getElementById("buttonAdd");
addButton.addEventListener("click", onClickFunc);
function onClickFuncSub() {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 10);
    const numTag = document.getElementById("num1");
    const num2Tag = document.getElementById("num2");
    numTag.textContent = `${num1}`;
    num2Tag.textContent = `${num2}`;
    const answer = document.getElementById("answer");
    const addTextAnswer = `${num1} - ${num2} = ${SubNun(num1, num2)}`;
    answer.textContent = addTextAnswer;
}
const subButton = document.getElementById("buttonSub");
subButton.addEventListener("click", onClickFunc);
function onClickFuncMul() {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 10);
    const numTag = document.getElementById("num1");
    const num2Tag = document.getElementById("num2");
    numTag.textContent = `${num1}`;
    num2Tag.textContent = `${num2}`;
    const answer = document.getElementById("answer");
    const addTextAnswer = `${num1} * ${num2} = ${MulNun(num1, num2)}`;
    answer.textContent = addTextAnswer;
}
const mulButton = document.getElementById("buttonMul");
mulButton.addEventListener("click", onClickFuncMul);
function onClickFuncDiv() {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 10);
    const numTag = document.getElementById("num1");
    const num2Tag = document.getElementById("num2");
    numTag.textContent = `${num1}`;
    num2Tag.textContent = `${num2}`;
    const answer = document.getElementById("answer");
    const addTextAnswer = `${num1} / ${num2} = ${DivNun(num1, num2)}`;
    answer.textContent = addTextAnswer;
}
const divButton = document.getElementById("buttonDiv");
divButton.addEventListener("click", onClickFuncDiv);
//# sourceMappingURL=main.js.map