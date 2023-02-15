const zeit = document.querySelector('.zeit');
const btn = document.querySelector('#btn');

let count = 100;
let counterInterval

//function count down 
function countDown(){

    let counter = () =>{
        count--;
        zeit.innerHTML = `${count.toString()} %`;

        if (count === 0){
            clearInterval(counterInterval);
        }
    }

    counterInterval = setInterval(counter,100);
}

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    countDown();
})