import { createCustomElement } from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import view from './view.js'

createCustomElement('llama-farm', {
    renderer: { type: snabbdom },
    view,
    properties: {
        llamas: {default: []}
    }
})