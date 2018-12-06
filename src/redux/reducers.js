import {ActionTypes} from "./constants";

const initialState = {
    // message: { text, level }
    message: null,
    searchText: null,
    currentComic: null,
    currentSearchResults: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SHOW_SEARCH_PAGE:
            return {
                ...state,
                message: null,
                currentComic: null
            };
        case ActionTypes.SHOW_SINGLE_RESULT_PAGE:
            return {
                ...state,
                message: null,
                currentComic: action.comic
            };
        case ActionTypes.RENDER_SEARCH_RESULTS:
            return {
                ...state,
                message: null,
                currentSearchResults: action.results || []
            };
        case ActionTypes.CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                message: null,
                currentSearchResults: []
            };
        case ActionTypes.FETCH_RESULTS:
            return {
                ...state,
                message: null,
                searchText: action.searchText
            };
        case ActionTypes.SHOW_MESSAGE:
            return {
                ...state,
                message: {
                    text: action.text,
                    level: action.level
                }
            };
        case ActionTypes.HIDE_MESSAGE:
            return {
                ...state,
                message: null
            };
        default:
            return state;
    }
};