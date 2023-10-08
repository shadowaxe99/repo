```javascript
import { aiFacts } from './assets/data/ai_facts.json';

// Function to display AI fact popups
function displayAIFactPopups(milestone) {
    // Filter AI facts based on the milestone
    const relevantFacts = aiFacts.filter(fact => fact.milestone === milestone);

    // Randomly select a fact from the relevant facts
    const fact = relevantFacts[Math.floor(Math.random() * relevantFacts.length)];

    // Create a modal popup
    const modal = document.createElement('div');
    modal.id = 'aiFactPopup';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>AI Fact</h2>
            <p>${fact.text}</p>
        </div>
    `;

    // Append the modal to the body
    document.body.appendChild(modal);

    // Get the close button and add a click event listener
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Display the modal
    modal.style.display = 'block';
}

// Listen for the 'displayAIFactPopups' message
window.addEventListener('displayAIFactPopups', (event) => {
    displayAIFactPopups(event.detail.milestone);
});
```