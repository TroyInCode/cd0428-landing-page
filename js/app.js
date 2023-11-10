/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const newNavigation = document.querySelector("#navbar__list");
const navContainer = document.querySelector(".navbar__menu");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
const buildNewNavBar =  () => {
        for (let i = 1; i <= 4; i++) {
            const navSection = document.createElement('li');
            navSection.textContent = `Section ${i}`;
            navSection.style.color = "#000000";
            navSection.classList.add('menu__link', '');
            newNavigation.appendChild(navSection);
        }
};


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
console.log(buildNewNavBar());

// Scroll to section on link click

// Set sections as active


