import quotesRealm from '../realm/quotesRealm';

const getNotificationDate = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    let time = setting[0].notificationTime;
    var l = time.split(':');
    let [ hours, minutes ] = l;
    let date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

export default getNotificationDate;