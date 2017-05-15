import quotesRealm from '../quotesRealm';
import Reactotron from 'reactotron-react-native';

const removeSavedQuotes = () => {
    let result = quotesRealm.objects('Quote').filtered('saved = true');
    if (result.length !== undefined) {
        let results = result.values();
        quotesRealm.write(() => {
            for (let quote of results) {
                quotesRealm.create('Quote', {
                    id: quote.id,
                    saved: false
                }, true);
            }
        });
    }
}

export default removeSavedQuotes;
