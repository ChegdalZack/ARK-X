/*function auth (req, res, next) {
    if(req.sessionid === req.cookies.sessionid) {
        next();
    }else{
        res.send('you are not logged in')
    }
}

module.exports = auth;*/

const sessionVerification = (req,res,next) => {
    const sessionId = req.sessionID; 
    console.log(req.cookies['connect.sid'])
    const cookieId = req.cookies['connect.sid'].split(':')[1].split('.')[0];
    
    if ( sessionId !== cookieId || !req.session.user || !sessionId || !cookieId){
        const err = new Error('You are not authorized');
        err.statusCode = 401;
        throw err;
    }  else{
        next();
    }
}
    module.exports = sessionVerification
    
