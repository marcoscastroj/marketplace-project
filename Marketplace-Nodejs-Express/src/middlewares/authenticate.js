const{ verify } = require("jsonwebtoken")

function authenticate (req, res, next){
    try {
        const auth = req.headers.authorization
        if(!auth){
            return res.status(401).end()
        }

        const[,token] = auth.split(" ")
        const secretJWT = "@jwt_secret"
        
        const {email} = verify(token, secretJWT)
    
        req.email = email
        return next()
    } catch (error) {
        return res.status(401).end()
    }
}

module.exports = {
    authenticate
}