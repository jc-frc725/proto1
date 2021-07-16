const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));

app.get('/profile', (request, response) => {
  response.send('this should be the profiles route')
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})