/* eslint-disable prettier/prettier */
// Exercice 9: Aplatir des listes imbriquéesUtilise Array.flat (pour aplatir la liste imbriquée de profondeur 1).
//Utilise Array.deepFlat (pour aplatir la liste imbriquée de profondeur variable).typescriptCopy code

import { Product } from "./type";
import { A } from "@mobily/ts-belt";
import pipe from "@mobily/ts-belt";

const nestedProducts: Product[][] = [
  [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
  ],
  [
    { name: "Keyboard", price: 75, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
  ],
];
export const ArrayFn9 = () => {
  const flat = A.flat(nestedProducts);
  const deepFlat = A.deepFlat(nestedProducts);
  console.log(flat, deepFlat);
};
