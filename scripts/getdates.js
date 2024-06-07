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