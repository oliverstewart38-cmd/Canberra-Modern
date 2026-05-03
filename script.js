// Back to top
document.querySelector('.back-to-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = this.querySelector('.newsletter-input');
  if (input.value.trim()) {
    alert('Thanks for signing up!');
    input.value = '';
  }
});

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose = document.getElementById('mobileNavClose');

hamburgerBtn.addEventListener('click', () => {
  mobileNavOverlay.classList.add('open');
});

mobileNavClose.addEventListener('click', () => {
  mobileNavOverlay.classList.remove('open');
});

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('open');
  });
});

// Carousel: see-more arrow scrolls to next card on mobile
document.querySelectorAll('.see-more-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const grid = this.previousElementSibling;
      if (grid && grid.classList.contains('cards-grid')) {
        const firstCard = grid.firstElementChild;
        const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 272;
        const atEnd = grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - 10;
        grid.scrollBy({ left: atEnd ? -grid.scrollWidth : cardWidth, behavior: 'smooth' });
      }
    }
  });
});
