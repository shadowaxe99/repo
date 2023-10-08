import { sharedDependencies } from './main.js';

/**
 * Creates a typewriter effect for the teaser text.
 */
export function typeWriterEffect() {
  const teaserText = document.querySelector('.teaser-text');

  const text = 'Welcome to the AI World!';
  let index = 0;

  const type = () => {
    if (index < text.length) {
      teaserText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  };

  type();
}

/**
 * Plays the audio cue.
 */
export function playAudio() {
  const audioCue = document.querySelector('.audio-cue');

  audioCue.play();
}

/**
 * Controls the volume of the butler voiceover.
 */
export function controlAudio() {
  const butlerVoiceover = document.querySelector('.butler-voiceover');

  butlerVoiceover.volume = 0.5;
}

// Call the defined functions

typeWriterEffect();
playAudio();
controlAudio();
