/* eslint-disable prettier/prettier */
// Exercice 3: Fusionner et copier des listesUtilise Array.concat (pour combiner deux listes de produits).
//Utilise Array.concatMany (pour ajouter plusieurs listes de produits).
//Utilise Array.copy (pour créer une copie de la liste combinée).
import { A } from "@mobily/ts-belt";

import pipe from "@mobily/ts-belt";

import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const accessories: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];
export const ArrayFn3 = () => {
  const newProducts = A.concat(products, accessories);
  //   const newProducts2 = A.concatMany(newProducts);
  const newProducts3 = A.copy(newProducts);
  console.log(newProducts, newProducts3, newProducts3);
};
