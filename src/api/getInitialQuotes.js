/* fetches quote from the api
    for the first time
    only to be run for the first time!!
*/

import { db, client } from './init';
import seedData from '../realm/seed/seedQuotes';
import seedAuthorNames from '../realm/seed/seedAuthorNames';
import _ from 'lodash';

let collection = db.collection('quotes');

const getAuthorNames = (quotes) => {
    let array = _.map(_.uniqBy(quotes, 'author'), (quote) => quote.author);
    seedAuthorNames(array);
}

const getInitialQuotes = () => {
    let data;
    client.login().then(() => {
        collection.find({})
            .then((quotes) => {
                getAuthorNames(quotes)
                seedData(quotes)
            })
    })
}

export default getInitialQuotes;
