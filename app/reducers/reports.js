export default function reducer(state = {
    working: false,
    report: null,
    details: [],
    graphData: []
}, action) {
    switch (action.type){
        // ------------------------------------------------------------------
        case "GET_REPORT_FOR_DAY":{
            return {
                ...state,
                working: true
            }
        }
        // ------------------------------------------------------------------
        case "GET_REPORT_FOR_DAY_FULFILLED":{
            return {
                ...state,
                working: false,
                report: action.payload.report
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_SALES_FOR_DAY": {
            return {
                ...state,
                working: true
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_SALES_FOR_DAY_FULFILLED": {
            return {
                ...state,
                working: false,
                details: action.payload.details
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_SALES_FOR_MONTH": {
            return {
                ...state,
                working: true
            }
        }
        // ------------------------------------------------------------------
        case "GET_ALL_SALES_FOR_MONTH_FULFILLED": {
            return {
                ...state,
                working: false,
                report: action.payload.report
            }
        }
        // ------------------------------------------------------------------
        case "GET_GRAPH_DATA": {
            return {
                ...state,
                working: true
            }
        }
        // ------------------------------------------------------------------
        case "SET_GRAPH_DATA": {
            return {
                ...state,
                working: false,
                graphData: action.payload.graphData
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_GRAPH_DATA": {
            return {
                ...state,
                graphData: []
            }
        }
        // ------------------------------------------------------------------
        case "CLEAR_REPORTS": {
          return {
            ...state,
            report: null,
            details: [],
            graphData: []
          }
        }
        default:
            return state;
    }
}
