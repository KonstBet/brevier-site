/*
 * Brevier website behaviour.
 *
 * Chrome Web Store links: every install CTA carries data-store-link and the Pro
 * buttons carry data-store-pro. Once the store listing is live, paste its URL
 * below — the review banner ([data-preview-only]) hides and the buttons regain
 * their labels from the HTML.
 *
 * Until then, those buttons point at the developer preview install page.
 */
(() => {
  const STORE_URL = '';

  const PREVIEW_URL = 'install-dev.html';

  function linkTo(link, href, external) {
    link.href = href;
    if (external) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }

  for (const link of document.querySelectorAll('[data-store-link]')) {
    if (STORE_URL) {
      linkTo(link, STORE_URL, true);
    } else {
      link.textContent = 'Try the developer preview';
      linkTo(link, PREVIEW_URL, false);
    }
  }

  for (const link of document.querySelectorAll('[data-store-pro]')) {
    if (STORE_URL) {
      linkTo(link, STORE_URL, true);
    } else {
      link.textContent = 'Pro available at launch';
      linkTo(link, `${PREVIEW_URL}#pro`, false);
    }
  }

  for (const el of document.querySelectorAll('[data-preview-only]')) {
    el.hidden = Boolean(STORE_URL);
  }

  for (const el of document.querySelectorAll('[data-store-only]')) {
    el.hidden = !STORE_URL;
  }
})();
