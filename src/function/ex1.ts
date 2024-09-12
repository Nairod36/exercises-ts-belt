/* eslint-disable prettier/prettier */
// Exercice 1: Exécuter une fonction après plusieurs appels Fonctions à utiliser :
// after, always, identityObjectif : Crée une fonction qui retourne toujours 'Appel réussi'
// après avoir été appelée 3 fois, puis renvoie la valeur d'origine avec identity.
import { F } from "@mobily/ts-belt";

const calls = 3;
export const functionFn1 = () => {
  const after = F.after(calls, () => "Appel réussi");
  const always = F.always(after);
  const identity = F.identity(always);
};
