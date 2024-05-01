import { createCustomElement } from '@servicenow/ui-core'
import snabbdom from '@servicenow/ui-renderer-snabbdom'
import view from './view.js';
import styles from './styles.css';

createCustomElement('llama-item', {
    renderer: { type: snabbdom },
    view,
    styles,
    properties: {
        llama: {default: {}}
    }
})