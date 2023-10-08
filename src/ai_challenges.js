import aiFacts from '../assets/data/ai_facts.json' assert { type: 'json' };

export function displayAIFactPopups() {
  aiFacts.forEach((fact, index) => {
    console.log(`AI Fact ${index + 1}: ${fact}`);
  });
}

// Call the function
displayAIFactPopups();
