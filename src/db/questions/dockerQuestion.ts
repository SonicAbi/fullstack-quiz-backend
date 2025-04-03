import type { NewQuestion } from "../schemas";

export const dockerQuestion: NewQuestion[] = [
  {
    categoryId: 6,
    question: "Warum sind Container effizienter als virtuelle Maschinen?",
    answer:
      "Sie haben eine kürzere Startzeit,nutzen weniger Ressourcen und teilen sich das Betriebssystem.",
    code: null,
  },
  {
    categoryId: 6,
    question: "Was ist ein Vorteil der Portabilität von Containern?",
    answer:
      "Docker-Container garantieren, dass Anwendungen in der gleichen Umgebung ausgeführt werden, unabhängig davon, auf welchem System sie laufen",
    code: null,
  },
  {
    categoryId: 6,
    question:
      "Welcher Unterschied besteht zwischen einem Volume und einem Bind Mount?",
    answer:
      "Volumes sind persistent gespeicherte Daten vom Docker Container , während Mounts Containern den Zugriff auf Hostsysteme gewähren.",
    code: null,
  },
  {
    categoryId: 6,
    question: "Wozu werden tmpfs - Mounts angewendet?",
    answer:
      "Für sensible oder temporäre Daten, die nicht persistiert werden müssen.",
    code: null,
  },
  {
    categoryId: 6,
    question:
      "Was legt der 'FROM' Befehl im Dockerfile fest? Nenne ein Beispiel.",
    answer: "Legt das Basis - Image fest. Beispiel: node:latest",
    code: null,
  },
  {
    categoryId: 6,
    question: "Was ist die Hauptfunktion von Docker Compose?",
    answer: "Orchestrierung von Multi-Container-Anwendungen",
    code: null,
  },
  {
    categoryId: 6,
    question: "Was sind Multi - Stage Builds im Zusammenhang mit Docker?",
    answer:
      "eine nützliche Technik, um mehrere kleinere Images zu erstellen, indem sie den Build-Prozess in mehrere Schritte unterteilen. In jedem Stage kann ein unterschiedliches Basis-Image verwendet werden, und nur die benötigten Artefakte werden zum nächsten Stage übertragen.",
    code: null,
  },
  {
    categoryId: 6,
    question: "Was sind Docker Netzwerke und was ermöglichen Sie?",
    answer:
      "Docker-Netzwerke sind virtuelle Netzwerke, die Container miteinander verbinden. Sie ermöglichen es Containern, miteinander zu kommunizieren und miteinander zu interagieren, unabhängig davon, auf welchem Host sie laufen.",
    code: null,
  },
  {
    categoryId: 6,
    question:
      "Was ist der Standard im Bezug auf der Speicherung von Container Daten?",
    answer:
      "Standardmäßig sind Container Daten flüchtig, also Daten gehen verloren wenn der Container gestoppt oder gelöscht wird.",
    code: null,
  },
  {
    categoryId: 6,
    question: "Erkläre den Unterschied zwischen Container und Image",
    answer:
      "Ein Docker-Image ist eine statische Vorlage einer Softwareumgebung, die alles enthält, was zur Ausführung einer Anwendung notwendig ist,ein Docker-Container ist eine laufende Instanz eines Images.",
    code: null,
  },
  {
    categoryId: 6,
    question: "Was ist die CMD - Stage im Dockerfile?",
    answer:
      "CMD gibt den Standardbefehl an, der beim Starten des Containers ausgeführt wird.",
    code: null,
  },
];
