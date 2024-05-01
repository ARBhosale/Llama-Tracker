import { GlideRecord } from '@servicenow/glide';

export function getLlamasHandler(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    const {createLlamaEntry} = require('../../utils/llamas.mjs');

    const gr = new GlideRecord('x_snc_llamatracker_llama');
    gr.query();
    const llamas = [];
    while (gr.next()) {
        const llama = createLlamaEntry(gr);
        llamas.push(llama);
    }
    response.setBody(llamas);
}