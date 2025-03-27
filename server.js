const express = require('express');
const app = express();
const port = 3000;

let comments = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/submit-comment', (req, res) => {
  const commenter = req.body.commenter;
  const comment = req.body.comment;

  comments.push({ commenter, comment });
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});