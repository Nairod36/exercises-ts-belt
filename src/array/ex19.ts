// // Exercice 19: Réorganiser et fusionner des élémentsUtilise Array.swapAt (pour échanger deux produits aux indices 0 et 1).Utilise Array.union (pour fusionner deux listes en retirant les doublons)

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];

export const ArrayFn19 = () => {
  const swapped = A.swapAt(products1, 0, 1);

  const products2: Product[] = [
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true },
  ];
  const union = A.union(products1, products2);

  console.log("After Swapping:", swapped);
  console.log("Union of Lists:", union);
};
