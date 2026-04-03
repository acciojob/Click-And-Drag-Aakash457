const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');

  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

// 👇 IMPORTANT: listen on document (not just slider)
document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  e.preventDefault();

  const walk = (e.pageX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});