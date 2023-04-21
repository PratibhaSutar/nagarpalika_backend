var Database = require("./Database");
class Setting{
    constructor(){
        this.id = 0;
        this.ot_rate = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = "INSERT INTO setting (ot_rate)";
    this.query +="VALUES('" + this.ot_rate +"')";
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
    this.query = "UPDATE setting SET ot_rate ='" + this.ot_rate +  "' WHERE id = " + this.id;
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
    this.query = "SELECT * FROM setting ORDER BY id";
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
    this.query = "SELECT * FROM setting WHERE id = " +this.id;
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
    this.query = "DELETE FROM setting WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Setting;