import quotesRealm from '../quotesRealm';
import Reactotron from 'reactotron-react-native';

const changeSaved = (objId, save) => {
    quotesRealm.write(() => {
        quotesRealm.create('Quote', {
            id: objId,
            saved: save
        }, true);
    });
}

export default changeSaved;
