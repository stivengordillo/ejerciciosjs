//Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;

function perimetroCuadrado(lado){
    return  lado*4;
}
function areaCuadrada(lado){
    return lado*lado;
}
//console.log(`los lados del cuadrado mide ${ladoCuadrado} cm`);
//console.log(`el perimetro del cuadrado es ${perimetroCuadrado} cm`);
//console.log(`el area cuadrada  es ${areaCuadrada} cm2`);

console.groupEnd();

//Codigo del triangulo

console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo =5.5;

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura){ 
    return (base*altura)/2;
}
//console.log(`los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm ,la base mide ${baseTriangulo} cm y la altura del triangulo es de ${alturaTriangulo}`);
//console.log(`El perimetro del triangulo es: ${perimetroTriangulo}`);
//console.log(`el area del traingulo es ${areaTriangulo}`)
console.groupEnd();

//Codigo del triangulo
console.group("Circulo");
//const radioCirculo =4;
function diametroCirculo(radio){
    return  radio*2;
}
const PI = Math.PI;
function perimetroCirculo(diametro){
    return diametro * PI;
}
function areaCirculo(radio){ 
    return (radio*radio)*PI;
}

//console.log(`El radio del circulo es: ${radioCirculo}, el diametro es ${diametroCirculo}, el perimetro es ${perimetroCirculo} y el área es ${areaCirculo}` );

console.groupEnd();