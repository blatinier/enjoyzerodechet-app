import { connect } from 'react-redux';
import { getOr } from 'lodash/fp';
import en from './locales/en.json';
import fr from './locales/fr.json';

const translations = {
    en,
    fr,
};

const tInit = (locale) => (key) => getOr('en', locale, translations)[key];
const getLocalName = (locale) => (names) => getOr(names.name, `name-${locale}`, names);

const withTranslation = connect(({ locale: { language } }) => ({
    t: tInit(language),
    getLocalName: getLocalName(language),
}));

export default withTranslation;
