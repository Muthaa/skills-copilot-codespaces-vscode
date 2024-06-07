// Create web server
const express = require('express');
const app = express();

// Static file
app.use(express.static('public'));

// Path: /comments
app.get('/comments', (req, res) => {
  res.json({ comments: [{ id: 1, body: 'hello' }, { id: 2, body: 'world' }] });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments</title>
</head>
<body>
  <div id="comments"></div>
  <script>
    fetch('/comments')
      .then(response => response.json())
      .then(data => {
        const comments = data.comments.map(comment => `<div>${comment.body}</div>`);
        document.getElementById('comments').innerHTML = comments.join('');
      });
  </script>
</body>
</html>