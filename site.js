/*
 * Brevier website behaviour.
 *
 * Chrome Web Store links: every CTA carries data-store-link. Once the store
 * listing is live, paste its URL below — nothing else needs to change.
 * Until then, those buttons point at the GitHub repository instead.
 */
(() => {
  const STORE_URL = '';

  const FALLBACK_URL = 'https://github.com/KonstBet/brevier-site';
  const FALLBACK_LABEL = 'Get Brevier on GitHub';

  for (const link of document.querySelectorAll('[data-store-link]')) {
    if (STORE_URL) {
      link.href = STORE_URL;
    } else {
      link.href = FALLBACK_URL;
      link.textContent = FALLBACK_LABEL;
    }
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
})();
