let studentNames:string[]=["Suresh","Mahesh","Naresh"]
let studentsMarks:number[]=[85,90,92]
let updatedStudentsMarks:number[]=[];
let updatedMarksAverage:number=0;

for (let marks of studentsMarks){
    updatedStudentsMarks[marks]=marks+10;
    if(updatedStudentsMarks[marks]>100){
        updatedStudentsMarks[marks]=100;
    }
    updatedMarksAverage=updatedMarksAverage+updatedStudentsMarks[marks]
}
updatedMarksAverage=updatedMarksAverage/studentsMarks.length;
console.log(updatedMarksAverage)