import type { NewQuestion } from "../schemas";

export const tsQuestions: NewQuestion[] = [
  {
    categoryId: 4,
    question: "Worauf kann in TypeScript NICHT verzichtet werden?",
    answer: "Auf die Angabe oder Ermittlung von Datentypen.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was besteht für eine Gefahr beim Datentyp 'any'?",
    answer: "'any' deaktiviert die Typprüfung – Fehler bleiben oft unentdeckt.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Nenne alle primitiven Datentypen in TypeScript.",
    answer: "string, number, boolean, null, undefined, symbol, bigint",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was sind Union Types? Gib ein Beispiel.",
    answer:
      "Mit Union Types kann eine Variable mehrere Typen haben, z. B. string oder number.",
    code: `let id: string | number;`,
  },
  {
    categoryId: 4,
    question: "Was sind Generics in TypeScript?",
    answer:
      "Generics machen Funktionen und Typen flexibel für verschiedene Datentypen.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Wofür steht readonly in TypeScript?",
    answer:
      "readonly verhindert, dass eine Eigenschaft nachträglich geändert wird.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Kann man von einem Interface eine Instanz erstellen?",
    answer:
      "Nein. Interfaces existieren nur zur Typüberprüfung und werden beim Kompilieren entfernt.\n\nBeispiel:\ninterface Person {\n  name: string;\n}\n\n// ❌ Geht nicht:\n// const p = new Person(); // Error: 'Person' only refers to a type.",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "Was ist der Unterschied zwischen abstrakter Klasse und Interface?",
    answer:
      "Ein Interface beschreibt nur, wie ein Objekt aussehen soll – ohne Logik. Eine abstrakte Klasse kann zusätzlich Code enthalten.\n\nBeispiele:\n\n// ✅ Interface\ninterface Tier {\n  name: string;\n  bewegen(): void;\n}\n\n// ✅ Abstrakte Klasse\nabstract class Fahrzeug {\n  start(): void {\n    console.log('Motor läuft');\n  }\n  abstract fahren(): void;\n}",
    code: null,
  },
  {
    categoryId: 4,
    question: "Wozu dienen Pick und Omit?",
    answer: "Pick wählt Eigenschaften aus, Omit entfernt sie aus einem Typ.",
    code: `Pick<Person, "name" | "age">\nOmit<Person, "address">`,
  },
  {
    categoryId: 4,
    question: "Was macht dieser Code?",
    answer: "Er erweitert ein Interface und fügt das Feld 'tauchzeit' hinzu.",
    code: `interface Robbe extends Meeresbewohner {
  tauchzeit: number;
}`,
  },
  {
    categoryId: 4,
    question: "Was gibt der typeof-Operator zurück?",
    answer:
      "Er gibt den Typ eines Wertes als String zurück, z. B. 'string', 'number'.\n\nBeispiel:\nconst name = 'Ali';\nconsole.log(typeof name); // 'string'",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was ermöglicht eine Index Signature?",
    answer:
      "Objekte mit beliebigen, aber typisierten Schlüsseln zu definieren.",
    code: `{ [key: string]: number }`,
  },
  {
    categoryId: 4,
    question: "Was ist der 'Nullish Coalescing Operator' (??)?",
    answer:
      'Er prüft, ob ein Wert null oder undefined ist. Falls ja, wird ein Standardwert verwendet.\n\nBeispiel:\nconst foo = null ?? "Standard"; // Ergebnis: "Standard"',
    code: null,
  },
  {
    categoryId: 4,
    question: "Wie nennt man es, wenn TypeScript den Typ automatisch erkennt?",
    answer: "Typinferenz.",
    code: null,
  },
  {
    categoryId: 4,
    question: "Wann wird der 'as'-Operator verwendet?",
    answer:
      "Wenn wir TypeScript explizit sagen, welchen Typ ein Wert haben soll.\n\nBeispiel:\nlet id = value as string;",
    code: null,
  },
  {
    categoryId: 4,
    question:
      "Was ergibt 'keyof Person', wenn Person ein Objekt mit name und age ist?",
    answer: "'name' | 'age'",
    code: `type Person = { name: string; age: number; };`,
  },
  {
    categoryId: 4,
    question: "Was ist der Unterschied zwischen Type Aliases und Interfaces?",
    answer:
      "Interfaces beschreiben nur Objektstrukturen und können erweitert werden. Type Aliases sind flexibler und eignen sich auch für Union- oder Primitive-Typen.\n\nBeispiel:\ntype ID = string | number;\ninterface User { name: string; age: number; }",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was ist ein Literal Type in TypeScript?",
    answer:
      "Ein Literal Type erlaubt nur einen festen Wert. Beispiel: 'online' ist der einzige erlaubte Wert für diesen Typ.\n\nBeispiel:\ntype Status = 'online';\nlet userStatus: Status = 'online';",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was macht der Utility-Typ 'Partial'?",
    answer:
      "Partial macht alle Eigenschaften eines Typs optional.\n\nBeispiel:\ntype User = { name: string; age: number };\nconst u: Partial<User> = { name: 'Ali' };",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was ist der Vorteil von generischen Constraints?",
    answer:
      "Man kann Typen einschränken, damit Generics nur mit passenden Werten funktionieren.\n\nBeispiel:\nfunction log<T extends { name: string }>(obj: T) {\n  console.log(obj.name);\n}",
    code: null,
  },
  {
    categoryId: 4,
    question: "Was macht der Utility-Typ 'Record'?",
    answer:
      "Record erlaubt, Schlüssel und Wertetypen festzulegen.\n\nBeispiel:\ntype User = Record<'id' | 'name', string>; // id und name sind strings",
    code: null,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler im folgenden Code mit Generics.",
    answer:
      "- ❌ Der Typ T ist nicht deklariert\n" +
      "- ❌ Rückgabetyp fehlt\n" +
      "- ❌ 'item' wird nicht verwendet\n\n" +
      "✅ Richtig wäre:\n" +
      "function wrapInArray<T>(item: T): T[] {\n  return [item];\n}",
    code: `function wrapInArray(item) {
  return item;
}`,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler im Umgang mit Union Types.",
    answer:
      "- ❌ '|' wird mit falschem Typ verwendet\n" +
      "- ❌ Kein Typ bei 'status'\n" +
      "- ❌ 'boolean' ist kein erlaubter Wert laut Definition\n\n" +
      "✅ Richtig wäre:\n" +
      "let status: 'active' | 'inactive';\nstatus = 'active';",
    code: `let status = 'active' | 'inactive';
status = true;`,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler beim Arbeiten mit Interfaces.",
    answer:
      "- ❌ Interface beginnt mit kleinem Buchstaben (Konvention)\n" +
      "- ❌ Zuweisung fehlt ein Property\n" +
      "- ❌ Datentyp von 'alter' ist falsch\n\n" +
      "✅ Richtig wäre:\n" +
      "interface Person {\n  name: string;\n  alter: number;\n}\nconst p: Person = { name: 'Ali', alter: 30 };",
    code: `interface person {
  name: string;
  alter: string;
}
const p: person = { name: 'Ali' };`,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler im Umgang mit 'readonly'.",
    answer:
      "- ❌ readonly darf nicht nach der Initialisierung geändert werden\n" +
      "- ❌ Zugriff außerhalb der Klasse auf ein privates Feld\n" +
      "- ❌ 'readonly' sollte vor dem Typ stehen\n\n" +
      "✅ Richtig wäre:\n" +
      "class Car {\n  readonly brand: string = 'BMW';\n  constructor() {}\n}",
    code: `class Car {
  brand: string = 'BMW';
}
let c = new Car();
c.brand = 'Audi';`,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler bei der Verwendung eines Tupels.",
    answer:
      "- ❌ Typangabe fehlt\n" +
      "- ❌ Zugriff auf nicht existierenden Index\n" +
      "- ❌ Falscher Wertetyp beim zweiten Element\n\n" +
      "✅ Richtig wäre:\n" +
      "let person: [string, number] = ['Ali', 30];",
    code: `let person = ['Ali', 'dreißig'];
console.log(person[2]);`,
  },
  {
    categoryId: 4,
    question: "Finde 3 Fehler bei einer Interface-Funktion.",
    answer:
      "- ❌ Rückgabetyp fehlt\n" +
      "- ❌ Interface wird falsch geschrieben\n" +
      "- ❌ Funktion verwendet keinen Parameter\n\n" +
      "✅ Richtig wäre:\n" +
      "interface Greeter {\n  greet(name: string): string;\n}\nconst g: Greeter = {\n  greet: (name) => 'Hi ' + name,\n};",
    code: `interface greeter {
  greet(): string;
}
const g: greeter = {
  greet: () => 'Hi'
};`,
  },
];
