(function() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (links) {
    links.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.closest('a') && links.classList.contains('open')) {
        links.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Hero slides
  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const slides = Array.from(hero.querySelectorAll('[data-hero-slide]'));
    if (slides.length > 1) {
      let hIndex = 0;
      const showHero = (i) => {
        slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
      };
      showHero(hIndex);
      setInterval(() => {
        hIndex = (hIndex + 1) % slides.length;
        showHero(hIndex);
      }, 7000);
    }
  }

  // Quotes carousel
  const quotesRoot = document.querySelector('[data-quotes]');
  if (quotesRoot) {
    const items = Array.from(quotesRoot.querySelectorAll('[data-quote]'));
    if (items.length > 0) {
      let index = 0;
      const show = (i) => {
        items.forEach((el, idx) => el.classList.toggle('active', idx === i));
      };
      show(index);
      setInterval(() => {
        index = (index + 1) % items.length;
        show(index);
      }, 6000);
    }
  }

  // Cycling gallery
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const imgs = Array.from(gallery.querySelectorAll('[data-gallery-item]'));
    const prevBtn = gallery.querySelector('[data-gallery-prev]');
    const nextBtn = gallery.querySelector('[data-gallery-next]');
    let gIndex = 0;
    let timerId = null;

    const gShow = (i) => {
      imgs.forEach((img, idx) => img.classList.toggle('active', idx === i));
    };

    const startAuto = () => {
      stopAuto();
      timerId = setInterval(() => {
        gIndex = (gIndex + 1) % imgs.length;
        gShow(gIndex);
      }, 5000);
    };

    const stopAuto = () => {
      if (timerId) clearInterval(timerId);
      timerId = null;
    };

    const goPrev = () => { gIndex = (gIndex - 1 + imgs.length) % imgs.length; gShow(gIndex); };
    const goNext = () => { gIndex = (gIndex + 1) % imgs.length; gShow(gIndex); };

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goPrev(); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goNext(); startAuto(); });

    gallery.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { stopAuto(); goPrev(); startAuto(); }
      if (e.key === 'ArrowRight') { stopAuto(); goNext(); startAuto(); }
    });

    gShow(gIndex);
    startAuto();
  }

  // Lightbox
  const group = document.querySelector('[data-lightbox-group]');
  const lightbox = document.querySelector('[data-lightbox]');
  if (group && lightbox) {
    const imgs = Array.from(group.querySelectorAll('[data-lightbox-item]'));
    const imgEl = lightbox.querySelector('[data-lightbox-image]');
    const captionEl = lightbox.querySelector('[data-lightbox-caption]');
    const closeBtn = lightbox.querySelector('[data-lightbox-close]');
    const prevBtn = lightbox.querySelector('[data-lightbox-prev]');
    const nextBtn = lightbox.querySelector('[data-lightbox-next]');
    let index = 0;

    const open = (i) => {
      index = i;
      const src = imgs[index].getAttribute('src');
      const alt = imgs[index].getAttribute('alt') || '';
      imgEl.src = src;
      imgEl.alt = alt;
      captionEl.textContent = alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const showPrev = () => { index = (index - 1 + imgs.length) % imgs.length; open(index); };
    const showNext = () => { index = (index + 1) % imgs.length; open(index); };

    imgs.forEach((el, i) => {
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => open(i));
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(i); });
      el.setAttribute('tabindex', '0');
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
  }
})();
