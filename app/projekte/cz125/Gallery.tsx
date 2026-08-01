"use client";

import { useEffect, useState } from "react";
import "../cb250g/gallery.css";

const photos = [
  ["/images/cz125/fertig-restauriert.jpg", "Fertig restaurierte CZ 125 453 von 1963", "Fertig restauriert"],
  ["/images/cz125/ausgangszustand.jpg", "CZ 125 453 vor der Restaurierung", "Ausgangszustand"],
  ["/images/cz125/werkstatt.jpg", "CZ 125 453 in der Werkstatt", "Arbeiten in der Werkstatt"],
  ["/images/cz125/lenkkopf.jpg", "Lenkkopf der CZ während der Aufarbeitung", "Lenkkopf überarbeitet"],
  ["/images/cz125/halterung.jpg", "Aufgearbeitete Halterung der CZ", "Ein Detail gerettet"],
  ["/images/cz125/detail.jpg", "Detail der restaurierten CZ 125 453", "Sorgfalt bis ins Detail"],
] as const;

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const move = (offset: number) => setSelected((current) => current === null ? null : (current + offset + photos.length) % photos.length);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (selected === null) return; if (event.key === "Escape") setSelected(null); if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [selected]);
  return <><div className="gallery" aria-label="Bilder der CZ-125-453-Restaurierung">{photos.map(([src, alt, caption], index) => <button key={src} className={`gallery-item ${index === 0 ? "gallery-feature" : ""}`} onClick={() => setSelected(index)} aria-label={`${caption} groß anzeigen`}><img src={src} alt={alt} /><span>{caption}</span></button>)}</div>{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Großansicht der Galerie" onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Großansicht schließen">×</button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); move(-1); }} aria-label="Vorheriges Bild">‹</button><figure onClick={(event) => event.stopPropagation()}><img src={photos[selected][0]} alt={photos[selected][1]} /><figcaption>{photos[selected][2]} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span></figcaption></figure><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); move(1); }} aria-label="Nächstes Bild">›</button></div>}</>;
}
