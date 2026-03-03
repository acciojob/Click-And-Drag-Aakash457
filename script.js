const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// Convert items to absolute positioning while keeping layout
function initializePositions() {
  const containerRect = container.getBoundingClientRect();

  items.forEach(item => {
    const rect = item.getBoundingClientRect();

    item.style.position = 'absolute';
    item.style.left = rect.left - containerRect.left + 'px';
    item.style.top = rect.top - containerRect.top + 'px';
  });
}

initializePositions();

items.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    activeItem = item;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    container.classList.add('active');
  });
});

document.addEventListener('mousemove', (e) => {
  if (!activeItem) return;

  const containerRect = container.getBoundingClientRect();

  let newX = e.clientX - containerRect.left - offsetX;
  let newY = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  const maxX = container.clientWidth - activeItem.offsetWidth;
  const maxY = container.clientHeight - activeItem.offsetHeight;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  activeItem.style.left = newX + 'px';
  activeItem.style.top = newY + 'px';
});

document.addEventListener('mouseup', () => {
  activeItem = null;
  container.classList.remove('active');
});