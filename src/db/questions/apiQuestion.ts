import type { NewQuestion } from "../schemas";

export const apiQuestions: NewQuestion[] = [
  {
    categoryId: 1,
    question: "Was ist eine API?",
    answer:
      "Eine API (Application Programming Interface) ist eine Programmierschnittstelle, die es verschiedenen Anwendungen ermöglicht miteinander zu kommunizieren.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Welche 4 HTTP-Methoden werden häufig genutzt?",
    answer: "GET, POST, PUT, DELETE",
    code: null,
  },
  {
    categoryId: 1,
    question:
      "Was für API-Authentifizierungs- und Autorisierungsmethoden kennst du?",
    answer: "API-KEY, Basic Authentication, OAuth 2.1, JWT (JSON WEB TOKENS)",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was sind die Nachteile von API-KEYS?",
    answer:
      "- Geringe Sicherheit, da leicht abfangbar,\n- Keine Möglichkeit zur Nutzer Autorisierung, da der API-KEY (in der Regel) für die gesamte API gilt.",
    code: null,
  },
  {
    categoryId: 1,
    question:
      "Wie sollte deine Ordnerstruktur mit der MVC-Architektur aussehen, am Beispiel eines Produkte Models?",
    answer:
      "deinProjekt/\n    ├── controllers/\n        └── products-controller.js\n    ├── models/\n    │       └── product-model.js\n    ├── routes/\n        └── product-routes.js\n    ├── index.js\n    └── package.json",
    code: null,
  },
  {
    categoryId: 1,
    question:
      "Was bedeutet Statelessness (Zustandslosigkeit) im Zusammenhang mit einem Server?",
    answer:
      "Der Server speichert keine Informationen über frühere Anfragen. Jeder Request ist eigenständig und unabhängig und muss alle Informationen beinhalten, die für die Bearbeitung nötig sind.",
    code: null,
  },
  {
    categoryId: 1,
    question: "In welchen Format werden Ressourcen repräsentiert?",
    answer: "JSON, ggf. auch XML",
    code: null,
  },
  {
    categoryId: 1,
    question:
      "Welche Zustände befinden sich hinter folgenden Statuscodes?\n- 2XX\n- 3XX\n- 4XX\n- 5XX",
    answer:
      "2XX = Erfolge, 3XX = Umleitungen, 4XX = Client-Fehler, 5XX = Server-Fehler",
    code: null,
  },
];
