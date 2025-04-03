import type { NewQuestion } from "../schemas";

export const tsQuestions: NewQuestion[] = [
  {
    categoryId: 4,
    question: "Worauf kann in Typescript NICHT verzichtet werden?",
    answer: "Angabe von Datentypen.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was besteht für eine Gefahr beim Datentyp 'any'?",
    answer:
      "Any kann jeden Typ annehmen ohne vorherige Überprüfung, es ist gefährlich da man dadurch die Typüberprüfung bewusst abschaltet.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Nenne alle primitiven Datentypen, die du in Typescript kennst.",
    answer: "string, number, boolean, null, undefined, symbol, bigint",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was sind Union Types? Gib außerdem ein Beispiel.",
    answer:
      "Union Types sind eine Möglichkeit, Variablen zu definieren, die mehrere Typen annehmen können.",
    code: "let id: string | number;\nid = '123';\nid = 123;",
  },
  {
    categoryId: 4,
    question: "Was sind Generics in TypeScript und wie werden sie verwendet?",
    answer:
      "Generics ermöglichen es, Funktionen, Klassen oder Schnittstellen so zu definieren, dass sie mit verschiedenen Datentypen arbeiten können, ohne den genauen Typ im Voraus festzulegen.",
    code: "function identity<T>(arg: T): T {\n    return arg;\n}",
  },
  {
    categoryId: 4,
    question: "Was ist der Zweck der readonly-Eigenschaft in TypeScript?",
    answer:
      "Die readonly-Eigenschaft ermöglicht es, ein Objektattribut oder ein Array so zu deklarieren, dass dessen Wert nach der Initialisierung nicht mehr verändert werden kann.",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "Ist es möglich von einem Interface eine Instanz zu erstellen, wie bei einer Klasse?",
    answer: "Kurze Antwort: Nein.",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "Wo liegt der Hauptunterschied zwischen einer abstrakten Klasse und einem Interface?",
    answer:
      "Eine abstrakte Klasse kann sowohl abstrakte (nicht implementierte) als auch konkrete (implementierte) Methoden und Eigenschaften enthalten. Ein Interface kann nur Methodensignaturen und Eigenschaftsdefinitionen enthalten, jedoch keine Implementierungen.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Wozu dienen die Utility-Typen Pick und Omit?",
    answer:
      "Mit Pick kann man bestimmte Eigenschaften aus einem Typ auswählen, mit Omit kann man bestimmte Eigenschaften entfernen.",
    code: "Pick<Person, 'name' | 'age'>; || Omit<Person, 'address'>;",
  },
  {
    categoryId: 4,
    question:
      "Was kannst du aus diesem Code herauslesen? interface Robbe extends Meeresbewohner {tauchzeit: number;}",
    answer:
      "Robbe ist ein Interface, das vom Meeresbewohner erbt und ein zusätzliches Attribut 'tauchzeit' hat.",
    code: "interface Robbe extends Meeresbewohner {\n    tauchzeit: number;\n}",
  },
  {
    categoryId: 4,
    question: "Was gibt der typeof Operator zurück?",
    answer: "Den Typ des angefragten Wertes.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was ermöglicht eine Index Signature in TypeScript?",
    answer:
      "Objekte mit dynamischen Schlüsseln zu definieren und zu typisieren.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was ist der 'Nullish Coalescing Operator' und worauf prüft er?",
    answer:
      "Der Operator '??' überprüft, ob der linke Wert null oder undefined ist und falls ja, gibt er den rechten Wert zurück.",
    code: "const foo = null ?? 'default string';",
  },
  {
    categoryId: 4,
    question:
      "Wie nennt man die Fähigkeit die TypeScript besitzt, dass let zahl = 5; automatisch als Typ number bestimmt wird?",
    answer: "Typinferenz.",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "Welcher Operator wird genutzt, wenn wir einen Typ besser kennen, als der Compiler?",
    answer: "as-Operator.",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "type Person = {name: string; age: number;}; , was gibt mir 'keyof Person' zurück?",
    answer: "keyof Person gibt 'name' | 'age' zurück.",
    code: null,
  },
];
