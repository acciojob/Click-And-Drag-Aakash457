const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  // 👇 SIMPLE + RELIABLE
  const walk = startX - e.pageX;

  // 👇 ALWAYS updates scroll
  slider.scrollLeft += walk;

  // reset start point so movement continues smoothly
  startX = e.pageX;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});