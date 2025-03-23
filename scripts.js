// Cargar traducciones según el idioma seleccionado
function loadTranslations(lang) {
    fetch(`./locales/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${lang}.json: ${response.statusText}`);
            }
            return response.json();
        })
        .then(translations => {
            // Actualizar el contenido de la página con las traducciones
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        })
        .catch(error => console.error(error));
}

// Cambiar idioma
function changeLanguage(lang) {
    localStorage.setItem('language', lang); // Guardar preferencia de idioma
    loadTranslations(lang);
}

// Cargar idioma por defecto
const defaultLanguage = localStorage.getItem('language') || 'es'; // Español por defecto
loadTranslations(defaultLanguage);

// Evento para cambiar idioma
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

{
  "title": "Lucas Daniel Marín",
  "subtitle": "Artificial Intelligence Engineering Student | Full Stack Developer | Python AI Developer",
  "quote": "Transforming ideas into intelligent solutions with AI and web development.",
  "portfolioButton": "View Portfolio",
  "aboutTitle": "About Me",
  "aboutText": "I am Lucas Daniel Marín...",
  "skillsTitle": "Skills",
  "contactTitle": "Contact"
}
