// // Exercice 15: Créer une liste vide et la remplirUtilise Array.makeEmpty (pour créer une liste vide).Utilise Array.makeWithIndex (pour créer une liste de 3 éléments avec des valeurs basées sur leur index).

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

export const ArrayFn15 = () => {
  const emptyList = A.makeEmpty<Product>();

  const listWithIndex = A.makeWithIndex(3, (index) => ({
    name: `Product-${index}`,
    price: index * 10 + 50,
    inStock: index % 2 === 0, // Alternance entre true et false
  }));

  console.log("Empty List:", emptyList);
  console.log("List with Index:", listWithIndex);
};
