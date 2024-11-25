let activeFilter = null;

function filterImages(button, filterClass) {
    const images = document.querySelectorAll('.work');
    const buttons = document.querySelectorAll('.flex button');

    if (filterClass === 'all') {
        activeFilter = null;
        images.forEach(image => (image.style.display = ''));
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        return;
    }

    if (activeFilter === filterClass) {
        activeFilter = null;
        images.forEach(image => (image.style.display = ''));
        buttons.forEach(btn => btn.classList.remove('active'));
        return;
    }

    activeFilter = filterClass;

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    images.forEach(image => {
        if (image.classList.contains(filterClass)) {
            image.style.display = ''; // Show images with the matching class
        } else {
            image.style.display = 'none'; // Hide images without the matching class
        }
    });
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons with the class 'all'
    const allButtons = document.querySelectorAll("button.all");

    // Add the 'active' class to each button
    allButtons.forEach(button => {
        button.classList.add("active");
    });
});
