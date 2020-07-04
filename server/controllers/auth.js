const jwt = require('jsonwebtoken')

const { TOKEN_EXPIRATION, APPLICATION_SEED } = process.env
const tokenExpiration = TOKEN_EXPIRATION
const seed = APPLICATION_SEED

const login =  (req, res) => {
    const { username } = req.body
    
    const token = jwt.sign({
        username
    }, seed, { expiresIn: tokenExpiration})

    res.json({
        success: true,
        token,
        message: 'Generated Token'
    });
}

const verifyToken = (req, res) => {

    const token = req.get('Authorization')

    jwt.verify(token, seed, (err) => {
        if(err) {
            return res.status(401).json({
                success: false,
                err,
                message: 'Invalid Token!'
            })
        } else {
            res.status(200).json({
                success: true,
                err: null,
                message: 'Verified Token'
            });
        }
    })

    
}

module.exports = {
    login,
    verifyToken
}
