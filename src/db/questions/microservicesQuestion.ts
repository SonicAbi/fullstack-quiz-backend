import type { NewQuestion } from "../schemas";

export const microservicesQuestion : NewQuestion[] = [
    {
        categoryId: 9,
        question: "Was versteht man unter Microservices?",
        answer: "Microservices sind ein architektonischer und domainbezogener Ansatz, der große Software in kleine, unabhängige Services unterteilt. Jeder dieser Services kommuniziert untereinander via wohl definierter APIs.",
        code : null,
    },
    {
        categoryId: 9,
        question: "Microservices folgen Architekturprinzipien, nenne mindestens 3 davon.",
        answer: "Autonomie,Spezialisierung,Agilität,Resilienz,Flexibilität,Technologische Freiheit,Einfache Bereitstellung.",
        code: null,
    },
    {
        categoryId: 9,
        question: "Erkläre das Architekturprinzip 'Resilienz'.",
        answer:"Resilienz ist die Fähigkeit eines Systems, Fehler oder Störungen zu erkennen und sich von ihnen zu erholen, ohne die gesamte Anwendung zu beeinträchtigen, sodass weitere Services unabhängig laufen können.",
        code:null,
    },
    {
        categoryId: 9,
        question: "Welche 3 Hauptkonzepte gehören zur hexagonalen Architektur?",
        answer: "Entities,Repositories,Interactors",
        code:null,
    },
    {
        categoryId: 9,
        question: "Was sind die Hauptvorteile von Microservices?",
        answer: "Skalierbarkeit einzelner Services,Flexibilität in Technologien,Fehlerisolierung und schnellere Entwicklung.",
        code:null,
    },
    {
      categoryId: 9,
      question: "Was ist der Unterschied zwischen einer monolithischen Architektur und einer Microservice-Architektur?",
      answer:"In einer monolithischen Architektur ist die gesamte Anwendung in einer einzigen Codebasis und einem einzigen Prozess zusammengefasst, während in einer Microservice-Architektur die Anwendung in mehrere, unabhängige Services unterteilt ist.",
      code:null,
    },
    {
        categoryId: 9,
        question:"Was versteht man unter dem Begriff 'Service Discovery' in einer Microservice-Architektur?",
        answer:"Service Discovery bezieht sich auf den Mechanismus, durch den Microservices sich gegenseitig finden können, um miteinander zu kommunizieren, ohne dass die genaue Adresse (Port) des anderen Services bekannt sein muss",
        code:null,
    },
    {
        categoryId: 9,
        question: "Was ist eine typische Herausforderung bei der Implementierung von Microservices?",
        answer:" Eine Herausforderung ist die Komplexität der Verwaltung und Orchestrierung vieler kleiner Dienste.",
        code:null,
    },
    {
        categoryId: 9,
        question: "Welche Architektur (Monolith oder Microservice) würdest du einem 'E-Commerce Shop mit flexibler Zahlungsabwicklung' zuordnen und warum?",
        answer:"Microservice,da flexible Skalierung eines einzelnen Bausteins (bei hoher Anfrage zb.) und unabhängige Weiterentwicklung neuer Zahlungssysteme.",
        code: null,
    },
    {
        categoryId: 9,
        question: "Worüber kommunizieren einzelne Services miteinander?",
        answer:"Häufig werden APIs von Microservices als REST APIs implementiert, d.h. die Kommunikation erfolgt über den Austausch von JSON-Dokumenten über das HTTP-Protokoll.",
        code:null,
    }

]