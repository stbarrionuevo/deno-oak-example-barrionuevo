import { Context, helpers } from "../deps.ts";
import type { Product } from "../types/products.ts";

const products: Product[] = [];

export const findProduct = (ctx: Context) => {
  const { productId } = helpers.getQuery(ctx, { mergeParams: true });
  const product = products.find((product: Product) => product.uuid === productId);

  if (!product) {
    ctx.response.status = 404;
    return;
  }

  ctx.response.body = product;
};

export const deleteProduct = (ctx: Context) => {
  const { productId } = helpers.getQuery(ctx, { mergeParams: true });
  const productIndex = products.findIndex((product: Product) => product.uuid === productId);

  if (productIndex === -1) {
    ctx.response.status = 404;
    return;
  }

  products.splice(productIndex, 1);
  ctx.response.status = 204;
};

export const listProducts = (ctx: Context) => {
  ctx.response.body = products;
};

export const createProduct = async (ctx: Context) => {
  const { name, price } = await ctx.request.body().value;
  const uuid = Math.random().toString(36).substring(2);
  const product = { uuid, name, price };
  products.push(product);
  ctx.response.body = product;
  ctx.response.status = 201;
};

export const updateProduct = async (ctx: Context) => {
  const { productId } = helpers.getQuery(ctx, { mergeParams: true });
  const { name, price } = await ctx.request.body().value;
  const product = products.find((product: Product) => product.uuid === productId);

  if (!product) {
    ctx.response.status = 404;
    return;
  }
  product.name = name;
  product.price = price;
  ctx.response.body = product;
};

