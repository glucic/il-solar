import 'server-only';

const dictionaries = {
    de: () => import('../../messages/de.json').then((mod) => mod.default),
    hr: () => import('../../messages/hr.json').then((mod) => mod.default),
};

export const getDictionary = async (locale: 'de' | 'hr') => {
    return dictionaries[locale]?.() || dictionaries['de']();
};