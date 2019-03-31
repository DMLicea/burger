//require

var connection = require('../config/connection.js');

function printQuestionMarks(num) 

{
	var arr = [];

    for (var i = 0; i < num; i++) 
    
    {
		arr.push("?");
	}

	return arr.toString();
}


function objToSql(ob) 

{

	var arr = [];

    for (var key in ob) 
    
    {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

var orm = {

    // SelectAll function
    
    selectAll: function(tableInput, cb) 
    
    {

        // query string
        
		var queryString = "SELECT * FROM " + tableInput + ";";

        // query
        
        connection.query(queryString, function(err, result)
        
        {

            if (err) 
            
            {
				throw err;
			}

			// callback
			cb(result);
		});
	},

    // InsertOne function
    
    insertOne: function(table, cols, vals, cb) 
    
    {

        // query string
        
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";



        // Perform the database query
        
        connection.query(queryString, vals, function(err, result) 
        {
            if (err) 
            
            {
				throw err;
			}

            // callback
            
			cb(result);
		});
	},

    //  UpdateOne function
    
    updateOne: function(table, objColVals, condition, cb) 
    
    {
        // querystring
        
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;


        // database query
        
        connection.query(queryString, function(err, result) 
        
        {

            if (err) 
            
            {
				throw err;
			}

            // callback
            
            cb(result);
            
		});
	}
};


//connection export 

module.exports = orm;