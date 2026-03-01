class Employee 
{
  constructor(name, department) 
  {
    this.name = name;
    this.department = department;
  }
  describe() 
  {
    return `Employee: ${this.name} | Department: ${this.department}`;
  }
}

class Manager extends Employee 
{
  constructor(name, department, teamSize) 
  {
  super(name, department); 
  this.teamSize = teamSize;
  }
  describe() 
  {
    return `Manager: ${this.name} | Department: ${this.department} | Team Size: ${this.teamSize}`;
  }
}

class Company 
{
  constructor() 
  {
    this.employees = [];
  }
  addEmployee(employee) 
  {
    this.employees.push(employee);
  }

  listEmployees() 
  {
    console.log("=== Company Directory ===");
    this.employees.forEach((emp) => {console.log(emp.describe());
    });
  }
}

const company = new Company();
const emp1 = new Employee("Ayesha Rahman", "Marketing");
const emp2 = new Employee("Bany Akter", "Finance");
const mgr1 = new Manager("Sabrina Khan", "Engineering", 8);

company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);
company.listEmployees();