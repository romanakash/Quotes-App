import { client, db } from './init';
import moment from 'moment';

let collection = db.collection('daily');

const getDailyQuotes = (month, date) => {
    const promise = new Promise((resolve, reject) => {   //eslint-disable-line
        client.login().then(() => {
            collection.find({ month: month, date: date }).then((dailies) => {
                resolve(dailies[0]);
            })
        })
    })
    return promise;
}

export default getDailyQuotes;
