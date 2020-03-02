const User = require("../app");
const Employee = require("../lib/Employee");
const inquirer = require("inquirer");
const fs = require("fs");
const render = require("../lib/htmlRenderer");


test("Can instantiate User instance", () => { 
    const e = new User();
    expect(typeof(e)).toBe("object");
})

