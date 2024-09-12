/* eslint-disable prettier/prettier */
//Exercice 5: Supprimer des produits selon des critèresUtilise Array.drop (pour retirer le premier produit de la liste).
//Utilise Array.dropExactly (pour retirer exactement deux produits depuis le début).
//Utilise Array.dropWhile (pour retirer les produits tant qu'ils sont en stock)
import { A } from "@mobily/ts-belt";
import pipe from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn5 = () => {
  const drop = A.drop(products, 1);
  const dropExactly = A.dropExactly(products, 2);
  const dropWhile = A.dropWhile(products, (product) => product.inStock);
  console.log(drop, dropExactly, dropWhile);
};
