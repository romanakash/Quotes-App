import PushNotification from 'react-native-push-notification';
import getNotificationDate from './data/getNotificationDate';
import quotesRealm from './realm/quotesRealm';

const initNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
    let date = getNotificationDate();
    if (date !== null) {
        PushNotification.localNotificationSchedule({
            title: 'Your Quote for the Day is ready!',
            message: 'Click here to read it',
            date: date,
            repeatType: 'day'
        })
    }
}

export default initNotifications;
