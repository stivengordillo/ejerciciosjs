const algoVaApasar = (value) =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Todo bien');
        }else{
            reject('No funciono');
        }
    });
}

const pierde = (value) => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('mi pez');
        }else{
            reject('cara de vez');
        }
    });
}

Promise.all([algoVaApasar(), pierde()])
    .then(response=> {console.log(response)})
    .catch(err => console.log(err));


//algoVaApasar()
    //.then(response => console.log(response))
    //.catch(err => console.error(err));