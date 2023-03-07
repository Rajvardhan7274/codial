//generate express
const express= require('express');
//create app with express
const app = express();
//defining port number of server and default port of sites is 80
const port = 8000;

//check and intialize sever 
app.listen(port, function(err){
    if(err){
        //console.log('Error:',err);
        //or 
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port :${port}`);
});