const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Student Profile | Clarence Neil P. Meneses</title>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #121212; /* Deep Dark Background */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: 'Lora', serif;
          color: #e0e0e0;
        }

        /* The Card Container */
        .profile-card {
          background: linear-gradient(145deg, #1e1e1e, #252525);
          border: 1px solid #333;
          padding: 60px 40px;
          border-radius: 15px;
          text-align: center;
          max-width: 600px;
          width: 90%;
          box-shadow: 0 20px 50px rgba(0,0,0,0.7);
          border-top: 3px solid #c9a86a; /* Gold Accent Top */
          animation: fadeIn 1.5s ease-out;
        }

        /* Typography Styling */
        h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #c9a86a; /* Gold Text */
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .subtitle {
          font-size: 1rem;
          color: #888;
          margin-bottom: 40px;
          text-transform: uppercase;
          letter-spacing: 4px;
          border-bottom: 1px solid #444;
          display: inline-block;
          padding-bottom: 10px;
        }

        .info-group {
          margin: 20px 0;
          font-size: 1.2rem;
        }

        .label {
          color: #c9a86a;
          font-weight: bold;
          font-style: italic;
          margin-right: 10px;
        }

        /* Quote Styling */
        .quote-box {
          margin-top: 50px;
          padding: 20px;
          border-left: 2px solid #c9a86a;
          background-color: rgba(201, 168, 106, 0.05);
          text-align: left;
        }

        .quote-text {
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #dcdcdc;
        }

        /* Simple Fade In Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="profile-card">
        <div class="subtitle">IT 412 Final Project</div>
        <h1>Clarence Neil P. Meneses</h1>
        
        <div class="info-group">
          <span class="label">Section:</span> BA 4102
        </div>

        <div class="quote-box">
          <p class="quote-text">
            "One moment of patience, in a moment of anger, can save a thousand moments of regret."
          </p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});