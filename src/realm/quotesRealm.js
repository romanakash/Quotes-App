import Realm from 'realm';

Quote = {
    name: 'Quote',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        value: 'string',
        author: { type: 'string', indexed: true },
        tagId: { type: 'int', indexed: true },
        saved: 'bool'
    },
}

DailyQuotes = {
    name: 'Daily',
    properties: {
        id: 'string',
        value: 'string',
        author: 'string',
        tagId: 'int',
        day: 'string',
        creationDate: 'string',
    },
}

const Gradient = {
    name: 'Gradient',
    properties: {
        color_one: 'string',
        color_two: 'string'
    }
}

const Settings = {
    name: 'Settings',
    primaryKey: 'id',
    properties: {
        id: 'int',
        quoteFamily: 'string',
        notificationTime: 'string',
        month: 'int',
        gradients: 'Gradient',
    }
}

let quotesRealm = new Realm({schema: [Quote, DailyQuotes, Gradient, Settings], schemaVersion: 7});
export default quotesRealm;
