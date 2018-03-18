export default function reducer(state = {
    syncing: false,
    synced: false,
    error: null
}, action) {
    switch (action.type){
        // ------------------------------------------------------------------
        case "SYNCING":{
            return {
                ...state,
                syncing: true
            }
        }
        // ------------------------------------------------------------------
        case "SYNCING_FULFILLED":{
            return {
                ...state,
                syncing: true
            }
        }
        // ------------------------------------------------------------------
        case "SYNCING_REJECTED":{
            return {
                ...state,
                syncing: false,
                synced: true
            }
        }
        // ------------------------------------------------------------------   
        default:
            return state;
    }
}