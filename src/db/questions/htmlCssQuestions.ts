import type { NewQuestion } from "../schemas";

export const htmlCssQuestions: NewQuestion[] = [
  {
    categoryId: 2,
    question: "Wofür steht HTML und wofür dient es?",
    answer:
      "HTML steht für 'Hypertext Markup Language' und beschreibt den Aufbau von Webseiten.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Nenne mindestens 5 HTML-Tags.",
    answer: "Beispiele: h1, p, img, a, ul, li, div, span, form, input, button.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was sind HTML-Attribute? Nenne 2 Beispiele.",
    answer:
      "Attribute geben HTML-Tags zusätzliche Infos. Beispiele: class, id, src, alt.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Welches Attribut brauchst du für ein Pflichtfeld im Formular?",
    answer: "required",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist CSS und wofür wird es verwendet?",
    answer:
      "CSS beschreibt das Aussehen von HTML-Elementen (z. B. Farben, Layout, Schrift).",
    code: null,
  },
  {
    categoryId: 2,
    question: "Wozu wird ein CSS-Reset verwendet?",
    answer:
      "Damit alle Browser dieselben Standard-Styles nutzen und alles gleich aussieht.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Welche Eigenschaft aktiviert Flexbox?",
    answer: "display: flex;",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist der Unterschied zwischen Flexbox und Grid?",
    answer:
      "Flexbox ist einzeilig (1D), Grid ist zweizeilig (2D – Spalten und Zeilen).",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Wie ordnest du Flex-Items von rechts nach links an (ohne HTML zu ändern)?",
    answer:
      "Mit den CSS-Eigenschaften display: flex; und flex-direction: row-reverse;",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist der Unterschied zwischen margin und padding?",
    answer:
      "margin ist der Abstand außerhalb, padding ist der Abstand innerhalb des Elements.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was bedeutet 'Responsive Design'?",
    answer:
      "Ein Design, das sich an jede Bildschirmgröße anpasst (z. B. PC und Handy).",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was sind CSS-Variablen und wofür nutzt man sie?",
    answer:
      "Mit CSS-Variablen speichert man Werte wie Farben und nutzt sie mehrfach im Code.",
    code: `:root {
  --primary-color: #3498db;
}`,
  },
  {
    categoryId: 2,
    question: "Was ermöglichen 'Media Queries'?",
    answer:
      "Sie machen das Design anpassbar an Bildschirmgrößen wie Smartphone oder Tablet.",
    code: `@media screen and (max-width: 600px) {}`,
  },
  {
    categoryId: 2,
    question: "Was ist BEM und warum wird es verwendet?",
    answer:
      "BEM ist ein CSS-Namenssystem, das den Code klar und wiederverwendbar macht.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist ein häufiger Fehler bei BEM?",
    answer:
      "Globale CSS-Regeln wie 'h1 { ... }' zu verwenden – das kann zu Konflikten führen.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was bedeuten <table>, <tr> und <td> in HTML?",
    answer: "<table> erstellt eine Tabelle, <tr> eine Zeile, <td> eine Zelle.",
    code: `<table>
  <tr>
    <td>Beispielzelle</td>
  </tr>
</table>`,
  },
  {
    categoryId: 2,
    question: "Was ist das 'alt'-Attribut bei Bildern?",
    answer:
      "Es beschreibt den Bildinhalt und wird angezeigt, wenn das Bild nicht geladen werden kann.",
    code: `<img src="bild.jpg" alt="Ein rotes Auto">`,
  },
  {
    categoryId: 2,
    question:
      "Was ist der Unterschied zwischen einer ID und einer Klasse in HTML?",
    answer:
      "Eine ID ist eindeutig und wird nur einmal verwendet. Klassen können mehrfach genutzt werden.",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Wie kannst du in CSS alle Elemente einer bestimmten Klasse ansprechen?",
    answer: `Mit einem Punkt vor dem Klassennamen, z. B. .box { ... } \n.box {
  background-color: lightblue;
}`,
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist das Box-Modell in CSS?",
    answer:
      "Das Box-Modell beschreibt den Aufbau eines Elements: Inhalt, Padding, Border und Margin.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Wofür steht das HTML-Tag <label>?",
    answer: "Es verbindet Text mit einem Eingabefeld in einem Formular.",
    code: `<label for="email">E-Mail</label>
<input type="email" id="email">`,
  },
  {
    categoryId: 2,
    question: "Wie verknüpfst du eine externe CSS-Datei mit HTML?",
    answer: `Mit dem link-Tag im head-Bereich der HTML-Datei. \n<link rel="stylesheet" href="styles.css">`,
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist eine Pseudo-Klasse in CSS?",
    answer:
      "Eine Pseudo-Klasse beschreibt einen Zustand, z. B. :hover, :focus oder :first-child.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist ein semantisches HTML-Element?",
    answer:
      "Ein Element, das den Inhalt beschreibt, z. B. header, main, section oder footer.",
    code: `<section>
  <h2>Über uns</h2>
  <p>Wir stellen uns vor...</p>
</section>`,
  },
];
