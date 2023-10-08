import characters from './assets/data/characters.json' assert { type: 'json' };

/**
 * Displays tooltips for each character.
 */
export function displayTooltip() {
  const characterDescriptions = document.querySelectorAll('.character-description');

  characterDescriptions.forEach((description, index) => {
    description.textContent = characters[index].description;
    description.classList.add('show');
  });
}

/**
 * Updates the UI text for each skill level.
 */
export function updateUIText() {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach((level, index) => {
    level.textContent = `Skill Level ${index + 1}`;
  });
}

/**
 * Applies a CSS animation to each mouseover effect.
 */
export function applyCSSAnimation() {
  const mouseoverEffects = document.querySelectorAll('.mouseover-effect');

  mouseoverEffects.forEach(effect => {
    effect.addEventListener('mouseover', () => {
      effect.classList.add('animate');
    });

    effect.addEventListener('mouseout', () => {
      effect.classList.remove('animate');
    });
  });
}

/**
 * Selects a random character and logs it to the console.
 */
export function randomSelection() {
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  console.log('Random Character:', randomCharacter);
}

/**
 * Redesigns the UI layout.
 */
export function redesignUI() {
  const uiLayout = document.querySelector('.ui-layout');

  uiLayout.classList.add('redesigned');
}
