const MyError = require("./MyError")

function errorHandle(error, req, res, next) {
    if(error instanceof MyError){
        return res.status(error.status).json({
            message: error.message
        })
    }
    return res.status(500).json({
        message: "Erro no servidor"
    })
}

module.exports = errorHandle