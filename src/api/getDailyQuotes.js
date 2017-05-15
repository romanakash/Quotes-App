// fetches dailies from the api

import api from './init';
import seedDaily from '../realm/seed/seedDaily';

const getDailyQuotes = () => {
    api
        .get('/daily')
        .then((res) => {
            if (res.data !== undefined) {
                seedDaily(res.data)
            }
            else {
                return null
            }
        })
}

export default getDailyQuotes;
