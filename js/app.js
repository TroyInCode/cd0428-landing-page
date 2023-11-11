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
//Begin Building Nav Bar
const buildNewNavBar =  () => {
    allSections.forEach( (section) => {
        const sectionId = section.id;
        const dataNav = section.getAttribute('data-nav');
        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.textContent = dataNav;
        newLink.href = `#${sectionId}`;
        newLink.classList.add('menu__link');
        addNewEvents(newLink);
        newItem.appendChild(newLink);
        newNavigation.appendChild(newItem);
    })
        
};
//Adding Event Listeners to List Items
const addNewEvents = (element) => {
    element.addEventListener('click', (event) => {
    event.preventDefault();
    //Define Target
    const newTargetId = element.getAttribute('href').substring(1);

    //Find Target
    const targetSection = document.getElementById(newTargetId);
    
    //Scroll to Target
    targetSection.scrollIntoView({ behavior: "smooth" });
})
};

const createWindowEvent = () => {
    Window.addEventListener('scroll', (event) => {
        allSections.forEach((section) => {
            const rect = section.getBoundingClientRect
        });
    })
}

// build the nav
buildNewNavBar();

//Adding Event Listeners to Each li Elements


// Add class 'active' to section when near top of viewport
createWindowEvent();

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active


