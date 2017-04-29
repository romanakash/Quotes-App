import quotesRealm from '../quotesRealm';

const seedDaily = (bin) => {
    if (bin !== null) {
        quotesRealm.write(() => {
            for (item of bin) {
                quotesRealm.create('Daily', {
                    id: item._id,
                    value: item.value,
                    author: item.author,
                    tagId: item.tagId,
                    day: item.day,
                    creationDate: item.creationDate,
                });
            }
        });
    }
}

export default seedDaily;
