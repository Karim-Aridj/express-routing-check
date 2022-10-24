//middleware
const checkDate = (req , res , next) => {
    const day =d.getDay();
    const hour =d.getHours();
    if ((day >=1 && day<=6 )  && (hour >=09 && hour<=17 )  === true ){
        next();
         }
        else {
        return res.send('go back another and enjoy your weekend!') ;
    };
    
};
module.exports = checkDate ;