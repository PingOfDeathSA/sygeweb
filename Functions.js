// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from navigating to the href location

    // Get the section ID from the href attribute
    const sectionId = link.getAttribute('href');

    // Scroll to the section with a smooth animation
    scrollToSection(sectionId);
  });
});

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = "Node.js " + counter + "%";
  }
}, 30);


function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Send an AJAX request to your server-side script (e.g., using jQuery's $.ajax() method)
  $.ajax({
    url: 'send_email.php', // Replace with the path to your server-side script
    method: 'POST',
    data: { name: name, email: email, message: message },
    success: function(response) {
      // Handle the server response if needed
      console.log(response);
      alert('Email sent successfully!');
      $('#contactModal').modal('hide'); // Hide the modal after sending email
    },
    error: function(xhr, status, error) {
      // Handle any error that occurred during the AJAX request
      console.error(error);
      alert('An error occurred while sending the email. Please try again later.');
    }
  });
}

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  const offset = 100; // Adjust this value to offset the scroll position

  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - offset
  });
}
// setTimeout(function() {
//   var loginMain = document.querySelector('.LoginMain');
//   loginMain.style.background = 'linear-gradient(to right, rgba(100, 100, 100, 0.7), transparent), url("happy.jpg")';
//   loginMain.style.transition = 'background 4s ease-in-out';
//   loginMain.style.backgroundSize = 'contain';
//   loginMain.style.opacity = '1'; // Set the opacity to 1 immediately
//   var loginMainBefore = document.querySelector('.LoginMain::before');
//   loginMainBefore.style.backgroundColor = 'rgba(255, 192, 203, 0.7)'; // Set the pink color
//   loginMainBefore.style.opacity = '1'; // Set the opacity to 1 immediately
// }, 5000);
// ;


  // Get the current URL path
  var currentPath = window.location.pathname;

  // Get the "About" link element
  var aboutLink = document.querySelector('a[href="about.html"]');

  // Check if the current path matches the link's href
  if (currentPath === '/about.html') {
    // Add the active class to the link
    aboutLink.classList.add('active');
  }



const progressBars = document.querySelectorAll(".progress-bar");

// Loop through each progress bar and update it
progressBars.forEach((progressBar, index) => {
  // Set the initial value of the progress bar to zero
  let progress = 0;

  // Use setInterval to increment the progress bar every 100ms
  const intervalId = setInterval(() => {
    // Increment the progress by a certain amount (in this case, the index of the progress bar)
    progress += index + 1;

    // Update the progress bar style
    progressBar.style.width = `${progress}%`;

    // Update the progress bar text
    progressBar.innerHTML = `${progress}%`;

    // Stop the interval once the progress reaches 100
    if (progress >=90 ) {
      clearInterval(intervalId);
    }
  }, 100);
});