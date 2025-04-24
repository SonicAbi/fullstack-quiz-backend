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
    question: "Was für Authentifizierungs- und Autorisierungsmethoden gibt es?",
    answer: "API-Key, Basic Auth, OAuth 2.1 und JWT (JSON Web Token)",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was sind Nachteile von API-Keys?",
    answer: "Sie sind unsicher und erlauben meist keine Benutzer-Zuordnung.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Wie sieht eine MVC-Ordnerstruktur aus (Beispiel: Produkt)?",
    answer:
      "deinProjekt/\n    ├── controllers/\n        └── products-controller.js\n    ├── models/\n    │       └── product-model.js\n    ├── routes/\n        └── product-routes.js\n    ├── index.js\n    └── package.json",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was bedeutet Statelessness bei einem Server?",
    answer: "Der Server speichert nichts über frühere Anfragen.",
    code: null,
  },
  {
    categoryId: 1,
    question: "In welchem Format werden API-Daten übertragen?",
    answer: "Meistens in JSON, manchmal in XML.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was bedeuten diese Statuscodes?\n- 2XX\n- 3XX\n- 4XX\n- 5XX",
    answer:
      "2XX = Erfolg, 3XX = Umleitung, 4XX = Client-Fehler, 5XX = Server-Fehler",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was bedeutet REST bei APIs?",
    answer:
      "REST ist ein Prinzip, bei dem Daten über klare URLs und HTTP-Methoden gesendet werden.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist ressourcenorientiertes API-Design?",
    answer:
      "URLs stehen für Objekte wie /users oder /products. Aktionen erfolgen über HTTP-Methoden.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist HATEOAS?",
    answer:
      "HATEOAS steht für 'Hypermedia as the Engine of Application State'. Es ist ein REST-Prinzip: Die API liefert mit den Daten Links, über die der Client erfährt, was er als Nächstes tun kann.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist der Unterschied zwischen PUT und PATCH?",
    answer: "PUT ersetzt alles, PATCH ändert nur bestimmte Felder.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Wann verwendet man GraphQL statt REST?",
    answer: "Wenn man gezielt Daten abfragen will oder weniger Overhead will.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist gRPC?",
    answer: "Ein schnelles API-Protokoll, das für Microservices geeignet ist.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist der Vorteil von tRPC?",
    answer: "tRPC ist typsicher und direkt mit TypeScript verbunden.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was bedeuten HTTP-Statuscodes der Reihe 4XX?",
    answer: "Fehler vom Client, z. B. 400, 401, 403, 404",
    code: null,
  },
  {
    categoryId: 1,
    question: "Wofür wird Postman verwendet?",
    answer: "Zum Testen und Dokumentieren von APIs.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was bedeutet Cachebarkeit bei REST?",
    answer: "Antworten können gespeichert werden, um Server zu entlasten.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Wofür steht der Statuscode 201?",
    answer: "Eine neue Ressource wurde erfolgreich erstellt.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was macht der Accept-Header?",
    answer: "Er sagt dem Server, welches Format der Client erwartet.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist Rate Limiting?",
    answer: "Begrenzt die Anzahl an API-Aufrufen in einem Zeitraum.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist ein OpenAPI-Spezifikationsdokument?",
    answer:
      "Ein Plan, der beschreibt, wie eine API funktioniert – meist in YAML oder JSON.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist der Zweck von API-Versionierung?",
    answer: "Damit neue API-Versionen alte nicht kaputt machen.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Wofür nutzt man OpenAPI?",
    answer: "Um APIs klar zu beschreiben und automatisch zu dokumentieren.",
    code: null,
  },
  {
    categoryId: 1,
    question: "Was ist der Unterschied zwischen Swagger und OpenAPI?",
    answer: "OpenAPI ist der Standard. Swagger ist ein Tool, das ihn nutzt.",
    code: null,
  },
];
