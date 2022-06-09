import app from './app';
const path = require('path')

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

app.listen(3333);