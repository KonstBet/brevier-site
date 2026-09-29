/*
 * Brevier website behaviour.
 *
 * Chrome Web Store links: every install CTA carries data-store-link and the Pro
 * buttons carry data-store-pro, both resolved to STORE_URL when it is set. The
 * store-only banners ([data-store-only]) show and the preview banners
 * ([data-preview-only]) hide while it is.
 *
 * If STORE_URL is ever cleared, those buttons fall back to the developer
 * preview install page and the preview banners return.
 */
(() => {
  const STORE_URL =
    'https://chromewebstore.google.com/detail/brevier-%E2%80%94-private-live-ca/jfljjchlfbijcnbkagkiolngfebljapa';

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
