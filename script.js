/*                       Referencias: 
https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute
https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute
*/

window.onload = function () {
  const collorPalette = document.getElementById('color-palette');
  const pixel = document.getElementById('pixel-board');
  const button = document.getElementById('clear-board');

  function classSelected(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList += ' selected';
  }

  function printColor(event) {
    const selected = document.querySelector('.selected');
    const colorSelected = selected.getAttribute('id');
    //   let pixelBlock = document.querySelectorAll('.pixel');
    //   pixelBlock.setAttribute("id", colorSelected)
    event.target.setAttribute('id', colorSelected);
  }

  function clearBoard() {
    const pixelArray = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelArray.length; i += 1) {
      const pixelBoard = pixelArray[i];
      pixelBoard.removeAttribute('id');
    }
  }

  collorPalette.addEventListener('click', classSelected);
  pixel.addEventListener('click', printColor);
  button.addEventListener('click', clearBoard);
  /*   let pixelArray = document.getElementsByClassName('pixel');
  let pixelBoard = pixelArray[10];
  console.log(pixelBoard); */
};
