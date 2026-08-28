const range = document.getElementById('compareRange');
const before = document.querySelector('.compare-before');
const line = document.getElementById('compareLine');
const compare = document.getElementById('compare');
const beforeImage = document.querySelector('.compare-before img');

function setCompare(value) {
  before.style.width = `${value}%`;
  beforeImage.style.width = `${compare.clientWidth}px`;
  line.style.left = `${value}%`;
}

if (range && before && line && compare && beforeImage) {
  range.addEventListener('input', event => setCompare(event.target.value));
  setCompare(range.value);
}

window.addEventListener('resize', () => setCompare(range.value));
