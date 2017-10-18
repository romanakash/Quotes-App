// Function to init settings realm for the first time

import quotesRealm from '../quotesRealm';
import moment from 'moment';

const seedSettings = () => {
    let newMonth = moment().month();
    quotesRealm.write(() => {
        let set = quotesRealm.objects('Settings');
        quotesRealm.delete(set)
        quotesRealm.create('Settings', {
            id: 1,
            quoteFamily: 'Quicksand-Light',
            month: newMonth,
            gradients: {
                color_one: '#FF512F',
                color_two: '#dd2476',
            }
        });
    });
}

export default seedSettings;
