// fetches dailies from the api

import api from './init';
import seedDaily from '../realm/seed/seedDaily';
import moment from 'moment';

const getDailyQuotes = () => {
    const month = moment().month() + 1;
    api
        .get(`/daily/${month}`)
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
