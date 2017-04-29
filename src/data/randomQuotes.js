import quotesRealm from '../realm/quotesRealm';
import getRandomNum from './getRandomNum';

const randomQuotes = (tagId = 0) => {
    let quotes;
    if (tagId !== 0) {
       quotes = quotesRealm.objects('Quote').filtered(`tagId = ${tagId}`);
    }
    else {
        quotes = quotesRealm.objects('Quote')
    }
    if (quotes.length !== 0) {
        let array = [];
        let nums = [];
        for (var i = 0; i < 11; i++) {
               let randomNum = 0;
               do {
        	        randomNum = getRandomNum(0, quotes.length - 1);
            } while(nums.includes(randomNum));
            nums.push(randomNum)
            array.push(quotes[randomNum]);
        }
        return array;
    }
    else {
        return null
    }
}

export default randomQuotes;
