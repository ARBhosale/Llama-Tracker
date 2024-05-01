import { RestApi } from '@servicenow/sdk-core/rest';
import { getLlamasHandler } from './get-llamas';

RestApi({
    name: 'Get Farm',
    consumes: 'application/json',
    service_id: '',
    routes: [
        {
            name: 'Get Llamas',
            method: 'GET',
            path: '/farm',
            script: getLlamasHandler
        }
    ]
})
