/* eslint-disable prettier/prettier */
// Exercice 4: Appliquer une action seulement si une condition est vraieFonctions à utiliser :
// ifElse, identity, tapObjectif : Si un nombre est pair, multiplie-le par 2
// et affiche 'Nombre pair'. Sinon, retourne 'Non pair' et l'identité.Données :
import { F } from "@mobily/ts-belt";

const number = 7;
export const functionFn4 = () => {
  const isEven = (n: number) => n % 2 === 0;
  const multiply = (n: number) => n * 2;
  const tap = F.tap(() => console.log("Nombre pair"));
  const ifElse = F.ifElse(isEven, multiply, tap);
  const identity = F.identity(ifElse);
  return identity(number);
};
