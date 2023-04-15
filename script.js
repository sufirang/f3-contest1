let employees = [];

// Add event listener to the form
document.querySelector('form').addEventListener('submit', addEmployee);

// Function to add an employee to the array and display a success message
function addEmployee(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (name.trim() === '' || profession.trim() === '' || age.trim() === '') {
    document.getElementById('error-message').textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
    document.getElementById('success-message').textContent = '';
    return;
  }

  const id = employees.length + 1;
  const employee = { id, name, profession, age };
  employees.push(employee);
  displayAddedEmployees();
  document.getElementById('success-message').textContent = 'Success : Employee Added!';
  document.getElementById('error-message').textContent = '';
  document.querySelector('form').reset();
}

// Display the added employees
function displayAddedEmployees() {
  const addedEmployeesContainer = document.getElementById('added-employees');
  addedEmployeesContainer.innerHTML = '';

  employees.forEach(employee => {
    const employeeCard = document.createElement('div');
    employeeCard.className = 'employee-card';

    const idSpan = document.createElement('span');
    idSpan.textContent = ` ${employee.id}`;
    employeeCard.appendChild(idSpan);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = ` Name: ${employee.name}`;
    employeeCard.appendChild(nameSpan);

    const professionSpan = document.createElement('span');

    professionSpan.textContent = ` Profession: ${employee.profession}`;
    employeeCard.appendChild(professionSpan);

    const ageSpan = document.createElement('span');
    ageSpan.textContent = ` Age: ${employee.age}`;
    employeeCard.appendChild(ageSpan);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-employee-button';
    deleteButton.textContent = 'Delete user';
    deleteButton.addEventListener('click', () => {
      const index = employees.findIndex(emp => emp.id === employee.id);
      employees.splice(index, 1);
      displayAddedEmployees();
    });
    employeeCard.appendChild(deleteButton);

    addedEmployeesContainer.appendChild(employeeCard);
  });
}