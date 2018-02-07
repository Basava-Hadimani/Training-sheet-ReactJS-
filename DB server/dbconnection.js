var mysql=require('mysql');
 var connection=mysql.createPool({
 
  host     : 'localhost',
  user     : 'Basavaraj',
  password : 'Basu@480478143',
  database : 'training_sheet'
 
});
 module.exports=connection;