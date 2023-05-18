import { Router } from "../deps.ts";
import { createProduct, findProduct, listProducts , deleteProduct, updateProduct} from "../handlers/products.ts";

export const productRouter = new Router()
  .get('/api/products/:productId', findProduct)
  .get('/api/products', listProducts)
  .delete('/api/products/:productId', deleteProduct)
  .put('/api/products/:productId', updateProduct)
  .post('/api/products', createProduct);
