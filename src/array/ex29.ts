// // Exercice 4: Générer un rapport en regroupant les produits selon des critères définis par l'utilisateurObjectif : Tu dois recevoir une fonction qui définit comment regrouper les produits (par exemple, par nom, prix, ou catégorie). Le rapport doit inclure les produits regroupés avec une somme des quantités par groupe.Utilise Array.reduce (pour grouper les produits en fonction de la fonction passée en argument et calculer la quantité totale pour chaque groupe).

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
];

// Fonction pour générer un rapport en regroupant les produits
const generateReport = (products: Product[], groupFn: (product: Product) => string) => {
  return A.reduce(
    products,
    {} as Record<string, { totalQuantity: number; products: Product[] }>, // Initialisation
    (accumulator: { [x: string]: { totalQuantity: number; products: Product[]; }; }, current: Product) => {
      const groupKey = groupFn(current); // Obtenir la clé de regroupement

      // Si le groupe n'existe pas encore, l'initialiser
      if (!accumulator[groupKey]) {
        accumulator[groupKey] = { totalQuantity: 0, products: [] };
      }

      // Ajouter la quantité et le produit au groupe
      accumulator[groupKey].totalQuantity += current.quantity;
      accumulator[groupKey].products.push(current);

      return accumulator;
    }
  );
};

// Exemple d'utilisation
const groupByCategory = (product: Product) => product.category;

export const ArrayFn29 = () => {
  const report = generateReport(products, groupByCategory);
  console.log('Grouped Report:', report);
};
