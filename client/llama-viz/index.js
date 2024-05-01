import { createCustomElement } from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import view from './view.js'

createCustomElement('llama-viz', {
    renderer: { type: snabbdom },
    view,
    properties: {
        llama: {default: {}},
        dataSelection: {default: 'weight'}
    }
})