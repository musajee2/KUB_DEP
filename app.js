// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log("Root endpoint hit");
  res.send('Cloud Native Monitoring App Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
