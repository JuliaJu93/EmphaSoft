function callAPI (url) {

   return fetch(url, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           return data;
        })
}

export {callAPI}