import english from '../../../cv-en.json';
import spanish from '../../../cv.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};


export const getI18N = ({ currentLocale  }) => {
    if (currentLocale === LANG.SPANISH) return spanish
    if (currentLocale === LANG.ENGLISH) return english
}

