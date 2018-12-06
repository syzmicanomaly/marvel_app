import {ActionTypes} from "./constants";

/**
 * Action used to display the initial page with search text input box.
 *
 * @return {{type: string}}
 */
export const showSearchPage = () => (
    {
        type: ActionTypes.SHOW_SEARCH_PAGE
    }
);

/**
 * Action used to display the page with details of a single comic from search results.
 *
 * @param comic    comic data to display
 * @return {{type: string, comic: *}}
 */
export const showSingleSearchPage = (comic) => (
    {
        type: ActionTypes.SHOW_SINGLE_RESULT_PAGE,
        comic
    }
);

/**
 * Action used to render the results of a search.
 *
 * @param results   array of objects containing comic data
 * @return {{type: string, results: *}}
 */
export const renderSearchResults = (results) => (
    {
        type: ActionTypes.RENDER_SEARCH_RESULTS,
        results
    }
);

/**
 * Action used to clear the currently rendered comic search results.
 *
 * @return {{type: string}}
 */
export const clearSearchResults = () => (
    {
        type: ActionTypes.CLEAR_SEARCH_RESULTS
    }
);

/**
 * Action used to trigger fetch of search results based on search text.
 *
 * @param searchText    text to search on
 * @return {{type: string, searchText: *}}
 */
export const fetchResults = (searchText) => (
    {
        type: ActionTypes.FETCH_RESULTS,
        searchText
    }
);

/**
 * Action used to display alert box.
 *
 * @param text  text to display
 * @param level level of alert
 * @return {{type: string, text: *, level: *}}
 */
export const showMessage = (text, level) => (
    {
        type: ActionTypes.SHOW_MESSAGE,
        text,
        level
    }
);

/**
 * Hides alert box.
 *
 * @return {{type: string}}
 */
export const hideMessage = () => (
    {
        type: ActionTypes.HIDE_MESSAGE
    }
);
