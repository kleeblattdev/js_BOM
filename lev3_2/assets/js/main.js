const time = document.querySelector('#time');
const userMinute = document.querySelector('#minutes');
let counter 
let timer

//functions

function displayTime(){
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    //Wenn die Sekundenanzahl kleiner 10, dann setze eine 0 davor
    secondsOutput = seconds < 10 ?  "0" + seconds.toString() : seconds.toString();

    //Wenn die Zeit abgelaufen ist, dann stoppen
    if (timer === 0){
        clearInterval(counter);
    }

    timer --;
    //Ausgabe 
    time.textContent = `${minutes} : ${secondsOutput}`;
}

//Start des Countdown timer
function startMinCountdown(){
    //User Input wird in eine Nummer umgewandelt
    let minutesInput = Number(userMinute.value);

    // Wenn der User keine Nummer Eingegeben hat, dann kommt ein Fenster, indem der User gebeten wird eine Nummer einzugeben
    if (isNaN(minutesInput)){
        alert('Please input minutes in number');
        return false
    }

    //Minuten in Sekunden umrechnen
    timer = minutesInput * 60;
    
    displayTime();

    counter = setInterval(displayTime,1000);

}

//Pausieren des Counter
function pauseMinCountdown(){
    clearInterval(counter);
}

//Wenn man vorher nicht auf Pause Countdown gedrückt hat, ist es wie wenn man arst auf Pause drückt, bei erneutem drücken geht der Counter weiter
function restartMinCountdown(){
    clearInterval(counter);
    counter = setInterval(displayTime,1000);
}