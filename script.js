const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  const rect = slider.getBoundingClientRect();

  startX = e.clientX - rect.left;   // ✅ FIX
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const rect = slider.getBoundingClientRect();

  const x = e.clientX - rect.left;  // ✅ FIX
  const walk = (x - startX) * 2;

  slider.scrollLeft = scrollLeft - walk;
});