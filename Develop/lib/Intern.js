// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee { 
    constructor(name, id, email, school) { 
        const schoo = school;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = schoo;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){ 
        return this.school;
    }
}



module.exports = Intern;