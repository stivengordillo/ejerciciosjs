//CALLBACK Funcion que llama a otra función a partir de los parametros

function suma(num1,num2){
    return num1+num2;
}
function resta(num1,num2){
    return num1-num2;
}
function calcular(num1,num2, callback){
    return callback(num1,num2);
}
console.group("Callbacks")
console.log(calcular(7,2,suma));
console.log(calcular(5,4,resta));

function date(callback){
    console.log(new Date);
    //setTimeout(function(){
    //   let date = new Date;
    //    callback(date);
    //}, 5000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);

function iterar(callback){
    let numero =6;
    for(i=0; i<=numero; i++){
        console.log(i);
        if(i==6){
            callback(i+1);
        }
    };
}

function llegoAlNumero(esSeis){
    console.log(`El numero que recibio es ${esSeis} :) - entendí el callback yeahhhhhhhh`)
}
iterar(llegoAlNumero);
console.groupEnd();