var fs = require('fs')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs')

const security = function(app, product_models) {
    const privateKey = fs.readFileSync('./private.key', 'utf8');
    const publicKey = fs.readFileSync('./public.key', 'utf8');
    const salt = bcrypt.genSaltSync(10);

    function generateToken(payload) {
        var issuerInfo = 'miniwarehouse'
        var subjectInfo = 'client';
        var audienceInfo = 'merchant';
        var signOption = {
            issuer: issuerInfo,
            subject: subjectInfo,
            audience: audienceInfo,
            expiresIn: "12h",
            algorithm: 'RS256'
        }

        return jwt.sign(payload, privateKey, signOption);
    }

    function verifyToken(token) {
        var issuerInfo = 'miniwarehouse'
        var subjectInfo = 'client';
        var audienceInfo = 'merchant';
        var verifyOptions = {
            issuer: issuerInfo,
            subject: subjectInfo,
            audience: audienceInfo,
            expiresIn: "12h",
            algorithm: 'RS256'
        }

        return jwt.verify(token, publicKey, verifyOptions);
    }

    app.post('/login', async function(req, res) {
        const { email, password } = req.body;
        const hashedPass = bcrypt.hashSync(password, salt);
        var company = await product_models.companyModel.findOne({
            email: email, 
            password: hashedPass 
        });

        if(company) {
            // if(bcrypt.compareSync(password, company.password))
            var token = generateToken({
                email: company.email, 
                password: company.password
            });
            res.send({ company, token })
        } else {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
    });

    var requestAuthorization = async function(req, res, next) {

        if(req.header('Authorization')) {
            const token = req.header('Authorization').replace('Bearer ', '')
            const data = verifyToken(token)
            var company = await product_models.companyModel.findOne({ _id: data._id });

            if (company) {
                req.company = company;
                req.token = token;
                next()
            } else {
                res.status(401).send({ error: 'Not authorized to access this resource' })
            }
        }
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

    app.use(requestAuthorization);

    return {
        app: app
    }
}
module.exports = security;