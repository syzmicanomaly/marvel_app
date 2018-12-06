const
    baseUrl = "https://gateway.marvel.com",
    apiKey  = "191e309068f42c22cf8dac1c9cd641bc";

const Api = {};

/**
 * Executes search against API for full text search of comic titles.
 *
 * @param text comic title search text
 * @return {Promise<Response | never>}
 */
Api.fetchBySearchText = (text) => {
    const
        query = `${baseUrl}/v1/public/comics?title=${text}&apikey=${apiKey}`,
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
        query = `${baseUrl}/v1/public/comics/${id}?apikey=${apiKey}`,
        opts  = {}
    ;
    return fetch(query, opts).then(response => response.json());
};

export default Api;