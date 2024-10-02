
// Exercice 1: Créer un tableau de produits uniques par prix le plus basObjectif : Tu veux obtenir une liste de produits uniques en fonction de leur nom, en gardant uniquement le produit avec le prix le plus bas pour chaque nom.Utilise Array.reduce (pour accumuler les produits dans un tableau, en vérifiant si un produit avec le même nom existe déjà et en gardant celui avec le prix le plus bas).

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Laptop', price: 950, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Mouse', price: 20, inStock: true },
];

export const ArrayFn21 = () => {
  const uniqueProducts = A.reduce(
    products,
    [],
    (accumulator: any, current: { name: any; price: number; }) => {
      const existingProduct = A.find(accumulator, (item: { name: any; }) => item.name === current.name);
      
      if (!existingProduct) {
        return A.append(accumulator, current);
      }

      return existingProduct.price < current.price
        ? accumulator
        : A.map(accumulator, (item: { name: any; }) => item.name === current.name ? current : item);
    }
  );

  console.log(uniqueProducts);
};
