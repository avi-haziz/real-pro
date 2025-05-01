const express = require('express');
const renderApi = require('api')('@render-api/v1.0#4w9d16m9vwpbdt');

const app = express();
const PORT = process.env.PORT || 3000;

renderApi.auth('rnd_HZrH4LDB4bVZceqGIbkw32UCRNp1');

app.get('/apps', async (req, res) => {
  try {
    const { data } = await renderApi.listServices({
      includePreviews: 'true',
      limit: '20'
    });
    res.json(data);
  } catch (err) {
    console.error('שגיאה בשליפת רשימת אפליקציות:', err);
    res.status(500).json({ error: 'שגיאה בקבלת האפליקציות מ-Render' });
  }
});

app.listen(PORT, () => {
  console.log(`השרת רץ על http://localhost:${PORT}`);
});
