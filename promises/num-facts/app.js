// Variables
const baseURL = 'http://numbersapi.com'
const title = document.querySelector('h1')
const list = document.querySelector('ul')

// Create a random number between 1 and 500 inclusive to 
//  be used as part of the get request 
let ranNum = Math.floor(Math.random() * 500) + 1;
console.log(ranNum);

// Empty Array to be used to hold Number Trivia Text 
let factlist = []

// Add the Random Number to the H1 inner text
title.append(ranNum);

// Using Promises with chaining to make multiple
// get requests to the Numbers API endpoint
axios.get(`${baseURL}/${ranNum}/trivia`)
    .then(res => {
        console.log(res.data)
        factlist.push(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
        factlist.push(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
        factlist.push(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(res.data)
        factlist.push(res.data)
        return axios.get(`${baseURL}/${ranNum}/trivia`)
    })
    .then(res => {
        console.log(`Last ${res.data}`)
        factlist.push(res.data)
        console.log(factlist)
        for (let fact of factlist) {
            const f = document.createElement('li')
            f.innerText = fact
            list.append(f)
        }
    })
    .catch(err => {
        console.log(err)
    });


