const log = (res,req,next) =>{
    console.log('log')
    next()
}


module.exports= log;