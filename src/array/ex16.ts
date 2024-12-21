// // Exercice 16: Calculer des valeurs cumuléesUtilise Array.reduce (pour calculer la somme totale des prix des produits).Utilise Array.reduceReverse (pour appliquer une réduction depuis la fin).Utilise Array.reduceWithIndex (pour calculer des valeurs cumulées en fonction de leur index).

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn16 = () => {
  const totalPrice = A.reduce(
    products,
    0,
    (accumulator, product) => accumulator + product.price,
  );

  const totalPriceReverse = A.reduceReverse(
    products,
    0,
    (accumulator, product) => accumulator + product.price,
  );

  // Calculer des valeurs cumulées en fonction de leur index
  const cumulativeValues = A.reduceWithIndex(
    products,
    [] as { index: number; cumulativePrice: number }[],
    (accumulator, product, index) => {
      const cumulativePrice =
        (accumulator[index - 1]?.cumulativePrice || 0) + product.price;
      accumulator.push({ index, cumulativePrice });
      return accumulator;
    },
  );

  console.log("Total Price:", totalPrice);
  console.log("Total Price (Reverse):", totalPriceReverse);
  console.log("Cumulative Values by Index:", cumulativeValues);
};
