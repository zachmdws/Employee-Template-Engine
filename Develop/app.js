const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


class User {

    constructor() { 
        this.employees = [];
        this.engineers = [];
    }

    addEmployee() { 
        inquirer.prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Create employee?"
            }
        ]).then(val => {val.choice ? this.beginProcess() : this.quit()})

    }

    beginProcess(){ 
        return inquirer
        .prompt([
            {
                type:"input",
                name:"name",
                message:"Please enter employee name: ",
                validate: function(val) { 
                    return /[a-zA-z]/gi.test(val);
                }
            },
            {
                type:"input",
                name:"id",
                message:"Please enter an employee id: ",
                validate: function(val) { 
                    return /[0-9]/gi.test(val);
                }

            },
            {
                type: "input",
                name:"email",
                message:"Please enter employee's email: "
            },
            {
                type:"list",
                name:"role",
                message:"What is the employees role?",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ]).then(val => { 
            const name = val["name"];
            const id = val["id"];
            const email = val["email"];

            this.employees.push(new Employee(name, id, email));

            if(val["role"] === "Engineer"){
                inquirer.prompt([
                            {
                                type: "input",
                                name: "engineer-github",
                                message: "Please enter your Github profile name: "
                            }
                        ])
                        .then(val => { 
                            const git = val["engineer-github"];
                            this.employees.push(new Engineer(name, id, email, git));

                            this.addEmployee();
                        })

            } else if(val["role"] === "Intern"){ 
                inquirer.prompt([
                    {
                        type:"input",
                        name:"school",
                        message: "What school are you currently attending for this internship?"
                    }
                ])
                .then(val => { 
                    const school = val["school"];
                    this.employees.push(new Intern(name, id, email, school));

                    this.addEmployee();
                })
            } else if(val["role"] === "Manager") { 
                inquirer.prompt([
                    {
                        type: "input",
                        name:"office-number",
                        message:"Please enter an office number to be contacted: ",
                        validate: function(val){ 
                            return /0-9/gi.test(val);
                        }
                    }
                ])
                .then(val => { 
                    const officeNumber = val["office-number"];
                    this.employees.push(new Manager(name, id, email, officeNumber));

                    this.addEmployee();
                })
            }
        })
    }

    quit(){ 
        if(this.employees === []){
        process.exit(0);
        } else {

        fs.writeFile("team.html", render(this.employees), function(err){ 
            if(err) { 
                throw err;
            }
        
        })
    }}

}


module.exports = User;


x = new User();
x.addEmployee();


