import Realm from 'realm';

const Quote = {
    name: 'Quote',
    primaryKey: 'id',
    properties: {
        id: { type: 'string', indexed: true },
        value: 'string',
        author: { type: 'string' },
        tagId: { type: 'int' },
        saved: 'bool'
    },
}

// Array for search bar results
const AuthorNames = {
    name: 'AuthorNames',
    properties: {
        name: { type: 'string' }
    }
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
        month: 'int',
        gradients: 'Gradient'
    }
}

let quotesRealm = new Realm({
    schema: [Quote, AuthorNames, Gradient, Settings],
    schemaVersion: 0
});
export default quotesRealm;
