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
        darkByuiLogo.src = 'mission/images/byui-logo_white.png';
        darkByuiLogo.setAttribute('id', 'logo')
    
        byuiLogo.parentNode.replaceChild(darkByuiLogo, byuiLogo);
    } else {
        document.body.classList.remove('dark'); // Remove .dark class
    }
}

// Listen for changes in the <select>
themeSelect.addEventListener('change', applyTheme);

// Apply initial theme based on user preference (if any)
applyTheme();

