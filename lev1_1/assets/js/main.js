function waitThreeSeconds () {
    console.log("Start Warten für 3 Sekunden...");
    setTimeout(sayWastedTime, 3000); 
}

function sayWastedTime () {
    console.log("Eledigt. Du has 3 Sekunden verschwendet...");
}

waitThreeSeconds();

let count = 10;
let counterInterval

function countDown(){
    console.log(count);

    let counter = () =>{
        count--;
        console.log(count);

        if (count === 0){
            console.log("Endlich Feierabend!");
            clearInterval(counterInterval);
        }
    }

    counterInterval = setInterval(counter,1000);
}

countDown();

