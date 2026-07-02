let employeeName:string []=["Alice Jhonson","Bob Smith","Carol davis","David brown","Eva green"]
let baseSalary:number []=[75000,68000,82000,90000,60000]
let experienceOfEmployee:number []=[5.1,3.2,7.1,10.2,2.4]
let rating=[4.2,3.8,4.5,2.5,3.5]
let hike:number []=[];
let hikePercentage:number []=[];

for (let i=0;i<rating.length;i++){
    if (rating[i]!>=4){
        hike[i]=baseSalary[i]!*(15/100)+1500
             if (experienceOfEmployee[i]!>5){
        hike[i]=hike[i]!+5000
    }
    }else if (rating[i]!>=3 &&rating[i]!<4){
        hike[i]=baseSalary[i]!*(10/100)+1200
             if (experienceOfEmployee[i]!>5){
        hike[i]=hike[i]!+5000
        
    }
    }else if (rating[i]!<3){
        hike[i]=baseSalary[i]!*(3/100)+1200
             if (experienceOfEmployee[i]!>5){
        hike[i]=hike[i]!+5000
    }
    }
}
for (let i=0;i<hike.length;i++){
    hikePercentage[i]=(hike[i]!/baseSalary[i]!)*100
}
console.log(hike)
console.log(hikePercentage)

let employeeNameAndHike :Map<string,number> = new Map
for (let i=0;i<employeeName.length;i++){
    employeeNameAndHike.set(employeeName[i]!,hikePercentage[i]!)
}
console.log(employeeNameAndHike)