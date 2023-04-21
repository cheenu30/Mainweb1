// Get the navigation bar element
const navbar = document.querySelector('nav');

// Get all the links in the navigation bar
const links = navbar.querySelectorAll('a');

// Loop through each link and add a click event listener
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    
    // Get the target section element
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section element
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the 'Raise a Ticket' form
const ticketForm = document.querySelector('ticket form');

// Listen for form submit event
ticketForm.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get the form data
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const issue = document.querySelector('#issue').value;

  // Check if the required fields are not empty
  if (name && email && issue) 
  {
    // Send the form data to the server (in this case, we're just logging it to the console)
    console.log(`Name: ${name}\nEmail: ${email}\nIssue: ${issue}`);

    // Clear the form
    ticketForm.reset();

    // Display a success message
    alert('Ticket submitted successfully!');
  } else 
  {
    // Display an error message if any of the required fields are empty
    alert('Please fill in all the required fields.');
  }
});
const searchInput = document.getElementById('search');
const questionList = document.getElementById('question-list');

searchInput.addEventListener('input', function () {
  const searchText = this.value.toLowerCase();

  // Send an AJAX request to the PHP script to retrieve the related questions
  // and display them on the page
});

questionList.addEventListener('click', function (event) {
  const question = event.target;
  const answer = question.nextElementSibling;

  // Toggle the visibility of the answer
  answer.classList.toggle('answer');
});
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const formWrapper = document.getElementById('formWrapper');

// show the form when the open button is clicked
openFormBtn.addEventListener('click', () => {
  formWrapper.style.display = 'block';
});

// hide the form when the close button is clicked
closeFormBtn.addEventListener('click', () => {
  formWrapper.style.display = 'none';
});
