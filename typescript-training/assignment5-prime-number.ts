 let inputNumber:number =25;
 let count:number =0;
   
primeNumberCheck(inputNumber);
 function primeNumberCheck(inputNumber:number){
    for (let i=1;i<=inputNumber;i++){
        if (inputNumber%i==0){
            count++;
        }
    }
    if (count>2){
        console.log(`${inputNumber} is a prime number`)
    }else {
        console.log(`${inputNumber} is not a prime number`)
    }
 }