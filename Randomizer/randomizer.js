let form = document.querySelector('form');

let btn = form.querySelector('#btn');

let result = document.querySelector('.result');


function randomizer(minNumber, maxNumber, amount, checkbox){
       if(minNumber > maxNumber) return 'Error!';
       if(minNumber < 0 || maxNumber < 0 || amount < 0) return 'Error!';

       let rand = [];

       if(checkbox == true){
              if(amount > maxNumber - minNumber) return 'Error! 2';
              A: for(let i = 0; i < amount;){
                     let number = Math.floor(minNumber + Math.random()*(maxNumber-minNumber + 1));
                     for(let j = 0; j <= rand.length-1; j++){
                            if(number == rand[j]) continue A;
                     }
                     rand.push(number);
                     i++
              }      
       }
       else if(checkbox == false){
              for(let i = 0; i < amount; i++){
                     rand.push(Math.floor(minNumber + Math.random()*(maxNumber-minNumber + 1)));
              }
       }

       return rand;
}

btn.onclick = function(){
       let minNumber = parseInt(document.querySelector('#min').value);
       let maxNumber = parseInt(document.querySelector('#max').value);
       let amount = parseInt(document.querySelector('#amount').value);
       let checkbox = document.querySelector('.checkbox').checked;

       let res = randomizer(minNumber, maxNumber, amount, checkbox);
       result.innerText = res;
}