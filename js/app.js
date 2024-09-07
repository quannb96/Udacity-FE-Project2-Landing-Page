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

// Define global variables
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

// Build the navigation dynamically
sections.forEach(section => {
  const navItem = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = section.dataset.nav;
  link.setAttribute('href', `#${section.id}`);
  link.classList.add('menu__link');
  navItem.appendChild(link);
  navbarList.appendChild(navItem);
});

// Set sections as active based on viewport
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
    }
  });

  // Highlight active section in navbar
  const links = navbarList.querySelectorAll('a');
  links.forEach(link => {
    const sectionId = link.getAttribute('href').substring(1);
    const section = document.getElementById(sectionId);
    if (section.classList.contains('your-active-class')) {
      link.classList.add('your-active-class');
    } else {
      link.classList.remove('your-active-class');
    }
  });
});

// Scroll to anchor
navbarList.addEventListener('click', event => {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
});
