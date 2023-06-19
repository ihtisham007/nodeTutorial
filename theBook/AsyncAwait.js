import fetch from 'node-fetch';
const url = "https://restcountries.com/v3.1/all";


//Blocking | Sync
const getAll = () => {
    console.log('first')
    const response = fetch(url);
    console.log('second')
    const data = response.json();
    console.log('data final')
};

//Async | non-blocking
const getAllAsync = async () => {
   
    const response = await fetch(url);
 
    const data = await response.json();
    let obj = [
        {
            name: {common: "pakistn"}
        },
        {
            name: {common: "pakistn"}
        }
    ]
    //const getCountryName = data.map(el => el.name.common);
    let arr = [];
    for(let i=0; i<data.length; i++){
        arr.push(data[i]['name'].common)
    }

    console.log(arr);
   
};

//getAll();
console.log('upperfunction')
getAllAsync();
console.log('lowerFunction')