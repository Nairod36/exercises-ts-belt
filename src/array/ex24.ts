// // Exercice 4: Créer un tableau d’objets résumant la quantité totale et le prix moyen par catégorieObjectif : Chaque produit appartient à une catégorie, tu veux calculer la quantité totale et le prix moyen pour chaque catégorie.Utilise Array.reduce (pour accumuler les produits par catégorie, calculer la somme des prix et des quantités, puis retourner le prix moyen et la quantité totale pour chaque catégorie).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
];

export const ArrayFn14 = () => {
  // Supprimer les doublons dans la liste entière
  const uniqueProducts = A.uniq(products);

  // Supprimer les doublons basés sur le nom des produits
  const uniqueByName = A.uniqBy(products, (product) => product.name);

  console.log("Unique Products:", uniqueProducts);
  console.log("Unique by Name:", uniqueByName);
};
