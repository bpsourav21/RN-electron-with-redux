export default function reducer(state = {
    shop_name: "",
    address: "",
    vat_registration_number: "",
    phone_number: "",
    cashier_subscription_expiry: ""
}, action) {
    switch (action.type){
        // ------------------------------------------------------------------
        case "UPDATE_SHOP_DETAILS": {
            return {
                ...state
            }
        }
        // ------------------------------------------------------------------
        default:
            return state;
    }
}