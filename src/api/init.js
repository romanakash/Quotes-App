// initializes the api to conect to nodejs server

import { StitchClient } from 'mongodb-stitch';

const appId = "quotes-ywaqc";
let client = new StitchClient(appId);

let db = client.service('mongodb', 'mongodb-atlas').db('Quote');

export { client, db };
