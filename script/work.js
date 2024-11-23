    // Track currently active filter
    let activeFilter = null;

    // Function to filter images and update button styles
    function filterImages(button, filterClass) {
        const images = document.querySelectorAll('.work'); // Select all images with the "work" class
        const buttons = document.querySelectorAll('.flex button'); // Select all buttons in the flex container

        // If "VIEW ALL" button is clicked
        if (filterClass === 'all') {
            activeFilter = null; // Reset active filter
            images.forEach(image => (image.style.display = '')); // Show all images
            buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            button.classList.add('active'); // Highlight the "VIEW ALL" button
            return;
        }

        // If the same filter is clicked again, reset the filter
        if (activeFilter === filterClass) {
            activeFilter = null; // Reset active filter
            images.forEach(image => (image.style.display = '')); // Show all images
            buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
            return;
        }

        // Set the active filter
        activeFilter = filterClass;

        // Update button styles
        buttons.forEach(btn => btn.classList.remove('active')); // Remove active class from all buttons
        button.classList.add('active'); // Add active class to clicked button

        // Show only images with the selected class and hide others
        images.forEach(image => {
            if (image.classList.contains(filterClass)) {
                image.style.display = ''; // Show images with the matching class
            } else {
                image.style.display = 'none'; // Hide images without the matching class
            }
        });
    }