/* eslint-disable prettier/prettier */
import { Product } from "./type";
import { A } from "@mobily/ts-belt";

import pipe from "@mobily/ts-belt";

// Exercice 6: Comparer des listes et tester l'inclusionUtilise Array.eq (pour comparer deux listes de produits).
//Utilise Array.includes (pour vérifier si un produit spécifique est inclus dans la liste)

const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];
const products2: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn6 = () => {
  const eq = A.eq(products1, products2, (a, b) => a.name === b.name);
  const includes = A.includes(products1, products2[0]);
  console.log(eq, includes);
};
