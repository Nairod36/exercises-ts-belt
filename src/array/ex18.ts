// // Exercice 18: Diviser et combiner des listesUtilise Array.splitAt (pour diviser la liste à l'indice 2).Utilise Array.concat (pour combiner deux sous-listes).Utilise Array.zip (pour combiner deux listes en une liste de tuples).
import { Product } from "./type";
import { A, O } from "@mobily/ts-belt";

const products1: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];

const products2: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

const products3: Product[] = [
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
];

export const ArrayFn18 = () => {
  const combinedList = [...products1, ...products2];
  const splitResult = A.splitAt(combinedList, 2);

  const [left, right] = O.match(
    splitResult,
    ([l, r]) => [l, r], // Cas où la valeur est présente
    () => [[], []], // Cas où la valeur est absente
  );

  const concatenatedList = A.concat(products1, products2);

  const zippedList = A.zip(products2, products3);

  console.log("Split at Index 2:");
  console.log("Left:", left);
  console.log("Right:", right);

  console.log("Concatenated List:", concatenatedList);
  console.log("Zipped List:", zippedList);
};
