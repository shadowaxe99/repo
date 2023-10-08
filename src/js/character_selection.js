```javascript
import { characters } from './assets/data/characters.json';

// Function to display character descriptions as tooltips
function displayTooltip() {
  const characterElements = document.querySelectorAll('.character');

  characterElements.forEach((characterElement, index) => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = characters[index].description;
    characterElement.appendChild(tooltip);
  });
}

// Function to update skill level terms
function updateUIText() {
  const skillLevelElements = document.querySelectorAll('.skill-level');

  skillLevelElements.forEach((skillLevelElement) => {
    const skillLevel = skillLevelElement.textContent;

    switch (skillLevel) {
      case 'Noob':
        skillLevelElement.textContent = 'Beginner';
        break;
      case 'Medium':
        skillLevelElement.textContent = 'Intermediate';
        break;
      case 'Expert':
        skillLevelElement.textContent = 'Advanced';
        break;
      default:
        break;
    }
  });
}

// Function to apply mouseover effect
function applyCSSAnimation() {
  const characterElements = document.querySelectorAll('.character');

  characterElements.forEach((characterElement) => {
    characterElement.addEventListener('mouseover', () => {
      characterElement.classList.add('hover-effect');
    });

    characterElement.addEventListener('mouseout', () => {
      characterElement.classList.remove('hover-effect');
    });
  });
}

// Function to randomize character selection
function randomSelection() {
  const nonCharacterElements = document.querySelectorAll('.non-character');

  nonCharacterElements.forEach((nonCharacterElement) => {
    nonCharacterElement.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const selectedCharacter = characters[randomIndex];
      // Display selected character
    });
  });
}

// Function to redesign UI layout
function redesignUI() {
  const characterSelectionElement = document.querySelector('.character-selection');
  characterSelectionElement.style.display = 'flex';
  characterSelectionElement.style.flexWrap = 'wrap';
  characterSelectionElement.style.justifyContent = 'space-around';
}

// Call functions
displayTooltip();
updateUIText();
applyCSSAnimation();
randomSelection();
redesignUI();
```