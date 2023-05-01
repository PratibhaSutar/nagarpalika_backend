var Database = require("./Database");
class Attendences{
    constructor(){
        this.id = 0;
        this.startdate = "";
        this.category_id = 0;
        this.name = "";
        this.present = "";
        this.absent = "";

        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = 
    "INSERT INTO attendences(startdate, category_id, name, present, absent)";
    this.query +=
    "VALUES('" + 
    this.startdate +
    "', '" + 
    this.category_id +
    "', '" + 
    this.name +
    "', '" + 
    this.present +
    "', '" + 
    this.absent +
    "')";


//     INSERT INTO attendences (category_id,name)
// SELECT category_id,name FROM employee_details
// WHERE category_id ='2';
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
    this.query = "UPDATE attendences SET startdate ='" + this.startdate +  "', present ='" + this.present + "',absent ='" + this.absent  +  "' WHERE id =" + this.id;

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
    this.query = "SELECT * FROM attendences ORDER BY id";

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
    this.query = "SELECT * FROM attendences WHERE id =" + this.id;
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
    this.query = "DELETE FROM attendences WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Attendences;
