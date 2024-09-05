const express = require('express');
const app = express();

app.use(express.json())

// Define a simple route
app.get('/', (req, res) => {
  res.status(200).send({
    text: 'Hello, World!'
  })
});

app.get('/josh', (req, res) => {
  res.status(200).send({
    text: 'Hello, Josh!'
  })
});

app.post('josh/:id', (req,res) => {
  const { id } = req.params;
  const { text } = req.body;

  if (!text) {
    res.status(418).send({message: 'We need Text!'})
  
  }

  res.send({
    josh: `take your ${text} and ID of ${id}`,
  });

});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
