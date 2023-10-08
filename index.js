import { displayAIFactPopups } from './ai_challenges.js';
import { displayTooltip, updateUIText, applyCSSAnimation, randomSelection, redesignUI } from './character_selection.js';
import { typeWriterEffect, playAudio, controlAudio } from './entry_page.js';
import { openFeedbackForm, inviteFriend, displayVersionUpdates, reportBug } from './feedback_connectivity.js';
import { updatePlayerMilestones } from './game_progression.js';
import { displayFuturisticGraphs } from './narrative_engagement.js';

// Call the functions

typeWriterEffect();
playAudio();
controlAudio();
displayAIFactPopups();
displayTooltip();
updateUIText();
applyCSSAnimation();
randomSelection();
redesignUI();
openFeedbackForm();
inviteFriend();
displayVersionUpdates();
reportBug();
updatePlayerMilestones();
displayFuturisticGraphs();
