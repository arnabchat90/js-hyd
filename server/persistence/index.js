var mongoose = require('mongoose');
const controllers = require('./controllers');
const { validateJWT, encodeJWT, getProfile } = controllers;

const generateUserContext = function(user) {
    return new Promise(function(resolve, reject) {
        const {getProfile} = controllers;
        getProfile(user).then(data => {
            
        }).catch(e => reject(e))
    })
}

const configureDB = function(callback) {
    
    const { MONGO_URI } = process.env;
    if(!MONGO_URI) {
        throw 'Database config not found'
    }
    mongoose.connect(`mongodb+srv://${MONGO_URI}?retryWrites=true&w=majority`, {useNewUrlParser: true})
    var db = mongoose.connection;
    db.on('error', function(e) {console.log(e)})
    db.once('open', function(m) { 
        console.log(m);
        console.log('conn opened, looking for collections')
        mongoose.connection.db.listCollections().toArray(function (err, names=[]) {
        if(names.length< 1) {
            throw 'database does not have user data'
        }
        const userdb = names.some(function(e) {
            const {name=""} = e;
            return name.toLowerCase() === 'user';
        })
        if(userdb) {
            console.log('userdb found')
            callback()
        } else {
            throw 'user database not found'
        }
       // module.exports.Collection = names;
       callback()
    });
    })
}
const generateJWTTokenSync = function(payload) {
    return encodeJWT(payload);
}
const generateRoutes = function(app) {
    app.post('/api/auth/verifytoken', function(req,res) {
        const { body } = req;
        if(!body) {
            res.sendStatus(400)
        }
        const { accesstoken } = body;
        if(!accesstoken) {
            res.sendStatus(400)
        }
        const tokenstatus = validateJWT(accesstoken);
        res.json(tokenstatus);
        res.status(200);
    })
}

const getUserProfileAsync  = function(user) {
     return getProfile(user);
}

module.exports = {
    configureDB,
    generateRoutes,
    generateJWTTokenSync,
    getUserProfileAsync
}