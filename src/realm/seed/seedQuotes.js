/* function to seed data into realm
    pass in any array to write
*/

import quotesRealm from '../quotesRealm';

const seedData = (bin) => {
    quotesRealm.write(() => {
        for (let item of bin) {
            quotesRealm.create('Quote', {
                id: item._id,
                value: item.value,
                author: item.author,
                tagId: item.tagId,
                saved: false
            });
        }
    });
}

export default seedData;
