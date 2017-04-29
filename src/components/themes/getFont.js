import quotesRealm from '../../realm/quotesRealm';

const getFont = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    return setting[0].quoteFamily;
}

export default getFont;
