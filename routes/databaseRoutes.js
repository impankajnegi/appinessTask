 
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "AppinessDB",
  password: "postgres",
  port: 5432
});



module.exports = app => {
 let hitCount = 1;
  app.post("/createUser", async (req, res) => {
    //Fetching body parameters
   let user = req.body; 
   let user_type;
 
   if(hitCount == 1){
       user_type = 'Admin';
    hitCount++;
   }
   else
     user_type = 'Client';

  
    const dbQuery =
      'INSERT INTO user_details VALUES(' 
       +"'"+ user.first_name +"',"
      + "'"+ user.last_name+"',"
      +"'"+ user.username+"',"
      +"'"+ user.password+"',"
     +"'"+ user_type+"')";

    console.log(req.body)
    // const dbQuery =
    // "INSERT INTO user_details VALUES('pankaj','negi','pankajnegi','pankajnegi','"+user_type+"')";
    
console.log(dbQuery)
      pool.query(dbQuery, (error, result) => {
        if (error) {
          throw error;
        }
        res.status(200).json(result.rows);
      });

  }
  );

 

app.post("/authenticateUser", async (req, res) => {
   
    let credential = req.body; 

    const dbQuery =
      'SELECT * FROM user_details WHERE "username" ='
      +"'"+credential.username +"' AND " 
      +'"password" ='
      +"'"+credential.password+"'";

    console.log(dbQuery);

    pool.query(dbQuery, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  });


}
