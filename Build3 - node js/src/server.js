//configure the port for the app server (API) to listen on
const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
