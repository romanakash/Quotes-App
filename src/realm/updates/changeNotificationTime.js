import quotesRealm from '../quotesRealm';
import initNotifications from '../../initNotifications';

const changeNotificationTime = (time) => {
    quotesRealm.write(() => {
        quotesRealm.create('Settings', {
            id: 1,
            notificationTime: time
        }, true)
    });
    initNotifications();
}

export default changeNotificationTime;
