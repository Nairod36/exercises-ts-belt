// // Exercice 1: Filtrer les produits selon une fonction de condition et calculer le prix totalObjectif : Tu dois passer une fonction de filtrage en argument et utiliser cette fonction pour ne conserver que certains produits. Ensuite, tu dois calculer la somme des prix des produits filtrés.Utilise Array.reduce (pour filtrer dynamiquement les produits en fonction de la fonction passée, et calculer la somme des prix).

import { A } from "@mobily/ts-belt";

const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

// Fonction pour calculer le prix total basé sur une fonction de filtrage
type Product = { name: string; price: number; inStock: boolean };

const calculateTotalPrice = (products: Product[], filterFn: (product: Product) => boolean) => {
  return A.reduce(
    products,
    0, // Valeur initiale pour le total
    (total: any, current: Product) => {
      // Vérifier si le produit passe le filtre
      if (filterFn(current)) {
        return total + current.price; // Ajouter le prix du produit filtré
      }
      return total; // Retourner le total inchangé si le produit ne passe pas le filtre
    }
  );
};

// Exemples d'utilisation
const filterInStock = (product: { inStock: any; }) => product.inStock; // Filtre basé sur le stock

export const ArrayFn26 = () => {
  const totalPrice = calculateTotalPrice(products, filterInStock);
  console.log('Total price of in-stock products:', totalPrice);
};
