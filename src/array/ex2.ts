/* eslint-disable prettier/prettier */
// Exercice 2: Ajouter des produits et récupérer un élément à une position donnée
//Utilise Array.prepend (pour ajouter le produit Monitor au début de la liste).
//Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).
//Utilise Array.at (pour récupérer le produit à l'indice 2).

import { A } from "@mobily/ts-belt";
import pipe from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Headphones", price: 50, inStock: true },
];

export const ArrayFn2 = () => {
  const newProducts = A.prepend(products, {
    name: "Monitor",
    price: 200,
    inStock: true,
  });
  const newProducts2 = A.append(newProducts, {
    name: "Keyboard",
    price: 75,
    inStock: true,
  });
  const productAt = A.at(newProducts2, 2);
  console.log(newProducts, newProducts2, productAt);
};
