(() => {
  const isEnglish = document.documentElement.lang === 'en';
  const spiderHeading = [...document.querySelectorAll('.macro-category > h3')].find((heading) => heading.textContent.trim() === (isEnglish ? 'Spiders' : 'Spinnen'));
  if (spiderHeading) {
    const gallery = spiderHeading.parentElement.querySelector('.gallery');
    const figure = document.createElement('figure');
    const imagePath = isEnglish ? '../../images/makro/langspinnen-baumspinne-suedafrika.jpg' : '../images/makro/langspinnen-baumspinne-suedafrika.jpg';
    figure.dataset.description = isEnglish
      ? 'Almost impossible to spot: this tree spider presses itself flat against the bark. Its two remarkably long spinnerets are typical of the genus Hersilia. The pale, flat patch beside it is probably a bark-camouflaged egg sac guarded by the female. The exact species cannot be identified reliably from the photograph alone.'
      : 'Fast nicht zu entdecken: Diese Baumspinne drückt sich flach an die Rinde. Ihre zwei auffallend langen Spinnwarzen sind typisch für die Gattung Hersilia. Rechts neben ihr liegt vermutlich der flache, mit Rindenstückchen getarnte Eikokon, den das Weibchen bewacht. Die genaue Art lässt sich allein anhand des Fotos nicht sicher bestimmen.';
    figure.innerHTML = `<img src="${imagePath}" alt="${isEnglish ? 'Long-spinneret tree spider camouflaged on bark in South Africa' : 'Langspinnen-Baumspinne getarnt auf Rinde in Südafrika'}"><figcaption>${isEnglish ? 'Long-spinneret tree spider · South Africa' : 'Langspinnen-Baumspinne · Südafrika'}</figcaption>`;
    gallery.append(figure);
  }

  const figures = [...document.querySelectorAll('.gallery figure')];
  let current = 0;
  const open = (index) => {
    current = index;
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `<button class="close" aria-label="Schließen">×</button><button class="left" aria-label="Vorheriges Bild">‹</button><figure><img><figcaption></figcaption></figure><button class="right" aria-label="Nächstes Bild">›</button>`;
    const show = () => { const image = figures[current].querySelector('img'); const description = figures[current].dataset.description; modal.querySelector('img').src = image.src; modal.querySelector('img').alt = image.alt; modal.querySelector('figcaption').innerHTML = `${figures[current].querySelector('figcaption').textContent} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span>${description ? `<p class="lightbox-description">${description}</p>` : ''}`; };
    const close = () => { document.removeEventListener('keydown', keys); modal.remove(); };
    const move = (amount) => { current = (current + amount + figures.length) % figures.length; show(); };
    const keys = (event) => { if (event.key === 'Escape') close(); if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); };
    modal.addEventListener('click', close); modal.querySelector('figure').addEventListener('click', event => event.stopPropagation()); modal.querySelector('.close').addEventListener('click', close); modal.querySelector('.left').addEventListener('click', event => { event.stopPropagation(); move(-1); }); modal.querySelector('.right').addEventListener('click', event => { event.stopPropagation(); move(1); }); document.addEventListener('keydown', keys); document.body.append(modal); show();
  };
  figures.forEach((figure, index) => figure.addEventListener('click', () => open(index)));
})();
