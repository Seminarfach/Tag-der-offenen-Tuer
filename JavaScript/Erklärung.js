
// Erklärung der Spielwelt


// Hilfsfunktion zum Zeichnen der Bilder 
function draw() {

    ctx.drawImage(
        this.image, 
        this.width, this.height, // Höhe und Breite des Bildes 
        this.position.x, this.position.y, // Position auf dem Canvas
    );

}

// Erstellung eines neuen Bild-Objektes
const SchulhofImage = new Image() 

//setzen des Dateipfades
SchulhofImage.src = './img/Schulhof/Schulhof.png'

// Erstellung einer Instanz der Sprite-Klasse
const Schulhof = new Sprite ({
    // Koordinaten der Position 
    position: {
    x: 200,
    y: 400,
    },
    // angeben des Bildes
    image: SchulhofImage

})

// Funktion zum animieren des Schulhofes
function animateSchulhof() {

    // Methode zum Wiederaufruf 
    window.requestAnimationFrame(animateSchulhof)

    // Schulhofhintergrund zeichnen
    Schulhof.draw()

}

// Klasse "Sprite" für die Erstellung von Bildern
class Sprite {

    // Hilfsfunktion zum Zeichnen der Bilder 
    draw() { 

        // Methode zum Zeichnen eines Bildes
        ctx.drawImage(
            this.image, // aktuelles Bild 
            this.width, this.height, // Höhe und Breite des Bildes 
            this.position.x, this.position.y, // Position auf dem Canvas
            
        );
    }
}

// Hilfsfunktion Animate
function animate() { 
    
    // Methode zum erneuten Aufruf der Funtion animate
    window.requestAnimationFrame(animate)

    // Zeichnen eines Objektes
    object.draw()
}



    
// ----------------------------------------------------------------------------------------------------

// Erklärung der Spielerbewegung 

// Hinzufügen eines EventListeners für
// den Button
UpButton.addEventListener()

// Klick als Auslöser für ein Ereignis
UpButton.addEventListener("click", () => {

    // Ausführen des Ereignisses:
    // Bewegung der Eule in Richtung Oben

})


// Zugriff auf den entsprechenden Button und
// Zuweisung der Konstante "UpButton"
const UpButton = document.getElementById('movingUp')

// Klick als Auslöser für ein Ereignis
UpButton.addEventListener("click", () => {

    //Wert der y-Koordinate des Hintergrundes
    //wird um drei Pixel erhöht
    background.position.y += -3

    //Wert der x-Koordinate des
    //Hintergrundes bleibt erhalten
    background.position.x += 0
})

// Funktion zur Kollisionserkennug 
function rectangularCollision ([rectangle1, recatangel2]){

}


// Prüft die Überschneidung zwischen Spielfigur (retangle1)
// und einem Kollisionsblock (retangle2)
function rectangularCollision({rectangle1, rectangle2}){

     // Prüft horizontale Überschneidung:
    const horizontalCollision = (

        // rechte Seite von R1 trifft auf linke Seite von R2
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        
         // linke Seite von R1 triff auf rechte Seite von R2
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width 
    )

     // Prüft vertikale Überschneidung:
    const verticalCollision = (

         // untere Seite von R1 trifft obere Seite von R2
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        
         // obere Seite von R1 trifft untere Seite von R2 
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y 
    )
    
    // Wenn beide Bedingungen erfüllt ist eine Kollision erkannt wurden
    return horizontalCollision && verticalCollision;

}

// ----------------------------------------------------------------------------------------------------

// Erklärung Rätselmechanik


// RätselManager zur Verwalltung der Rätsel
class RiddleManager {}


// Funktion zum Starten des Rätsels 
function startriddle(riddlenName) {

    // Starten des Timers
    startTimer();

    // Alle Antwortmöglichkeiten (vier) 
    // erhalten einen Button
    // => Code wird viermal wiederholt aufgerufen
    answers.forEach((antwort) => {

        // Neuer Button wird erzeugt 
        const button = document.createElement("button"); 

        // Der Text innerhalb des Buttons wird auf die 
        // entsprechende Antwort gesetzt 
        button.textContent = antwort;  

        // Verknüpfung mit einem EventListener
        button.addEventListener("click", () => {
            // Antwort auswerten 
        });
            
        // Der Button wird dem Interface hinzugefügt
        answerContainer.appendChild(button);
    });
}

let insgesamteZeit 
let benötigteZeit
// Überprüfung der Antwort 
if (selectedAnswer === correctAnswer) { // Wenn Antwort korrekt, mache ...

} else { // sonst (Antwort falsch), mache ...

}

// Wenn Antwort korrekt:
if (selectedAnswer === correctAnswer) { 

    // Timer wird gestoppt 
    stopTimer();

    // Die benötigte Zeit wird in einer 
    // globalen Variable gespeichert
    insgesamteZeit = benötigteZeit;

    // Transition zurück in den Raum
    transition (startLevel(currentLevel));

}
else { // Wenn Antwort falsch:

    // Kurze Rückmeldung über das Interface
    document.getElementById('Interface').textContent = 'Falsch, bitte versuche es nochmal!';

    // alle Antwortmöglichkeiten werden umsortiert
    sortButtons();

    // Rätsel wird fortgesetzt 
    continueRiddle(currentRiddle);
}

function sortButtons() {
    const answers = document.getElementById('Answers');
    const buttons = Array.from(answers.children);
    
    buttons.sort(() => Math.random() - 0.5);
    buttons.forEach(button => answers.appendChild(button));

    console.log("Buttons neu gemischt.");
}

// Freischalten der Hinweise 
// wird für jeden Hinweis (3) wiederholt
hintTimes.forEach((zeitpunkt) => {

    // Wenn ein Zeitpunkt erreicht ist, dann:  
    if (benötigteZeit === zeitpunkt) {;
        
        // greife auf aktuellen HinweisButton zu
        const hinweisButton = document.getElementById('Hinweis');
        
        // ermögliche das Anklicken
        hinweisButton.disabled = false;
       
        // ändere die Hintergrundfarbe des Button 
        // => sichtbare Erkennung 
        hinweisButton.style.backgroundColor ='#c6b9a6'

        // Spiel einen Ton ab
        // => akustische Erkennung
        audio.HinweiseErscheinen.play()
        
    }
});

function continueRiddle () {}

function startLevel() {}

function transition () {}