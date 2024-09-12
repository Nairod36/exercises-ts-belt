/* eslint-disable prettier/prettier */
// Exercice 3: Limiter le nombre d'appels d'une fonctionFonctions à utiliser :
//before, always, identityObjectif : Crée une fonction qui ne peut être appelée que deux fois,
//renvoyant toujours 'Fonction limitée' pendant ces deux appels, puis renvoie l'identité après cela.Données :
import { F } from "@mobily/ts-belt";

const limit = 2;
export const functionFn3 = () => {
  const before = F.before(limit, () => "Fonction limitée");
  const always = F.always(before);
  const identity = F.identity(always);
  return identity;
};


