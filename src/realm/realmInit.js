/** This files initializes Realm
 *  quotesRealm will run before the remaining code
 *  Link this to required entry files
 */

import './quotesRealm'; // defines schema and inits quotesRealm

import quotesRealm from '../realm/quotesRealm';
import getInitialQuotes from '../api/getInitialQuotes';
import getDailyQuotes from '../api/getDailyQuotes';
import seedSettings from './seed/seedSettings';
import checkForNewMonth from './checkForNewMonth';
import initNotifications from '../initNotifications';

let quotes = quotesRealm.objects('Quote');           // seed quotes
if (quotes.length < 1) {
    getInitialQuotes();
}

let daily = quotesRealm.objects('Daily');            // seed dailies
if (daily.length < 1 || checkForNewMonth()) {
    getDailyQuotes();
}

let settings = quotesRealm.objects('Settings');      // seed settings
if (settings.length < 1) {
    seedSettings();
    // Init Notificaitons
    initNotifications();
}
