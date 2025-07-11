//---------------//
// Code Refactor //
//---------------//

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
async function getNumFacts() {
    //  using destructuring to extract the data
    try {
        let { data: n1 } = await axios.get(`${baseURL}/${ranNum}/trivia`)
        console.log(n1)
        factlist.push(n1)
        let { data: n2 } = await axios.get(`${baseURL}/${ranNum}/trivia`)
        console.log(n2)
        factlist.push(n2)
        let { data: n3 } = await axios.get(`${baseURL}/${ranNum}/trivia`)
        console.log(n3)
        factlist.push(n3)
        let { data: n4 } = await axios.get(`${baseURL}/${ranNum}/trivia`)
        console.log(n4)
        factlist.push(n4)
        let { data: n5 } = await axios.get(`${baseURL}/${ranNum}/trivia`)
        console.log(n5)
        factlist.push(n5)
        console.log(factlist)
        list.innerHTML = factlist.map(fact => `<li>${fact}</li>`).join('')

    } catch (e) {
        console.log('Error: ', e)
    }
}

getNumFacts();


// OLD Version with Promises w/o async and await
// axios.get(`${baseURL}/${ranNum}/trivia`)
// .then(res => {
//     console.log(res.data)
//     factlist.push(res.data)
//     return axios.get(`${baseURL}/${ranNum}/trivia`)
// })
// .then(res => {
//     console.log(res.data)
//     factlist.push(res.data)
//     return axios.get(`${baseURL}/${ranNum}/trivia`)
// })
// .then(res => {
//     console.log(res.data)
//     factlist.push(res.data)
//     return axios.get(`${baseURL}/${ranNum}/trivia`)
// })
// .then(res => {
//     console.log(res.data)
//     factlist.push(res.data)
//     return axios.get(`${baseURL}/${ranNum}/trivia`)
// })
// .then(res => {
//     console.log(`Last ${res.data}`)
//     factlist.push(res.data)
//     console.log(factlist)
//     list.innerHTML = factlist.map(fact => `<li>${fact}</li>`).join('')
//     // for (let fact of factlist) {
//     //     const f = document.createElement('li')
//     //     f.innerText = fact
//     //     list.append(f)
//     // }
// })
// .catch(err => {
//     console.log(err)
// });


