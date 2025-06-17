const images = [
  './4x/a.png',
  './4x/b.png',
  './4x/c.png',
  './4x/d.png'
];
let current = 0;
let isFading = false;

function updateArrows() {
  const left = document.getElementById('leftArrow');
  const right = document.getElementById('rightArrow');
  if (current === 0) {
    left.classList.add('disabled');
  } else {
    left.classList.remove('disabled');
  }
  if (current === images.length - 1) {
    right.classList.add('disabled');
  } else {
    right.classList.remove('disabled');
  }
}

function showSlide(idx) {
  const img = document.getElementById('carouselImage');
  if (!img) return;
  isFading = true;
  img.style.transition = 'opacity 0.4s';
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[idx];
    img.style.opacity = 1;
    setTimeout(() => {
      isFading = false;
    }, 400);
  }, 400);
  current = idx;
  updateArrows();
}
function prevSlide() {
  if (isFading || current === 0) return;
  const prev = current - 1;
  showSlide(prev);
}
function nextSlide() {
  if (isFading || current === images.length - 1) return;
  const next = current + 1;
  showSlide(next);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(current);

  // 이미지 중앙 hover 시 overlay-active 토글
  const img = document.getElementById('carouselImage');
  const overlay = document.getElementById('carouselOverlay');
  if (img && overlay) {
    overlay.addEventListener('mouseenter', () => {
      img.classList.add('overlay-active');
    });
    overlay.addEventListener('mouseleave', () => {
      img.classList.remove('overlay-active');
    });
  }
}); 