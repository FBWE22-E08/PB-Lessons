class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }

  generatePaySlip() {
    const monthlySalary = this.salary / 12;
    return `Employee ID: ${this.id} 
Name: ${this.firstName} ${this.lastName}
Tax ID: ${this.taxId}
Pay: ${monthlySalary}`;
  }
}

const employeeOne = new Employee(1, "Luke", "Salmon", 123, 6000);
const employeeTwo = new Employee(2, "Ivana", "Lobster", 234, 12000);
const employeeThree = new Employee(3, "Stefan", "Squid", 345, 9600);

console.log(employeeOne.generatePaySlip());
console.log(employeeTwo.generatePaySlip());
console.log(employeeThree.generatePaySlip());

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(employee) {
    this.managedEmployees = this.managedEmployees.filter(
      (emp) => emp.id !== employee.id
    );
  }
}

const manager = new Manager(4, "Manager", "Manager", 987, 123456);
console.log(manager.generatePaySlip());

manager.addManagedEmployee(employeeOne);
manager.addManagedEmployee(employeeTwo);
manager.addManagedEmployee(employeeThree);

manager.removeManagedEmployee(employeeTwo);
