var Database = require("./Database");
class Salary{
    constructor(){
        this.id = 0;
        this.category_id = 0;
        this.employee_details_id = 0;
        this.date = "";
        this.days = "";
        this.salary = "";
        this.advance_amount = "";
        this.net_salary = "";
        this.paid_amount = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO salary(date, category_id,employee_details_id, days, salary, advance_amount, net_salary, paid_amount)";
    this.query +=
    "VALUES('" + 
    this.date +
    "', '" + 
    this.category_id +
    "', '" + 
    this.employee_details_id +
    "', '" + 
    this.days +
    "', '" + 
    this.salary +
    "', '" + 
    this.advance_amount +
    "', '" + 
    this.net_salary +
    "', '" + 
    this.paid_amount +
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
    this.query = "UPDATE salary ";
   this.query += "SET date = '" + this.date + "',";
   this.query += "days = '" + this.days + "' ";
   this.query += "salary = '" + this.salary + "',";
   this.query += "advance_amount = '" + this.advance_amount + "' ";
   this.query += "net_salary = '" + this.net_salary + "',";
   this.query += "paid_amount = '" + this.paid_amount + "' ";;
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
    this.query = "SELECT * FROM salary ORDER BY id";
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
    this.query = "SELECT * FROM salary WHERE id =" + this.id;
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
    this.query = "DELETE FROM salary WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Salary;