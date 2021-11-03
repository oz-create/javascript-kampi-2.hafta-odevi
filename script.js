// asal sayı bulma
console.log("-------asal sayı bulma-------");

function findPrime(...numbers){
          let prime = [];
          let notPrime = [];
          let x = 0;
          for (let i = 0; i < numbers.length; i++) {
                  for(let j = 2; j < numbers[i]; j++){
                             if (numbers[i] % j === 0) {
                                  x++;
                                  break;
                                  }
                             
                  }
                   
                              if(x==0) 
                                    { 
                                              prime.push(numbers[i]);
                                    }
                              else 	
                                    {	
                                              notPrime.push(numbers[i]);
                                    } 
                             
                    
          }
          console.log("prime: "+prime);
          console.log("not prime: "+notPrime)
      }
      
      findPrime(2,3,5,7,13,15);


// arkadaş sayı bulma
console.log("-------arkadaş sayı bulma-------");

function findFriendNumbers(num1,num2){
          let total1 =0;
          let total2 =0;
          for(i=1; i<num1; i++){
                    if (num1%i === 0) {
                          total1= i+total1;
                    }
          } 
          for (let i = 0; i < num2; i++) {
                    if (num2%i === 0) {
                              total2= i+total2;
                    }
                    
          }
          if (total1 === num2 && total2 === num1) {
                    console.log("this numbers are friends :) "+num1+" & "+num2);
          }else{
                    console.log("this numbers are not friends :( "+num1+" & "+num2);
          }
         
}

findFriendNumbers(20,40);
findFriendNumbers(220,284);


// 1000e kadar olan tüm mükemmel sayıları bulma
console.log("-------mükemmel sayı bulma-------");

function listPerfectNumbers(){ 
          for (let i = 1; i < 1000; i++) {
                    let total = 0;
                    for (let j = 1; j <= i; j++) {
                              if (i % j === 0) {
                                       total = total + j; 
                                       } 
                              }

                              if(total === i*2){
                                console.log(i);
                              }      
                    }
                    
          }
         

listPerfectNumbers();

// 1000e kadar olan tüm asal sayıları bulma
console.log("-------1000 e kadar tüm asal sayıları bulma-------");

function listPrimeNumbers() {
          
          primeNumbers = [];
          for (let i = 2; i < 1000; i++) {
                    let x = 0;
                    for (let j = 2; j < i; j++) {
                              if(i%j == 0){
                                        x++;
                                        break;
                              }
                              
                    }
                    if(x == 0){
                              primeNumbers.push(i);
                    }
          
          }  
          
          console.log("prime numbers: "+primeNumbers)
}

listPrimeNumbers();

