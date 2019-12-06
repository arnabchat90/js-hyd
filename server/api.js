const routes = function(app) {
  app.get("/api/route1/test", function(req, res) {
    res.status(200);
    res.json({ message: "I am ok" });
  });
};
module.exports = routes;
