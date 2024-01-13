var exp = require('express')
var mysql = require('mysql2');
var cors = require('cors');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"12345",
	database:"tourdb"
});

var app = exp();
app.use(cors());

con.connect(function(err){
	if(!err)
		console.log("connected");
	else
		console.log("con failed");
})

app.listen(9000, function(){
	console.log("exp - REST server - 9000");
})


app.get('/emps',function(req,res){
    //send JSON
    //comm  with db
    console.log("req received");	
    con.query("SELECT employee_id,e_bdate,e_fname,e_lname,e_designation,e_contact,e_designation FROM tourdb.employee", function(err,result) {
	if(!err)
	{
		console.log(result.length);
		res.json(result);
	}
    });
})

app.all('*',function(req,res) {
	res.send("Wrong URL");
});
//To access node service
//http://localhost:9000/emps