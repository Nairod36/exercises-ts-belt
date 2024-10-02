// // Exercice 5: Créer une structure imbriquée des produits groupés par disponibilité et nomObjectif : Tu veux organiser les produits dans une structure imbriquée où les produits sont d’abord regroupés par disponibilité (en stock ou non), puis par nom de produit, tout en accumulant la quantité de chaque produit dans chaque groupe.Utilise Array.reduce (pour créer une structure imbriquée qui regroupe d'abord les produits par disponibilité, puis par nom, en additionnant la quantité de chaque produit).

// type.ts
export type Product = {
    name: string;
    price: number;
    inStock: boolean;
    quantity: number;
  };
  
  import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: 'Laptop', price: 1000, inStock: true, quantity: 2 },
  { name: 'Laptop', price: 950, inStock: true, quantity: 1 },
  { name: 'Mouse', price: 25, inStock: false, quantity: 5 },
  { name: 'Keyboard', price: 75, inStock: true, quantity: 3 },
  { name: 'Mouse', price: 20, inStock: false, quantity: 2 },
];

export const ArrayFn25 = () => {
  const nestedStructure = A.reduce(
    products,
    {} as Record<string, Record<string, { price: number; totalQuantity: number }>>, // Initialisation
    (accumulator: { [x: string]: { [x: string]: { totalQuantity: any; }; }; }, current: { inStock: any; name: any; price: any; quantity: any; }) => {
      const { inStock, name, price, quantity } = current;
      const availabilityKey = inStock ? 'inStock' : 'outOfStock';

      // Si la disponibilité n'existe pas, l'initialiser
      if (!accumulator[availabilityKey]) {
        accumulator[availabilityKey] = {};
      }

      // Si le produit n'existe pas dans la disponibilité, l'initialiser
      if (!accumulator[availabilityKey][name]) {
        accumulator[availabilityKey][name] = { price, totalQuantity: 0 };
      }

      // Ajouter la quantité à ce produit
      accumulator[availabilityKey]?.[name]?.totalQuantity !== undefined && (accumulator[availabilityKey][name].totalQuantity += quantity);

      return accumulator;
    }
  );

  console.log(nestedStructure);
};
