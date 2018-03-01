const baseURL = 'http://10.0.1.43:8080/users/login';

export function login (loginData) {
    console.log(loginData);
    // return fetch({
    //   method: 'POST',
    //   url: `${baseURL}`,
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(loginData)
    // })
    return fetch(baseURL, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then((response) => 
    {
        if (response.status === 401) {
            throw 'Unauthorized'
        } else if (response.status === 200) {
            return response.json();
        }
    });
}