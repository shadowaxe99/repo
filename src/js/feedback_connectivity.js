```javascript
// Importing shared dependencies
import { feedbackButton, inviteFriend, versionUpdates, bugReport } from './main.js';

// Function to open feedback form
function openFeedbackForm() {
    let feedbackForm = document.getElementById(feedbackButton);
    feedbackForm.addEventListener('click', function() {
        window.location.href = 'feedback_form.html';
    });
}

// Function to invite a friend
function inviteFriend() {
    let inviteButton = document.getElementById(inviteFriend);
    inviteButton.addEventListener('click', function() {
        let friendEmail = prompt("Enter your friend's email:");
        // Here you can integrate the functionality to send an email invitation
    });
}

// Function to display version updates
function displayVersionUpdates() {
    let versionElement = document.getElementById(versionUpdates);
    fetch('version_updates.json')
        .then(response => response.json())
        .then(data => {
            versionElement.innerText = `Version: ${data.version}\nChangelog: ${data.changelog}`;
        });
}

// Function to report a bug
function reportBug() {
    let reportButton = document.getElementById(bugReport);
    reportButton.addEventListener('click', function() {
        window.location.href = 'bug_report_form.html';
    });
}

// Call the functions
openFeedbackForm();
inviteFriend();
displayVersionUpdates();
reportBug();
```