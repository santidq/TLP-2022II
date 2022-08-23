// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

let x = parseInt(prompt("Ingrese un número"));
let z = parseInt(prompt("Ingrese un número"));

function Ejercicio1(x,z){

  

   if(x < z){
       alert(`La división de los números es: ${x/z} `)
   } else alert(`La multiplicación de los números es: ${x*z} `)

   return 
}
Ejercicio1(2,3)



// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function Consigna(a){     a = 1455   
     return typeof (a)  }  console.log(Consigna())
function Consigna(a){
   a = 1455
   return typeof (a)

}

console.log(Consigna())

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

a = 3
b = 8
c = 5
d = 4
e = 3
f = 1

function Ope(a,b,c,d,e,f){

   suma = a + b
   resta = suma - c
   multiplicacion = resta * d
   division = multiplicacion / e
   potencia = division**f


   return resultado = potencia
}


console.log(Ope(a,b,c,d,e,f))

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function myArray([]){

   myArray = ["Rami","Lorena","Marco","Gian","Augusto"]

   return nuevoArray = myArray.slice(-3)
}

console.log(myArray([]))

// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function array([a,b,c,d,r]){
 nuevoArray = [a,b,c,d,r]
 ordenado = nuevoArray.sort()
 return ordenado
}
console.log(array(["a", "c","r","b","d"]));


// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function borrar(a,b){
    for (let i = 0; i < a.length; i++) {
        if(a[i] === b){
            a.splice(i, 1)
        }
    }
    return a;
}



// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

let array = [1,2,4,6,7,9]

function nose([]) {
    let sum = 0;
    for ( i = 0; i < array.length; i++) {
        suma =+ array[i];
        
    }
    return promedio = suma / array.length
}

console.log(nose(array))

// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

let objeto = {
    nombre: "Santiago",
    Apellido: "Dreven",
    tel : "12298845"
}

function todas(objeto,string){
     for (key in objeto){    
        if (key === string){
            return objeto [key]
        }
     }
}

console.log(todas(objeto,"Apellido"))

Ej: objeto({nombre: 'Roxana', apellido: 'Baz', Tel: '12444534'}, 'nombre')
	// Retorna 'Roxana'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

objetos = [ {  descripcion: 'mesas', cantidad: 20},     {  descripcion: 'sillas', cantidad: 20},     {  descripcion: 'computadoras', cantidad: 40},];     let reduce = objetos.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);    
 console.log(reduce)