import fetch from 'node-fetch';

function handlerError(e) {
    throw new Error(e.message);
}


async function checkStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const response = await fetch(url)
                    return response.status;
                }));
        return arrayStatus;
    } catch (e) {
        handlerError(e);
    }
}

function generateArrayURLs(arrayLinks) {
    return arrayLinks
        .map(objectLink => Object
            .values(objectLink).join());
}

async function validatedURLs(arrayLinks) {
    const links = generateArrayURLs(arrayLinks);
    const statusLink = await checkStatus(links);
    const results = arrayLinks.map((object, index) => ({
        ...object,
        status: statusLink[index]
    }))
    return results;
}

export default validatedURLs;