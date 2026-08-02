import "./about.css";
import "./stamp.css";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Oppis Hobbys – Startseite">
          <span className="brand-mark"><img src="/images/horst-comic-selected.png" alt="Horst" /></span>
          <span>Oppis Hobbys</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#fotografie">Fotografie</a>
          <a href="#projekte">Projekte</a>
          <a href="#ueber-mich">Über mich</a>
        </nav>
      </header>
      <main id="start">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Werkstatt · Natur · Technik</p>
            <h1>Altes bewahren.<br />Neues entdecken.</h1>
            <p className="lead">Willkommen bei Oppis Hobbys: Geschichten aus der Motorradwerkstatt, kleine Wunder aus der Makro-Welt und praktische Projekte rund um Linux und Computer.</p>
            <a className="button" href="#projekte">Meine Projekte ansehen</a>
          </div>
          <div className="hero-stamp"><img src="/images/sticker.png" alt="Oppis Hobbys: Motorrad, Natur und Technik" /></div>
        </section>
        <section id="fotografie" className="section dark-section">
          <div className="section-heading"><p className="eyebrow">02 · Draußen</p><h2>Makro-Insektenfotografie</h2></div>
          <div className="split photo-layout"><div><h3>Ganz nah dran</h3><p>Die kleinen Bewohner von Garten, Wiese und Wald zeigen aus der Nähe erstaunliche Formen und Farben. Diese Galerie sammelt Makroaufnahmen – mit Platz für die Geschichten hinter den Bildern.</p><a className="button" href="/fotografie">Zur Makro-Galerie</a></div><a className="macro-preview" href="/fotografie" aria-label="Makro-Galerie öffnen"><img src="/images/makro/skorpionsfliege-maennchen.jpg" alt="Männchen einer Skorpionsfliege auf einem Grashalm" /><span>Makro-Galerie</span></a></div>
        </section>
        <section id="projekte" className="section feature-section">
          <div className="section-heading"><p className="eyebrow">03 · Aktuelles Projekt</p><h2>Honda CB250G restaurieren</h2></div>
          <div className="project-layout"><div className="number-panel">1976</div><div><h3>Honda CB250G</h3><p>Mein aktuelles Projekt ist die Restaurierung einer Honda CB250G von 1976. Von der Technik bis zum Lack in <strong>Hawaiian Blue Metallic</strong>: Hier sollen nach und nach Bilder, Arbeitsschritte und kleine Erfahrungen aus der Werkstatt ihren Platz finden.</p><a className="button" href="/projekte/cb250g">Zum Projekt mit Bildergalerie</a></div><img className="project-illustration" src="/images/cb250g-stilisiert-honda.png" alt="Stilisierte Honda CB250G in Hawaiian Blue Metallic" /></div>
          <div className="more-projects"><p className="eyebrow">Weitere Projekte</p><div className="cards"><article className="card"><span className="card-no">A</span><h3>BildBlick</h3><p>Mein Bildbetrachter für Linux: übersichtlich, schnell und gemacht für große Fotosammlungen.</p></article><article className="card"><span className="card-no">B</span><h3>DriveMonitor</h3><p>Ein selbst entwickeltes Programm, das Festplatten und SSDs im Blick behält.</p></article><article className="card"><span className="card-no">C</span><h3>Ehrenamt</h3><p>Technik, Organisation und praktische Hilfe für die Dinge, die vor Ort wichtig sind.</p></article></div></div>
        </section>
        <section id="cz125" className="section completed-project"><div className="section-heading"><p className="eyebrow">04 · Abgeschlossenes Projekt</p><h2>CZ 125 453 restauriert</h2></div><div className="project-layout"><div className="number-panel">1963</div><div><h3>CZ 125 453</h3><p>Aus einem müden Scheunenfund wurde Schritt für Schritt wieder ein zuverlässiges Motorrad – mit viel Geduld, eigener Fertigung und Freude an jedem geretteten Detail.</p><a className="button" href="/projekte/cz125">Zur Galerie der Restaurierung</a></div><img className="project-illustration" src="/images/cz125/ausgangszustand.jpg" alt="CZ 125 453 vor der Restaurierung" /></div></section>
        <section id="cb125" className="section completed-project"><div className="section-heading"><p className="eyebrow">05 · Abgeschlossenes Projekt</p><h2>Honda CB125B6 restauriert</h2></div><div className="project-layout"><div className="number-panel">1975</div><div><h3>Honda CB125B6</h3><p>Eine kleine Honda mit großer Geschichte: Nach vielen Stunden in der Werkstatt steht die CB125B6 wieder da wie ein klassisches Leichtmotorrad der siebziger Jahre.</p><a className="button" href="/projekte/cb125">Zur Galerie der Restaurierung</a></div><img className="project-illustration" src="/images/cb125/neuaufbau.jpg" alt="Honda CB125B6 mit Rahmen und Motor beim Neuaufbau" /></div></section>
        <section className="section site-story"><div className="section-heading"><p className="eyebrow">06 · Die Idee dahinter</p><h2>Altes bewahren. Genau hinsehen.</h2></div><div className="story-copy"><p>Diese Website sammelt Dinge, die mich über viele Jahre begleitet haben: klassische Motorräder, ihre Technik und die kleinen Wunder der Natur.</p><p>Von 1998 bis 2010 lebte ich nahe Durban in Südafrika. Dort begann meine Makrofotografie: Man musste oft nur vor die Haustür treten, um mitten in einer erstaunlich vielfältigen Insektenwelt zu stehen. Bis 2014 habe ich versucht, die kleinen Dinge groß zu zeigen – Tiere und Details, die man sonst leicht übersieht. Besonders früh am Morgen, wenn Tau auf dem Gras liegt und die Insekten noch kühl und ruhig sind, entstehen für mich die schönsten Bilder. Auch in Deutschland gibt es viel zu entdecken, wenn man sich Zeit nimmt und genau hinschaut.</p><p>Meine Motorräder stammen ungefähr aus den Jahren 1950 bis 1990 – aus meiner Zeit, nicht aus einer fernen Vergangenheit. Ich fahre und restauriere sie, weil ihre Technik noch überschaubar ist und weil man vieles selbst verstehen, reparieren oder mit der Drehbank sogar neu anfertigen kann. Die Arbeit in der Werkstatt ist für mich ein besonderer Ausgleich: Dabei vergesse ich die Zeit und vieles, was mich sonst beschäftigt. Und beim Fahren geht es mir nicht um Tempo. Wenn der Motor bei etwa 80 km/h ruhig läuft und klingt, wie er soll, ist das für mich schon ein sehr guter Tag.</p></div></section>
        <section id="ueber-mich" className="section about"><div className="section-heading"><p className="eyebrow">07 · Persönlich</p><h2>Über mich</h2></div><div className="about-layout"><div><p className="about-text">Ich bin Horst – neugierig auf Technik, begeistert von klassischen Motorrädern und gern mit der Kamera in der Natur unterwegs. Diese Seite wächst mit meinen Projekten und soll vor allem Freude am Selbermachen zeigen.</p><a className="contact-link" href="/impressum.html">Kontakt</a></div><img className="about-portrait" src="/images/horst-comic-selected.png" alt="Illustration eines Werkstatt-Hobbyisten" /></div></section>
      </main>
      <footer>© 2026 Oppis Hobbys <span aria-hidden="true">·</span> Persönliche Website</footer>
    </>
  );
}
