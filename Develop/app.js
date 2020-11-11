const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { rejects } = require("assert");
const staff = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const updateManager =  () => {
        
inquirer  .prompt([

       {
           type: "input",
           name: "managerName",
           message: "What is your manager's name?"
       },
       {
        type: "input",
        name: "managerID",
        message: "What is your manager's ID?"
       },
       {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email?"
       },
       {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?"
       },
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber)
        staff.push(manager)
        updateStaff();
    })


}

updateManager()
        const addIntern = () => {
            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is your intern's name?"
                   },
                   {
                    type: "input",
                    name: "internID",
                    message: "What is your intern's ID?"
                   },
                   {
                    type: "input",
                    name:"internEmail",
                    message: "What was your interns email?"
                   },
                   {
                    type: "input",
                    name:"internSchool",
                    message: "What is your interns school?"
                   }

                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
                    staff.push(intern)
                    UpdateStaff();
                })
            }

            const addEngineer = () => {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "engineerName",
                        message: "What is your engineer's name?"
                       },
                       {
                        type: "input",
                        name: "engineerID",
                        message: "What is your engineer's ID?"
                       },
                       {
                        type: "input",
                        name:"engineerEmail",
                        message: "What was your engineer's email?"
                       },
                       {
                        type: "input",
                        name:"engineerGitHub",
                        message: "What is your engineer's GitHub?"
                       }
    
                    ]).then(answers => {
                        const intern = new Intern(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
                        staff.push(engineer)
                        updateStaff();
                    })
                }
                
                const updateStaff = () => {
                    return inquirer.prompt([
                        {
                            type: "list",
                            name: "staffJob",
                            message: "Choose what type of employee you are adding.",
                            choices: ["Manager", "Intern", "Engineer"] 
                        }
                    ])
                    .then(answers => {
                        if (answers.staffJob == "Engineer") {
                            updateEngineer();

                        } else if (answers.updateStaff == "intern") {
                            updateIntern();

                        } else {
                            const html = render(staff);
                            return fs.writeFile('./output/team.html'), html, error => {
                                if (error) {
                                    rejects(error);
                                    return;
                                }
                            }
                        }

                    })
                }
                
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
