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
  ["/images/makro/toepferwespe-nest-ei.jpg", "Papierwespe in Warnhaltung an einer Brutzelle mit Ei", "Warnhaltung am Nest", "Papierwespe aus der Familie Vespidae, Gattung Ropalidia; nach der Bestimmung im Buch wahrscheinlich Ropalidia chromis. Eine Artbestimmung allein anhand der Fotos bleibt unsicher. Der erhobene Hinterleib ist hier bereits als Warnhaltung zu erkennen."],
  ["/images/makro/toepferwespe-am-nest.jpg", "Papierwespe in deutlicher Warnhaltung am Nest", "Deutliche Warnhaltung", "Hier ist die Warnhaltung besonders deutlich: Beim Annähern hob die Wespe den Hinterleib. In der Zeit am Haus wurde ich jedoch nie gestochen."],
  ["/images/makro/toepferwespe-lehmzellen.jpg", "Papierwespe zwischen offenen Brutzellen", "Offene Brutzellen", "Die offenen Brutzellen bestehen aus papierartigem, gekautem Pflanzenmaterial. In ihnen liegen Eier und später die heranwachsende Brut."],
  ["/images/makro/toepferwespe-drohhaltung.jpg", "Papierwespe an der Papierwabe", "An der Papierwabe", "Die Papierwespe bewegt sich zwischen den offenen Brutzellen ihrer Wabe."],
  ["/images/makro/toepferwespe-portrait.jpg", "Papierwespe in Warnhaltung", "Warnhaltung · Portrait", "Auch dieses Portrait zeigt die Warnhaltung mit erhobenem Hinterleib. Die Fotos und die offene Papierwabe passen zu einer Papierwespe der Gattung Ropalidia; Ropalidia chromis ist die wahrscheinliche, aber nicht abschließend gesicherte Artbestimmung."],
  ["/images/makro/toepferwespe-brutzellen.jpg", "Papierwespe an ihren Brutzellen", "Brutzellen", "Die papierartige Wabe zeigt die einzelnen offenen Brutzellen mit Eiern."],
  ["/images/makro/luchsspinne-suedafrika.jpg", "Luchsspinne aus Südafrika", "Luchsspinne · Südafrika", "Diese Luchsspinne gehört zur Familie der Oxyopidae. Besonders auffällig sind die sechs großen Augen, die auf dem Vorderkopf ein Sechseck bilden; zwei kleinere Augen liegen darunter. Luchsspinnen bauen kein Netz zum Beutefang: Sie leben auf Pflanzen und erbeuten Insekten durch Anschleichen, blitzschnelles Zupacken oder kurze Sprünge. Die kräftigen Stacheln an den Beinen helfen ihnen dabei, ihre Beute festzuhalten."],
  ["/images/makro/goldene-radnetzspinne-suedafrika.jpg", "Goldene Radnetzspinne aus Südafrika", "Goldene Radnetzspinne · Südafrika", "Wahrscheinlich eine Schwarzbeinige Goldene Radnetzspinne, Trichonephila fenestrata – früher unter dem Namen Nephila fenestrata geführt. Die große Spinne saß in einem Netz, das sich über mehrere Meter durch den Garten spannte; die kleine Fliege zeigt eindrucksvoll ihre Größe. Besonders sind die gelblich-golden schimmernden Fäden der Fangspirale. Die Spinne baut große, vollständige Radnetze zwischen Bäumen und Sträuchern und wartet dort auf fliegende Beute."],
  ["/images/makro/borkenspinne-kaum-zu-entdecken.jpg", "Borkenspinne, die auf einem Ast fast nicht zu erkennen ist", "Kaum zu entdecken", "Diese Borkenspinne gehört zur Gattung Caerostris (Familie Araneidae), wahrscheinlich Caerostris sexcuspidata. Auf diesem Bild ist sie zwischen Rinde und Ast kaum zu entdecken; erst in der Vergrößerung wird ihre ausgezeichnete Tarnung sichtbar. Tagsüber ruht sie dicht am Ast und zieht die Beine eng an den Körper."],
  ["/images/makro/borkenspinne-getarnt-auf-rinde.jpg", "Borkenspinne getarnt auf Rinde", "Getarnt auf Rinde", "Die harte, rindenähnliche Oberfläche mit Warzen und Höckern ist Teil der Tarnung dieser Borkenspinne. Nachts baut sie ein großes Radnetz zwischen Zweigen oder Bäumen und wartet dort auf Beute."],
  ["/images/makro/borkenspinne-astverzweigung.jpg", "Borkenspinne mit astähnlichem Auswuchs am Körper", "Astverzweigung?", "Bei manchen Borkenspinnen bilden die harten Auswüchse eine Form, die wie eine abgebrochene Astverzweigung wirkt – hier besonders eindrucksvoll zu sehen. Die Spinne verschmilzt so nahezu mit ihrer Umgebung."],
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
    <section className="macro-category"><h3>Schmetterlinge</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Schmetterlingen">{image(photos[1], 1)}</div></section>
    <section className="macro-category"><h3>Insekten</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Insekten">{image(photos[3], 3)}{image(photos[5], 5)}</div></section>
    <section className="macro-category"><h3>Libellen</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Libellen">{image(photos[2], 2)}{image(photos[4], 4)}</div></section>
    <section className="macro-category"><h3>Papierwespen</h3><p className="macro-location">Forrest Hills bei Kloof, KwaZulu-Natal, Südafrika · 2007</p><div className="gallery macro-gallery macro-previews" aria-label="Papierwespen der Gattung Ropalidia in Südafrika">{image(photos[6], 6)}{image(photos[7], 7)}{image(photos[8], 8)}{image(photos[9], 9)}{image(photos[10], 10)}{image(photos[11], 11)}</div></section>
    <section className="macro-category"><h3>Spinnen</h3><div className="gallery macro-gallery macro-previews" aria-label="Makroaufnahmen von Spinnen">{image(photos[12], 12)}{image(photos[13], 13)}{image(photos[14], 14)}{image(photos[15], 15)}{image(photos[16], 16)}</div></section>
    <section className="macro-category macro-coming"><h3>Weitere Themen</h3><p>Spinnen · Reptilien &amp; Amphibien · Pflanzen &amp; Details · Andere Entdeckungen <span>Bilder folgen</span></p></section>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Großansicht der Galerie" onClick={() => setSelected(null)}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Großansicht schließen">×</button><button className="lightbox-arrow left" onClick={event => { event.stopPropagation(); move(-1); }} aria-label="Vorheriges Bild">‹</button><figure onClick={event => event.stopPropagation()}><img src={photos[selected][0]} alt={photos[selected][1]} /><figcaption>{photos[selected][2]} <span>· Pfeiltasten zum Blättern · Esc zum Schließen</span>{photos[selected][3] && <p className="lightbox-description">{photos[selected][3]}</p>}</figcaption></figure><button className="lightbox-arrow right" onClick={event => { event.stopPropagation(); move(1); }} aria-label="Nächstes Bild">›</button></div>}
  </>;
}
