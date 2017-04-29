import quotesRealm from '../../realm/quotesRealm';

const changeQuoteFamily = (font) => {
    quotesRealm.write(() => {
        quotesRealm.create('Settings', {
            id: 1,
            quoteFamily: font
        }, true)
    });
}

export default changeQuoteFamily;
