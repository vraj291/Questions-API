const User = require('../models/User')

const isAdmin = async(req,res,next) => {
    try{
        if(req.user.admin){
            return next()
        }else{
            res.status(400).json({
                error : 'Inadequate Permission.'
            })
        }
    }catch(err){
        res.status(400).json({
            error : 'Could not authenticate role.'
        })
    }
}

module.exports = isAdmin