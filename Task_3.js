document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.getElementById('modeSwitch');
    
    // Check for saved user preference, if any
    const currentMode = localStorage.getItem('mode') || 'light-mode';
    document.body.classList.add(currentMode);

    if (currentMode === 'dark-mode') {
        modeSwitch.checked = true;
    }

    modeSwitch.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('mode', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('mode', 'light-mode');
        }
    });
});
