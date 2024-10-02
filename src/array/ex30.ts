// // Exercice 5: Appliquer des réductions de prix en fonction de critères dynamiquesObjectif : Tu reçois une fonction qui définit le critère de réduction, ainsi qu'un pourcentage de réduction. Tu dois appliquer cette réduction aux produits qui répondent aux critères et calculer le total des prix après réduction.Utilise Array.reduce (pour vérifier si un produit satisfait aux critères de réduction, appliquer la réduction et accumuler le prix total).

export type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
];

// Fonction pour appliquer une réduction et calculer le total
const applyDiscount = (products: Product[], criteriaFn: (product: Product) => boolean, discountPercentage: number) => {
  return A.reduce(
    products,
    0, // Valeur initiale pour le total
    (total: number, current: Product) => {
      // Vérifier si le produit satisfait aux critères de réduction
      if (criteriaFn(current)) {
        // Calculer le prix après réduction
        const discountAmount = (current.price * discountPercentage) / 100;
        const discountedPrice = current.price - discountAmount;
        return total + discountedPrice; // Ajouter le prix réduit au total
      }
      return total + current.price; // Ajouter le prix sans réduction
    }
  );
};

// Exemple d'utilisation
const discountCriteria = (product: Product) => product.price > 100; // Réduction sur les produits à plus de 100

export const ArrayFn30 = () => {
  const totalAfterDiscount = applyDiscount(products, discountCriteria, 10); // Utilisation avec une réduction de 10 %
  console.log('Total after discount:', totalAfterDiscount);
};
