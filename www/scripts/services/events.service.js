'use strict'

import Promise from 'bluebird';
import utils from './utils.js';

// Get shorthands to utils.storage and utils.http
const {storage, http} = utils;

function getCurrentRemoteEvents() {
    let _headers = {};
    return http.get('/api/events/all', {headers: _headers})
    .then((news) => {
        storage.set('allEvents', news);
        return Promise.resolve(news);
    })
}

export default {
    getAllEvents: getCurrentRemoteEvents
}