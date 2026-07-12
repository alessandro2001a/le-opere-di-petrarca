# Le opere di Petrarca — raccolta web del patrimonio culturale

Prova finale del corso *Digital Humanities e Patrimonio Culturale* (prof.ssa
Francesca Tomasi, Laurea magistrale, Università di Bologna).

**Autore:** Alessandro Calò (Laurea magistrale in Scienze storiche)
**Sito pubblicato:** https://alessandro2001a.github.io/le-opere-di-petrarca/

## Il progetto

La raccolta riunisce **undici item** legati a Francesco Petrarca (1304–1374),
di tre tipologie documentarie: sette testi (dal Canzoniere al Secretum alla
lettera del Monte Ventoso), tre immagini (tra cui l'autografo Vat. Lat. 3195
e il ritratto di Altichiero) e un audio (lettura LibriVox di RVF 1). Ogni item
è trattato come *dato + metadati*: la risorsa e la sua descrizione strutturata.

Il sito è realizzato in **HTML5 + CSS + JavaScript**, senza framework, ed è
pubblicato su GitHub Pages.

## Struttura

```
├── index.html        # Home: obiettivo del progetto e metodi di accesso
├── catalogo.html     # Catalogo: card filtrabili per tipologia + ricerca libera
├── cronologia.html   # Accesso temporale: sequenza 1304-1374 + timeline interattiva
├── luoghi.html       # Accesso geografico: mappe dei luoghi petrarcheschi
├── analisi.html      # Analisi lessicale di RVF 1 con Voyant Tools
├── dati.html         # Tabella dei record con riconciliazione alle autorità
├── petrarca.html     # Pagina-entità della persona (autore e soggetto)
├── opere/            # Una pagina per ciascuno degli 11 item
├── items/            # Record XML: Dublin Core Qualified (11) + trascrizioni TEI (3)
├── data/             # Dataset della raccolta in CSV e JSON + testi per l'analisi
├── css/style.css     # Foglio di stile
└── js/main.js        # Script dei componenti di interfaccia
```

## Standard utilizzati

- **Dublin Core qualified** per la descrizione catalografica: nell'`head` di ogni
  pagina secondo la convenzione dcq-html, nel corpo della scheda di ogni item e
  in record XML autonomi (`items/*-dc.xml`) con qualificatori `dcterms`,
  encoding scheme dichiarati con `xsi:type` (W3CDTF, IMT, LCSH, URI) e
  riconciliazione alle autorità tramite l'attributo di progetto `op:ref`.
- **TEI** per il full-text dei tre testi-campione, scelti perché coprono tre
  modelli di codifica: **versi** (Canzoniere, RVF 1: `lg`/`l` con schema rimico),
  **prosa epistolare** (lettera del Monte Ventoso, testo integrale: citazioni con
  `cit`/`quote`/`bibl`, nomi e luoghi riconciliati, date normalizzate) e
  **dialogo** (Secretum, proemio e apertura del liber I: `sp`/`speaker`, `said`,
  con la porzione non trascritta dichiarata da `gap`).
- **Record di autorità**: persone → VIAF, luoghi → GeoNames, soggetti →
  LCSH/LCNAF. Gli stessi URI ricorrono coerentemente nelle pagine HTML, nei
  record XML e nella pagina Dati. Tutti gli identificatori sono stati
  verificati alla fonte.
- **Linked Open Data**: collegamenti esterni tipizzati con predicati Dublin Core
  (isPartOf, hasPart, relation, references) e pagina-entità della persona con i
  suoi identificatori (VIAF 39382430, Wikidata Q1401, LCNAF n79092622).

## Metodi di accesso

Per tipologia documentaria e ricerca libera (catalogo), temporale (cronologia in
doppia visualizzazione: sequenza HTML e timeline interattiva), spaziale (mappe),
per autorità (pagina Dati), analisi lessicale (Voyant). L'accesso alfabetico è
progettato e indicato in home come sviluppo previsto.

## Componenti e strumenti

Componenti di interfaccia ripresi dagli esempi **How To di W3Schools** e adattati
al progetto: navbar responsive, card, filtro per tipologia, ricerca, tab,
accordion, breadcrumb, pulsante torna-su (otto in totale).

Tool per developer integrati: **Google Maps** (mappe dei luoghi, embed),
**Voyant Tools** di S. Sinclair e G. Rockwell (analisi lessicale, embed) e
**TimelineJS di Knight Lab** (timeline generata dal file `data/cronologia.json`
della raccolta).

## Fonti e licenze dei contenuti

- Testi latini e volgari: Wikisource (it/la) e letteraturaoperaomnia.org, in
  pubblico dominio; le fonti sono dichiarate nel `sourceDesc` dei file TEI.
- Immagini: Wikimedia Commons, con credito e licenza in didascalia. Per il
  codice Vat. Lat. 3195 la riproduzione della coperta proviene dalla
  digitalizzazione DigiVatLib (© Biblioteca Apostolica Vaticana), linkata
  nella scheda.
- Audio: lettura di Sergio Baldelli per LibriVox (Internet Archive), pubblico dominio.
- Dove la data di una risorsa non è accertabile si usa la forma catalografica
  `s.d.`; le date incerte sono segnalate con `?` (es. la lettera del Ventoso,
  datata nel testo al 1336 ma di stesura ritenuta posteriore).

## Riferimenti

F. Tomasi, *Organizzare la conoscenza. Digital Humanities e Web semantico*,
Editrice Bibliografica, 2022 · TEI Consortium, *TEI P5 Guidelines* (tei-c.org) ·
DCMI, *Dublin Core Metadata Terms* (dublincore.org) · W3Schools How To ·
Voyant Tools · KnightLab TimelineJS.

## Sviluppi futuri

Indice alfabetico per titolo e persona; pagine-entità per Laura, Agostino e i
luoghi della raccolta; estensione delle trascrizioni TEI.
