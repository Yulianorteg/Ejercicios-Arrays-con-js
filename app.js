/*. Transformación avanzada con map():
• Instrucción: Dado un array de objetos que representan 20 estudiantes
con sus nombres y notas, utiliza map() para crear un nuevo array que
contenga solo los nombres de los estudiantes aprobados (nota ≥ 60).
*/

let estudiantes =[//Creamos un arreglo y dentro de el una lista de objetos
    {nombre:"kevin", nota:5},
    {nombre:"yulian", nota:4.5},
    {nombre:"paula", nota:4.7},
    {nombre:"daniela", nota:3.5},
    {nombre:"diana", nota:2.5},
    {nombre:"marcela", nota:1.5},
    {nombre:"jaki", nota:3.5},
    {nombre:"chan", nota:2},
    {nombre:"samuel", nota:1},
    {nombre:"esteban", nota:3.8},
    {nombre:"alonzo", nota:4.9},
    {nombre:"nicolas", nota:4.3},
    {nombre:"alejandro", nota:3.5},
    {nombre:"flor", nota:1.5},
    {nombre:"mauricio", nota:0.5},
    {nombre:"catalina", nota:5},
    {nombre:"sara", nota:1.5},
    {nombre:"valeria", nota:4},
    {nombre:"carolina", nota:3},
    {nombre:"liz", nota:0}
];

let estudiantesAprobados = estudiantes.filter(estudiantes=>estudiantes.nota>=3).map(estudiantes=>estudiantes.nombre)//filtramos los estudiantes que tengan una nota superior a 3 y con map traemos al nuevo arreglo los nombres
console.log(estudiantesAprobados)//imprimimos

/*Filtrado y manipulación con filter() y map():
• Instrucción: Dado un array de 50 números, utiliza filter() para extraer
los números pares y luego aplica map() para duplicar cada uno de los
números filtrados. Imprime el nuevo array.*/

let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]//creamos una lista de 50 numeros

let numerosPares  = numeros.filter(numero=>numero%2 === 0).map(numeros=>numeros)//filtramos todos los numeros pares y los traemos con el map al nuevo arreglo
console.log(numerosPares)

//para realizar consultas y traer un elemento del array lo llamamos de la siguiente manera: console.log(arreglo[0]) esto me traera el objeto que se encuentra en la posicion n 0
  
  //multiplicando el filtro
  let duplicados = pares.map(numero => numero * 2);
  
  console.log(duplicados);
  
  /*Dado un array que contiene los precios de 40 productos en
  una tienda, utiliza reduce() para calcular el total con un descuento del
  10% aplicado a cada precio.
  */
  
  let precios = [
    15000, 20000, 3450, 7500, 12000, 800, 7800, 2300, 50600, 9000,
    4500, 16000, 7200, 6500, 85500, 11000, 13000, 5500, 4000, 18000,
    19500, 16500, 70100, 950, 12100, 22200, 46700, 25000, 17000, 1400,
    10000, 9900, 10500, 34000, 24000, 26500, 20100, 12500, 38000, 23000
  ];
  
  
  let precioDesc = precios.map(precio => precio * 0.10);
  
  let totalDesc = precioDesc.reduce((total, precio) => total + precio, 0);
  
  console.log("Total con descuento del 10%:", totalDesc);
  
  /*Dada una matriz 4x4 con números aleatorios, utiliza
  forEach o for...of para recorrer cada elemento y generar una nueva
  matriz con los valores incrementados en 5.
  */
  
  let aleatorios=[
  
    [23, 2, 67, 3],
    [6, 78, 9, 1 ],
    [56, 7, 34, 4],
    [15, 10, 5, 20]
  ];
  
  let incremento = [];
  aleatorios.forEach(fila => { 
    let nuevaFila = []; 
    fila.forEach(valor => {
      nuevaFila.push(valor + 5);  // Incrementar el valor en 5
    });
    incremento.push(nuevaFila);  // Agregar la nueva fila a la nueva matriz
  });
  console.log("Matriz original:", aleatorios);
  console.log("Matriz con valores incrementados en 5:", incremento);
  
  