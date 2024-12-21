// // Exercice 17: Retirer et remplacer des éléments dans la listeUtilise Array.removeAt (pour retirer un produit à l'indice 1).Utilise Array.replaceAt (pour remplacer un produit à l'indice 1 par un autre produit).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn17 = () => {
  const removedAt = A.removeAt(products, 1);

  const replacedAt = A.replaceAt(products, 1, {
    name: "Monitor",
    price: 200,
    inStock: true,
  });

  console.log("After Removing at Index 1:", removedAt);
  console.log("After Replacing at Index 1:", replacedAt);
};
