// script.js

// Initialize i18next with the HTTP backend
i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'en', // default language
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}.json' // where translations live
    }
  }, function(err, t) {
    updateContent();
  });

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
