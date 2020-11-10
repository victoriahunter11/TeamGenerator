// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee') 

class Engineer extends Employee {
    constructor(name, id, email, officeNumber, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.gitHub = gitHub;
        this.role = 'Engineer';
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getgitHub() {
        return this.gitHub;
    }
    getRole() {
        return this.role;
    }

}