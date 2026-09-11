export const dateFormatter = (date) => {
    const datePromise = new Date(date);

    if (Number.isNaN(datePromise.getTime())) {
        return '';
    }

    const formatter = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(datePromise).replace(' г.', '').trim();
}