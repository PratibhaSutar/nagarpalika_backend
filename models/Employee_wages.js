var Database = require("./Database");
class Employee_wages{
    constructor(){
        this.id = 0;
        this.category_id = 0;
        this.employee_details_id = 0;

        this.bank_acno = "";
        this.ifsc_code = "";
        this.pd = "";
        this.ot = "";
        this.ot_rate = "";
        this.ot_amount = "";
        this.gross_amount = "";
        this.advance = "";
        this.pf = "";
        this.total_deduction = "";
        this.remark = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO employee_wages(category_id, employee_details_id, pd, ot, ot_rate, ot_amount, gross_amount, advance, pf, total_deduction, remark)";
    this.query +=
    "VALUES('" + 
    this.category_id +
    "', '" + 
    this.employee_details_id +
    "', '" + 
    // this.bank_acno +
    // "', '" + 
    // this.ifsc_code +
    // "', '" + 
    this.pd +
    "', '" + 
    this.ot +
    "', '" + 
    this.ot_rate +
    "', '" + 
    this.ot_amount +
    "', '" + 
    this.gross_amount +
    "', '" + 
    this.advance +
    "', '" + 
    this.pf +
    "', '" + 
    this.total_deduction +
    "', '" + 
    this.remark +
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
    this.query = "UPDATE employee_wages ";
//    this.query += "SET bank_acno = '" + this.bank_acno + "',";
//    this.query += "ifsc_code = '" + this.ifsc_code + "',";
   this.query += "SET pd = '" + this.pd + "',";
   this.query += "ot = '" + this.ot + "',";
   this.query += "ot_rate = '" + this.ot_rate + "',";
   this.query += "ot_amount = '" + this.ot_amount + "',";
   this.query += "gross_amount = '" + this.gross_amount + "',";
   this.query += "advance = '" + this.advance + "',";
   this.query += "pf = '" + this.pf + "',";

   this.query += "total_deduction = '" + this.total_deduction + "',";
   this.query += "remark = '" + this.remark  + "' ";
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
    // this.query = "SELECT * FROM employee_wages WHERE category_id = " + this.category_id + " ORDER BY id";
    this.query = "SELECT * FROM employee_wages ORDER BY id";

    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
//get single record
get = ()=>{
    this.query = "SELECT * FROM employee_wages WHERE id =" + this.id;
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
    this.query = "DELETE FROM employee_wages WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Employee_wages;