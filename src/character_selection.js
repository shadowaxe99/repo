import characters from '../assets/data/characters.json' assert { type: 'json' };

export function displayTooltip() {
  characters.forEach((character, index) => {
    console.log(`Character ${index + 1}: ${character.name} - ${character.description}`);
  });
}

export function updateUIText() {
  const skillLevels = document.querySelectorAll('.skill-level');

  skillLevels.forEach((level, index) => {
    level.textContent = `Skill Level ${index + 1}`;
  });
}

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

export function randomSelection() {
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  console.log('Random Character:', randomCharacter);
}

export function redesignUI() {
  const uiLayout = document.querySelector('.ui-layout');

  uiLayout.classList.add('redesigned');
}

// Call the functions
displayTooltip();
updateUIText();
applyCSSAnimation();
randomSelection();
redesignUI();
