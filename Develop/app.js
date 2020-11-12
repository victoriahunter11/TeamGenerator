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
const { CLIENT_RENEG_LIMIT } = require("tls");
const staff = [];

const updateManager = () => {

    inquirer.prompt([

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

updateManager();

const updateStaff = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "staffJob",
            message: "Choose what type of employee you are adding.",
            choices: ["Intern", "Engineer", "Build Team"]
        }
    ])
    .then(answers => {

        console.log('answers.staffJob ', answers.staffJob )


        if (answers.staffJob == "Engineer") {
            updateEngineer();

        } else if (answers.staffJob == "Intern") {
            updateIntern();

        } else {

             const html = render(staff);
             fs.writeFile(outputPath, html, error => {
                if (error) {
                    
                }

            })
        }


    })
}

const updateEngineer = () => {

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
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
            staff.push(engineer)
            updateStaff();
           
        })
    }




        const updateIntern = () => {
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
                    updateStaff();
                })
            }

          


                