/**
 * Simple Employee Management Example
 */

class Employee {
  constructor(id, name, role, salary) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.salary = salary;
  }

  getDetails() {
    return `${this.id} - ${this.name} (${this.role})`;
  }
``
  getAnnualSalary() {
    return this.salary * 12;
  }
}

const employees = [
  new Employee(1, "John", "Frontend Developer", 80000),
  new Employee(2, "David", "Backend Developer", 90000),
  new Employee(3, "Sarah", "Architect", 150000),
];

function findEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function displayEmployees() {
  console.log("===== Employee List =====");

  employees.forEach((employee) => {
    console.log(employee.getDetails());
    console.log(
      `Annual Salary: $${employee.getAnnualSalary().toLocaleString()}`
    );
    console.log("-------------------------");
  });
}

function calculateTotalPayroll() {
  return employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
  );
}

// Main Execution
displayEmployees();

const employee = findEmployeeById(2);

if (employee) {
  console.log(`Found Employee: ${employee.getDetails()}`);
}

console.log(
  `Total Annual Payroll: $${calculateTotalPayroll().toLocaleString()}`
);