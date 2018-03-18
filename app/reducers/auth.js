export default function reducer(state = {
    authenticating: false,
    authenticated: false,
    user: null,
    subscription_active: false,
    account: null
}, action) {
    switch (action.type) {
        // ------------------------------------------------------------------
        case "LOGIN": {
            return {
                ...state,
                authenticating: true
            }
        }
        // ------------------------------------------------------------------
        case "SET_LOGIN_ITEMS": {
            return {
                ...state,
                user: action.payload.user,
                subscription_active: true,
            }
        }
        // ------------------------------------------------------------------
        case "LOGIN_FULFILLED": {
            return {
                ...state,
                authenticating: false,
                authenticated: true
            }
        }
        // ------------------------------------------------------------------
        case "LOGIN_REJECTED": {
            return {
                ...state,
                authenticating: false,
                subscription_active: action.payload.subscription_active,
            }
        }
        // ------------------------------------------------------------------
        case 'SET_INITIAL_ACCOUNT_STATE': {
            return {
                ...state,
                account: action.payload.account
            }
        }
        // ------------------------------------------------------------------
        case 'SET_ACCOUNT_INFO': {
            return {
                ...state,
                account: action.payload.account
            }
        }
        // ------------------------------------------------------------------
        default:
            return state
    }
}