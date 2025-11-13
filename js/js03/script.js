'use strict';

const bmi = 20;  // 25以下
console.log(`あなたのBMIは${bmi}：`);

if (bmi > 25) {  // 条件が満たされない
  console.log('肥満です');  // この部分は実行されない
}else {
  console.log('肥満ではありません');  // 25以下のときに表示
}


const num1 = 5;
const num2 = 10;

if (num1 >= num2) {
  console.log('num1 は num2 以上の値です');
}

const msg = bmi > 25 ? '肥満です' : '肥満ではありません'; //「この条件は？ OK ならこっち ： NG ならこっち」
console.log(msg);

const bmi_level = window.prompt('BMIの値を入力してください');
const p_element = document.querySelector("p");
console.log(`あなたのレベルは${bmi_level}：`);

if (bmi_level > 25) {
  console.log('肥満です');  // 25より大きいときに表示
  p_element.textContent = "肥満です";
} else if (bmi_level < 18.5) {
  console.log('低体重です');  // 18.5より小さいときに表示
  p_element.textContent = "低体重です";
} else {
  console.log('適正体重です');  // 25以下のときに表示
  p_element.textContent = "適正体重です";
}

const first_element = document.getElementById("first");
const [a, b] = window.prompt('2つの数値をカンマ区切りで入力してください').split(',').map(Number);
if (a > b) {
  first_element.textContent = `大きい方の値は${a}です`;
} else if (a < b) {
  first_element.textContent = `大きい方の値は${b}です`;
} else {
  first_element.textContent = '2つの値は等しいです';
}

const second_element = document.getElementById("second");
const score = Number(window.prompt('点数を入力してください'));
let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}
second_element.textContent = `あなたの成績は${grade}です`;