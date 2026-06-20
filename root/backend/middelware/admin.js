const {ADMIN_JWT_PASSWORD} = require('../config');
const jwt = require('jsonwebtoken');

function adminMiddleware(req , res , next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , ADMIN_JWT_PASSWORD)

    if(decoded){
        req.adminId = decoded;
        next();
    }else{
        res.status(403).json({
            massege:"you're not signed in yet"
        })
    }
    
}

module.exports = {
    adminMiddleware
}