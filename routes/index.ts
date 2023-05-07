import { Router } from "../deps.ts";
import { createProduct, deleteProduct, findProduct, listProducts, updateProduct } from "../handlers/products.ts";

export const productRouter = new Router()
  .get('/api/products/:productId', findProduct)
  .delete('/api/products/:productId', deleteProduct)
  .get('/api/products', listProducts)
  .post('/api/products', createProduct)
  .patch('/api/products/:productId', updateProduct);

