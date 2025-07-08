// Variables
const baseURL = 'http://numbersapi.com'
const title = document.querySelector('h1')

let ranNum = Math.floor(Math.random() * 500) + 1;
console.log(ranNum);

// Using Promise with chaining
axios.get(`${baseURL}/${ranNum}/trivia`)
    .then(res => {
        console.log(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });


