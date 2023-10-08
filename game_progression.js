import { sharedDependencies } from './main.js';

export function displayDynamicTooltip() {
  console.log('Dynamic tooltip displayed');
}

export function checkPlayerMilestones() {
  console.log('Player milestones checked');
  displayDynamicTooltip();
}

export function updatePlayerMilestones() {
  console.log('Player milestones updated');
  checkPlayerMilestones();
}

// Export the updatePlayerMilestones function

// // // // export { updatePlayerMilestones };
