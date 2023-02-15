const count = document.querySelector('#count');
const message = document.querySelector('.message');

//function counter

let counter10 = 10;
let counterInterval

function countDown(){

    let counter = () =>{
        counter10--;
        count.innerHTML= `${counter10}`;

        if (counter10 === 0){
            clearInterval(counterInterval);
            message.style.display="none";
        }
    }

    counterInterval = setInterval(counter,1000);
}

window.onload = countDown;