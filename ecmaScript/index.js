//js
function datos(nombre,apellido,edad){
    var nombre = nombre || "stiven";
    var apellido = apellido || "gordillo";
    var edad = edad || 37;  
    console.log(nombre,apellido,edad);    
}
//eC6
function newDatos(nombre='stiven', apellido='Gordillo', edad=38){
    //Si no recibe parametrois toma los valores por defecto;
    console.log(nombre,apellido,edad);  
}
//datos();
//newDatos("elizabeth", "herrera", 36);

//CONCATENAR ------------------------

const nam = "stiven";
const ape = "Gordillo Ruiz"

//js
//console.log("Hola "+nam+" "+ape+" ¿cómo estas?");
//ec6
//console.log(`Hola ${nam} ${ape} ¿cómo vas?`);


//MULTILINEA
//js
let lorem= "lorempipsun dae \n consecutur ";
//ec6
let ipsum = `el texto funciona más
facil`;
//console.log(lorem);
//console.log(ipsum)

//DESTRUCTURAR ELEMENTOS
let persona={
    "nombre": "stiven",
    "apellido": "gordillo Ruiz",
    "edad": 37
}
//js
//console.log(persona.nombre, persona.apellido, persona.edad);
//EC6
let {nombre,apellido,edad} = persona;
//console.log(nombre,apellido,edad);

//OPERADOR DE PROPAGACIÓN
let team = ['oscar', 'julian', 'Ricardo'];
let team2 = ['valeria','camila','pepita'];
let union = ['david', ...team, ... team2];
//console.log(union);

//OBJETOS
let names="Stiven";
let age =37;
//js
obj = {name: names, age: age}
//EC6
obj2 = {names,age};

//console.log(obj2)

//FUNCIONES DE TIPO FLECHA -- son funciones anonimas
//js
const sg = [
    {"nom":"pepito", "ag": 12},
    {"nom":"juanito", "ag": 82}
];

let listOfNames = sg.map(function(item){
    console.log(item.nom, item.ag);
})

let listOfNames2 = sg.map(item => console.log(item.nom));
const listOfNames3 = (parametro1,parametro2) =>{};
let unSoloElemento = elemento =>{};
const suqare = parametro => parametro*parametro;

//PROMESAS -asincronismo

