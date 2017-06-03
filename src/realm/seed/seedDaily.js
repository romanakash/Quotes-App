import quotesRealm from '../quotesRealm';

const seedDaily = (bin) => {
    let result = quotesRealm.objects('Daily').snapshot();
    quotesRealm.write(() => {
        quotesRealm.delete(result);
    })
    if (bin !== null) {
        quotesRealm.write(() => {
            for (let item of bin) {
                quotesRealm.create('Daily', {
                    id: item._id,
                    value: item.value,
                    author: item.author,
                    day: item.day,
                    date: item.date,
                });
            }
        });
    }
}

export default seedDaily;
