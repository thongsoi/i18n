// script.js
// Initialize i18next with the HTTP backend
i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector) // auto detect language
    .init({
    fallbackLng: 'en',
    backend: { loadPath: '/locales/{{lng}}.json' }
    }, updateContent);

// Function to update all elements with data-i18n attribute
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key);
  });
}

// Change language dynamically
function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
    document.documentElement.lang = lng; // SEO & accessibility
  });
}
