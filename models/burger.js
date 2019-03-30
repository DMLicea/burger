//burger

//require

var orm = require('../config/orm.js');

// create the code that will call the
// ORM functions using burger specific input for the ORM.

var burger = {

    //  select all
    
    selectAll: function(cb) 

    {
    
        orm.selectAll('burgers', function(res) 

        {

        cb(res);

        });
    },
  
    // insert one

    insertOne: function(cols, vals, cb) 
    
    {

      orm.insertOne('burgers', cols, vals, function(res) 
      
        {
      
        cb(res);
      
        });

    },
  
    //update one
    
    updateOne: function(objColVals, condition, cb) 
    
    {
    
        orm.updateOne('burgers', objColVals, condition, function(res) 
        
        {
        
        cb(res);
        
        });
    }

  };

//export

module.exports = burger