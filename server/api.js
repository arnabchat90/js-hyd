<<<<<<< HEAD
const routes = function(app) {
  app.get("/api/route1/test", function(req, res) {
    res.status(200);
    res.json({ message: "I am ok" });
  });
};
module.exports = routes;
=======
const routes = function (app) {
  app.get('/api/route1/test', function (req, res) {
    res.status(200)
    res.json({ message: 'I am ok' })
  })
}
module.exports = routes
>>>>>>> d2f68b28a5ec7f7c313fdca28d726b75e4195257
