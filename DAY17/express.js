const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
// import the database module to handle our data
let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

let nextId = products.length + 1;
// get all products
app.route('/products')
  .get((req, res) => {
    res.json(products);}
)
// create a new product
.post((req, res) => {
const product = req.body;
const id = nextId++;
const newProduct = { id, ...product }; // This will put 'id' first
products.push(newProduct); // Add the product to the beginning of the array
res.status(201).json(newProduct);
}
);
///////////////////////////

app.route('/products/search/:id')
.get((req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((product) => product.id === id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json(`{ message: Product with id ${id} not found }`);
    }
  })
.put((req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { id, ...updatedProduct };
      res.json(products[index]);
    } else {
      res.status(404).json(`{ message: Product with id ${id} not found }`);
    }
  })
.delete((req, res) => {
    const {id} = req.params.id;
    const findproduct = products.findIndex((product) => product.id === id);
    if (findproduct == -1){
      products.splice(findproduct, 1);
      res.send("Deleted");
      }else{
        res.status(404).json(`No product with the id:${id}`)
      }
      }
  );

  ////////////////////////
  app.get('/products/search', (req, res) => {
    const { q, minPrice, maxPrice } = req.query;
    let filteredProducts = [...products];
    if (q) {
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
    }
    if (minPrice) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }
    res.json(filteredProducts);
  });

app.listen(port, () => {
  console.log(`Server is listening on server: http://localhost:${port}/products);
}`);
});






















