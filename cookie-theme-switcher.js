// cookie-theme-switcher.js

function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

// Appliquez le thème dès que possible
let currentTheme = getTheme();
setTheme(currentTheme);

document.addEventListener('DOMContentLoaded', function() {
    // Vous pouvez laisser cet événement DOMContentLoaded pour d'autres actions si nécessaire
    // ...
});

function toggleTheme() {
    let currentTheme = getTheme();
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Helper function
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });
  
