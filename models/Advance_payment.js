var Database = require("./Database");
class Advance_payment{
    constructor(){
        this.id = 0;
        this.date = "";
        this.category_id = 0;
        this.employee_details_id = 0;
        this.advance_payment = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO advance_payment(date, category_id,employee_details_id, advance_payment)";
    this.query +=
    "VALUES('" + 
    this.date +
    "', '" + 
    this.category_id +
    "', '" + 
    this.employee_details_id +
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
    this.query = "UPDATE advance_payment ";
   this.query += "SET date = '" + this.date + "',";
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
    this.query = "SELECT * FROM advance_payment ORDER BY id";
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
    this.query = "SELECT * FROM advance_payment WHERE id =" + this.id;
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
    this.query = "DELETE FROM advance_payment WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Advance_payment;