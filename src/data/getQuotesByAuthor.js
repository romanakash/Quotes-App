import quotesRealm from '../realm/quotesRealm';

const getQuotesByAuthor = (author) => {
    let quotes = quotesRealm.objects('Quote').filtered(`author = "${author}"`);
    return quotes;
}

export default getQuotesByAuthor;
