
console.log(`\n EJ 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.\n`);

let n = 79;
let n2 = 88;

function verificarSiEsPar(numero){
	if(numero % 2 == 0){
		console.log("El numero: " + numero + " es PAR !");
	}
	else
	{
		console.log("El numero: " + numero + " es IMPAR !");
	}
}

verificarSiEsPar(n); 

verificarSiEsPar(n2); 

////////////////////////////////////////////////////////////

console.log(`\nEJ: 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.\n`);


let nu1 = 16;
let nu2 = 34;

let nu3 = 78;
let nu4 = 20;

let nu5 = 33;
let nu6 = 33;

function comparaNumero(numero1, numero2){
    if (numero1 > numero2){
        console.log("El numero: " + numero1 + " es mayor que " + numero2);
    }else if(numero2 > numero1){
        console.log("El numero: " + numero2 + " es mayor que " + numero1);
    }else{
        console.log(numero1 + " es igual a " + numero2 );
    }
}

comparaNumero(nu1, nu2); 

comparaNumero(nu3, nu4); 

comparaNumero(nu5, nu6); 



////////////////////////////////////////////////////////////

console.log(`\nEJ: 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.\n`);

let unNum = 45; // prueba con un numero multiplo de 5

let unNum2 = 79; // prueba con un numero no multiplo de 5

function esMultiploCinco(numero){
    if (numero % 5 == 0){
        console.log(`El numero ${numero} es multiplo de 5`);
    }else{
        console.log(`El numero ${numero} No es multiplo de 5`);
    }
}

esMultiploCinco(unNum);

esMultiploCinco(unNum2);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.\n`);


let number = 5; // prubea 1

let number2 = 16; // prubea 2

function imprimirListaNumber(_num){

    for(let i=0;i<=_num ; i++){
        console.log(`${i}`);
    }
}

console.log(`Listado de 0 a ${number}`);
imprimirListaNumber(number);

console.log(`\n Listado de 0 a ${number2}`);
imprimirListaNumber(number2);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.\n`);


let pal = "Arquitecto"; 
let otroNum = 4; 

function imprimirPalabras(_pal, _numero){
    for(let i=0;i<_numero; i++){
        console.log(i+1 + `-${_pal}`);
    }
}

imprimirPalabras(pal,otroNum);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.\n`);


let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

console.log(meses);


function imprimirArreglo(_meses){
    for(let i=0;i<meses.length; i++){
        console.log(meses[i]);
    }
}

imprimirArreglo(meses);



////////////////////////////////////////////////////////////

console.log(`\nEJ: 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es \"0\".\n`);

let losNumeros = [34,54,2,98,21,27,64,88,9,17];

console.log(losNumeros);

function imprimirQuintoNumero(_numeros){
   for(let i=0 ; i<_numeros.length ; i++){
           
    if(i != 4){
        console.log(`numeros[`+ i +`] = ${_numeros[i]}`);
    }
    }
}

imprimirQuintoNumero(losNumeros);




////////////////////////////////////////////////////////////

console.log(`\nEJ: 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.\n`);

let arregloDeNumeros = [7,2,9,4,5,1,0];
let multiplicador = 3;

console.log(arregloDeNumeros);
console.log("multplicador: " + multiplicador);

function imprimirMultiplicado(_arreglo, _multiplicador){
    for(let i=0 ; i < _arreglo.length; i++){
        console.log(_arreglo[i] + ` * ` + _multiplicador + ` = ` + _arreglo[i] * _multiplicador);    
    }
}

imprimirMultiplicado(arregloDeNumeros,multiplicador);
