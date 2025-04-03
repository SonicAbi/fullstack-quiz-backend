import type { NewQuestion } from "../schemas";

export const jsQuestions: NewQuestion[] = [
  {
    categoryId: 5,
    question: "Was ist der Unterschied zwischen let & const?",
    answer: "Const ist nach dem Definieren nicht mehr veränderbar, let schon.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was ist der Vorteil von Arrow Functions?",
    answer: "Sie vereinfachen die Syntax.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Wie verhalten sich Variablen innerhalb eines Scopes, in Bezug auf Sichtbarkeit und Lebensdauer?",
    answer:
      "Wenn eine Funktion beendet ist, wird der Scope verlassen und alle inneren Variablen werden aufgeräumt, außerdem sind Variablen innerhalb eines Scopes auch nur dort sichtbar.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Was ist Destructuring in JavaScript und wie funktioniert es? Gebe ein Beispiel anhand eines Objekts.",
    answer:
      "Destructuring ist eine JavaScript-Syntax, die es ermöglicht, Werte aus Arrays oder Properties aus Objekten in separate Variablen zu extrahieren.",
    code: "const person = { name: 'Max', age: 30 };\nconst { name, age } = person;",
  },
  {
    categoryId: 5,
    question:
      "Wie nennt man diesen ... Operator?: const numbers = [1, 2, 3]; const moreNumbers = [...numbers, 4, 5];",
    answer: "Spread Operator",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Was ist der Unterschied zwischen dem Rest-Operator und dem Spread-Operator?",
    answer:
      "Der Rest-Operator wird verwendet, um Werte zu sammeln (z.B. in einer Funktion oder beim Destructuring), während der Spread-Operator verwendet wird, um Werte zu verteilen (z.B. in Arrays oder Objekten).",
    code: null,
  },
  {
    categoryId: 5,
    question: "Worauf zeigt this in einer Arrow Function?",
    answer: "This wird vom äußeren Kontext übernommen.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Was ist zu beachten wenn man statische Methoden in einer Klasse verwendet?",
    answer:
      "Statische Methoden können NICHT auf einer Klasseninstanz aufgerufen werden.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Wie deklariere ich eine private Eigenschaft in einer Klasse? zb. City?",
    answer: "#city, mit dem vorangestellten '#'.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was ist ein Event?",
    answer:
      "Ein Event ist eine Benutzeraktion (z.B. ein Klick oder eine Mausbewegung) oder ein Systemereignis (z.B. Laden der Webseite).",
    code: null,
  },
  {
    categoryId: 5,
    question: "Welcher Befehl wird benötigt, um Event Bubbling zu verhindern?",
    answer: "stopPropagation();",
    code: "event.stopPropagation();",
  },
  {
    categoryId: 5,
    question: "Wozu ist eine Debounce Funktion hilfreich und notwendig?",
    answer:
      "Ein Debounce verhindert das zu häufige Wiederholen von Ereignissen und ist notwendig, um bei Serverinteraktionen den Server zu entlasten.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was sind Callbacks?",
    answer:
      "Callbacks sind Funktionen, die an eine andere Funktion übergeben werden und nach Abschluss einer Aufgabe aufgerufen werden.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was machen die Keywords 'async' und 'await'?",
    answer:
      "async markiert eine Funktion als asynchron und gibt immer ein Promise zurück. await pausiert die Ausführung der Funktion, bis das Promise erfüllt oder abgelehnt wird.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Wie kann ein neues HTML Element, das in der Variable 'title' gespeichert ist, in den DOM eingehängt werden?",
    answer: "document.body.appendChild(title);",
    code: "document.body.appendChild(title);",
  },
];
