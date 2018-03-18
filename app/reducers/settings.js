export default function reducer(state = {
    activate_master_settings: false,
    counter: 0,
    product_counter: 0,
    category_counter: 0,
    unit_counter: 0
}, action) {
    switch (action.type){
        // ------------------------------------------------------------------
        case "ACTIVATE_MASTER": {
            console.log(action.payload)
            return {
                ...state,
                activate_master_settings: true
            }
        }
        // ------------------------------------------------------------------
        case "INCREMENT_COUNTER": {
            var new_count = state.counter + 1;
            return {
                ...state,
                counter: new_count
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_COUNTER": {
            return {
                ...state,
                counter: 0,
                activate_master_settings: false
            }

        }
        // ------------------------------------------------------------------
        case "INCREMENT_PRODUCT_COUNTER": {
            var newnum = state.product_counter + 1;
            return {
                ...state, 
                product_counter: newnum
            }
        }
        // ------------------------------------------------------------------
        case "INCREMENT_CATEGORY_COUNTER": {
            var newnum = state.category_counter + 1;
            return {
                ...state, 
                category_counter: newnum
            }
        }
        // ------------------------------------------------------------------
        case "INCREMENT_UNIT_COUNTER": {
            var newnum = state.unit_counter + 1;
            return {
                ...state, 
                unit_counter: newnum
            }
        }                
        default:
            return state;
    }
}