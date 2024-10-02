// // Exercice 3: Accumuler des données en utilisant une fonction d'accumulation dynamiqueObjectif : Tu reçois en argument une fonction d'accumulation et un tableau de produits. Tu dois accumuler les données selon cette fonction pour obtenir un résultat dynamique.Utilise Array.reduce (pour accumuler des données avec la fonction d'accumulation passée en argument).

import { A } from "@mobily/ts-belt";

export type Product = {
    name: string;
    price: number;
    inStock: boolean;
    quantity: number;
  };

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
  { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
  { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
];

// Fonction pour accumuler des données selon une fonction d'accumulation
const accumulateData = (products: Product[], accumulateFn: (acc: number, product: Product) => number, initialValue: number) => {
  return A.reduce(
    products,
    initialValue, // Valeur initiale pour l'accumulation
    (acc: number, current: Product) => accumulateFn(acc, current) // Appliquer la fonction d'accumulation
  );
};

// Exemple d'utilisation
const accumulateTotalQuantity = (acc: number, product: Product) => acc + product.quantity;

export const ArrayFn28 = () => {
  const totalQuantity = accumulateData(products, accumulateTotalQuantity, 0);
  console.log('Total quantity of products:', totalQuantity);
};
