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