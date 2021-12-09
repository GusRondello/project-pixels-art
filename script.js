window.onload = function () {
  const collorPalette = document.getElementById('color-palette');

  function classSelected(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList += ' selected';
  }

  collorPalette.addEventListener('click', classSelected);
};
