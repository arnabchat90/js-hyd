

const getAuthRoutes = (routes) => {
    const randomBearerToken = "abcxyz";
    let isLoggedIn = false
    routes.get('api/login', function(req,res) {
        if(req.session.token) {
            res.sendStatus(200);
        } else {
            req.session.token = randomBearerToken;
            res.sendStatus(201)
        }
    });
    routes.get('api/isLoggedIn', function(req,res) {
      //  const isLoggedIn = Math.random() >= 0.5;
        if(req.session && req.session.token) {
            res.status(200);
            res.json({isLoggedIn:true, access_token: req.session.token})
        } else {
            res.sendStatus(401)
        }
    });
    routes.get('api/logout' , function(req,res) {
        req.session.destroy(function(err) {
            consoe.log(err);
            if(err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        });
    })

}

module.exports = getAuthRoutes;