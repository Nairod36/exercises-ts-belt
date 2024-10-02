// // Exercice 2: Calculer le total de la quantité de chaque produit en regroupant par catégoriesObjectif : Chaque produit a une catégorie et une quantité associée. Tu veux calculer la somme des quantités pour chaque catégorie distincte.Utilise Array.reduce (pour accumuler les quantités par catégorie dans un objet, en vérifiant l'existence de la catégorie et en y ajoutant les quantités).

// // make the new type of a product

import { A } from "@mobily/ts-belt";

export type Product = {
    name: string;
    price: number;
    category: string;
    quantity: number;
  };

  
const products: Product[] = [
  { name: 'Laptop', price: 1000, category: 'Electronics', quantity: 2 },
  { name: 'Mouse', price: 25, category: 'Accessories', quantity: 5 },
  { name: 'Monitor', price: 200, category: 'Electronics', quantity: 1 },
  { name: 'Keyboard', price: 75, category: 'Accessories', quantity: 3 },
];

export const ArrayFn22 = () => {
  const totalQuantitiesByCategory = A.reduce(
    products,
    {} as Record<string, number>, // Initialiser comme un objet vide
    (accumulator: { [x: string]: any; }, current: { category: string | number; quantity: any; }) => {
      // Vérifier si la catégorie existe déjà dans l'accumulateur
      if (accumulator[current.category]) {
        // Ajouter la quantité actuelle si la catégorie existe déjà
        accumulator[current.category] += current.quantity;
      } else {
        // Sinon, initialiser la catégorie avec la quantité actuelle
        accumulator[current.category] = current.quantity;
      }
      return accumulator;
    }
  );

  console.log(totalQuantitiesByCategory);
};
