import type { NewQuestion } from "../schemas";

export const datenbankQuestion : NewQuestion[] = [
    {
        categoryId: 7,
        question: "Welche Elemente sind allgemein in einem ERM-Diagramm aufzufinden?",
        answer: "Entitäten,Relationen,Kardinalitäten,Attribute",
        code:null,
    },
    {
        categoryId: 7,
        question:"Welche Relationsarten sind allgemein in DB-Schemen aufzufinden?",
        answer: "1:1 , 1:N , N:M",
        code: null,
    },
    {
        categoryId: 7,
        question:"Was versteht man unter einer Relation in Datenbanken? Gebe ein Beispiel für eine Relation.",
        answer: "Eine Relation ist eine Beziehung zwischen Datenbanktabellen. Zb. Kunde und seine Addresse",
        code: null,
    },
    {
        categoryId: 7,
        question: "Was bedeutet ERM?",
        answer: "Entity Relationship Model",
        code: null,
    },
    {
        categoryId: 7,
        question: "Welche Anforderungen muss ein DB-Schema erfüllen, um in der dritten Normalform zu sein?",
        answer: "Alle Attribute müssen atomar sein, keine Tabelle darf transitive Abhängigkeiten enthalten,das Schema erfüllt die erste und zweite Normalform.",
        code : null,
    },
    {
        categoryId: 7,
        question: "Welche Eigenschaften gehören zum Begriff ACID",
        answer: "Atomarität (Atomicity), Konsistenz (Consistency) , Isolation(Isolation), Dauerhaftigkeit(Durability)",
        code : null,
    },
    {
        categoryId: 7,
        question: "Was sind Transaktionen im Bezug auf SQL Befehle?",
        answer:"Eine Transaktion kapselt einen oder mehrere SQL-Befehle, die nur als Ganzes ausgeführt werden können.",
        code: null,
    },
    {
        categoryId: 7,
        question: "Was ist der Vorteil von Transaktionen?",
        answer: "Das alle SQL-Statements erfolgreich ausgeführt werden oder dass in einem Fehlerfall alle Statements wieder rückgängig gemacht werden.",
        code : null,
    },
    {
        categoryId: 7,
        question: "Was besagt das CAP-Theorem und welche drei Eigenschaften sind für verteilte Speichersysteme wichtig?",
        answer: "Das CAP-Theorem sagt nun, dass in einem hoch skalierbaren verteilten System nur zwei der drei Eigenschaften Konsistenz, Verfügbarkeit und Partitionstoleranz erreichbar sind.",
        code: null,
    },
    {
        categoryId: 7,
        question: "Welches der drei Eigenschaften des CAP- Theorems wird am meisten geopfert?",
        answer: "Beispielsweise opfern viele Systeme die Konsistenz zugunsten von Verfügbarkeit und Partitionstoleranz, da kleine Inkonsistenzen in vielen Anwendungen akzeptabel sind.",
        code:null,
    },
    {
        categoryId: 7,
        question: "Was benötigen NO - SQL DB's NICHT im Gegensatz zu relationalen Datenbanken?",
        answer: "Diese Datenbanken benötigen keine festgelegten Tabellenschemata und versuchen Joins zu vermeiden.",
        code: null,
    },
    {
        categoryId: 7,
        question:"Was ist der Zweck eines ORM?",
        answer:"Ein ORM (Object-Relational Mapping) ermöglicht es, Daten aus einer relationalen Datenbank in Objekte zu mappen und umgekehrt. Dadurch kann man in einer Anwendung mit Objekten arbeiten, anstatt direkt SQL-Queries zu schreiben.",
        code:null,
    },
    {
        categoryId: 7,
        question: "Was passiert, wenn man Beziehungen nicht in beide Richtungen definiert? (Drizzle-ORM)",
        answer: "Wenn Beziehungen nicht in beide Richtungen definiert werden, kann es zu Inkonsistenzen und Fehlern bei der Abfrage oder Aktualisierung der Daten kommen.",
        code:null,
    },
    {
        categoryId: 7,
        question: "Was sind die Vorteile von Axios im Gegenzug zu Fetch bei Datenbankanfragen?",
        answer:"Automatisches Parsen von JSON,Automatisches abfangen von Fehlern,besseres Handling von Query Parametern.",
        code:null,
    },
    {
        categoryId: 7,
        question: "Was ist der Hauptunterschied zwischen der Service-Schicht und der Repository-Schicht?",
        answer:"Die Service-Schicht enthält die Geschäftslogik der Anwendung und nutzt Repositories für den Datenbankzugriff, während die Repository-Schicht für die direkte Durchführung der Datenbankabfragen (CRUD-Operationen) zuständig ist.",
        code:null,
    },
    {
        categoryId: 7,
        question:"Nenne zwei Vorteile der Repository-Servie-Architektur.",
        answer:"Bessere Wartbarkeit & Erweiterbarkeit\nEinfacheres Testen der einzelnen Komponenten.",
        code:null
    },
    {
        categoryId: 7,
        question: "Aus welchen Komponenten besteht eine typische Repository-Service Architektur?",
        answer:"Repositories,Services,Routes,ErrorMiddleware,index.ts",
        code:null,
    }
]