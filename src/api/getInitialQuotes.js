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
            console.log(res);
            if (res.data !== null) {
                seedData(res.data)
            }
        })
        .then(() => console.log("Seed Completed"))
        .catch(err => console.error(err))
}

export default getInitialQuotes;
