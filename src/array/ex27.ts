// // Exercice 2: Créer un tableau de produits répondant à plusieurs critères définis par des fonctionsObjectif : Tu dois recevoir une série de fonctions comme argument qui définissent des critères de sélection. Ensuite, tu dois filtrer et retourner une nouvelle liste de produits qui satisfont tous les critères.Utilise Array.reduce (pour vérifier que chaque produit satisfait à toutes les fonctions de condition passées en argument, et les ajouter à une nouvelle liste).

import { A } from "@mobily/ts-belt";

const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

// Fonction pour filtrer les produits selon des critères multiples
type Product = { name: string; price: number; inStock: boolean };

const filterProducts = (products: Product[], conditions: Array<(product: Product) => boolean>) => {
  return A.reduce(
    products,
    [] as typeof products, // Valeur initiale est un tableau vide
    (filtered: any, current: Product) => {
      // Vérifier si le produit satisfait toutes les conditions
      const satisfiesAllConditions = conditions.every(condition => condition(current));

      // Si toutes les conditions sont satisfaites, ajouter le produit à la liste filtrée
      if (satisfiesAllConditions) {
        return A.append(filtered, current);
      }

      return filtered; // Retourner la liste filtrée inchangée
    }
  );
};

// Exemples d'utilisation
const conditions = [
  (product: { price: number; }) => product.price > 50, // Prix supérieur à 50
  (product: { inStock: any; }) => product.inStock, // En stock
];

export const ArrayFn27 = () => {
  const filteredProducts = filterProducts(products, conditions);
  console.log('Filtered products:', filteredProducts);
};
