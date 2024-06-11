'use strict';
// please do not delete the 'use strict' line above

// 6.クリックしたらページの色が変わるボタンを作りましょう。色はボタンをクリックするたびにランダムで決まります。
// これが完成イメージです。

document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  const color = ["red","green","blue","yellow"];
  const randomIndex = Math.floor( Math.random() * color.length);
  document.body.style.backgroundColor=color[randomIndex];
  document.getElementById("color-button").innerText = `[${color[randomIndex]}] more click!!`;
  document.getElementById("color-button").style.fontSize = "20px";
  document.getElementById("color-button").style.color = color[randomIndex];
  document.getElementById("color-button").style.backgroundColor = "black";
}