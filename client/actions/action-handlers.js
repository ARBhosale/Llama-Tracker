import {createHttpEffect} from '@servicenow/ui-effect-http'
import {
    LLAMA_FETCH_SUCCESS,
    LLAMA_FETCH_FAILED
} from './action-types'

export const fetchLlamas = createHttpEffect('/api/x_snc_llamatracker/farm', {
    method: 'GET',
    successActionType: LLAMA_FETCH_SUCCESS,
    errorActionType: LLAMA_FETCH_FAILED
})

export const fetchLlamasSuccess = ({action, updateState, state}) => {
    const llamas = action.payload.result;
    updateState({...state, llamas});
}