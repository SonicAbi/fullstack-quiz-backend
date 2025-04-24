import type { NewQuestion } from "../schemas";

export const htmlCssQuestions: NewQuestion[] = [
  {
    categoryId: 2,
    question: "Wofür steht HTML und wofür dient es?",
    answer:
      "HTML steht für 'Hypertext Markup Language' und wird verwendet, um den Inhalt und die Struktur von Webseiten zu definieren.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Nenne mind. 5 Tags die man in einer HTML auffinden kann.",
    answer:
      "- Überschriften: h1 - h6\n- Absätze: p\n- Bilder: img\n- Links: a href=...\n- Listen: ungeordnet : ul mit li Elementen.\n- Abschnitte : div\n- Inline-Container: span\n- Formulare: form, input, buttons",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was sind HTML-Attribute? Nenne 2.",
    answer:
      "HTML-Attribute geben den Tags zusätzliche Informationen oder ändern ihr Verhalten.\n- class und id\n- src, alt, style, title",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Welches HTML-Attribut benötigst du wenn du ein Pflichtfeld in einem Formular benötigst?",
    answer: "required",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was ist CSS und wofür wird es verwendet?",
    answer:
      "CSS (Cascading Style Sheet) ist eine Stylesheet-Sprache, die verwendet wird, um das Aussehen von HTML-Dokumenten zu beschreiben.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Wozu wird ein CSS-Reset benötigt?",
    answer:
      "Damit die Standard-Styles des Browsers überschrieben werden und meine Styles bei jedem Browser gleich aussehen.",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Welche CSS-Eigenschaft muss auf den Container angewendet werden, um Flexbox zu aktivieren?",
    answer: "display: flex;",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Worin liegt der Hauptunterschied zwischen Flexbox und Grid in Bezug auf das Layout?",
    answer:
      "Flexbox ist eindimensional und arbeitet entlang einer Haupt- und Querachse (horizontal oder vertikal). Grid ist zweidimensional und ermöglicht die Kontrolle über Zeilen und Spalten.",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Wie kannst du Flex-Items in einem Container von rechts nach links anordnen, ohne das HTML zu ändern?",
    answer:
      "Um Flex-Items von rechts nach links anzuordnen, ohne das HTML zu ändern, kannst du die folgenden CSS-Eigenschaften verwenden:",
    code: "display: flex;\nflex-direction: row-reverse;",
  },
  {
    categoryId: 2,
    question: "Was ist der Unterschied zwischen margin und padding?",
    answer:
      "- margin: Der äußere Abstand eines Elements zum nächsten Element (außerhalb des Rahmens).\n- padding: Der innere Abstand zwischen dem Inhalt eines Elements und dessen Rahmen.",
    code: null,
  },
  {
    categoryId: 2,
    question: "Was versteht man unter dem Wort 'Responsive Design'?",
    answer:
      "Ein Webseiten-Design, das sich der Bildschirmbreite anpasst (wichtig für Webseiten, die sowohl mobil als auch über PC schön aussehen sollen).",
    code: null,
  },
  {
    categoryId: 2,
    question:
      "Es können auch Custom Properties (CSS-Variablen) verwendet werden, was ist das und wozu dienen sie?",
    answer:
      "CSS-Variablen werden mit einem doppelten Bindestrich definiert und sind im :root-Selektor anzutreffen. Es sind sozusagen eigene Variablen. Wozu? Damit diese global verfügbar sind, der Code ist dadurch flexibler und leichter zu warten.",
    code: ":root {\n  --primary-color: #3498db;\n}\nbody {\n  background-color: var(--primary-color);\n}",
  },
  {
    categoryId:2,
    question:"Was ermöglichen 'Media Queries'?",
    answer:"Media Queries ermöglichen es, CSS-Regeln basierend auf Geräteeigenschaften wie Bildschirmbreite anzuwenden.",
    code:"@media screen and (max-width: 600px) {/* CSS-Regeln für Bildschirme bis 600px Breite */}",
  },
  {
    categoryId:2,
    question:"Was ist BEM und warum wird es in der CSS-Entwicklung verwendet?",
    answer:"BEM (Block, Element, Modifier) ist eine CSS-Methodologie, die darauf abzielt, sauberen, modularen und wartbaren Code zu schreiben. Sie wird verwendet, um die Struktur von CSS-Klassen klar und konsistent zu gestalten, sodass der Code leicht erweiterbar und wiederverwendbar ist.",
    code:null
  },
  {
    categoryId:2,
    question:"Was ist ein häufiger Fehler in der Anwendung von BEM?",
    answer:" Ein häufiger Fehler in BEM ist die Verwendung von globalen Klassen wie h1 { color: red; }, was Konflikte zwischen verschiedenen Komponenten verursachen kann.",
    code:null,
  },
  {
    categoryId:2,
    question:"Was bedeuten die folgenden Tags in HTML? : <table> , <tr> , <td>",
    answer:"<table>: Definiert die gesamte Tabelle \n<tr>: Steht für 'table row' und erstellt eine Tabellenzeile \n<td>: Bedeutet 'table data' und repräsentiert eine einzelne Datenzelle",
    code: "<table> \n <tr> \n<td>Zelle 1</td>\n<td>Zelle 2</td>\n</tr>\n</table>",
  }
];
