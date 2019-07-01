window.onload = function () {
  let btn = document.getElementById('counter');
  let index = btn.textContent.search(/\d{1}/);
  let clicksOfNumber = +btn.textContent.substring(index, index + 1);
  let contentFirstPosition = btn.textContent.substring(0, index);
  let contentLastPosition = btn.textContent.slice(index + 1, btn.textContent.length);

  const listener = (event) => {
    if (event.target.id === 'counter') {
      clicksOfNumber++;
      btn.innerHTML = [contentFirstPosition, clicksOfNumber, contentLastPosition].join('');
    }
    if (clicksOfNumber > 3 || clicksOfNumber < -1) {
      btn.textContent = [contentFirstPosition, 0, contentLastPosition].join('');;
      btn.removeEventListener('click', listener, false)
    }
  }

  btn.addEventListener('click', listener, false);
}

