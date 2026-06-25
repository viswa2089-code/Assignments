//Create common function and then based on below details, print whether user is eligible to get the loan or not
// A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.
// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.

// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.
// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.

//Logic starts from here....

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
