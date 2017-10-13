import quotesRealm from '../quotesRealm';

const seedData = (bin) => {
    if (bin !== null) {
        quotesRealm.write(() => {
            for (let item of bin) {
                quotesRealm.create('Quote', {
                    id: item._id.toString(),
                    value: item.value,
                    author: item.author,
                    tagId: item.tagId,
                    saved: false
                });
            }
        });
    }
}

export default seedData;
