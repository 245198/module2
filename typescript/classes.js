var Employee1 = /** @class */ (function () {
    function Employee1(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee1.prototype.getMname = function () {
        return this.mname;
    };
    return Employee1;
}());
var e1 = new Employee1('a', 'b', 'c');
console.log(e1.getMname());
var Employee = /** @class */ (function () {
    // constructor()
    // {
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp= new Employee(122,"Aneeta",4599,23);
// var emp1 = new Employee(111,"Raniya",7888,12);
// emp1.empno=102;
// var emp2 = new Employee(190,"Hello",777777,11);
// emp2.empno=103;
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'bbc', 2000, 30);
var emp2 = new Employee(3, 'ccb', 1200, 9);
emp.print();
emp1.print();
emp2.print();
var emparray = [emp, emp1, emp2];
emparray.forEach(function (empele) {
    console.log(empele);
});
