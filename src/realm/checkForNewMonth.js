import quotesRealm from './quotesRealm';
import moment from 'moment';

let newMonth = moment().month() + 1;

const updateMonth = () => {
    quotesRealm.write(() => {               // update month
        quotesRealm.create('Settings', {
            id: 1,
            month: newMonth,
        }, true)
    });
}

const checkForNewMonth = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    let oldMonth = setting[0].month;
    if (oldMonth === undefined) {
        updateMonth();
    }
    if (newMonth !== oldMonth) {
        updateMonth();
        return true;
    }
    else {
        return false;
    }
}

export default checkForNewMonth;
