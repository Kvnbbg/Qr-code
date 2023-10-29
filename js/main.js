const carousel = document.querySelector('.carousel');
const items = carousel.querySelectorAll('.carousel-item');
const itemCount = items.length;
let currentIndex = 0;
let interval = null;

function startInterval() {
  interval = setInterval(() => {
    const currentItem = items[currentIndex];
    const nextIndex = (currentIndex + 1) % itemCount;
    const nextItem = items[nextIndex];
    currentItem.classList.remove('active');
    nextItem.classList.add('active');
    currentIndex = nextIndex;
  }, 3000);
}

function stopInterval() {
  clearInterval(interval);
}

startInterval();
carousel.addEventListener('mouseenter', stopInterval);
carousel.addEventListener('mouseleave', startInterval);