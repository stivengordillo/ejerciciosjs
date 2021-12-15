
function perimetroCuadrado(lado){
    return  lado*4;
}
function areaCuadrada(lado){
    return lado*lado;
}
function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base,altura){ 
    return (base*altura)/2;
}
function alturaTriangulo(lado1,lado2,base){
    if(lado1==lado2){
        const ladosAlCuadrado = lado1 * lado2;
        const baseAlCuadrado = (base*base)/4
        const raiz = Math.sqrt(ladosAlCuadrado-baseAlCuadrado);
        return `La Altura del triangulo es ${raiz}`;
    }else{
        return "No es un triangulo Isosceles :(";
    }
}
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
function calPerimetro(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calArea(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrada(value);
    alert(perimetro);
}
function calPerimetroT(data){
    const lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const base = document.getElementById("base");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const valueb = Number(base.value);
    if(data==0){
        const perimetro = perimetroTriangulo(value1,value2,valueb);
        alert(perimetro);
    }else{
        const alturaTrianguloT = alturaTriangulo(value1,value2,valueb);
        alert(alturaTrianguloT);
    }
    
}
function calAreaT(){
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const valueb = base.value;
    const alturab = altura.value;
    const perimetro = areaTriangulo(valueb,alturab);
    alert(perimetro);
}
