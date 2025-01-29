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