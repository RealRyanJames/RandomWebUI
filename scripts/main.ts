function AddNun(num1: number, num2: number): number {
  return num1 + num2;
}

function SubNun(num1: number, num2: number): number {
  return num1 - num2;
}

function MulNun(num1: number, num2: number): number {
  return num1 * num2;
}

function DivNun(num1: number, num2: number): number {
  return num1 / num2;
}

function onClickFunc() {
  const num1 = Math.floor(Math.random() * 5);
  const num2 = Math.floor(Math.random() * 10);

  const numTag = document.getElementById("num1") as HTMLElement;
  const num2Tag = document.getElementById("num2") as HTMLElement;
  numTag.textContent = `${num1}`;
  num2Tag.textContent = `${num2}`;

  const answer = document.getElementById("answer") as HTMLElement;
  const addTextAnswer = `${num1} + ${num2} = ${AddNun(num1, num2)}`;
  answer.textContent = addTextAnswer;
}

const addButton = document.getElementById("buttonAdd") as HTMLButtonElement;

addButton.addEventListener("click", onClickFunc);

function onClickFuncSub() {
  const num1 = Math.floor(Math.random() * 5);
  const num2 = Math.floor(Math.random() * 10);

  const numTag = document.getElementById("num1") as HTMLElement;
  const num2Tag = document.getElementById("num2") as HTMLElement;
  numTag.textContent = `${num1}`;
  num2Tag.textContent = `${num2}`;

  const answer = document.getElementById("answer") as HTMLElement;
  const addTextAnswer = `${num1} - ${num2} = ${SubNun(num1, num2)}`;
  answer.textContent = addTextAnswer;
}

const subButton = document.getElementById("buttonSub") as HTMLButtonElement;

subButton.addEventListener("click", onClickFunc);

function onClickFuncMul() {
  const num1 = Math.floor(Math.random() * 5);
  const num2 = Math.floor(Math.random() * 10);

  const numTag = document.getElementById("num1") as HTMLElement;
  const num2Tag = document.getElementById("num2") as HTMLElement;
  numTag.textContent = `${num1}`;
  num2Tag.textContent = `${num2}`;

  const answer = document.getElementById("answer") as HTMLElement;
  const addTextAnswer = `${num1} * ${num2} = ${MulNun(num1, num2)}`;
  answer.textContent = addTextAnswer;
}

const mulButton = document.getElementById("buttonMul") as HTMLButtonElement;

mulButton.addEventListener("click", onClickFuncMul);

function onClickFuncDiv() {
  const num1 = Math.floor(Math.random() * 5);
  const num2 = Math.floor(Math.random() * 10);

  const numTag = document.getElementById("num1") as HTMLElement;
  const num2Tag = document.getElementById("num2") as HTMLElement;
  numTag.textContent = `${num1}`;
  num2Tag.textContent = `${num2}`;

  const answer = document.getElementById("answer") as HTMLElement;
  const addTextAnswer = `${num1} / ${num2} = ${DivNun(num1, num2)}`;
  answer.textContent = addTextAnswer;
}

const divButton = document.getElementById("buttonDiv") as HTMLButtonElement;

divButton.addEventListener("click", onClickFuncDiv);
