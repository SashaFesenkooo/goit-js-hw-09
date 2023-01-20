const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]')
}

let colorId 
refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', startBtnClick);
refs.btnStop.addEventListener('click', stopBtnClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startBtnClick() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  colorId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  console.log(colorId);
};

function stopBtnClick() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;

  clearInterval(colorId)
}