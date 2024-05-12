let lang = 'fr-ca';

if (typeof window !== 'undefined') {
    lang = window.location.pathname.startsWith('/en-us') ? 'en-us' : 'fr-ca';
}

/**
 * @param {string | number | Date} dateString
 */
function formatDate(dateString, locale = lang) {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formatter.format(date);
}

export default formatDate;
