import aiFacts from './assets/data/ai_facts.json' assert { type: 'json' };

/**
 * Displays AI facts in popups.
 */
export function displayAIFactPopups() {
  const aiFactPopups = document.querySelectorAll('.ai-fact-popup');

  aiFactPopups.forEach((popup, index) => {
    popup.textContent = aiFacts[index].fact;
    popup.classList.add('show');
  });
}
