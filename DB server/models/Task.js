var db=require('../dbconnection');

var Task={

getAllTasks:function(callback){

return db.query("Select * from Sheet",callback);

},
getTaskById:function(id,callback){

    return db.query("select * from Sheet where Id=?",[id],callback);
},
addTask:function(Task,callback){
   console.log("inside service"); 
   //console.log(Task.Id);
return db.query("Insert into Sheet(sessionName,topicsCovered,attendee,trainer, plannedDate, actualDate, Status, duration, comment) values(?,?,?,?,?,?,?,?, ?)",[Task.sessionName,Task.topicsCovered,Task.attendee, Task.trainer,Task.plannedDate, Task.actualDate, Task.Status, Task.duration, Task.comment],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteTask:function(id,callback){
    return db.query("delete from Sheet where Id=?",[id], callback);
}
};
module.exports=Task;
