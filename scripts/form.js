const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

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


