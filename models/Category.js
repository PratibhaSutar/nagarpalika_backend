var Database = require("./Database");
class Category{
    constructor(){
        this.id = 0;
        this.name = "";
        this.db = new Database();
        this.query ="";
    }
   
//save record
save = ()=>{
    this.query = "INSERT INTO category (name)";
    this.query +="VALUES('" + this.name +"')";
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
    this.query = "UPDATE category SET name ='" + this.name +  "' WHERE id = " + this.id;
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
    this.query = "SELECT * FROM category ORDER BY id";
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
    this.query = "SELECT * FROM category WHERE id = " +this.id;
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
    this.query = "DELETE FROM category WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{

        this.db.query(this.query,(err, result)=>{
            if(err)
            reject(err);
            resolve(result);
        });

    });
}
}
module.exports = Category;