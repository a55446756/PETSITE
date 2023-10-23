
let currentSectionIndex = 0;
const sections = document.querySelectorAll('section');

function scrollNextSection(direction) {
    // If scrolling up and not on the first section, go to the previous section
    if (direction === 'up' && currentSectionIndex > 0) {
        currentSectionIndex--;
    }
    // If scrolling down and not on the last section, go to the next section
    else if (direction === 'down' && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
    }

    // Scroll to the current section
    window.scrollTo({
        top: sections[currentSectionIndex].offsetTop,
        behavior: 'smooth'
    });
}

document.addEventListener('wheel', (event) => {
    // Determine the scroll direction
    if (event.deltaY < 0) {
        scrollNextSection('up');
    } else {
        scrollNextSection('down');
    }

    // Prevent default scroll behavior
    event.preventDefault();
}, { passive: false });