// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class

    const Employee = require('./Employee');

    class Intern extends Employee {
        constructor(name, id, email, school) {
            this.name = name;
            this.id = id;
            this.email = email;
            this.school = school;
            this.role = 'Intern';
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role;
    }

}