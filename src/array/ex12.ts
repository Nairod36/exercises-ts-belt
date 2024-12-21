// // Exercice 12: Grouper et trier les produitsUtilise Array.groupBy (pour grouper les produits par leur disponibilité).Utilise Array.sort (pour trier les produits par prix).Utilise Array.sortBy (pour trier les produits par un autre critère, comme le nom).

import { Product } from "./type";
import { A } from "@mobily/ts-belt";

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
];

export const ArrayFn12 = () => {
  const groupedByAvailability = A.groupBy(products, (product) =>
    product.inStock ? "inStock" : "outOfStock",
  );

  const sortedByPrice = A.sort(products, (a, b) => a.price - b.price);

  const sortedByName = A.sortBy(products, (product) => product.name);

  console.log("Grouped by Availability:", groupedByAvailability);
  console.log("Sorted by Price:", sortedByPrice);
  console.log("Sorted by Name:", sortedByName);
};
