var student = {
    name : "omor",
    age : '120',
    cgpa : '3.33',
    lang : ['bangla','enlish','hindi']
}
document.write(student.lang);


// use to constractor
function Student(name , age , cgpa , lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang =lang;
    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }
}

var student1 = new Student("omor", '120','3.33',['bangla','enlish','hindi']);
var student2 = new Student("faruk", '120','3.33',['bangla','enlish','hindi']);
// document.write(student1.name);
student1.display();
student2.display();

