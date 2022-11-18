const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(name, id, email, username){
        super(name, id, email);
        this.username = username;
    }
    github(){
        return `<a href="https://github.com/${this.username}" target="_blank">https://github.com/${this.username}</a>`;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports =Engineer;