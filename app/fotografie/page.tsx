import "../projekte/cb250g/gallery.css";
import { MacroGallery } from "./MacroGallery";

export default function FotografiePage() { return <main className="project-page macro-page"><a className="back-link" href="/">← Zur Startseite</a><header className="project-header"><p className="eyebrow">Fotografie · Makro</p><h1>Die Welt im Kleinen</h1><p>Makroaufnahmen aus Garten, Wiese und Wald – jede mit ihrer eigenen kleinen Geschichte.</p></header><section><div className="gallery-intro"><p className="eyebrow">Bildergalerie</p><h2>Skorpionsfliege</h2></div><MacroGallery/></section></main>; }
