const express = require ('express') ;
const d = new Date( Date.now());
const app = express () ;
const checkDate = require ('./middleware/date')
app.use(checkDate)


app.get ( '/' ,  function( req , res )  {
      res.sendFile(__dirname + '/pages/home.html' ) ;
    //  listen on a post
} ) ;

app.get ( '/services' ,  function( req , res )  {
  res.sendFile(__dirname + '/pages/Services.html' ) ;

} ) ;

app.get ( '/contact' ,  function( req , res )  {
    res.sendFile(__dirname + '/pages/Contact.html' ) ;
  
} ) ;


app.use(express.static(__dirname + '/pages')) ;

app.listen (5000, (err) => {
 err ?console.log(err) : console.log('server is runnig in 5000')
}) ;
      