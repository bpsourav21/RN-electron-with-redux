export default function reducer(state = {
    error: null
}, action) {
    switch (action.type){
        case "": {
            return {
                ...state
            }
        }
        default:
            return state;
    }
}