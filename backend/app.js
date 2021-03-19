const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})


app.post("/api/posts", (req, res, next) => {
  const post  = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  })
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '123',
      title: 'title from node',
      content: 'Content from node'
    },
    {
      id: '124',
      title: 'title2 from node',
      content: 'Content2 from node'
    },

  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts,
  });
})

module.exports = app;