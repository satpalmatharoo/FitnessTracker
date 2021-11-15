app.get('/', function(req, res) {
    res.sendFile(__dirname + "../public/index.html");
  });
  
  app.get('/exerise', function(req, res) {
    res.sendFile(__dirname + "../public/exercise.html");
  });

  app.get('/stats', function(req, res) {
    res.sendFile(__dirname + "../public/stats.html");
  });

