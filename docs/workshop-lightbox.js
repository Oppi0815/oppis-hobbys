(() => {
  const style = document.createElement('style');
  style.textContent = `.project-layout .year{font-size:clamp(3rem,5.4vw,5.6rem);line-height:1;transform:none}.workshop-update img{cursor:zoom-in}.workshop-lightbox{position:fixed;inset:0;z-index:30;display:grid;place-items:center;padding:30px;background:rgba(15,22,20,.94);cursor:zoom-out}.workshop-lightbox figure{margin:0;max-width:min(1100px,86vw);max-height:88vh}.workshop-lightbox figure img{display:block;max-width:100%;max-height:78vh;object-fit:contain}.workshop-lightbox figcaption{padding:13px 0 0;color:#f6eedc;font:700 .8rem Arial,sans-serif;letter-spacing:.04em}.workshop-lightbox button{position:absolute;top:18px;right:24px;border:0;background:transparent;color:#fff;cursor:pointer;font:3rem/1 Arial}@media(max-width:720px){.project-layout .year{font-size:clamp(2.8rem,14vw,4.4rem)}.workshop-lightbox{padding:20px}}`;
  document.head.append(style);
  const images = [...document.querySelectorAll('.workshop-update img')];
  if (!images.length) return;
  const close = () => { document.removeEventListener('keydown', onKey); document.querySelector('.workshop-lightbox')?.remove(); };
  const onKey = (event) => { if (event.key === 'Escape') close(); };
  const open = (image) => {
    const dialog = document.createElement('div');
    dialog.className = 'workshop-lightbox';
    dialog.innerHTML = `<button aria-label="Bild schließen">×</button><figure><img src="${image.currentSrc || image.src}" alt="${image.alt}"><figcaption>${image.alt}</figcaption></figure>`;
    dialog.addEventListener('click', close);
    dialog.querySelector('figure').addEventListener('click', (event) => event.stopPropagation());
    dialog.querySelector('button').addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    document.body.append(dialog);
  };
  images.forEach((image) => image.addEventListener('click', () => open(image)));
})();
