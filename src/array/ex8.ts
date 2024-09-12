/* eslint-disable prettier/prettier */
// Exercice 8: Trouver des produits selon des critèresUtilise Array.find (pour trouver le produit dont le nom est Keyboard).
//Utilise Array.getIndexBy (pour trouver l'indice du produit dont le prix est 1000).
//Utilise Array.get (pour récupérer le produit à l'indice 2)

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

import pipe from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn8 = () => {
  const find = A.find(products, (products) => products.name === "Keyboard");
  const getIndexBy = A.getIndexBy(
    products,
    (product) => product.price === 1000
  );
  const get = A.at(products, 2);

  console.log(find, getIndexBy, get);
};
