import type { NewQuestion } from "../schemas";

export const reactQuestion: NewQuestion[] = [
  {
    categoryId: 3,
    question: "Erkläre den Unterschied zwischen Props und State",
    answer:
      "Props (Eigenschaften) sind unveränderliche Daten, die von der Elternkomponente an die Kindkomponente übergeben werden. Sie dienen zur Kommunikation zwischen Komponenten. State (Zustand) hingegen ist veränderbar und wird verwendet, um den internen Status einer Komponente zu verwalten und dynamische Änderungen darzustellen. Wenn Props oder State sich ändern, wird die Komponente neu gerendert.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Was versteht man unter dem Begriff 'Conditional Rendering', nenne außerdem 2 Beispiele.",
    answer:
      "Unter 'Conditional Rendering' versteht man in React das bedingte Anzeigen von Komponenten oder Elementen basierend auf bestimmten Bedingungen. Es ermöglicht, verschiedene Inhalte abhängig vom Zustand oder den Props einer Komponente darzustellen. Zb. mithilfe des ternären Operators oder mit dem && - Operator.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Was versteht man unter 'Pure Functions'?",
    answer:
      "Pure Functions sind Funktionen, die keine Seiteneffekte haben. Das bedeutet, dass sie keine Variablen verändern, die außerhalb ihres Scopes definiert wurden.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Was ist der useEffect-Hook und wofür wird er verwendet?",
    answer:
      "Der Hook useEffect ermöglicht es uns, Side-Effects in einer React-Komponente zu definieren. Side-Effects sind z.B. das Abonnieren von Events, oder das Laden von Daten.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Wie beeinflusst das Vorhandensein oder Fehlen des Abhängigkeitsarrays im useEffect-Hook das Ausführungsverhalten des Effekts?",
    answer:
      "Kein Abhängigkeitsarray: Der Effekt wird nach jedem Rendern der Komponente ausgeführt, Leeres Abhängigkeitsarray ([]): Der Effekt wird nur einmal ausgeführt, nämlich nach dem ersten Rendern der Komponente, Abhängigkeitsarray mit spezifischen Variablen: Der Effekt wird nur dann ausgeführt, wenn sich eine der im Array aufgeführten Abhängigkeiten ändert.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Was ist der Unterschied zwischen useRef und useState?",
    answer:
      "useRef speichert einen Wert, der über Renderzyklen hinweg persistent bleibt, ohne ein Re-Rendering zu verursachen. useState speichert einen Wert, dessen Änderung ein Re-Rendering der Komponente auslöst.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Was ist der Vorteil von Custom Hooks?",
    answer:
      "Custom Hooks ermöglichen das Wiederverwenden von Logik zwischen verschiedenen Komponenten, ohne den Code zu duplizieren.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Wann sollte man den State verwenden, anstatt eine Variable zu definieren?",
    answer:
      "Bei dynamischen Daten, wenn der Zustand einer Komponente sich über verschiedene Renderzyklen hinweg ändert, besonders bei interaktiven Anwendungen.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Wann nutzt man useQuery und wann Zustand?",
    answer:
      "useQuery nutzt man, um mit der API zu kommunizieren, Zustand wird für den lokalen Speicher verwendet.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Du musst die Produkt ID aus einer URL herausziehen, welchen Hook nutzt du?",
    answer: "useParams()",
    code: null,
  },
  {
    categoryId: 3,
    question: "Nenne die 3 Kernkonzepte von React Query.",
    answer:
      "Datenabfragen (useQuery), Mutationen (useMutation), Query Client (useQueryClient).",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Was passiert, wenn der QueryClientProvider in einer React-Anwendung vergessen wird, die React Query verwendet? Erkläre auch, warum der QueryClientProvider notwendig ist.",
    answer:
      "Wenn der QueryClientProvider fehlt, können die useQuery- und useMutation-Hooks nicht auf den Query Client zugreifen. Das führt zu Fehlern, da keine API-Anfragen durchgeführt, Daten nicht gecacht oder aktualisiert werden können. Der QueryClientProvider ist notwendig, um den Query Client in der gesamten Anwendung bereitzustellen, sodass React Query korrekt funktioniert, Caching und Refetching möglich sind.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Was ist der Utility-First-Ansatz von Tailwind CSS und wie unterscheidet er sich von traditionellen CSS-Frameworks?",
    answer:
      "Der Utility-First-Ansatz von Tailwind CSS bedeutet, dass anstelle von vordefinierten Komponenten oder Stilen, wie in traditionellen CSS-Frameworks, kleine, wiederverwendbare Utility-Klassen verwendet werden, um das Design direkt im HTML festzulegen.",
    code: null,
  },
  {
    categoryId: 3,
    question:
      "Was wird in react-router-dom mit :id in einer Route wie /user/:id bezeichnet?",
    answer:
      ":id ist ein dynamischer URL-Parameter oder Platzhalter, der durch einen tatsächlichen Wert (z. B. /user/1) ersetzt wird.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Was ist dynamisches Routing in React?",
    answer:
      "Dynamisches Routing ermöglicht es, Routen zur Laufzeit anhand von URL-Parametern zu definieren.",
    code: null,
  },
  {
    categoryId: 3,
    question: "Finde 3 Fehler im folgenden React-Komponenten-Code.",
    answer:
      "- ❌ 'app' sollte groß geschrieben werden (React-Komponenten starten mit Großbuchstaben)\n" +
      "- ❌ Es fehlt das return-Statement\n" +
      "- ❌ JSX muss ein einziges Element zurückgeben\n" +
      "\n✅ Richtig wäre:\n" +
      "function App() {\n" +
      "  return (\n" +
      "    <div>\n" +
      "      <h1>Hallo</h1>\n" +
      "      <p>Willkommen</p>\n" +
      "    </div>\n" +
      "  );\n" +
      "}",
    code: `function app() {
  <h1>Hallo</h1>
  <p>Willkommen</p>
}`,
  },
  {
    categoryId: 3,
    question: "Was stimmt in diesem useEffect-Code nicht? Finde 3 Fehler.",
    answer:
      "- ❌ 'useeffect' ist falsch geschrieben (korrekt: useEffect)\n" +
      "- ❌ Der Codeblock muss in eine Funktion (Callback) gelegt werden\n" +
      "- ❌ Es fehlt das Dependency-Array\n" +
      "\n✅ Richtig wäre:\n" +
      "useEffect(() => {\n" +
      '  console.log("Lade Daten");\n' +
      "}, []);",
    code: `useeffect(() => {
  console.log("Lade Daten");
})`,
  },
  {
    categoryId: 3,
    question: "Finde 3 Fehler im Umgang mit useState.",
    answer:
      "- ❌ useState ist nicht importiert\n" +
      "- ❌ useState gibt ein Array zurück, kein direktes Objekt\n" +
      "- ❌ Der State wird direkt verändert – das ist nicht erlaubt\n" +
      "\n✅ Richtig wäre:\n" +
      'import { useState } from "react";\n' +
      "const [product, setProduct] = useState({});\n" +
      'setProduct({ ...product, title: "Neu" });',
    code: `function Product() {
  const product = useState(null);
  product.title = "Neu";
}`,
  },
  {
    categoryId: 3,
    question: "Finde 3 Fehler beim Arbeiten mit Props.",
    answer:
      "- ❌ props.title wird als String statt als Ausdruck verwendet\n" +
      "- ❌ Es fehlt das return-Statement\n" +
      "- ❌ Kein Wrapper-Element (JSX erwartet ein einzelnes Element)\n" +
      "\n✅ Richtig wäre:\n" +
      "function Title(props) {\n" +
      "  return <h1>{props.title}</h1>;\n" +
      "}",
    code: `function Title(props) {
  <h1>props.title</h1>
}`,
  },
  {
    categoryId: 3,
    question: "Was ist an diesem Tailwind-Setup falsch? Nenne 3 Dinge.",
    answer:
      "- ❌ Der Komponentenname sollte groß geschrieben sein ('Header')\n" +
      "- ❌ In JSX muss 'className' statt 'class' verwendet werden\n" +
      "- ❌ 'text-bold' ist keine gültige Tailwind-Klasse (korrekt: 'font-bold')\n" +
      "\n✅ Richtig wäre:\n" +
      "function Header() {\n" +
      '  return <h1 className="font-bold">Hallo</h1>;\n' +
      "}",
    code: `function header() {
  return <h1 class="text-bold">Hallo</h1>;
}`,
  },
];
