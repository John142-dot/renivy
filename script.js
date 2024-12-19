// Load JSON configuration
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        document.getElementById('title').textContent = config.title;

        const buttonContainer = document.getElementById('button-container');
        config.buttons.forEach(button => {
            const link = document.createElement('a');
            link.href = button.url;
            link.textContent = button.name;
            link.className = `button ${button.color}`;
            buttonContainer.appendChild(link);
        });

        // Add event listeners for button glow effect
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    })
    .catch(error => console.error('Error loading config:', error));

// Dropdown functionality
const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');

dropdownButton.addEventListener('click', () => {
    const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
    dropdownButton.setAttribute('aria-expanded', !isExpanded);
    dropdownContent.style.display = isExpanded ? 'none' : 'block';
    dropdownContent.setAttribute('aria-hidden', isExpanded);
});
