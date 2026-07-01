 let inputNumber:number =13;
 let count:number =0;
   
primeNumberCheck(inputNumber);
 function primeNumberCheck(inputNumber:number){
    for (let i=1;i<=inputNumber;i++){
        if (inputNumber%i==0){
            count++;
        }
    }
    if (count>2){
        console.log(`${inputNumber} is a not a prime number`)
    }else {
        console.log(`${inputNumber} is a prime number`)
    }
 }
