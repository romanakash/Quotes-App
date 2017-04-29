import quotesRealm from './quotesRealm';
import moment from 'moment';

const checkForNewMonth = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    let oldMonth = setting[0].month;
    if (oldMonth === undefined) {
        updateMonth();
    }
    oldMonth = setting[0].month;
    let newMonth = moment().month();
    if (newMonth !== oldMonth) {
        return true;
        updateMonth();
    }
    else {
        return false;
    }
}

const updateMonth = () => {
    let newMonth = moment().month();
    quotesRealm.write(() => {               // update month
        quotesRealm.create('Settings', {
            id: 1,
            month: newMonth,
        }, true)
    });
}

export default checkForNewMonth;
