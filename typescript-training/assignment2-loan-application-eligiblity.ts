



let customerName:string = "John Doe";
let creditScore:number = 750;
let income:number = 55000.0;
let isEmployed:boolean = true;
let debtToIncomeRatio:number = 35.0;
loanEligiblity(customerName,creditScore,income,isEmployed,debtToIncomeRatio)

function loanEligiblity(customerName:string,creditScore:number,income:number,isEmployed:boolean,debtToIncomeRatio:number) {
    if(creditScore>=650){
        if(creditScore>=750 && income>50000 && isEmployed==true){
            if(debtToIncomeRatio>40){
                console.log("Your DTI is too high , so we cant proceed")
            }else{
                console.log("You are eligible to avail a loan")
            }
        }else if(income>50000 && isEmployed==true && debtToIncomeRatio<40){
        console.log("Your profile is under consideration")   
        }else{
            console.log("Sorry we cant proceed further")
        }
    } else{
           console.log("Sorry we cant proceed further")
    
    }
}