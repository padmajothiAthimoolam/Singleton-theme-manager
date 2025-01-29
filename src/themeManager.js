class ThemeManager {
    constructor() {
        if(ThemeManager.instance) {
            this.theme = localStorage.getItem('theme') || 'light';
            ThemeManager.instance = this;
        }

        return ThemeManager.instance;
    }

    setTheme(newTheme) {
        this.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    }

    getTheme() {
        return this.theme
    }
 }

 const themeManager = new ThemeManager(); // Create an instance
 //Object.freeze(themeManager); // prevent further modification
 export default themeManager; // Export the instance
