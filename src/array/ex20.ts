// // Exercice 20: Créer une liste répétitive et la transformerUtilise Array.repeat (pour créer une liste en répétant un produit 5 fois).Utilise Array.map (pour appliquer une transformation à chaque produit répété).

import { Product } from "./type";

const product: Product = { name: "Mouse", price: 25, inStock: true };

export const ArrayFn20 = () => {
  // Créer une liste répétitive en utilisant Array.from
  const repeated = Array.from({ length: 5 }, () => ({ ...product }));

  // Appliquer une transformation
  const transformed = repeated.map((item, index) => ({
    ...item,
    name: `${item.name}-${index + 1}`, // Ajouter l'indice au nom
    price: item.price + index * 5, // Augmenter le prix en fonction de l'indice
  }));

  console.log("Repeated Products:", repeated);
  console.log("Transformed Products:", transformed);
};
