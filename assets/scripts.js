// import axios from 'axios';

axios.post("http://localhost:3000/test", {"prop1": "value"}, {headers: {'X-Custom-Header': 'foobar'}})


const puzzleBoard = document.querySelector('#puzzle')
const solveButton = document.querySelector('#solve-button')
const squares = 81

const submission = []
//* sumission la cai minh se submit vao API

for (let i=0; i<squares; i++) {

    //* Loop 81 lan, moi lan thi tao 1 input Element va setAttribute cho inputElement do.
    
    const  inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', 1)
    inputElement.setAttribute('max', 9)
    puzzleBoard.appendChild(inputElement)
}

//* function de chuyen tat ca gia tri input vao array 

const joinValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        if (input.value) {
            submission.push(input.value)
        } else {
            submission.push('.')
        }
    })
    console.log(submission)
    console.log("button clicked");
}

//* send all the value to the API

// const solve = () => {
//     const axios = require('axios').default;
    
//     const options = {
//         method: 'POST',
//         url: 'https://solve-sudoku.p.rapidapi.com/',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': '6835772f3emsh8dbf271d59b19eep132ed4jsndd22b502a839',
//             'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
//         },
//         data: '{"puzzle":"2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"}'
//     };
    
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }
    
// solveButton.addEventListener('click', solve)
solveButton.addEventListener('click', joinValues)