//Checking whether tyhe given number is prime number or not


let userInput=3;
let count=0;
primeNumberCheck(userInput);
function primeNumberCheck(userInput:number){
    for(let i=1;i<=userInput;i++){
        if(userInput%i==0){
            count++;
        }
        console.log(count)
        
    }
     if (count>2){
            console.log(`${userInput} is a prime number` )
        }else{
            console.log(`${userInput} is not a prime number` )
        }
}