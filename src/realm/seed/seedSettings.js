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
            notificationTime: '9:0',
            month: newMonth,
            gradients: {
                color_one: '#ee0979',
                color_two: '#ff6a00',
            }
        });
    });
}

export default seedSettings;
