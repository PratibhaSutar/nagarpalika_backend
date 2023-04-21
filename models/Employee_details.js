var Database = require("./Database");
class Employee_details{
    constructor(){
        this.id = 0;
        this.category_id = 0;
        this.name = 0;
        this.mobile_no = "";
        this.ifsc_code = "";
        this.uan_no = "";
        this.bank_acno = "";
        this.esic_icno = "";
        this.basic_salary = "";
        this.hra = "";
        this.conveyance = "";
        this.address = "";
        this.date = "";

        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO employee_details(category_id, name, mobile_no, bank_acno, ifsc_code, uan_no, esic_icno, basic_salary, hra, conveyance, address, date)";
    this.query +=
    "VALUES('" + 
    this.category_id +
    "', '" + 
    this.name +
    "', '" + 
    this.mobile_no +
    "', '" + 
    this.bank_acno +
    "', '" + 
    this.ifsc_code +
    "', '" + 
    this.uan_no +
    "', '" + 
    this.esic_icno +
    "', '" + 
    this.basic_salary +
    "', '" + 
    this.hra +
    "', '" + 
    this.conveyance +
    "', '" + 
    this.address +
    "', '" + 
    this.date +

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
    this.query = "UPDATE employee_details ";
   this.query += "SET name = '" + this.name + "',";
   this.query += "name = '" + this.name + "',";
   this.query += "mobile_no = '" + this.mobile_no + "',";
   this.query += "bank_acno = '" + this.bank_acno + "',";
   this.query += "ifsc_code = '" + this.ifsc_code + "',";
   this.query += "uan_no = '" + this.uan_no + "',";
   this.query += "esic_icno = '" + this.esic_icno + "',";
   this.query += "basic_salary = '" + this.basic_salary + "',";
   this.query += "hra = '" + this.hra + "',";
   this.query += "conveyance = '" + this.conveyance  + "', ";
   this.query += "address = '" + this.address  + "' "

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
    this.query = "SELECT * FROM employee_details ORDER BY id";
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}

getlist = ()=>{
    this.query = "SELECT * FROM employee_details WHERE category_id = " + this.id + " ORDER BY id";
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
    this.query = "SELECT * FROM employee_details WHERE id =" + this.id;
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
    this.query = "DELETE FROM employee_details WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Employee_details;