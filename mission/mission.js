// Get the <select> element
const themeSelect = document.getElementById('theme');

// Function to apply theme styles
function applyTheme() {
    const selectedTheme = themeSelect.value; // Get the selected theme value
    
    // Check which theme is selected and apply styles accordingly
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark'); // Add the .dark class to <body>
        const byuiLogo = document.getElementById('logo');
        const darkByuiLogo = document.createElement('img');
        darkByuiLogo.src = 'images/byui-logo_white.png'; // Set the source for the white logo
        darkByuiLogo.setAttribute('id', 'logo'); // Set the same ID as the existing logo
        byuiLogo.parentNode.replaceChild(darkByuiLogo, byuiLogo); // Replace the existing logo with the white logo
    } else {
        document.body.classList.remove('dark'); // Remove .dark class
        const byuiLogo = document.getElementById('logo');
        const blueByuiLogo = document.createElement('img');
        blueByuiLogo.src = 'images/byui-logo_blue.webp'; // Set the source for the blue logo
        blueByuiLogo.setAttribute('id', 'logo'); // Set the same ID as the existing logo
        byuiLogo.parentNode.replaceChild(blueByuiLogo, byuiLogo); // Replace the existing logo with the blue logo
    }
}

// Listen for changes in the <select>
themeSelect.addEventListener('change', applyTheme);

// Apply initial theme based on user preference (if any)
applyTheme();


