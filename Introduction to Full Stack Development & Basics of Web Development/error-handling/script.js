const form = document.getElementById('user-form');
const textInput = document.getElementById('text-input');
const colorSelect = document.getElementById('color-select');
const submitBtn = document.getElementById('submit-btn');
const clickBtn = document.getElementById('click-me-btn');
const hoverZone = document.getElementById('hover-zone');
const mainContainer = document.getElementById('main-container');

const eventStatus = document.getElementById('event-status');
const currentText = document.getElementById('current-text');
const lastKey = document.getElementById('last-key');

clickBtn.addEventListener('click', () => {
    eventStatus.textContent = "Button Clicked! 🎉";
});

textInput.addEventListener('input', (e) => {
    currentText.textContent = e.target.value;
});

colorSelect.addEventListener('change', (e) => {
    mainContainer.style.backgroundColor = e.target.value;
    eventStatus.textContent = `Background changed to ${e.target.value}`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    eventStatus.textContent = "Form submitted successfully!";
});

textInput.addEventListener('keyup', (e) => {
    lastKey.textContent = e.key;
});

hoverZone.addEventListener('mouseover', () => {
    hoverZone.style.backgroundColor = "#ffeb3b";
    hoverZone.textContent = "I see you! 👀";
});

hoverZone.addEventListener('mouseout', () => {
    hoverZone.style.backgroundColor = "transparent";
    hoverZone.textContent = "Hover over me!";
});

textInput.addEventListener('focus', () => {
    eventStatus.textContent = "Typing mode active...";
});

textInput.addEventListener('blur', () => {
    eventStatus.textContent = "User left the input.";
});