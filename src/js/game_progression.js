```javascript
import { achievements } from './assets/data/achievements.json';

let playerMilestones = [];

function displayDynamicTooltip() {
    let tooltipsHints = document.querySelectorAll('.tooltipsHints');
    tooltipsHints.forEach((tooltip, index) => {
        tooltip.addEventListener('mouseover', function() {
            tooltip.textContent = achievements[index].hint;
        });
        tooltip.addEventListener('mouseout', function() {
            tooltip.textContent = '';
        });
    });
}

function checkPlayerMilestones() {
    let currentMilestone = playerMilestones[playerMilestones.length - 1];
    if (currentMilestone && currentMilestone in achievements) {
        displayDynamicTooltip();
    }
}

function updatePlayerMilestones(milestone) {
    playerMilestones.push(milestone);
    checkPlayerMilestones();
}

export { updatePlayerMilestones };
```