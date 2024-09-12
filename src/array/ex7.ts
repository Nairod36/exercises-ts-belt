/* eslint-disable prettier/prettier */
// Exercice 7: Filtrer les produits par condition et indexUtilise Array.filter (pour garder uniquement les produits en stock).
//Utilise Array.filterWithIndex (pour garder les produits à des indices pairs).
//Utilise Array.filterMap (pour appliquer une transformation sur les produits filtrés).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

import pipe from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
];
export const ArrayFn7 = () => {
  const filter = A.filter(products, (product) => product.inStock);
  const filterWithIndex = A.filterWithIndex(
    products,
    (index) => index % 2 === 0
  );
  const filterMap = A.filterMap(products, (product) =>
    product.inStock ? product.price : undefined
  );
  console.log(filter, filterWithIndex, filterMap);
};
