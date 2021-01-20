var moment = require('moment'); // require

console.log("HOLA MUNDO");
console.log(moment().format()); 

console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // enero 20º 2021, 10:22:37 am
console.log(moment().format('dddd'));                    // miércoles
console.log(moment().format("MMM Do YY"));               // ene. 20º 21
console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021

console.log(moment.locale());
moment.locale("es");
console.log(moment.locale());


console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // enero 20º 2021, 10:22:37 am
console.log(moment().format('dddd'));                    // miércoles
console.log(moment().format("MMM Do YY"));               // ene. 20º 21
console.log(moment().format('YYYY [escaped] YYYY'));     // 2021 escaped 2021

console.log("USO DE MOMENT CALENDAR");

console.log(moment().subtract(10, 'days').calendar()); // 10/01/2021
console.log(moment().subtract(6, 'days').calendar());  // el jueves pasado a las 10:27
console.log(moment().subtract(3, 'days').calendar());  // el domingo pasado a las 10:27
console.log(moment().subtract(1, 'days').calendar());  // ayer a las 10:27
console.log(moment().calendar());                      // hoy a las 10:27
console.log(moment().add(1, 'days').calendar());       // mañana a las 10:27
console.log(moment().add(3, 'days').calendar());       // sábado a las 10:27
console.log(moment().add(10, 'days').calendar());      // 30/01/2021

console.log(moment().subtract(1, 'minutes').calendar());     


