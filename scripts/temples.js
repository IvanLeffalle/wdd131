// select the DOM elements for output

const year = document.querySelector("#year");


// use the date object
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;


// Select the last modified element
const lastModified = document.querySelector("#last-modified");

// Get the last modified date of the document
const modifiedDate = new Date(document.lastModified);

// Format the last modified date (optional, for better readability)
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const formattedDate = modifiedDate.toLocaleDateString('en-US', options);

// Set the last modified date to the span element
lastModified.innerHTML = formattedDate;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

