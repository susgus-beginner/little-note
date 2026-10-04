const readButton = document.querySelector('#readButton');
const letter = document.querySelector('#letter');
const forgiveButton = document.querySelector('#forgiveButton');
const noButton = document.querySelector('#noButton');
const verdictStage = document.querySelector('#verdictStage');
const verdictResponse = document.querySelector('#verdictResponse');
const whatsappLink = document.querySelector('#whatsappLink');
const whatsappNumber = '212617977359';

function setChoice(choice, response) {
  verdictResponse.textContent = response;
  const message = `Hi zkiko, I read your little note. My choice: ${choice}.`;
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  whatsappLink.innerHTML = 'Send my choice on WhatsApp <span aria-hidden="true">↗</span>';
  whatsappLink.classList.remove('is-disabled');
  whatsappLink.setAttribute('aria-disabled', 'false');
  whatsappLink.removeAttribute('tabindex');
}

readButton.addEventListener('click', () => {
  letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

forgiveButton.addEventListener('click', () => {
  setChoice('I’m open to being friends if it feels right', 'Your comfort comes first. No answer is needed — I hope the next chapter is kind to you. ♡');
  forgiveButton.textContent = 'Friends, if you ever want that ♡';
  forgiveButton.blur();
});

function teleportNoButton(event) {
  if (event) event.preventDefault();
  const stageWidth = verdictStage.clientWidth;
  const stageHeight = verdictStage.clientHeight;
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = Math.max(8, stageWidth - buttonWidth - 8);
  const maxY = Math.max(8, stageHeight - buttonHeight - 36);
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  noButton.style.left = `${x}px`;
  noButton.style.right = 'auto';
  noButton.style.top = `${y}px`;
  setChoice('I don’t forgive you right now', 'That’s okay 😭 your boundary is respected.');
}

noButton.addEventListener('mouseenter', teleportNoButton);
noButton.addEventListener('focus', teleportNoButton);
noButton.addEventListener('touchstart', teleportNoButton, { passive: false });
noButton.addEventListener('click', teleportNoButton);

window.addEventListener('resize', () => {
  if (noButton.style.left) {
    const stageWidth = verdictStage.clientWidth;
    const stageHeight = verdictStage.clientHeight;
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const currentX = parseFloat(noButton.style.left) || 0;
    const currentY = parseFloat(noButton.style.top) || 0;
    noButton.style.left = `${Math.min(currentX, Math.max(8, stageWidth - buttonWidth - 8))}px`;
    noButton.style.top = `${Math.min(currentY, Math.max(8, stageHeight - buttonHeight - 36))}px`;
  }
});
