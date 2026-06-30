let 
transtactionAmountList:number[]=[50000,-2000,3000,-15000,-200,-300,4000-3000]
let totalNumberOfCreditTransactions:number=0;
let totalNumberOfDebitTransactions:number=0;
let totalBankBalance:number=0;
let suspiciousTransactionList:number []=[]
let suspiciousTransactionCount:number=0;
for (let amount of transtactionAmountList){
    if(amount>0){
        totalNumberOfCreditTransactions++;
    }else if (amount<0){
        totalNumberOfDebitTransactions++;
    }
    totalBankBalance=totalBankBalance+amount;
    if (amount>10000){
        suspiciousTransactionList[amount];
        suspiciousTransactionCount++;
        console.log(`${suspiciousTransactionCount} Suspicious credit/ debit Transaction with Amount in the transaction : ${amount}`)
    }
}

console.log(`Total number of Credit transaction : ${totalNumberOfCreditTransactions}`)
console.log(`Total number of debit transaction : ${totalNumberOfDebitTransactions}`)
console.log(`The total balance avaiable : ${totalBankBalance}`)

    