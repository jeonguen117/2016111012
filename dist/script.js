const emailLink = document.querySelector('#contact a[href^="mailto:"]');
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');

if (navigator.clipboard?.writeText) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const email = emailLink.getAttribute('href').slice('mailto:'.length);
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = '이메일 주소를 복사했습니다.';
    } catch {
      copyStatus.textContent = '이메일 링크를 길게 누르거나 우클릭해 주소를 복사할 수 있습니다.';
    }
  });
}
