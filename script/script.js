document.addEventListener('DOMContentLoaded', function () {
    // Select all dropdown-submenu items
    const submenus = document.querySelectorAll('.dropdown-submenu');

    submenus.forEach(function (submenu) {
        const toggleLink = submenu.querySelector('.dropdown-toggle');

        // Add a click event listener to the dropdown-toggle links
        toggleLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const dropdownMenu = submenu.querySelector('.dropdown-menu');

            // Toggle the "show" class on the submenu
            const isVisible = dropdownMenu.classList.contains('show');
            dropdownMenu.classList.toggle('show', !isVisible);

            // Close other submenus if open
            submenus.forEach(function (otherSubmenu) {
                if (otherSubmenu !== submenu) {
                    const otherMenu = otherSubmenu.querySelector('.dropdown-menu');
                    otherMenu.classList.remove('show');
                }
            });

            // Prevent propagation to parent dropdown
            e.stopPropagation();
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function () {
        submenus.forEach(function (submenu) {
            const dropdownMenu = submenu.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });
});

setTimeout(() => {
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");

    // Optional: Remove it completely after the animation
    setTimeout(() => {
        spinner.style.display = "none";
    }, 500); // Matches the transition duration in CSS
}, 10000); 