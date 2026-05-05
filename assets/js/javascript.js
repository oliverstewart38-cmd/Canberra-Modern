
// Back to top
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('.newsletter-input');
    if (input && input.value.trim()) {
      alert('Thanks for signing up!');
      input.value = '';
    }
  });
}

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose = document.getElementById('mobileNavClose');

if (hamburgerBtn && mobileNavOverlay) {
  hamburgerBtn.addEventListener('click', () => {
    mobileNavOverlay.classList.add('open');
  });
}

if (mobileNavClose && mobileNavOverlay) {
  mobileNavClose.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('open');
  });
}

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('open');
  });
});

// Building showcase — scroll dots, drag to scroll, wheel to scroll
const buildingScroll = document.getElementById('buildingScroll');
const scrollDotsContainer = document.getElementById('scrollDots');

if (buildingScroll) {
  buildingScroll.addEventListener('wheel', function (e) {
    const delta = e.deltaY + e.deltaX;
    const atEnd = this.scrollLeft + this.offsetWidth >= this.scrollWidth - 2;
    const atStart = this.scrollLeft <= 0;
    if ((delta > 0 && atEnd) || (delta < 0 && atStart)) return;
    e.preventDefault();
    this.scrollLeft += delta;
  }, { passive: false });
}

if (buildingScroll && scrollDotsContainer) {
  const cards = buildingScroll.querySelectorAll('.building-card');

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('scroll-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      buildingScroll.scrollTo({ left: cards[i].offsetLeft - 28, behavior: 'smooth' });
    });
    scrollDotsContainer.appendChild(dot);
  });

  // Update active dot on scroll
  buildingScroll.addEventListener('scroll', () => {
    const dots = scrollDotsContainer.querySelectorAll('.scroll-dot');
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - buildingScroll.scrollLeft - 28);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === closest));
  });

  // Drag to scroll
  let isDown = false, startX, scrollStart;
  buildingScroll.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - buildingScroll.offsetLeft;
    scrollStart = buildingScroll.scrollLeft;
  });
  buildingScroll.addEventListener('mouseleave', () => isDown = false);
  buildingScroll.addEventListener('mouseup', () => isDown = false);
  buildingScroll.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    buildingScroll.scrollLeft = scrollStart - (e.pageX - buildingScroll.offsetLeft - startX);
  });
}

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
