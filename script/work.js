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
            image.style.display = '';
        } else {
            image.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const allButtons = document.querySelectorAll("button.all");

    allButtons.forEach(button => {
        button.classList.add("active");
    });
});
