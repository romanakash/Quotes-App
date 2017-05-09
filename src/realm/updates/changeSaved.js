import quotesRealm from '../quotesRealm';

const changeSaved = (objId, save) => {
    quotesRealm.write(() => {
        quotesRealm.create('Quote', {
            id: objId,
            saved: save
        }, true);
    });
}

export default changeSaved;
