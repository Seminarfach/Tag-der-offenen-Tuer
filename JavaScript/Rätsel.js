
import { getSchwierigkeitsGrad } from './Spielsteuerung.js';

const SchwierigkeitsGrad = getSchwierigkeitsGrad.riddle
console.log(SchwierigkeitsGrad)

const createImage = (src) => {
    const img = new Image();
    img.src = src;
    return img;
};

const getAnswersByDifficulty = (name, level) => {
    const answerSets = {
        "Roboter": {
            "Leicht": { correct: "A2", choices: ["A2", "B2", "A1", "D3"] },
            "Mittel": { correct: "B1", choices: ["B1", "A1", "C2", "D4"] },
            "Schwer": { correct: "B2", choices: ["B2", "A1", "C2", "D1"] }
        },
        "Scratch": {
            "Leicht": { correct: "C B D A E", choices: ["C B D A E", "B D A E C", "C D B A E", "E C A B D"] },
            "Mittel": { correct: "C B D A E", choices: ["C B D A E", "B D A E C", "C D B A E", "E C A B D"] },
            "Schwer": { correct: "C B D A E", choices: ["C B D A E", "B D A E C", "C D B A E", "E C A B D"] }
        }, 
        "Krypto": {
            "Leicht": { correct: "YVDH", choices: ["YVAJ", "YVDH", "BGDH", "BGAJ"] },
            "Mittel": { correct: "BYGK", choices: ["BYIP", "BYGK", "XAGK", "XAIP"] },
            "Schwer": { correct: "EBJN", choices: ["EBIO", "EBJN", "FAJN", "FAIO"] }
        }, 
        "Sudoku": {
            "Leicht": { correct: "x:1 | y:2 | z:2", choices: ["x:1 | y:2 | z:2", "x:1 | y:2 | z:3", "x:3 | y:3 | z:2", "x:1 | y:1 | z:2"] },
            "Mittel": { correct: "x:1 | y:3 | z:4", choices: ["x:1 | y:3 | z:4", "x:1 | y:2 | z:2", "x:3 | y:4 | z:2", "x:3 | y:2 | z:1"] },
            "Schwer": { correct: "w:1 | x:4 | y:4 | z:2", choices: ["w:1 | x:4 | y:4 | z:2", "w:4 | x:3 | y:2 | z:5", "w:1 | x:2 | y:6 | z:2", "w:5 | x:1 | y:3 | z:2"] }
        }, 
        "KI Teil 1": {
            "Teil 1 Leicht": { correct: "5 | 3 | 10", choices: ["5 | 3 | 10", "5 | 4 | 11", "3 | 5 | 9", "2 | 7 | 15"] },
            "Teil 1 Mittel": { correct: "5 | 3 | 10", choices: ["5 | 3 | 10", "5 | 4 | 11", "3 | 5 | 9", "2 | 7 | 15"] },
            "Teil 1 Schwer": { correct: "5 | 3 | 10", choices: ["5 | 3 | 10", "5 | 4 | 11", "3 | 5 | 9", "2 | 7 | 15"] }
        },
        "KI Teil 2": {
            "Teil 2 Leicht": { correct: "Sie ist gerade", choices: ["Sie ist gerade", "Sie ist dreistellig", "Sie ist durch vier teilbar", "Sie ist dreimal so groß"] },
            "Teil 2 Mittel": { correct: "Sie ist gerade", choices: ["Sie ist gerade", "Sie ist dreistellig", "Sie ist durch vier teilbar", "Sie ist dreimal so groß"] },
            "Teil 2 Schwer": { correct: "Sie endet auf einer 0", choices: ["Sie endet auf einer 0", "Sie ist fünfstellig", "Sie hat zwei Einsen", "Sie ist durch 7 teilbar"] }
        }
        
    };

    return answerSets[name][level] || answerSets[name]["Leicht"]; // Fallback auf "Leicht"
};


const createRiddle = ({ name, folder, level,stage, rewardText, endText, correctAnswer, answers, hints, targetLevel, extraImages = {} }) => {
    const { correct, choices } = getAnswersByDifficulty(name, level);
    let guidePath;
    if (name === "Roboter") {
        guidePath = `./img2/Anleitung/Roboter/${level}/Anleitung${name}.png`;
    
    } else if (name === "Krypto") {
        guidePath = `./img2/Anleitung/Krypto/${level}/Anleitung${name}.png`;
        
    } else if (name === "KI Teil 2") {
        guidePath = `./img2/Anleitung/Ki/${level}/Anleitung${name}.png`;
    } else {
        guidePath = `./img2/Anleitung/${folder}/Anleitung${name}.png`;
    }
    return {
    backgroundImage: createImage(`./img/Rätsel/${folder}/${level}/Hintergrund.png`),
        solutionImage: createImage(`./img/Rätsel/${folder}/${level}/Lösung.png`),
        guideImage: createImage(guidePath),
        explanationImage: createImage(`./img2/Anleitung/${folder}/Erklärung${name}.png`),
        rewardImage: createImage(`./img/Urkunde/Urkunde Teil${stage}.png`),
        rewardAnswer: rewardText,
        endAnswer: endText,
        answers: choices,
        correctAnswer: correct,
        hints: hints.map((hint, index) => createImage(`./img/Rätsel/${folder}/${level}/Hinweis${index + 1}.png`)),
        hintTimes: [20, 40, 80],
        targetLevel,
        ...extraImages // Falls spezielle Bilder benötigt werden (z. B. für KI-Rätsel)
    }
    };


export let riddleConfig = {}

export const initializeRiddles = (SchwierigkeitsGrad) => {
    if (!SchwierigkeitsGrad) return; // Falls kein Schwierigkeitsgrad da ist, abbrechen

    riddleConfig = { 
        roboter: createRiddle({
            name: "Roboter",
            folder: "Roboter",
            level: SchwierigkeitsGrad,
            stage: "1",
            rewardText: "Super, du hast den ersten Teil der Datei gefunden!",
            endText: "Klasse, das erste Rätsel ist gelöst. <br> Das nächste wartet schon im Raum 102!",
            hints: ["Leicht Hinweis 1", "Leicht Hinweis 2", "Leicht Hinweis 3"],
            targetLevel: "InformatikRaum",
            extraImages: {
                InformatikerinImage: createImage('./img2/Anleitung/Roboter/Informatikerin.png'),
            }
        }),
        scratch: createRiddle({
                    name: "Scratch",
                    folder: "Scratch",
                    level: SchwierigkeitsGrad,
                    stage: "2",
                    rewardText: "Klasse, nun ist auch der zweite Teil vorhanden!",
                    endText: "Wow, schon zwei Rätsel erledigt! <br> Die 206 hat eine Herausforderung parat!",
                    hints: ["Leicht Hinweis 1", "Leicht Hinweis 2", "Leicht Lösung"],
                    targetLevel: "EnglischRaum"
                }),
            
            krypto: createRiddle({
                name: "Krypto",
                folder: "Krypto",
                level: SchwierigkeitsGrad,
                stage: "3",
                rewardText: "Nun sind es schon drei!<br> Nicht mehr lange und du hast alle Teile gefunden!",
                endText: "Du bist echt gut, aber schaffst du auch das Rätsel in der 305?",
                hints: ["Hinweis1", "Hinweis2", "LösungHinweis"],
                targetLevel: "GeschichtsRaum"
            }),
            
            sudoku: createRiddle({
                name: "Sudoku",
                folder: "Sudoku",
                level: SchwierigkeitsGrad,
                stage: "4",
                rewardText: "Klasse nun ist sie vollständig.<br> Begib dich nun in die Aula um zu sehen, was sie enthält.",
                endText: "Super, du ein weiteres Rätsel geschafft! <br> Nun bist du bereit für die Prüfung!",
                hints: ["Hinweis1", "Hinweis2", "LösungHinweis"],
                targetLevel: "MatheRaum"
            }),

            ki: createRiddle({
                name: "KI Teil 1",
                folder: "Ki",
                level: `Teil 1 ${SchwierigkeitsGrad}`,
                endText: "Super, du hast den ersten Teil der Prüfung geschafft",
                hints: ["Teil 1 - Hinweis 1", "Teil 1 - Hinweis 2", "Teil 1 - Lösung"],
                targetLevel: "Aula",
                targetRiddle: "Ki2",
                extraImages: {
                    Chat1Image: createImage("./img/Chat/Chatbild0.png"),
                    Chat2Image: createImage("./img/Chat/Chatbild1.png"),
                    Chat3Image: createImage("./img/Chat/Chatbild2.png"),
                    Chat4Image: createImage("./img/Chat/Chatbild3.png")
                }
            }),

            ki2: createRiddle({
                name: "KI Teil 2",
                folder: "Ki",
                level: `Teil 2 ${SchwierigkeitsGrad}`,
                endText: "Die Datei funktioniert wieder! Mission erfüllt! <br> Du kannst dir nun deine Urkunde abholen!",
                hints: ["Teil 2 - Hinweis 1", "Teil 2 - Hinweis 2", "Teil 2 - Lösung"],
                targetLevel: "Aula",
                            
            })

                
        // Weitere Rätsel können hier hinzugefügt werden
    };

    document.dispatchEvent(new Event("RiddleConfigReady"))
}

document.addEventListener("SchwierigkeitsGradSet", (event) => {
    console.log("Schwierigkeitsgrad gesetzt:", event.detail);
    initializeRiddles(event.detail);
});



