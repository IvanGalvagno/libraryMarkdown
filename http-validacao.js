import fetch from 'node-fetch';

async function checkStatus(arrayURLs){
    const arrayStatus = await Promise.all(arrayURLs.map(async url =>{
        const response = await fetch(url)
        return response.status;
    }));
    return arrayStatus;
}

function generateArrayURLs(arrayLinks){
    return arrayLinks.map(objectLink => Object.values(objectLink).join());
}

async function validatedURLs(arrayLinks){
    const links = generateArrayURLs(arrayLinks);
    const statusLink = await checkStatus(links);
    return statusLink;
}

export default validatedURLs;