import quotesRealm from '../realm/quotesRealm';

const getNotificationTime = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    let date = new Date();
    let time = setting[0].notificationTime;
    var l = time.split(':');
    let [ hours, minutes ] = l;
    date.setHours(hours, minutes, 0, 0)
    return date;
}

export default getNotificationTime;
