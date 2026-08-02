"use client";

import { useEffect, useState } from "react";
import "../projekte/cb250g/gallery.css";

const photos = [
  ["/images/makro/skorpionsfliege-maennchen.jpg", "Männchen einer Skorpionsfliege auf einem Grashalm", "Skorpionsfliege · Männchen", null],
  ["/images/makro/weissling.jpg", "Kohlweißling auf einer Blüte", "Kohlweißling (wahrscheinlich)", null],
  ["/images/makro/kleinlibelle-frisch-geschluepft.jpg", "Frisch geschlüpfte Kleinlibelle auf einem Grashalm", "Frisch geschlüpfte Kleinlibelle", "Diese Kleinlibelle (englisch: damselfly) ist gerade geschlüpft; die Art ist auf dem Foto nicht sicher bestimmbar. Ihre Larve hat zuvor im Wasser gelebt, bevor sie an einer Pflanze zur geflügelten Libelle wurde."],
  ["/images/makro/wasserlaeufer-paarung.jpg", "Wasserläufer bei der Paarung", "Wasserläufer bei der Paarung", "Wasserläufer nutzen die Oberflächenspannung des Wassers und bleiben deshalb trocken auf der Wasseroberfläche. Hier ist ein Paar bei der Fortpflanzung zu sehen."],
  ["/images/makro/kleinlibelle-weibchen.jpg", "Kleinlibelle auf einer Blüte", "Kleinlibelle", "Eine Kleinlibelle auf einer Blüte. Die genaue Art und das Geschlecht bleiben auf diesem Foto offen."],
  ["/images/makro/haarmuecke.jpg", "Schnepfenfliege auf einem Stück Holz", "Schnepfenfliege", "Eine Schnepfenfliege auf einem Stück Holz. Die großen Augen und die langen Beine sind für diese Fliegengruppe auffällig."],
] as const;

export function MacroGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const move = (offset: number) => setSelected(current => current === null ? null : (current + offset + photos.length) % photos.length);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [selected]);

  const image = ([src, alt, caption]: typeof photos[number], index: number) => <button key={src} className={`gallery-item ${index === 0 ? "gallery-feature" : ""}`} onClick={() => setSelected(index)} aria-label={`${caption} groß anzeigen`}><img src={src} alt={alt} /><span>{caption}</span></button>;

  return <>
    <div className="gallery macro-gallery macro-opening" aria-label="Makroaufnahme Skorpionsfliege">{image(photos[0], 0)}</div>
    <aside className="nature-note"><h3>Der „Stachel“ ist harmlos</h3><p>Der nach oben gebogene Hinterleib des Skorpionsfliegen-Männchens erinnert an einen Skorpion, ist aber kein Stachel: Er trägt die Geschlechtsorgane. Skorpionsfliegen fressen vor allem tote Insekten und andere kleine Wirbellose.</p></aside>
    <section className="macro-category"><h3>Insekten</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Insekten">{image(photos[1], 1)}{image(photos[3], 3)}{image(photos[5], 5)}</div></section>
    <section className="macro-category"><h3>Libellen</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Libellen">{image(photos[2], 2)}{image(photos[4], 4)}</div></section>
    <section className="macro-category macro-coming"><h3>Weitere Themen</h3><p>Spinnen · Reptilien &amp; Amphibien · Pflanzen &amp; Details · Andere Entdeckungen <span>Bilder folgen</span></p></section>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Großansicht der Galerie" onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Großansicht schließen">×</button><button className="lightbox-arrow left" onClick={event => { event.stopPropagation(); move(-1); }} aria-label="Vorheriges Bild">‹</button><figure onClick={event => event.stopPropagation()}><img src={photos[selected][0]} alt={photos[selected][1]} /><figcaption>{photos[selected][2]} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span>{photos[selected][3] && <p className="lightbox-description">{photos[selected][3]}</p>}</figcaption></figure><button className="lightbox-arrow right" onClick={event => { event.stopPropagation(); move(1); }} aria-label="Nächstes Bild">›</button></div>}
  </>;
}
