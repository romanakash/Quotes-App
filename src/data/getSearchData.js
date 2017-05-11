import quotesRealm from '../realm/quotesRealm';

const getSearchData = () => {
    let authorNames = quotesRealm.objects('AuthorNames');
    return authorNames;
}

export default getSearchData;
