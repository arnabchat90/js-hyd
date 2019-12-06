
const routes = function (app) {
  app.get('/api/route2/test', function (req, res) {
    res.status(200)
    res.json({ message: 'I am ok 2' })
  })
}
module.exports = routes
