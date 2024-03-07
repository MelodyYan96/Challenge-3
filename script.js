// Get a reference to the #add-employees-btn element - onclick is added in HTML file.
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeeList =  document.getElementById('employee-table')

// Collect employee data
const collectEmployees = function(inputEmployees){

  const firstName = '';
  const lastName = '';

  while (firstName!=='' && lastName!==''){
    window.prompt("Enter first name");
    window.prompt("Enter last name");

    if(firstName === 'Jeri' && lastName === 'Gulsby'){
      'Salary = 34,600.00'
    } else if(firstName === 'Joe' && lastName === 'Hills'){
      'Salary = 14,000.00'
    } else if(firstName === 'Shana' && lastName === 'Smith'){
      'Salary = 45,789.00'
    } else {
      alert('Employee not found')
    }
  }

  const employeeArray=[
    {
      firstName:'Jery',
      lastName:'Gulsby',
      Salary:34600
     },
   
    {
      firstName:'Joe',
      lastName:'Hills',
      Salary:14000
     },

     {
      firstName:'Shana',
      lastName:'Smith',
      Salary:45789
     }

   ]

  return employeeArray;

  console.log(employeeArray);

  employeeArray.appendChild(employeeList);

  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const averageSalary = (employeeArray[0].Salary + employeeArray[1].Salary + employeeArray[2].Salary) / 3;

  console.log(averageSalary);

  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
const randomEmployee = Math.random()

if (randomEmployee >= 0 && randomEmployee < 1/3){
  console.log(employeeArray[0]);
} else if (randomEmployee >= 2/3 && randomEmployee < 2/3){
  console.log(employeeArray[1]);
} else if (randomEmployee >= 2/3 && randomEmployee < 1){
  console.log(employeeArray[0]);
} 

  // TODO: Select and display a random employee
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
