import type { NewQuestion } from "../schemas";

export const azureQuestion : NewQuestion[] = [
    {
        categoryId:12,
        question:"Was ist der Unterschied zwischen einer zustandsbehafteten und einer zustandslosen Anwendung?",
        answer:"Eine zustandsbehaftete Anwendung speichert den Zustand (Daten) zwischen den Anfragen, sodass der Zustand nach einer Änderung (z.B. einer Berechnung) für zukünftige Anfragen genutzt werden kann (zb.Taschenrechner),während eine zustandslose Anwendung den Zustand nicht speichert.Das bedeutet, dass bei einer zustandslosen Anwendung jede Anfrage unabhängig von vorherigen Anfragen behandelt wird.",
        code:null,
    },
    {
        categoryId:12,
        question:"Wozu werden Loadbalancer genutzt?",
        answer:"Ein Load Balancer (Lastverteiler) ist ein System, das den eingehenden Datenverkehr auf mehrere Server oder Instanzen verteilt, um eine gleichmäßige Auslastung und eine optimale Leistung der gesamten Anwendung zu gewährleisten.",
        code:null,
    },
    {
        categoryId:12,
        question:"Was ist der Unterschied zwischen einem Azure 'Storage Account' und einem 'Storage Container'?",
        answer:"Ein Storage Account ist eine zentrale Ressource in Azure, die als Namespace fungiert und verschiedene Storage-Dienste verwaltet.Ein Storage Container ist eine Untereinheit innerhalb eines Storage Accounts und dient der Organisation und Verwaltung von BLOBs (Dateien). Jeder Container kann mehrere BLOBs enthalten und ermöglicht das Erstellen, Lesen, Schreiben und Löschen von Dateien.",
        code:null
    },
    {
        categoryId:12,
        question:"Was ist ein 'BLOB' im Kontext von Cloud-Speicher und Azure?",
        answer:"Ein BLOB (Binary Large Object) bezeichnet eine Datei, die in einem Cloud-Speicher gespeichert wird. In Azure wird der BLOB-Speicher verwendet, um verschiedene Arten von Daten wie Dokumente, Bilder, Videos oder andere große Datenmengen zu speichern",
        code:null,
    }
]