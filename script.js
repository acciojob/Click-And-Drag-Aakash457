const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  if (e.which !== 1) return; // only left click

  isDown = true;
  slider.classList.add('active');

  startX = e.clientX;   // ✅ use clientX
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const walk = e.clientX - startX; // ✅ use clientX
  slider.scrollLeft = scrollLeft - walk;
});