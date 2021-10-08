// CREATE DIRECTORY
const fs=require('fs');
fs.mkdir("prachi",function(err){
if (err){
    console.log(err);
}else{
    console.log("File created successfully");
}
});

//REMOVE DIRECTORY
fs.rmdir("prachi",function(err){
    if (err){
        console.log(err);
    }else{
        console.log("File  successfully");
    }
});

//WRITE FILE
fs.writeFile("p1.txt","hello welcome to Vnsgu",function(err){
    if (err){
        console.log(err);
    }else{
        console.log("File Saved");
    }
});

//READ FILE
fs.readFile("p1.txt","utf8",function(err,data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//DELETE FILE
//fs.unlink("p1.txt",function(err){
    //if(err) throw err;
        //console.log('File Deleted!');
   // });

//APPEND DATA TO FILE
fs.appendFile("p1.txt","Department of Computer Science",function(err){
    if (err) throw err;
        console.log('Saved');
});

//UPDATED/REPLACE FILE WITH NEW DATA
fs.writeFile("p1.txt","Department of Computer Science,VNSGU",function(err){
    if (err) throw err;
       console.log('Replaced');
});

