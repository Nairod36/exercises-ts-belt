/* eslint-disable prettier/prettier */
// Exercice 10: Insérer des produits à des positions spécifiquesUtilise Array.insertAt (pour insérer un produit à l'indice 1).
//Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).
//Utilise Array.append (pour ajouter un produit à la fin de la liste)

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];
export const ArrayFn10 = () => {
  const insertAt = A.insertAt(products, 1, {
    name: "Monitor",
    price: 200,
    inStock: true,
  });
  const prependToAll = A.prependToAll(products, {
    name: "Monitor",
    price: 200,
    inStock: true,
  });
  const append = A.append(products, {
    name: "Monitor",
    price: 200,
    inStock: true,
  });
  console.log(insertAt, prependToAll, append);
};
