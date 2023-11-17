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
    targetSection.scrollIntoView({ behavior: "smooth", block:"start" });
})
};

const highlightSections = () => {
    const allNavLinks = document.querySelectorAll('.menu__link');
    window.addEventListener('scroll', () => {
        allSections.forEach((section, index) => {
            const sectionPosition = section.getBoundingClientRect();
            section.classList.remove('your-active-class');
            //Adds Active Class to Section in Viewport
            if (sectionPosition.top >= 0 && sectionPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                section.classList.add('your-active-class');
                allNavLinks[index].classList.add('current-active');
            } else {
                allNavLinks[index].classList.remove('current-active');
            }
            
        });
    });
};



// Highlight the corresponding nav link when a section is scrolled into view


// build the nav menu
buildNewNavBar();

// Scroll to section on link click
// Add class 'active' to section when near top of viewport
highlightSections();












