/* fetches quote from the api
    for the first time
    only to be run for the first time!!
*/

import api from './init';
import seedData from '../realm/seed/seedQuotes';

const getInitialQuotes = () => {
    api
        .get('/quotes')
        .then((res) => {
            if (res.data !== null) {
                seedData(res.data)
            }
        })
}

export default getInitialQuotes;
