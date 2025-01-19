// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

// My solution
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(salary);
        console.log(name)
    }
    calculateAnnual () {
        let annual = this.salary * 12;
        return `${this.name} annual salary is ${annual}.`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        console.log(department);
    }
    calculateAnnual () {
        let annual = (this.salary * 12) + 1000;
        return `${this.name} annual salary is ${annual}.`;;
    }
}

const managerOne = new Manager('Birous', 1200, 'Incomes');
const managerTwo = new Manager('Regians', 1800, 'RH');

manager1.calculateAnnual();


// w3resource solution

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Name of the Employee: ${name}`);
    console.log(`Monthly Salary: $${salary}`);
  }

 calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calculateAnnualSalary() {
    const baseSalary = super.calculateAnnualSalary();
    const bonus = 0.1; 
    console.log(`Bonus (10% of the base salary): ${bonus}`);
    // Bonus calculation for managers
    return (bonus * baseSalary) + baseSalary;
  }
}

// Create an instance of the Manager class
const manager1 = new Manager('Angela Luca', 5000, 'Marketing');
const annualSalary1 = manager1.calculateAnnualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Annual Salary: $${annualSalary1}`);

// Create another instance of the Manager class
const manager2 = new Manager('Jonelle Rozaliya', 5500, 'Marketing');
const annualSalary2 = manager2.calculateAnnualSalary();

console.log(`Manager: ${manager2.name}`);
console.log(`Department: ${manager2.department}`);
console.log(`Annual Salary: $${annualSalary2}`);
