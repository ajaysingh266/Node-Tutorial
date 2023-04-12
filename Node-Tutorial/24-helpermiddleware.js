module.exports=  reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("age is required")
    }else if(req.query.age<18){
        resp.send("user is student")
    }
    else{
        next();
    }

   
}