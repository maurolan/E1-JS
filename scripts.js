
console.log(`\n EJ 1 - Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.\n`);

var numero = 79;
var numero2 = 88;

function verificarSiEsPar(numero){
	if(numero % 2 == 0){
		console.log("El numero: " + numero + " es PAR !");
	}
	else
	{
		console.log("El numero: " + numero + " es IMPAR !");
	}
}

verificarSiEsPar(numero); 

verificarSiEsPar(numero2); 

////////////////////////////////////////////////////////////

console.log(`\nEJ: 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.\n`);

var numero1, numero2;

var numero1 = 16;
var numero2 = 34;

var numero3 = 78;
var numero4 = 20;

var numero5 = 33;
var numero6 = 33;

function comparaNumero(num1, num2){
    if (num1 > num2){
        console.log("El numero: " + num1 + " es mayor que " + num2);
    }else if(num2 > num1){
        console.log("El numero: " + num2 + " es mayor que " + num1);
    }else{
        console.log(num1 + " es igual a " + num2 );
    }
}

comparaNumero(numero1, numero2); 

comparaNumero(numero3, numero4); 

comparaNumero(numero5, numero6); 



////////////////////////////////////////////////////////////

console.log(`\nEJ: 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.\n`);

var numero = 45; // prueba con un numero multiplo de 5

var numero2 = 79; // prueba con un numero no multiplo de 5

function esMultiploCinco(num){
    if (num % 5 == 0){
        console.log(`El numero ${num} es multiplo de 5`);
    }else{
        console.log(`El numero ${num} No es multiplo de 5`);
    }
}

esMultiploCinco(numero);

esMultiploCinco(numero2);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.\n`);


var number = 5; // prubea 1

var number2 = 16; // prubea 2

function imprimirListaNumber(num){

    for(let i=0;i<=num ; i++){
        console.log(`${i}`);
    }
}

console.log(`Listado de 0 a ${number}`);
imprimirListaNumber(number);

console.log(`\n Listado de 0 a ${number2}`);
imprimirListaNumber(number2);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.\n`);


var palabra1 = "Arquitecto"; 
var num1 = 4; 

function imprimirPalabras(unaPalabra, numero){
    for(let i=0;i<numero; i++){
        console.log(i+1 + `-${unaPalabra}`);
    }
}

imprimirPalabras(palabra1,num1);


////////////////////////////////////////////////////////////

console.log(`\nEJ: 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.\n`);


var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

console.log(meses);


function imprimirArreglo(meses){
    for(let i=0;i<meses.length; i++){
        console.log(meses[i]);
    }
}

imprimirArreglo(meses);



////////////////////////////////////////////////////////////

console.log(`\nEJ: 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es \"0\".\n`);

var numeros = [34,54,2,98,21,27,64,88,9,17];

console.log(numeros);

function imprimirQuintoNumero(numeros){
   for(let i=0 ; i<numeros.length ; i++){
           
    if(i != 4){
        console.log(`numeros[`+ i +`] = ${numeros[i]}`);
    }
    }
}

imprimirQuintoNumero(numeros);




////////////////////////////////////////////////////////////

console.log(`\nEJ: 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.\n`);

var arregloDeNumeros = [7,2,9,4,5,1,0];
var num = 3;

console.log(arregloDeNumeros);

function imprimirMultiplicado(arreglo, multiplicador){
    for(let i=0 ; i<arreglo.length; i++){
        console.log(arregloDeNumeros[i] + ` * ` + multiplicador + ` = ` + arregloDeNumeros[i] * multiplicador);    
    }
}

imprimirMultiplicado(arregloDeNumeros,num);
