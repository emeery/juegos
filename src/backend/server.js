import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {

  app.get('/api/juegos', (req, res) => {
    db.collection('juegos').find({}).toArray((err, juegos) => {
      res.json({ juegos });
    });
  });

  app.listen(8080, () => console.log('Server is running on localhost:8080'));

});