// // Exercice 4: Créer un tableau d’objets résumant la quantité totale et le prix moyen par catégorieObjectif : Chaque produit appartient à une catégorie, tu veux calculer la quantité totale et le prix moyen pour chaque catégorie.Utilise Array.reduce (pour accumuler les produits par catégorie, calculer la somme des prix et des quantités, puis retourner le prix moyen et la quantité totale pour chaque catégorie).

export type Product = {
    name: string;
    price: number;
    category: string;
    quantity: number;
  };

  import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: 'Laptop', price: 1000, category: 'Electronics', quantity: 2 },
  { name: 'Mouse', price: 25, category: 'Accessories', quantity: 5 },
  { name: 'Monitor', price: 200, category: 'Electronics', quantity: 1 },
  { name: 'Keyboard', price: 75, category: 'Accessories', quantity: 3 },
];

export const ArrayFn24 = () => {
  const categorySummary = A.reduce(
    products,
    {} as Record<string, { totalQuantity: number; totalPrice: number; count: number }>, // Initialisation
    (accumulator, current) => {
      const { category, price, quantity } = current;

      // Si la catégorie n'existe pas, l'initialiser
      if (!accumulator[category]) {
        accumulator[category] = { totalQuantity: 0, totalPrice: 0, count: 0 };
      }

      // Accumuler la quantité et le prix
      accumulator[category].totalQuantity += quantity;
      accumulator[category].totalPrice += price * quantity; // Prix total pour la quantité
      accumulator[category].count += 1; // Compte le nombre de produits

      return accumulator;
    }
  );

  // Créer le tableau final avec le prix moyen
  const summaryArray = A.map(Object.entries(categorySummary), ([category, data]) => ({
    category,
    totalQuantity: data.totalQuantity,
    averagePrice: data.totalPrice / data.totalQuantity, // Calculer le prix moyen
  }));

  console.log(summaryArray);
};
