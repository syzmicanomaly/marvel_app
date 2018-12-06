import md5 from "md5";

//TODO using server-side API auth while doing local dev - must white-list calling domain for client-side use
const
    baseUrl = "https://gateway.marvel.com",
    apiKey  = "191e309068f42c22cf8dac1c9cd641bc",
    privKey = "fed2207163bd43631090d34ca64eaaa65e74c23e"
;

const Api = {};

/**
 * Executes search against API for full text search of comic titles.
 *
 * @param text comic title search text
 * @return {Promise<Response | never>}
 */
Api.fetchBySearchText = (text) => {
    const
        ts    = Date.now(),
        hash  = md5(ts + privKey + apiKey),
        query = `${baseUrl}/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}&title=${text}`,
        opts  = {}
    ;
    return fetch(query, opts).then(response => response.json());
};

/**
 * Executes search for single comic by id.
 *
 * @param id    id of comic
 * @return {Promise<Response | never>}
 */
Api.fetchById = (id) => {
    const
        ts    = Date.now(),
        hash  = md5(ts + privKey + apiKey),
        query = `${baseUrl}/v1/public/comics/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`,
        opts  = {}
    ;
    return fetch(query, opts).then(response => response.json());
};

export default Api;