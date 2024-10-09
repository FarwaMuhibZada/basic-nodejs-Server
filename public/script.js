// Fetch users and display them on the homepage
document.addEventListener('DOMContentLoaded', () => {
  fetch('/users.json')
    .then((response) => response.json())
    .then((users) => {
      const usersList = document.getElementById('users');
      users.forEach((user) => {
        const userItem = document.createElement('li');
        userItem.innerHTML = `
          <strong>Name:</strong> ${user.name} <br>
          <strong>Email:</strong> ${user.email} <br>
          <strong>Age:</strong> ${user.age}
        `;
        usersList.appendChild(userItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
    });
});

// Add new user functionality
const form = document.getElementById('addUserForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Capture the values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  // Create a new user object
  const newUser = {
    id: Date.now(),
    name,
    email,
    age,
  };

  // Append the new user to the list on the page
  const usersList = document.getElementById('users');
  const userItem = document.createElement('li');
  userItem.innerHTML = `
    <strong>Name:</strong> ${newUser.name} <br>
    <strong>Email:</strong> ${newUser.email} <br>
    <strong>Age:</strong> ${newUser.age}
  `;
  usersList.appendChild(userItem);

  // Clear the form input fields
  form.reset();
});
