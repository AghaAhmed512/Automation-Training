/*
3. Write a console based application. Declare a class Student. Declare its private data 
members as studentName, studentRegistrationNo, batchName. Write getter and setter 
for these data members. Set and Get the values using these Properties. Use this keyword 
while setting the values

 */

class Student{
    constructor(studentName,studentRegistrationNo,batchName){

    this._studentName = studentName;
    this._studentRegistrationNo = studentRegistrationNo;
    this._batchName = batchName;
    }

    get Name(){
        return this._studentName;
    }

    set Name(studentName){
        this._studentName = studentName;

    }

    get RegistrationNo(){
        return this._studentRegistrationNo;
    }

    set RegistrationNo(studentRegistrationNo){
        this._studentRegistrationNo = studentRegistrationNo;

    }


    get Batch(){
        return this._batchName;
    }
    set Batch(batchName){
        this._batchName = batchName;

    }
}

let student = new Student();
student.Name = "Agha";
student.RegistrationNo = 1345;
student.Batch = "Alpha";
console.log(student);
console.log(student.Name, student.RegistrationNo, student.Batch);

