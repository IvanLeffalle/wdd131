const mainnav = document.querySelector('.mobile-nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
});

// select the DOM elements for output

const year = document.querySelector("#year");


// use the date object
const currentYear = new Date().getFullYear();

year.innerHTML = currentYear;

