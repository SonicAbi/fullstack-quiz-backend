import type { NewQuestion } from "../schemas";

export const jsQuestions: NewQuestion[] = [
  {
    categoryId: 5,
    question: "Was ist der Unterschied zwischen let & const?",
    answer:
      "let kann später geändert werden, const bleibt gleich nach der Zuweisung.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was ist der Vorteil von Arrow Functions?",
    answer:
      "Sie haben eine kürzere Syntax und übernehmen this vom äußeren Scope.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Wie verhalten sich Variablen innerhalb eines Scopes?",
    answer:
      "Sie sind nur im jeweiligen Block sichtbar und werden danach gelöscht.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was ist Destructuring und wie funktioniert es bei Objekten?",
    answer:
      'Beim Destructuring werden Werte aus Objekten in Variablen gespeichert.\n\nBeispiel:\nconst person = { name: "Max", age: 30 };\nconst { name, age } = person;',
    code: null,
  },
  {
    categoryId: 5,
    question: "Wie nennt man diesen Operator: [...]?",
    answer: "Spread Operator.",
    code: `const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];`,
  },
  {
    categoryId: 5,
    question: "Was ist der Unterschied zwischen Rest- und Spread-Operator?",
    answer:
      "Der Rest-Operator (mit ...) sammelt mehrere Werte ein, z. B. in Funktionen:\n" +
      "function sum(...zahlen) { return zahlen.reduce((a, b) => a + b); }\n\n" +
      "Der Spread-Operator verteilt Werte, z. B. beim Kopieren:\n" +
      "const zahlen = [1, 2, 3];\nconst kopie = [...zahlen, 4, 5];",
    code: null,
  },
  {
    categoryId: 5,
    question: "Worauf zeigt this in einer Arrow Function?",
    answer:
      "Arrow Functions haben kein eigenes this. Sie übernehmen automatisch den this-Wert der umgebenden Funktion oder des Kontexts.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was muss man bei statischen Methoden in Klassen beachten?",
    answer: "Sie gehören zur Klasse, nicht zur Instanz.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Wie deklariert man eine private Eigenschaft in einer Klasse?",
    answer:
      "Mit einem # vor dem Eigenschaftsnamen. Beispiel:\n\nclass Stadt {\n  #city = 'Berlin';\n\n  getCity() {\n    return this.#city;\n  }\n}",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was ist ein Event?",
    answer: "Ein Ereignis wie ein Klick, das vom Browser erkannt wird.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Wie verhindert man Event Bubbling?",
    answer: "event.stopPropagation();",
    code: null,
  },
  {
    categoryId: 5,
    question: "Warum braucht man eine Debounce-Funktion?",
    answer:
      "Damit Funktionen nicht zu oft schnell hintereinander aufgerufen werden.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was sind Callbacks?",
    answer:
      "Callbacks sind Funktionen, die an eine andere Funktion übergeben und nach deren Ausführung aufgerufen werden.\n\nBeispiel:\nfunction sagHallo(name, callback) {\n  console.log('Hallo ' + name);\n  callback();\n}\nsagHallo('Ali', () => console.log('Fertig!'));",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was machen 'async' und 'await'?",
    answer:
      "async macht eine Funktion asynchron, await wartet auf ein Ergebnis.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Wie fügt man ein HTML-Element dem DOM hinzu?",
    answer: "document.body.appendChild(title);",
    code: null,
  },
  {
    categoryId: 5,
    question: "Finde 3 Fehler in der Verwendung von async/await.",
    answer:
      "- ❌ fetchData ist nicht als async markiert\n- ❌ await wird außerhalb von async verwendet\n- ❌ keine Fehlerbehandlung\n\n✅ Richtig wäre:\nasync function fetchData() {\n  try {\n    const res = await fetch('https://api.com');\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error('Fehler:', err);\n  }\n}",
    code: `function fetchData() {
  const res = await fetch('https://api.com');
  console.log(res);
}`,
  },
  {
    categoryId: 5,
    question: "Was ist der Unterschied zwischen setTimeout und setInterval?",
    answer:
      "setTimeout führt etwas einmal nach einer Zeit aus. setInterval wiederholt es regelmäßig.\n\nBeispiele:\nsetTimeout(() => console.log('Einmalig'), 1000);\nsetInterval(() => console.log('Immer wieder'), 1000);",
    code: null,
  },
  {
    categoryId: 5,
    question: "Finde 3 Fehler beim Event Listener.",
    answer:
      "- ❌ addEventListener ist falsch geschrieben\n- ❌ Es fehlt die Funktion als zweites Argument\n- ❌ 'button' ist möglicherweise null\n\n✅ Richtig wäre:\nconst button = document.querySelector('button');\nbutton?.addEventListener('click', () => alert('Klick!'));",
    code: `const button = document.querySelector('button');
button.addeventlistener('click');`,
  },
  {
    categoryId: 5,
    question: "Was ist eine Higher-Order Function?",
    answer:
      "Eine Funktion, die eine andere Funktion als Argument nimmt oder zurückgibt.\n\nBeispiel:\nfunction handle(fn) {\n  console.log('Starte...');\n  fn();\n}\nhandle(() => console.log('Erledigt!'));",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was versteht man unter Prototyp-Vererbung in JavaScript?",
    answer:
      "Objekte erben Eigenschaften und Methoden von anderen Objekten über die Prototype-Kette.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was macht der Event-Loop in JavaScript?",
    answer:
      "Er sorgt dafür, dass Funktionen asynchron ausgeführt werden. Dabei verarbeitet er die Aufgaben in einer Warteschlange (Task Queue).",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Was ist der Unterschied zwischen microtask queue und macrotask queue?",
    answer:
      "Microtasks (z. B. Promises oder MutationObserver) werden direkt nach dem aktuellen Codeblock ausgeführt – noch vor dem nächsten Rendering. Macrotasks (z. B. setTimeout, setInterval) kommen erst danach an die Reihe.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was macht die Methode .appendChild()?",
    answer:
      "Sie fügt ein Element als letztes Kind in ein anderes DOM-Element ein.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Finde 3 Fehler: DOM-Manipulation",
    answer:
      "- ❌ ID-Auswahl ist falsch geschrieben (getelementbyid statt getElementById)\n- ❌ textcontent klein geschrieben (soll textContent heißen)\n- ❌ append falsch verwendet\n\n✅ Richtig:\nconst el = document.getElementById('demo');\nel.textContent = 'Hallo Welt';\ndocument.body.appendChild(el);",
    code: `const el = document.getelementbyid('demo');
el.textcontent = 'Hallo Welt';
document.body.append(el);`,
  },
  {
    categoryId: 5,
    question: "Was ist der Unterschied zwischen innerText und textContent?",
    answer:
      "textContent gibt den gesamten Text eines Elements zurück, innerText berücksichtigt CSS und Layout.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was macht event.target?",
    answer: "Es zeigt auf das HTML-Element, das das Event ausgelöst hat.",
    code: null,
  },
  {
    categoryId: 5,
    question: "Was macht die Methode event.stopPropagation()?",
    answer:
      "Sie verhindert, dass das Event weiter zu übergeordneten Elementen weitergegeben wird.",
    code: null,
  },
  {
    categoryId: 5,
    question:
      "Was ist der Unterschied zwischen sessionStorage und localStorage?",
    answer:
      "localStorage speichert Daten dauerhaft, sessionStorage nur bis zum Schließen des Tabs.",
    code: null,
  },
];
