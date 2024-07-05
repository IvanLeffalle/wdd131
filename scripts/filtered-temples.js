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
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Asunción Paraguay",
		location: "Asunción, Paraguay",
		dedicated: "2002, May, 19",
		area: 11906,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg",
		imageWidth: 400,
		imageHeight: 250
	},
	{
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires, Argentina",
		dedicated: "2012, August, 17-19",
		area: 30659,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg",
		imageWidth: 400,
		imageHeight: 250
	},
];

function createTempleCard(filteredTemples) {
	document.querySelector(".images").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		card.classList.add("temple-card");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("width", temple.imageWidth);
		img.setAttribute("height", temple.imageHeight);
		img.loading = 'lazy';

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".images").appendChild(card);
	});
}
createTempleCard(temples);

const nonutahLink = document.querySelector("#old");

nonutahLink.addEventListener("click", () => (
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900))
));


const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => (
	createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000))
));


const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () =>
	createTempleCard(temples.filter(temple => temple.area > 90000))
);

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () =>
	createTempleCard(temples.filter(temple => temple.area < 10000))
);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () =>
	createTempleCard(temples)
);



