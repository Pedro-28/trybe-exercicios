function userSettings() {
  const tagMain = document.querySelector('main').outerHTML;
  localStorage.setItem('user', JSON.stringify(tagMain));
}

function getUserSettings() {
  const tagMain = document.querySelector('main');
  if (localStorage.user) {
    tagMain.outerHTML = JSON.parse(localStorage.getItem('user'));
  }
}

window.onload = getUserSettings();

function changeBackgroundBlack() {
  const tagMain = document.querySelector('main');
  tagMain.style.backgroundColor = 'rgba(0, 0, 0, 0.87)';
  userSettings();
}

function btnBackBlack() {
  const btn = document.querySelector('#background-black');
  btn.addEventListener('click', changeBackgroundBlack);
}
btnBackBlack();

function changeBackgroundWhite() {
  const tagMain = document.querySelector('main');
  tagMain.style.backgroundColor = 'white';
  userSettings();
}

function btnBackWhite() {
  const btn = document.querySelector('#background-white');
  btn.addEventListener('click', changeBackgroundWhite);
}
btnBackWhite();

function changeBackgroundBlue() {
  const tagMain = document.querySelector('main');
  tagMain.style.backgroundColor = 'rgba(0, 43, 107, 0.918)';
  userSettings();
}

function btnBackBlue() {
  const btn = document.querySelector('#background-blue');
  btn.addEventListener('click', changeBackgroundBlue);
}
btnBackBlue();

function changeColorBlack() {
  const tagMain = document.querySelector('main');
  tagMain.style.color = 'black';
  userSettings();
}

function btnColorBlack() {
  const btn = document.querySelector('#color-black');
  btn.addEventListener('click', changeColorBlack);
}
btnColorBlack();

function changeColorWhite() {
  const tagMain = document.querySelector('main');
  tagMain.style.color = 'white';
  userSettings();
}

function btnColorWhite() {
  const btn = document.querySelector('#color-white');
  btn.addEventListener('click', changeColorWhite);
}
btnColorWhite();

function changeColorRed() {
  const tagMain = document.querySelector('main');
  tagMain.style.color = 'red';
  userSettings();
}

function btnColorRed() {
  const btn = document.querySelector('#color-red');
  btn.addEventListener('click', changeColorRed);
}
btnColorRed();

function changeSize16() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontSize = '16px';
  userSettings();
}

function btnSize16() {
  const btn = document.querySelector('#size16');
  btn.addEventListener('click', changeSize16);
}
btnSize16();

function changeSize20() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontSize = '20px';
  userSettings();
}

function btnSize20() {
  const btn = document.querySelector('#size20');
  btn.addEventListener('click', changeSize20);
}
btnSize20();

function changeSize24() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontSize = '24px';
  userSettings();
}

function btnSize24() {
  const btn = document.querySelector('#size24');
  btn.addEventListener('click', changeSize24);
}
btnSize24();

function changeHeight1() {
  const tagMain = document.querySelector('main');
  tagMain.style.lineHeight = '1';
  userSettings();
}

function btnHeight1() {
  const btn = document.querySelector('#height1');
  btn.addEventListener('click', changeHeight1);
}
btnHeight1();

function changeHeight15() {
  const tagMain = document.querySelector('main');
  tagMain.style.lineHeight = '1.5';
  userSettings();
}

function btnHeight15() {
  const btn = document.querySelector('#height15');
  btn.addEventListener('click', changeHeight15);
}
btnHeight15();

function changeHeight2() {
  const tagMain = document.querySelector('main');
  tagMain.style.lineHeight = '2';
  userSettings();
}

function btnHeight2() {
  const btn = document.querySelector('#height2');
  btn.addEventListener('click', changeHeight2);
}
btnHeight2();

function changeFontArial() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontFamily = 'Arial';
  userSettings();
}

function btnFontArial() {
  const btn = document.querySelector('#fontArial');
  btn.addEventListener('click', changeFontArial);
}
btnFontArial();

function changeFontBaloo() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontFamily = "'Baloo 2'";
  userSettings();
}

function btnFontBaloo() {
  const btn = document.querySelector('#fontBaloo');
  btn.addEventListener('click', changeFontBaloo);
}
btnFontBaloo();

function changeFontYellow() {
  const tagMain = document.querySelector('main');
  tagMain.style.fontFamily = "'Yellowtail'";
  userSettings();
}

function btnFontYellow() {
  const btn = document.querySelector('#fontYellow');
  btn.addEventListener('click', changeFontYellow);
}
btnFontYellow();