//1. Tamaño Grande - 
//Dado un array, escribe una función que cambie todos los números positivos en él, 
//por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function grande(arreglo){
    for (var i=0; i<arreglo.length; i++){
        if(arreglo[i]>0){
            arreglo[i] = 'Big';
        }
    }
    return arreglo;
}
console.log('Resultado: '+grande([-1,3,5, 7,-5]));


//2. Imprime (print) el menor, devuelve (return) el mayor - 
//Crea una función que tome un array de números. 
//La función debería imprimir (print) el menor valor del array,
//y devolver (return) el mayor. 


function imprimeMenorRetornaMayor(arreglo){
    var menor = arreglo[0];
    var mayor = arreglo[0];
    for (var i=1; i<arreglo.length; i++){
        if (arreglo[i] < menor){
            menor = arreglo[i];
        }else if (arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }
    console.log('Numero menor: '+menor);
    return mayor;
}

console.log('Numero mayor: '+imprimeMenorRetornaMayor([50,-1,20,12]));


//3. Imprime (print) uno, devuelve (return) otro- 
//Crea una función para un array de números. 
//La función debería imprimir (print) el penúltimo valor y 
//devolver (return) el primer valor impar.

function imprimePenultimoRetornaImpar(arreglo){
    console.log('Penultimo numero del arreglo: '+arreglo[arreglo.length-2]);
    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i] % 2 == 1){
            return arreglo[i];
        }
    }
}
console.log('Primer valor impar del arreglo: '+imprimePenultimoRetornaImpar([0,2,1,4,3]));


//4. Doble Visión - Dado un array, 
//crea una función que devuelva un nuevo array donde cada valor se duplique. 
//Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

var arreglo = [1,2,3,4,5];
function dobleValor(arr){
    var nuevo = [];
    for (var i=0; i<arr.length; i++){
        nuevo.push(arr[i] * 2);
    }
    return nuevo;
}
console.log('Arreglo de entrada: '+arreglo);
console.log('Arreglo doble valor: '+dobleValor(arreglo));


//5. Contar Positivos -  
//Dado un array de números, 
//crea una función para reemplazar el último valor 
//con el número de valores positivos encontrados en el array. 
//Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].


var arreglo = [-1,1,1,1];
console.log('Arreglo de entrada: '+arreglo);

function reemplazaUltimo(arr){
    var contador=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>0){
            
          arr[arr.length-1] = contador;
          contador = contador +i;
           
        }
    }
    return arr;
}
console.log('Arreglo de salida: '+reemplazaUltimo(arreglo));



//6. Pares e Impares - 
//Crea una función que acepte un array. 
//Cada vez que ese array tenga 3 valores impares seguidos, 
//imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, 
//imprime (print) “¡Es para bien!”.

function esImpar(arr) {
    for(var i=0; i<arr.length; i++){
      if (arr[i]%2!=0){
        console.log(arr[i]);
        //return true;
      //}else{
        //console.log(arr[i]);
        //return false;
      }  
    }  
  }
  console.log(esImpar([1,2,3,4,5,6]));

