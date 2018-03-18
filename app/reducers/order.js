export default function reducer(state = {
    current_order: [],
    current_sale: null,
    inputValue: 0,
    inputQuantity: 0,
    current_order_subtotal: 0,
    current_order_tax: 0,
    vat_active: false,
    current_order_total: 0,
    current_order_profit: 0,
    error: null,
    paid: 0,
    due: 0,
    due_client_name: null,
    due_client_number: null,
    vat_rate: 0,
    processed_order: null,
    processed_sale_id: null,
    dues: [],
    current_due: null,
    specific_due_item: null,
    specific_sale: null,
    working: false
}, action) {
    switch (action.type) {
        // ------------------------------------------------------------------
        case "SET_VAT_RATE": {
            return {
                ...state,
                vat_rate: (action.payload.vat_rate / 100).toFixed(2)
            }
        }
        // ------------------------------------------------------------------
        case "PRINTING_RECEIPT_FULFILLED": {
            return {
                ...state,
                printing: false
            }
        }
        // ------------------------------------------------------------------
        case "PRINTING_RECEIPT_REJECTED": {
            return {
                ...state,
                error: action.payload.error,
                printing: false
            }
        }
        // ------------------------------------------------------------------
        case "ADD_CUSTOM_ITEM": {
            var item_name = "Item";
            var inpQty = state.inputQuantity;
            if (state.inputQuantity == 0) {
                inpQty = 1;
            }
            var subtotal = state.current_order_subtotal + (state.inputValue * inpQty);
            var order_copy = state.current_order.slice();
            var item = {
                name: item_name,
                quantity: inpQty,
                price: state.inputValue,
                item_total: (inpQty * state.inputValue),
                buying_price: 0
            };
            order_copy.push(item);
            var taxed = 0;
            if (state.vat_active){
                taxed = state.vat_rate * subtotal;
            }
            var total = subtotal + taxed;
            var profit = state.current_order_profit + (item.quantity * (item.price - item.buying_price))
            return {
                ...state,
                current_order: order_copy,
                inputValue: 0,
                inputQuantity: 0,
                current_order_subtotal: subtotal,
                current_order_tax: taxed,
                current_order_total: total,
                current_order_profit: profit
            }
        }
        // ------------------------------------------------------------------
        case "REMOVE_ITEM_FROM_ORDER": {
            var order_copy = state.current_order.slice();
            var removed_item = order_copy[action.payload.index];
            var subtotal = state.current_order_subtotal - removed_item['item_total'];
            var taxed = 0;
            if (state.vat_active){
                taxed = state.vat_rate * subtotal;
            }
            var total = subtotal + taxed;
            var profit = state.current_order_profit - (removed_item.quantity * (removed_item.price - removed_item.buying_price))
            order_copy.splice(action.payload.index, 1);
            return {
                ...state,
                current_order: order_copy,
                current_order_subtotal: subtotal,
                current_order_tax: taxed,
                current_order_total: total,
                current_order_profit: profit
            }
        }
        // ------------------------------------------------------------------
        case "CHANGE_ITEM_NAME_IN_ORDER": {
            var order_copy = state.current_order.slice();
            var item = order_copy[action.payload.index];
            item['name'] = action.payload.new_name;
            return {
                ...state,
                current_order: order_copy
            }
        }
        // ------------------------------------------------------------------
        case "UPDATE_ORDER": {
            var order_copy = action.payload.order;
            var subtotal = 0
            var profit = 0
            for (var i = 0; i < order_copy.length; i++) {
                subtotal += order_copy[i]['item_total'];
                profit += (order_copy[i]['quantity'] * (order_copy[i]['price'] - order_copy[i]['buying_price']))
            }
            var taxed = 0;
            if (state.vat_active) taxed = state.vat_rate * subtotal;
            var total = subtotal + taxed;
            return {
                ...state,
                current_order: order_copy,
                current_order_subtotal: subtotal,
                current_order_tax: taxed,
                current_order_total: total,
                current_order_profit: profit
            }
        }
        // ------------------------------------------------------------------
        case "ADD_ITEM_TO_ORDER": {
            console.log(action.payload)
            var order_copy = state.current_order.slice();
            var found = false;
            for (var i = 0; i < order_copy.length; i++) {
                if (order_copy[i]['name'] == action.payload.item.name) {
                    found = true;
                    order_copy[i]['quantity'] += action.payload.item.quantity;
                    order_copy[i]['item_total'] = order_copy[i]['price'] * order_copy[i]['quantity'];
                    break;
                }
            }
            if (!found) {
                order_copy.push(action.payload.item);
            }
            var subtotal = state.current_order_subtotal + (action.payload.item.price * action.payload.item.quantity);
            var taxed = 0;
            if (state.vat_active){ 
                taxed = state.vat_rate * subtotal 
            };
            var total = subtotal + taxed;
            var profit = state.current_order_profit + (action.payload.item.quantity * (action.payload.item.price - action.payload.item.buying_price))
            return {
                ...state,
                current_order: order_copy,
                current_order_subtotal: subtotal,
                current_order_tax: taxed,
                current_order_total: total,
                current_order_profit: profit
            }
        }
        // ------------------------------------------------------------------
        case "SET_INPUT_VALUE": {
            return {
                ...state,
                inputValue: action.payload.inputValue
            }
        }
        // ------------------------------------------------------------------
        case "SET_INPUT_QUANTITY": {
            return {
                ...state,
                inputQuantity: action.payload.inputQuantity
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_INPUT_VALUE": {
            return {
                ...state,
                inputValue: 0,
                inputQuantity: 0
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_ORDER": {
            return {
                ...state,
                current_order: [],
                inputValue: 0,
                inputQuantity: 0,
                current_order_subtotal: 0,
                current_order_tax: 0,
                current_order_total: 0,
                current_order_profit: 0,
                processed_order: null,
                processed_sale_id: null
            }
        }
        // ------------------------------------------------------------------
        case "ADD_DUE_CLIENT_INFO": {
            return {
                ...state,
                due_client_name: action.payload.due_client_name,
                due_client_number: action.payload.due_client_number
            }
        }
        // ------------------------------------------------------------------
        case "SET_PROCESSED_SALE_ID": {
            return {
                ...state,
                processed_sale_id: action.payload.processed_sale_id
            }
        }
        // ------------------------------------------------------------------
        case "COMPLETE_SALE": {
            return {
                ...state,
                processed_order: action.payload.sale,
                current_order: [],
                inputValue: 0,
                inputQuantity: 0,
                current_order_subtotal: 0,
                current_order_tax: 0,
                current_order_total: 0,
                current_order_profit: 0,
                due_client_name: null,
                due_client_number: null
            }
        }
        //============== start due =======================================
        // ------------------------------------------------------------------
        case "GET_ALL_DUES_FULFILLED": {
            return {
                ...state,
                dues: action.payload.dues
            }
        }
        // ------------------------------------------------------------------
        case "SELECT_DUE": {
            return {
                ...state,
                current_due: action.payload.due
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_SELECTED_DUE": {
            return {
                ...state,
                current_due: null
            }
        }
        // ------------------------------------------------------------------
        case "SELECT_SPECIFIC_DUE": {
            return {
                ...state,
                specific_due_item: action.payload.specific_due_item,
                working: false
            }
        }
        // ------------------------------------------------------------------
        case "RESET_DUES_REDUCER":{
            return {
                ...state,
                specific_due_item: null,
                specific_sale: null,
                dues: [],
                current_due: null,
                due_client_name: null,
                due_client_number: null
            }  
        }
        // ------------------------------------------------------------------
        case "CLEAR_SPECIFIC_SELECTED_DUE": {
            return {
                ...state,
                specific_due_item: null
            }
        }
        // ------------------------------------------------------------------
        case "GET_SPECIFIC_SALE": {
            return {
                ...state,
                specific_sale: action.payload.specific_sale
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_SPECIFIC_SALE": {
            return {
                ...state,
                specific_sale: null
            }
        }
        // ------------------------------------------------------------------
        case "DELETE_ALL_DUE": {
            return {
                ...state
            }
        }
        // ------------------------------------------------------------------
        case "DELETE_SPECIFIC_DUE": {
            return {
                ...state,
                dues: action.payload.dues
            }
        }
        //============== end due =======================================
        // ------------------------------------------------------------------
        case "CLEAR_PROCESSED_ORDER": {
            return {
                ...state,
                processed_order: null
            }
        }
        // ------------------------------------------------------------------
        case "HOLD_SALE": {
            return {
                ...state,
                current_sale: action.payload.sale
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_HELD_SALE": {
            return {
                ...state,
                current_sale: null
            }
        }
        // ------------------------------------------------------------------
        case "SET_VAT_ACTIVE": {
            return {
                ...state,
                vat_active: action.payload.vat_active
            }
        }
        // ------------------------------------------------------------------
        default:
            return state;
    }
}