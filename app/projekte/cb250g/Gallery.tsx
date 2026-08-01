"use client";

import { useEffect, useState } from "react";
import "./gallery.css";

const photos = [
  ["/images/cb250g/zielbild-hawaiian-blue-metallic.jpg", "Fertig restaurierte Honda CB250G in blau als Farb- und Stilvorbild", "Zielbild: Hawaiian Blue Metallic"],
  ["/images/cb250g/neuaufbau-begonnen.png", "Rahmen und Motor der Honda CB250G beim Neuaufbau", "Neuaufbau begonnen"],
  ["/images/cb250g/teile-uebersicht.jpeg", "Übersicht der zerlegten Teile der Honda CB250G", "Teileübersicht"],
  ["/images/cb250g/rahmen-und-anbauteile.jpeg", "Rahmen und Anbauteile der Honda CB250G", "Rahmen & Anbauteile"],
  ["/images/cb250g/seitenteile.jpeg", "Lackierte Seitenteile und Bauteile der Honda CB250G", "Seitenteile"],
  ["/images/cb250g/motor.jpeg", "Motor der Honda CB250G vor der Restaurierung", "Motor"],
  ["/images/cb250g/raeder-und-teile.jpeg", "Räder und weitere Teile der Honda CB250G", "Räder & weitere Teile"],
  ["/images/cb250g/tank.jpeg", "Originaltank der Honda CB250G vor der Lackierung", "Originaltank"],
] as const;

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const close = () => setSelected(null);
  const move = (offset: number) => setSelected((current) => current === null ? null : (current + offset + photos.length) % photos.length);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return <>
    <div className="gallery" aria-label="Bilder der Honda-CB250G-Restaurierung">
      {photos.map(([src, alt, caption], index) => <button key={src} className={`gallery-item ${index === 0 ? "gallery-feature" : ""}`} onClick={() => setSelected(index)} aria-label={`${caption} groß anzeigen`}><img src={src} alt={alt} /><span>{caption}</span></button>)}
    </div>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Großansicht der Galerie" onClick={close}>
      <button className="lightbox-close" onClick={close} aria-label="Großansicht schließen">×</button>
      <button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Vorheriges Bild">‹</button>
      <figure onClick={(event) => event.stopPropagation()}><img src={photos[selected][0]} alt={photos[selected][1]} /><figcaption>{photos[selected][2]} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span></figcaption></figure>
      <button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Nächstes Bild">›</button>
    </div>}
  </>;
}
