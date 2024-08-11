// Apply primary color directly from the color picker
document.getElementById('color-picker-primary').addEventListener('input', function() {
    const primaryColor = this.value;
    document.documentElement.style.setProperty('--main-color', primaryColor);
});

// Apply secondary color directly from the color picker
document.getElementById('color-picker-secondary').addEventListener('input', function() {
    const secondaryColor = this.value;
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
});

// Update primary color based on text input or color picker
document.getElementById('custom-color-primary').addEventListener('input', function() {
    const customColorValue = this.value;
    const primaryColor = customColorValue.startsWith('#') ? customColorValue : `#${customColorValue}`;
    document.documentElement.style.setProperty('--main-color', primaryColor);
});
