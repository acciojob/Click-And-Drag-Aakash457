const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;
let startScroll = 0;

slider.addEventListener('mousedown', function (e) {
  if (e.which !== 1) return;

  isDown = true;
  slider.classList.add('active');

  startX = e.pageX;
  startScroll = slider.scrollLeft;
});

slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  // Use pageX directly from event
  const diff = e.pageX - startX;

  slider.scrollLeft = startScroll - diff;
});

slider.addEventListener('mouseup', function () {
  isDown = false;
  slider.classList.remove('active');
});