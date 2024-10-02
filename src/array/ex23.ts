// // Exercice 3: Générer un rapport des produits groupés par disponibilité et triés par prixObjectif : Tu veux créer un rapport des produits séparés en deux groupes : en stock et hors stock. Dans chaque groupe, les produits doivent être triés par prix croissant.Utilise Array.reduce (pour grouper les produits en fonction de leur disponibilité, puis appliquer un tri interne sur chaque groupe).

import { A } from "@mobily/ts-belt";
import { Product } from "./type";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 200, inStock: false },
];

export const ArrayFn23 = () => {
  const report = A.reduce(
    products,
    { inStock: [] as Product[], outOfStock: [] as Product[] }, // Initialisation des groupes
    (accumulator: { inStock: any[]; outOfStock: any[]; }, current: { inStock: any; }) => {
      // Ajouter le produit au bon groupe en fonction de sa disponibilité
      if (current.inStock) {
        accumulator.inStock.push(current);
      } else {
        accumulator.outOfStock.push(current);
      }
      return accumulator;
    }
  );

  // Trier chaque groupe par prix croissant
  const sortedInStock = A.sort(report.inStock, (a: { price: number; }, b: { price: number; }) => a.price - b.price);
  const sortedOutOfStock = A.sort(report.outOfStock, (a: { price: number; }, b: { price: number; }) => a.price - b.price);

  // Création du rapport final
  const finalReport = {
    inStock: sortedInStock,
    outOfStock: sortedOutOfStock,
  };

  console.log(finalReport);
};
