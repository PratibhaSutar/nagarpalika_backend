var Database = require("./Database");
class Drivers{
    constructor(){
        this.id = 0;
        this.category_id = 0;
        this.name = "";
        this.advance_payment = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO drivers(category_id,name , advance_payment)";
    this.query +=
    "VALUES('" +
    this.category_id +
    "', '" + 
    this.name +
    "', '" + 
    this.advance_payment +
    "')";
    return new Promise((resolve, reject)=>{
           this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}
//update record
update = ()=>{
    this.query = "UPDATE drivers ";
   this.query += "SET name = '" + this.name + "',";
   this.query += "advance_payment = '" + this.advance_payment + "' ";
   this.query += "WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });

}

//get list of records
list = ()=>{
    this.query = "SELECT * FROM drivers ORDER BY id";
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
// list = ()=>{
//     this.query = "SELECT * FROM employee WHERE employee_details_id = " + this.employee_details_id + " ORDER BY id";
//     return new Promise((resolve, reject)=>{

//         this.db.query(this.query,(err, result)=>{
//             if(err)
//             reject(err);
//             resolve(result);
//         });

//     });
// }
//get single record
get = ()=>{
    this.query = "SELECT * FROM drivers WHERE id =" + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
//delete record
delete = ()=>{
    this.query = "DELETE FROM drivers WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Drivers;