class Employee { 
    constructor(name, id, email) { 
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }
}

const z = new Employee("Zach");

z.getName();

module.exports = Employee;


