const slider = document.querySelector('.items');

let isDown = false;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  // 👇 FORCE SCROLL CHANGE DIRECTLY
  slider.scrollLeft += Math.abs(e.movementX || (e.pageX * -1)) || 50;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});