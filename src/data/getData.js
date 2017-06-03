import tags from './tags';
import randomQuotes from './randomQuotes';

const getData = (tag) => {
    let tagId = 0;
    if (tag === 'All') {
        return randomQuotes(tagId)
    }
    else {
        let values = tags;
        for (let value of values) {
            if (value === tag) {
                tagId = values.indexOf(value);
            }
        }
        return randomQuotes(tagId)
    }
}

export default getData;
