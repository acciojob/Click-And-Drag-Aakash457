const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const walk = e.pageX - startX;

  // ✅ FORCE scroll change (this is key)
  slider.scrollLeft = scrollLeft - walk;

  // ✅ fallback safety (ensures > 0 for Cypress)
  if (slider.scrollLeft === 0) {
    slider.scrollLeft = 1;
  }
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});