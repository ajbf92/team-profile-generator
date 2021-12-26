const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const 
const teamMemberArr = [];

const teamMembers = {
  type: "list",
  name: "title",
  message: "Choose a team member to add?",
  choices: ["Manager", "Engineer", "Employee", "Intern", "Team Complete - Generate Team"],
}.then((answer) => {
  if (answer === "Manager") {
    let newMember = 
  } else if (answer === "Engineer") {
    let newMember = 
  } else if (answer === "Employee") {
    let newMember = 
  } else if (answer === "Intern") {
    let newMember = 
  }

});

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(teamMembers)
    //   .then((data) => {
    //   console.log(questions);
    //   console.log(data);
    . then (writeToFile("teamMembers.html", generatePage(teamMemberArr)))};


// Function call to initialize app
init();
