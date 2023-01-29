const moment = require('moment');
moment.locale ('es')
console.log('Naci ' + moment ('04/01/2000' , 'DD/MM/YYYY').fromNow())
