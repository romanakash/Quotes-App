import quotesRealm from '../quotesRealm';

const seedAuthorNames = (authors) => {
    quotesRealm.write(() => {
        for (author of authors) {
            quotesRealm.create('AuthorNames', {
                name: author
            });
        }
    });
}

export default seedAuthorNames;
