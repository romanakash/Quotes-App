import tagsDict from './tags';
import randomQuotes from './randomQuotes';
import Reactotron from 'reactotron-react-native';

const getData = (tag) => {
    Reactotron.log(tag)
    let tagId = 0;
    if (tag === 'All') {
        return randomQuotes(tagId)
    }
    else {
        let values = Object.values(tagsDict);
        for (value of values) {
            if (value === tag) {
                tagId = values.indexOf(value);
            }
        }
        Reactotron.log(tagId)
        return randomQuotes(tagId)
    }
}

export default getData;
