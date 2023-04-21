var Database = require("./Database");
class Calculation{
    constructor(){
        this.id = 0;
        this.ot = "";
        this.ot_rate = "";
        this.ot_amount = "";
        this.basic_salary = "";
        this.pf = "";
        this.hra_amount = "";
        this.conveyance = "";
        this.gross_salary = "";
        this.esic = "";
        this.pt = "";
        this.salary_advance = "";
        this.deduction = "";
        this.net_payable_amount = "";
        this.months= "";
        this.years = "";

        this.presnt = "";
        this.absent = "";

        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = "INSERT INTO calculation (ot, ot_rate, ot_amount, basic_salary, pf, hra_amount, conveyance, gross_salary, esic, pt, salary_advance, deduction, net_payable_amount, months, years, present, absent)";
    this.query +="VALUES('" + this.ot +"', '" + this.ot_rate +"','" + this.ot_amount +"', '" + this.basic_salary +"','" + this.pf +"','" + this.hra_amount +"', '" + this.conveyance +"','" + this.gross_salary +"','"+ this.esic +"','"+ this.pt+"','"+ this.salary_advance +"', '" +this.deduction+ "', '"+ this.net_payable_amount +"', '"+this.months+"','"+this.years+"', '"+this.presnt+"', '"+this.absent+"')";
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
    this.query = "UPDATE calculation SET ot ='" + this.ot + "', ot_rate ='" + this.ot_rate + "', ot_amount ='" + this.ot_amount +  "', basic_salary ='" + this.basic_salary + "', pf ='" + this.pf + "','" + this.hra_amount +"', '" + this.conveyance +"','" + this.gross_salary +"','" + this.esic + "','"+ this.pt +"', '"+ this.salary_advance +"' ,'"+ this.deduction +"', '" + this.net_payable_amount+"', '"+this.months+"','"+this.years+"', '"+this.presnt+"', '"+this.absent+"' WHERE id = " + this.id;
    // "UPDATE SET FROM admins WHERE id =" + this.id;
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
    this.query = "SELECT * FROM calculation ORDER BY id";
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
    this.query = "SELECT * FROM calculation WHERE id = " +this.id;
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
    this.query = "DELETE FROM calculation WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Calculation;