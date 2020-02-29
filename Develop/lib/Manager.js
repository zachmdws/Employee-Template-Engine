// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee { 
    constructor(name, id, email, officeNumber) { 
        const off = officeNumber;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = off;
    }

    getRole(){ 
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}


module.exports = Manager;