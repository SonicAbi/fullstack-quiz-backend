import type { NewQuestion } from "../schemas";

export const kotlinQuestion : NewQuestion[] = [
    {
        categoryId: 8,
        question: "Was ist der Unterschied zwischen 'var' und 'val' ?",
        answer: "Var ist veränderbar, val ist nach Zuweisung nicht mehr änderbar.",
        code: null,
    },
    {
        categoryId: 8,
        question: "Wie nennt sich die Alternative zu 'switch' von Typescript in Kotlin?",
        answer: "when.",
        code:null,
    },
    {
        categoryId: 8,
        question: "Mit welchem Schlüsselwort wird eine Funktion in Kotlin deklariert?",
        answer: "fun",
        code: null,
    },
    {
        categoryId: 8,
        question: "Wo liegt der Unterschied zwischen '==' und '===' in Kotlin?",
        answer:" '==' prüft auf strukturelle Gleichheit, '===' prüft auf Referenzgleicheit (gleiche Speicheraddresse) ",
        code: null,
    },
    {
        categoryId: 8,
        question: "Was ist der Unterschied zwischen 'require' und 'check' ?",
        answer: " 'require' wird in der Regel benutzt um Vorbedingungen zu prüfen. 'check' hingegen für allgemeine Prüfungen, ob der Code in einem erlaubten Zustand ist.",
        code: "require(b != 0) {'Division by zero'}",
    },
    {
        categoryId: 8,
        question: "Was versteht man unter Preconditions in Kotlin?",
        answer:"Preconditions (require,check) sind Statements die überprüfen, ob der Code in einem gültigen Zustand ist, bevor er ausgeführt wird.",
        code: null,
    },
    {
        categoryId: 8,
        question: "Wozu gibt es in Kotlin 2 Arten von Collections ? Zb. map und mutableMap?",
        answer: "Mutable sagt, dass diese Collection modifizierbar also veränderbar ist. Ohne das mutable ist sie nicht veränderbar.",
        code: null,
    },
    {
        categoryId: 8,
        question: "Wie kann ich in einer For - Schleife rückwärts iterieren in Kotlin?",
        answer: "Eine for-Schleife kann mittels downTo rückwärts iterieren.",
        code:"for (i in 3 downTo 1) {}",
    },
    {
        categoryId: 8,
        question: "Was ist die Ausgabe dieses Codes? for (i in 1..10 step 2) {println(i)}",
        answer: "1 3 5 7 9 ",
        code: null,
    },
    {
        categoryId: 8,
        question: "Funktioniert folgender Code in Kotlin? => val x = 1\nval text = when (x) {\n    1 -> \"x ist 1\"\n    2 -> \"x ist 2\"\n    else -> \"x ist weder 1 noch 2\"\n}",
        answer:"Ja,das when-Statement kann auch als Ausdruck verwendet werden, um Variablen einen Wert zuzuweisen",
        code:null,
    },
    {
        categoryId: 8,
        question: "Funktioniert folgender Code in Kotlin? => val maxAnzahl = if (fischAnzahl > robbenAnzahl) fischAnzahl else robbenAnzahl",
        answer:"Ja,In Kotlin ist if nicht nur eine Kontrollstruktur, sondern auch ein Ausdruck (Expression), d.h. er kann direkt einen Wert zurückgeben.",
        code:null,
    },
    {
        categoryId: 8,
        question: "Wobei helfen Module in Kotlin?",
        answer: "Module helfen dabei, den Code in logische Einheiten zu unterteilen und die Wiederverwendbarkeit zu verbessern.",
        code : null,
    }
    
]