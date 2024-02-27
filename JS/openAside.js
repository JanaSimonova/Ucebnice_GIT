
function toggleAside(item){
        item.style.display = "block";
        var aside = document.getElementById("aside");
        aside.classList.toggle("hidden");
        item.classList.toggle("active");

// if item has active class, the header dropdown menu on mobile is open
    // start listener on click outside to close it
    if (item.classList.contains("active")) {
        // Add event listener to the document
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Remove event listener from the document
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Function to close the menu if the click is outside of the menu
function closeMenuOnClickOutside(event) {
    var aside = document.getElementById("aside");
    var item = document.querySelector("header .toggle-aside-open"); // Change this selector to match your toggle button

    // Check if the clicked target is outside of the menu and the toggle button
    if (!aside.contains(event.target) && !item.contains(event.target)) {
        aside.classList.add("hidden");
        item.classList.remove("active");
        // Remove the event listener since the menu is closed
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}