// fetches dailies from the api

import api from './init';
import seedDaily from '../realm/seed/seedDaily';

const getDailyQuotes = () => {
    api
        .get('/daily')
        .then((res) => {
            console.log(res);
            if (res.data !== undefined) {
                seedDaily(res.data)
            }
            else {
                return null
            }
        })
        .then(() => console.log("Daily Seed Completed"))
        .catch(err => console.log(err))
}

export default getDailyQuotes;
