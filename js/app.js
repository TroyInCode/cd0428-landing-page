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
const allSections = document.querySelectorAll('section');


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
    allSections.forEach( (section) => {
        const sectionId = section.id;
        const dataNav = section.getAttribute('data-nav');
        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
    })
        
};

//Adding Event Listeners to Each li Elements
const addNewListeners = () => {
    const navSections = document.querySelectorAll('.menu__link');

    Array.from(navSections).forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const nav = event.target.dataset.nav;
            document.getElementById(nav).scrollIntoView({behavior: "smooth"});
        })
    }); 
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNewNavBar();

// Scroll to section on link click

// Set sections as active


