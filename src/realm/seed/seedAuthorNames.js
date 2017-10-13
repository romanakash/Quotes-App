import quotesRealm from '../quotesRealm';

const seedAuthorNames = (authors) => {
    if (authors !== null) {
        quotesRealm.write(() => {
            for (let author of authors) {
                quotesRealm.create('AuthorNames', {
                    name: author
                });
            }
        });
    }
}

export default seedAuthorNames;
