export default function toggleDarkMode(enable) {
    const darkModeLink = document.getElementById('dark-mode-styles');
    if (enable) {
        if (!darkModeLink) {
            const link = document.createElement('link');
            link.id = 'dark-mode-styles';
            link.rel = 'stylesheet';
            link.href = 'dark-styles.css';
            document.head.appendChild(link);
        }
    } else {
        if (darkModeLink) {
            darkModeLink.remove();
        }
    }
}

// Example: Enable dark mode
toggleDarkMode(true);

// Example: Disable dark mode
toggleDarkMode(false);