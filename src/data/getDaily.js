import quotesRealm from '../realm/quotesRealm';

const getDaily = () => {
    let result = quotesRealm.objects('Daily');
    if (result.length > 0) {
        let dailyQuotes = [];
        for (var i = 0; i < result.length; i++) {
            dailyQuotes.push(result[i]);
        }
        return dailyQuotes;
    }
}

export default getDaily;
