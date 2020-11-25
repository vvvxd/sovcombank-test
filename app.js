const Datastore = require('nedb');
var express = require('express');
var app = express();

const PORT = process.env.PORT || 3001;

const dogs = new Datastore({
  filename: './dogs.db',
  autoload: true,
  // ,
  // timestampData: true
});
const cors = require('cors');
app.use(cors(), express.json());

/*  "/api/dogs"
 *	GET: finds all dogs
 */
app.get('/api/dogs', (req, res, next) => {
  dogs.find({}, {}, (err, users) => {
    res.status(200).json(users);
  });
});

/*  "/api/dogs"
 *	POST: creates a new dog
 */
app.post('/api/dogs', (req, res) => {
  let dog = req.body;
  dogs.insert(dog, (err, newUser) => {
    res.status(200).json(newUser);
  });
});

/*  "/api/dogs/:id"
 *    PUT: update contact by id
 */
app.put('/api/dogs/:id', (req, res, next) => {
  let changetDogId = req.params.id;
  let dog = req.body;
  dogs.update(
    {
      _id: changetDogId,
    },
    {
      $set: dog,
    },
    (err, newUser) => {
      res.status(200).json({
        success: true,
      });
    },
  );
});

/*  "/api/dogs/:id"
 *    DELETE: deletes contact by id
 */
app.delete('/api/dogs/:id', (req, res) => {
  let deletedDog = req.params.id;
  dogs.remove(
    {
      _id: deletedDog,
    },
    {},
    (err, numRemoved) => {
      res.status(200).json({
        success: true,
      });
    },
  );
});

app.listen(PORT, () => console.log('Server has been started ...'));
