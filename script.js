const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

let activeItem = null;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;

items.forEach(item => {
  // Make items positionable
  item.style.position = 'absolute';

  // Arrange them in grid initially
  const index = Array.from(items).indexOf(item);
  const cols = 5; // 5 items per row
  const gap = 20;
  const itemWidth = 200;
  const itemHeight = container.clientHeight - 40;

  const row = Math.floor(index / cols);
  const col = index % cols;

  item.style.left = `${col * (itemWidth + gap)}px`;
  item.style.top = `${row * (itemHeight / 4)}px`;

  item.addEventListener('mousedown', (e) => {
    activeItem = item;
    isDragging = true;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    item.style.cursor = 'grabbing';
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging || !activeItem) return;

  const containerRect = container.getBoundingClientRect();

  let newLeft = e.clientX - containerRect.left - offsetX;
  let newTop = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  const maxLeft = container.clientWidth - activeItem.offsetWidth;
  const maxTop = container.clientHeight - activeItem.offsetHeight;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  activeItem.style.left = `${newLeft}px`;
  activeItem.style.top = `${newTop}px`;
});

document.addEventListener('mouseup', () => {
  if (activeItem) {
    activeItem.style.cursor = 'grab';
  }
  isDragging = false;
  activeItem = null;
});