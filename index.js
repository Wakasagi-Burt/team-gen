
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");



const employeeArray = [];
console.log(employeeArray);


   const askQuestions = [
       {
           type:'list',
           name:'role',
           message:'Employee Role',
           choices:["Manager","Engineer","Intern"]
       },
       {
           type:'input',
           name:'name',
           message:'Employee Name',
           validate: nameInput=>{
               if (nameInput){
                   return true;
               } else{
                   console.log("Enter name of the employee");
                   return false;
               }
           }
       },
       {
           type:'input',
           name:'id',
           message:'Employee ID',
           validate: idInput=>{
               if(idInput){
                   return true;
               } else{
                   console.log("Enter employee id number");
                   return false;
               }
           }
       },
       {
           type:'input',
           name:'email',
           message:'Employee Email',
           validate: emailInput => {
               if (emailInput.includes('@')){
                   return true;
               } else {
                   console.log('Please enter your email address');
                   return false;
               }
           }
       },
       {
           type: 'input',
           name: 'officeNumber',
           message: 'Employee Office Number',
           validate: (officeNumber) => {
               if (officeNumber){
                   return true;
               } else {
                   console.log('Enter office number');
                   return false;
               }
           }
       },
       {
           type:'input',
           name:'github',
           message: 'Employee Github',
           validate: (github) =>{
               if(github){
                   return true;
               } else {
                   console.log('Enter your github username');
                   return false;
               }
               
           }
       },
       {
           type: 'input',
           name: 'school',
           message:'Intern School',
           validate: (school) =>{
               if(school){
                   return true;
               } else {
                   console.log("Enter your school name");
                   return false;
               }
           }
       },
       {
               type: 'confirm',
               name: 'confirmAddedEmployee',
               message: 'Enter another employee',
               default: false
           }
       ] 

   console.log(`Add Employee`);
   const addedEmployee = () => {
   
   return inquirer.prompt(askQuestions)
   .then(function (employeeData) {
       let {name, id, email, github, role, school, officeNumber}= employeeData;
       let employee;
       if(role ==='Manager'){
           employee = new Manager(name, id, email, officeNumber);
       }
       if (role ==='Engineer'){
           employee = new Engineer(name, id, github, email)
       }
       if (role === 'intern'){
           employee = new Intern(name, school, id, email)
       }
       employeeArray.push(employee);
       if(employeeData.confirmAddedEmployee){
           return addedEmployee(employeeArray);
       } else {
           return employeeArray;
       }
   }
   )
};

addedEmployee();