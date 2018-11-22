const db = require('../db.js');

// storeOrder: (name, email, file) => {
//     //db.query()
// }

function getOrders () {
    return new Promise((resolve, reject) =>{
        db.query('SELECT * FROM ORDERS', 
            (error, results)=>{
                if(error) {
                    console.log(error);
                    reject(error);
                }
                resolve(results);
            })
    });
}

function insertOrder(name, email, file, price, payment){
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO ORDERS SET ?', {name, email, file, price, payment}, 
            (error, results) =>{
                if(error){
                    console.log(error);
                    reject(error);
                }
                resolve(results.insertId);
            })
    })
}

module.exports = {getOrders, insertOrder};