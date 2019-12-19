const persistence = require('./persistence');
const routes = function(app) {
  app.get("/api/route1/test", function(req, res) {
    res.status(200);
    res.json({ message: "I am ok" });
  });
  persistence.generateRoutes(app)
};
module.exports = routes;


// const routes = function (app) {
  
// }
// module.exports = routes