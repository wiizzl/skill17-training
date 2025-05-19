# Customers Reviews

**Temps conseillé :** 30mn

Le but de ce module est de transformer un fichier brut contenant des avis clients en page recensant ces différents avis et ses statistiques, à partir d’un template fourni.

Un fichier `data.json` vous est fourni. Il contient une liste d’avis au format JSON.

Un avis se compose comme suit :

- Une **note**, nombre entier entre 1 et 5.
- Un texte
- Le nom/pseudo du client (`author`)
- Sa **date de création**
- Un booléen qui indique si l’avis est publié ou non (published).
  > S’il n’est pas publié, il n’est pas pris en compte dans le calcul de la moyenne et n’est pas affiché (un avis diffamatoire ou injurieux ne sera pas publié, par exemple).
- Un champ `certified` qui indique que l’avis a été certifié authentique, sur présentation d’une preuve d’achat.
  > Si un avis est certifié, il n’a pas plus de poids dans la moyenne, mais un badge sera affiché sur l’avis.

## Vous devez donc

- Calculer la moyenne, arrondie à la décimale la plus proche, de tous les avis publiés.
- Afficher cette moyenne à l’endroit prévu en haut de la page.
- Afficher les avis triés par date décroissante selon le template fourni :
  - Entre **1 et 5 étoiles**
  - Le **texte** de l’avis
  - Le **nom du client**
  - Ne pas oublier le **badge "avis certifié**" sur les avis concernés

## Données de test

Deux autres fichiers, `data2.json` et `data3.json`, vous sont fournis.

Ils vous permettent de tester que votre code fonctionne bien avec plusieurs jeux de données.

Les valeurs et affichages attendus pour chacun des fichiers sont les suivants :

| Fichier    | Nb d’avis (total) | Dont publiés | Dont certifiés | Date avis publié le plus récent | Date avis publié le plus ancien | Moyenne |
| ---------- | ----------------- | ------------ | -------------- | ------------------------------- | ------------------------------- | ------- |
| data.json  | 20                | 18           | 2              | 2012-02-27                      | 2010-06-27                      | 3.5     |
| data2.json | 17                | 15           | 4              | 2012-02-12                      | 2005-03-24                      | 2.9     |
| data3.json | 18                | 16           | 8              | 2011-12-29                      | 2005-03-23                      | 3.2     |

## Barème

| Num. | Critère      | Points Measurement | Points Judgement | Total |
| ---- | ------------ | ------------------ | ---------------- | ----- |
| A3   | Avis clients | 1,25               | 0,00             | 1,25  |
|      | **TOTAL**    |                    |                  | 5,00  |
