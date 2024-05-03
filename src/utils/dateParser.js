/**
 * @param {string | number | Date} dateString
 */
function formatDate(dateString, locale = 'fr-FR') {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formatter.format(date);
}

export default formatDate;
