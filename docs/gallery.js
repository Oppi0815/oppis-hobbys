(() => {
  const figures = [...document.querySelectorAll('.gallery figure')];
  let current = 0;
  const open = (index) => {
    current = index;
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `<button class="close" aria-label="Schließen">×</button><button class="left" aria-label="Vorheriges Bild">‹</button><figure><img><figcaption></figcaption></figure><button class="right" aria-label="Nächstes Bild">›</button>`;
    const show = () => { const image = figures[current].querySelector('img'); modal.querySelector('img').src = image.src; modal.querySelector('img').alt = image.alt; modal.querySelector('figcaption').innerHTML = `${figures[current].querySelector('figcaption').textContent} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span>`; };
    const close = () => { document.removeEventListener('keydown', keys); modal.remove(); };
    const move = (amount) => { current = (current + amount + figures.length) % figures.length; show(); };
    const keys = (event) => { if (event.key === 'Escape') close(); if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); };
    modal.addEventListener('click', close); modal.querySelector('figure').addEventListener('click', event => event.stopPropagation()); modal.querySelector('.close').addEventListener('click', close); modal.querySelector('.left').addEventListener('click', event => { event.stopPropagation(); move(-1); }); modal.querySelector('.right').addEventListener('click', event => { event.stopPropagation(); move(1); }); document.addEventListener('keydown', keys); document.body.append(modal); show();
  };
  figures.forEach((figure, index) => figure.addEventListener('click', () => open(index)));
})();
