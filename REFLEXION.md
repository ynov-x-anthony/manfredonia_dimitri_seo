# Réflexion : SEO technique

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

   Non. `robots.txt` contrôle l'exploration, pas la déduplication. Si une URL
   bloquée est découverte par un lien, elle peut malgré tout être indexée sans
   contenu associé.

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?

   Les deux URL affichent le même contenu : la canonique indique directement
   aux moteurs quelle URL est la version de référence et permet de consolider
   les signaux vers celle-ci. `robots.txt` ne donne pas cette indication, et
   `noindex` retirerait une page de l'index au lieu de signaler la version
   préférée.

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?

   `Disallow: /admin`
