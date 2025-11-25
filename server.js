// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use Render's port or 3000 locally

app.get('/', (req, res) => {
  // This sends the HTML to the browser
  res.send(`
    <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1>Student Profile</h1>
      <p><strong>Name:</strong> Clarence Neil P. Meneses</p>
      <p><strong>Section:</strong> BA 4102</p>
      <hr style="width: 50%;">
      <p><em>"One moment of patience, in a moment of anger, can save a thousand moments of regret"</em></p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});