const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const cors = require('cors');
app.use(cors());
function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

app.get('/', (req, res) => {
  const status = getRandomItemFromArray([200, 400]);
  if (status === 200) {
    return res.status(status).json({ message: 'ok' });
  }
  if (status === 400) {
    return res.status(status).json({ message: 'failed' });
  }
});
// app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve('pages/index.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
