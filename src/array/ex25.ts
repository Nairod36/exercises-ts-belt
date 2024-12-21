import { A } from "@mobily/ts-belt";

export type Product = {
  name: string;
  price: number;
  inStock: boolean;
  quantity: number;
};

const products: Product[] = [
  { name: "Laptop", price: 1000, inStock: true, quantity: 2 },
  { name: "Laptop", price: 950, inStock: true, quantity: 1 },
  { name: "Mouse", price: 25, inStock: false, quantity: 5 },
  { name: "Keyboard", price: 75, inStock: true, quantity: 3 },
  { name: "Mouse", price: 20, inStock: false, quantity: 2 },
];

export const ArrayFn25 = () => {
  const nestedStructure = A.reduce(
    products,
    {} as Record<
      string,
      Record<string, { totalQuantity: number; price: number }>
    >,
    (accumulator, current) => {
      const { inStock, name, price, quantity } = current;
      const availabilityKey = inStock ? "inStock" : "outOfStock";

      if (!accumulator[availabilityKey]) {
        accumulator[availabilityKey] = {};
      }

      if (!accumulator[availabilityKey][name]) {
        accumulator[availabilityKey][name] = { price, totalQuantity: 0 };
      }

      accumulator[availabilityKey][name].totalQuantity += quantity;

      return accumulator;
    },
  );

  console.log(nestedStructure);
};
