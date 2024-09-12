/* eslint-disable prettier/prettier */
// Exercice 3: Associer deux options et appliquer une fonctionFonctions à utiliser :
//fromNullable, zipWith, map
//Objectif : Associer deux options,
//puis utiliser une fonction pour ajouter les deux valeurs ensemble,
// et enfin transformer le résultat pour afficher une chaîne.
import { O } from "@mobily/ts-belt";

const value1 = 100;
const value2 = 50;

export const optionFn3 = () => {
  const fromNullable = O.fromNullable(value1);
  const fromNullable2 = O.fromNullable(value2);
  const zipWith = O.zipWith(
    fromNullable,
    fromNullable2,
    (value1, value2) => value1 + value2
  );
  const map = O.map(zipWith, (value) => `The sum is: ${value}`);

  console.log(map);
};
