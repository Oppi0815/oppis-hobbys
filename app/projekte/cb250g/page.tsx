import { Gallery } from "./Gallery";

export default function CB250GProject() {
  return (
    <main className="project-page">
      <a className="back-link" href="/">← Zur Startseite</a>
      <header className="project-header">
        <p className="eyebrow">Projekt · Honda</p>
        <h1>CB250G · 1976</h1>
        <p>Die Restaurierung meiner Honda CB250G – vom Teilelager zurück auf die Straße, in <strong>Hawaiian Blue Metallic</strong>.</p>
      </header>
      <section>
        <div className="gallery-intro"><p className="eyebrow">Bildergalerie</p><h2>Stand des Projekts</h2><p>Das erste Bild ist ein Farb- und Stilvorbild für das fertige Motorrad. Die weiteren Aufnahmen zeigen die vorhandenen Teile meiner Honda.</p></div>
        <Gallery />
      </section>
    </main>
  );
}
