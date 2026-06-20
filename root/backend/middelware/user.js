const {USER_JWT_PASSWORD} = require('../config');
const jwt = require('jsonwebtoken');

function UserMiddleware(req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token , USER_JWT_PASSWORD);
    if(decoded){
        req.userId = decoded;
        next();
    }else{
        res.status(403).json({
            message:"you're not signed in yet"
        })
    }
}

module.exports = {
    UserMiddleware
}