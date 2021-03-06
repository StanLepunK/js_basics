let compteur = (function () {
  let i = 0; // propriété privée

  return { // méthodes publiques
    get: function () {
      console.log(i);
    },
    set: function (valeur) {
      i = valeur;
    },
    inc: function () {
      i++;
    }
  };
})(); // module

compteur.get();
compteur.set(6);
compteur.inc();
compteur.get();
compteur.inc();
compteur.inc();
compteur.get();
