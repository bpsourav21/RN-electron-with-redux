export default function reducer(state = {
    products: [],
    categories: [],
    units: [],
    working: false,
    working_msg: null,
    current_product: {},
    current_category: null,
    current_unit: null,
}, action) {
    switch (action.type) {
        case "SET_INITIAL_INVENTORY_STATE": {
            console.log(action.payload.products)
            return {
                ...state,
                products: action.payload.products
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_SELECTED_PRODUCT": {
            return {
                ...state,
                current_product: {}
            }
        }
        // ------------------------------------------------------------------
        case "SELECT_CATEGORY": {
            return {
                ...state,
                current_category: action.payload.category
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_SELECTED_CATEGORY": {
            return {
                ...state,
                current_category: null
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_CATEGORIES_FULFILLED": {
            return {
                ...state,
                categories: action.payload.categories
            }
        }
        // ------------------------------------------------------------------
        case "ADD_CATEGORY_FULFILLED": {
            return {
                ...state,
                current_category: null,
                categories: action.payload.categories
            }
        }
        // ------------------------------------------------------------------
        case "EDIT_CATEGORY_FULFILLED": {
            return {
                ...state,
                current_category: null,
                categories: action.payload.categories
            }
        }        
        // ------------------------------------------------------------------
        case "DELETE_CATEGORY_FULFILLED": {
            return {
                ...state,
                current_category: null,
                categories: action.payload.categories
            }
        }
        // ------------------------------------------------------------------
        case "SELECT_UNIT": {
            return {
                ...state,
                current_unit: action.payload.unit
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_SELECTED_UNIT": {
            return {
                ...state,
                current_unit: null
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_UNITS_FULFILLED": {
            return {
                ...state,
                units: action.payload.units
            }
        }
        // ------------------------------------------------------------------
        case "ADD_UNIT_FULFILLED": {
            return {
                ...state,
                current_unit: null,
                units: action.payload.unit
            }
        }
        // ------------------------------------------------------------------
        case "EDIT_UNIT_FULFILLED": {
            return {
                ...state,
                current_unit: null,
                units: action.payload.units
            }
        }
        // ------------------------------------------------------------------
        case "DELETE_UNIT_FULFILLED": {
            return {
                ...state,
                current_unit: null,
                units: action.payload.units
            }
        }
        // ------------------------------------------------------------------
        case "SELECT_PRODUCT": {
            return {
                ...state,
                current_product: action.payload.product
            }
        }
        // ------------------------------------------------------------------
        case "ADD_PRODUCT_FULFILLED": {
            return {
                ...state,
                current_product: {},
                products: action.payload.products
            }
        }
        // ------------------------------------------------------------------
        case "EDIT_PRODUCT_FULFILLED": {
            return {
                ...state,
                current_product: {},
                products: action.payload.products
            }
        }
        // ------------------------------------------------------------------
        case "DELETE_PRODUCT_FULFILLED": {
            return {
                ...state,
                current_product: {},
                products: action.payload.products
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_PRODUCTS": {
            return {
                ...state,
                working: true,
                working_msg: "Obtaining all products from database"
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_PRODUCTS_FULFILLED": {
            return {
                ...state,
                working: false,
                working_msg: null,
                products: action.payload.products
            }
        }
        // ------------------------------------------------------------------
        default:
            return state;
    }
}