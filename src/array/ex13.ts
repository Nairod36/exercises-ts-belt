// // Exercice 13: Réorganiser les produitsUtilise Array.reverse (pour renverser l’ordre des produits).Utilise Array.shuffle (pour mélanger les produits de manière aléatoire).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn13 = () => {
  const reversedProducts = A.reverse(products);

  const shuffledProducts = A.shuffle(products);

  console.log("Reversed Products:", reversedProducts);
  console.log("Shuffled Products:", shuffledProducts);
};
