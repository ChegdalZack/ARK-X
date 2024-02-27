const express = require('express'); //import
const productRouter = require('./Routes/product');
const log = require ('./middleware/middleware');
const app = express();//create app
const port = 4000;// setting port
app.use(express.json());
app.use(log);

app.use(productRouter);

  








app.listen(port, () => {
    console.log(`Server is listening on server: http://localhost:${port}/products)
  `)
  });