import type { NewQuestion } from "../schemas";

export const androidQuestion : NewQuestion[] = [
    {
        categoryId: 10,
        question: "Wie nennt sich der Einstiegspunkt für Android Apps?",
        answer: "onCreate()",
        code:null,
    },
    {
        categoryId: 10,
        question: "Was bedeutet die Annotation @Composeable?",
        answer: "Die Annotation @Composable kennzeichnet eine Funktion in Jetpack Compose, die eine UI erstellt. Funktionen, die mit dieser Annotation versehen sind, werden von Jetpack Compose verwendet, um UI-Komponenten zu definieren und zu rendern.",
        code:"@Composable \n fun Greeting(name: String) { \n Text(text = `Hello, $name!`) } ",
    },
    {
        categoryId: 10,
        question: "Was gibt es für Besonderheiten bei composeable Funktionen?",
        answer:"Die Annotation @Composeable, anders als bei normalen Kotlin Funktionen wird diese Funktion mit einem Großbuchstaben angefangen und hat außerdem keinen Rückgabewert.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Welche Methoden werden im Android Activity Lifecycle aufgerufen, wenn eine Activity den Fokus verliert?",
        answer:"Wenn eine Activity den Fokus verliert, werden die Methoden onPause() und onStop() aufgerufen.",
        code:null,
    },
    {
        categoryId: 10,
        question:"Warum ist es wichtig, auf den Activity Lifecycle zu achten?",
        answer: "Wenn du nicht richtig auf die Zustandsänderungen deiner App reagierst, kann das z. B. zu folgenden Problemen führen: Seltsames Verhalten beim Rotieren des Bildschirms \nDatenverlust beim Verlassen und Zurückkehren zur App\nHöherer Akkuverbrauch, weil Prozesse im Hintergrund weiterlaufen.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Welche Vorteile bietet das Logging des Activity Lifecycle mit Logcat?",
        answer: "Das Logging des Activity Lifecycles mit Logcat ermöglicht es Entwicklern, nachzuvollziehen, welche Lifecycle-Methoden zu welchem Zeitpunkt aufgerufen werden.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Aus welchen Schichten besteht eine typische App?",
        answer:"UI Layer & Data Layer , optional dazwischen: Domain Layer.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Was ist ein Viewmodel?",
        answer: "Ein ViewModel ist eine spezielle Klasse aus den Android Architecture Components, die dazu dient, UI-relevante Daten zu speichern.",
        code: null
    },
    {
        categoryId: 10,
        question: "Was versteht man unter Navigation in Jetpack Compose und welche Komponenten sind dafür erforderlich?",
        answer:"Navigation in Jetpack Compose ermöglicht es, zwischen verschiedenen Bildschirmen zu wechseln. Dafür wird der NavController zusammen mit der NavHost-Komponente verwendet.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Was ist der Unterschied zwischen navigate und popBackStack in der Navigation von Jetpack Compose?",
        answer:"Die navigate-Funktion wird verwendet, um zu einem neuen Ziel zu wechseln und es dem Navigations-Stack hinzuzufügen. Die popBackStack-Funktion wird verwendet, um den aktuellen Bildschirm zu entfernen und zum vorherigen Seite im Stack zurückzukehren."
    },
    {
        categoryId: 10,
        question: "Wann tritt eine Konfigurationsänderung im Android Lifecycle ein?",
        answer:"Eine Konfigurationsänderung tritt ein, wenn sich der Gerätezustand stark ändert – z.B. durch Bildschirmrotation oder Sprachwechsel.",
        code:null,
    },
    {
        categoryId: 10,
        question: "Warum muss man rememberSaveable anstelle von remember verwenden, wenn der UI-Zustand bei Konfigurationsänderungen erhalten bleiben soll?",
        answer:"Weil remember den Zustand über Konfigurationsänderungen hinaus nicht speichert, also der Zustand geht verloren.",
        code:null,
    }
]