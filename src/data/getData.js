import tags from './tags';
import randomQuotes from './randomQuotes';

const getData = (tag) => {
    let tagId = 0;
    if (tag === 'All') {
        return randomQuotes(tagId)
    }
    else {
        for (let value of tags) {
            if (value === tag) {
                tagId = tags.indexOf(value);
            }
        }
        return randomQuotes(tagId)
    }
}

export default getData;
