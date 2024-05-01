import { createCustomElement, actionTypes } from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import {
    fetchLlamasSuccess,
    fetchLlamas,
} from './actions/action-handlers.js'
import {
    LLAMA_FETCH_SUCCESS,
} from './actions/action-types.js'
import './llama-farm/index.js'

const view = ({ llamas }) => <div>
    <h2>Testing new build of fluent 456 def</h2>
    <llama-farm llamas={llamas} />
</div>

// Rendered at http://localhost:8081/now/llama-farm/home
createCustomElement('llama-dashboard', {
    renderer: { type: snabbdom },
    view,
    initialState: {
        llamas: []
    },
    actionHandlers: {
        [actionTypes.COMPONENT_BOOTSTRAPPED]: fetchLlamas,
        [LLAMA_FETCH_SUCCESS]: fetchLlamasSuccess
    }
})