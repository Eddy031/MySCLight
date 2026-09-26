// ==========================================================
// Donnees de l'inventaire (export de data/inventaire.db)
// ==========================================================
const DB = {"categories":[{"id":1,"name":"Element artificiel","parent_id":null},{"id":2,"name":"Kit ou revetement","parent_id":1},{"id":3,"name":"Produit simple","parent_id":1},{"id":4,"name":"Engin","parent_id":1},{"id":5,"name":"Module de navigation","parent_id":1},{"id":6,"name":"Munitions","parent_id":1},{"id":7,"name":"Materiau","parent_id":null},{"id":8,"name":"Lingot","parent_id":7},{"id":9,"name":"Minerai","parent_id":7},{"id":10,"name":"Fluide","parent_id":7},{"id":11,"name":"Piece de vaisseau","parent_id":null},{"id":12,"name":"Piece de fuselage","parent_id":11},{"id":13,"name":"Cockpit","parent_id":11},{"id":14,"name":"Propulseur","parent_id":11},{"id":15,"name":"Collecte","parent_id":null},{"id":16,"name":"Minerai metallique","parent_id":15},{"id":17,"name":"Agents robotiques","parent_id":1},{"id":18,"name":"Equipement d'auxiliaire","parent_id":1},{"id":19,"name":"Objet de luxe","parent_id":1},{"id":20,"name":"Arme","parent_id":1},{"id":21,"name":"Eclairage","parent_id":1},{"id":22,"name":"Outils specialises","parent_id":1},{"id":23,"name":"Module de stockage","parent_id":1},{"id":24,"name":"Panneau solaire","parent_id":1},{"id":25,"name":"Panneau thermique","parent_id":1},{"id":26,"name":"Bonbonne","parent_id":1},{"id":27,"name":"Module SL","parent_id":11},{"id":28,"name":"Bouclier","parent_id":11},{"id":29,"name":"Module energetique","parent_id":11},{"id":30,"name":"Batterie","parent_id":11},{"id":31,"name":"Module de controle","parent_id":11},{"id":32,"name":"Aile","parent_id":11},{"id":33,"name":"Modificateur","parent_id":11},{"id":34,"name":"Radar","parent_id":11},{"id":35,"name":"Matrice de cristal","parent_id":7},{"id":36,"name":"Cristal","parent_id":15},{"id":37,"name":"Minerai pierreux","parent_id":15},{"id":38,"name":"Semence","parent_id":15},{"id":39,"name":"Module externe","parent_id":null},{"id":40,"name":"Module de collecte","parent_id":39},{"id":41,"name":"Batiment de base","parent_id":null},{"id":42,"name":"Commandement","parent_id":41},{"id":43,"name":"Extraction","parent_id":41},{"id":44,"name":"Fabrication","parent_id":41},{"id":45,"name":"Alimentation","parent_id":41},{"id":46,"name":"Logistique","parent_id":41},{"id":47,"name":"Stockage","parent_id":41},{"id":48,"name":"Module interne","parent_id":null},{"id":49,"name":"Module thermique","parent_id":48},{"id":50,"name":"Connaissances","parent_id":null},{"id":51,"name":"Decoration","parent_id":41},{"id":52,"name":"Plan","parent_id":null},{"id":53,"name":"Puce de combinaison d'auxiliaire","parent_id":18},{"id":54,"name":"Outil manuel","parent_id":18},{"id":55,"name":"Acceleration","parent_id":39},{"id":56,"name":"Debris","parent_id":15},{"id":57,"name":"Factions","parent_id":50},{"id":58,"name":"Gaz","parent_id":7}],"stations":[{"id":1,"name":"Atelier"},{"id":2,"name":"Fonderie"},{"id":3,"name":"Assembleur"},{"id":4,"name":"Cristallisateur"},{"id":5,"name":"Usine chimique"},{"id":6,"name":"Usine de conditionnement"},{"id":7,"name":"Usine"},{"id":8,"name":"Extracteur de graines"},{"id":9,"name":"Construction"}],"products":[{"id":1,"name":"Ecrou et boulon","category_id":3,"price":0.74,"no_price":0,"weight":0.1,"duration":6.0,"description":"Petite piece de quincaillerie standard utilisee dans de nombreux assemblages.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":2,"name":"Fil electrique","category_id":3,"price":2.08,"no_price":0,"weight":0.5,"duration":3.0,"description":"Cable conducteur utilise pour relier les composants electroniques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":3,"name":"Lingot de fer","category_id":8,"price":5.8,"no_price":0,"weight":1.0,"duration":3.0,"description":"Materiau de base obtenu par fonderie de minerai de fer.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":4,"name":"Lingot de titane","category_id":8,"price":9.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau communement utilise dans les alliages pour sa legerete, sa resistance et sa biocompatibilite. Il est aussi possible d'en trouver dans la plupart des organismes vivants.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":5,"name":"Carbone-a","category_id":8,"price":3.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Forme raffinee de carbone utilisee dans la metallurgie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":6,"name":"Petit kit modulaire","category_id":2,"price":38.5,"no_price":0,"weight":10.0,"duration":12.0,"description":"La norme universelle qui sert de base a tous les modules de vaisseau dependants (MVD). Ce kit permet de fixer un MVD a un vaisseau grace a des electroaimants permanents a interrupteur B.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":7,"name":"Plaque de metal","category_id":3,"price":3.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Une plaque de metal de facture industrielle, communement utilisee comme materiau de construction de base.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":8,"name":"Plaque de metal robuste","category_id":3,"price":8.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Une plaque de metal renforcee, plus resistante que la plaque de metal standard.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":9,"name":"Poutrelle structurelle","category_id":3,"price":21.8,"no_price":0,"weight":2.0,"duration":3.0,"description":"Element porteur utilise dans l'ossature des vaisseaux et des carters.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":10,"name":"Plaque d'inox","category_id":3,"price":14.7,"no_price":0,"weight":2.0,"duration":6.0,"description":"Plaque de metal resistante a la corrosion.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":11,"name":"Petit carter de piece en acier","category_id":2,"price":205.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Un carter modulaire destine a recouvrir un vaisseau ou un MVD. En plus de limiter la friction dans les espaces atmospheriques, ce carter offre une protection contre les rayonnements electromagnetiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":12,"name":"Materiel de raccordement","category_id":2,"price":28.4,"no_price":0,"weight":10.0,"duration":9.0,"description":"Un ensemble de cables et tuyaux normalises permettant de relier tous les MVD a leur vaisseau. Ils sont conformes a la norme SCAM (systeme circulatoire d'assemblage de modules).","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":13,"name":"Substrat semi-conducteur","category_id":3,"price":2.6,"no_price":0,"weight":0.5,"duration":12.0,"description":"Materiau de base pour l'electronique de precision.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":14,"name":"Micropuce","category_id":4,"price":1.34,"no_price":0,"weight":0.5,"duration":3.0,"description":"Un dispositif electronique permettant d'executer des programmes informatiques via une serie d'operations mathematiques elementaires. On l'appelle egalement processeur.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":15,"name":"Lingot d'acier","category_id":8,"price":10.5,"no_price":0,"weight":1.0,"duration":6.0,"description":"Un alliage de fer et de carbone, auquel l'on ajoute frequemment du chrome afin de prevenir l'oxydation. C'est un materiau incontournable pour la plupart des industries en raison de sa fiabilite et de son faible cout.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":16,"name":"Minerai de cuivre","category_id":16,"price":2.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Minerai brut riche en cuivre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":17,"name":"Soufre","category_id":37,"price":0.7,"no_price":0,"weight":1.0,"duration":4.8,"description":"Mineral de soufre natif, utilise notamment en fonderie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":18,"name":"Matrice de cristal-h","category_id":35,"price":0.5,"no_price":0,"weight":1.0,"duration":3.0,"description":"Catalyseur de cristallisation utilise au Cristallisateur.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":19,"name":"Matrice de cristal-m","category_id":35,"price":1.5,"no_price":0,"weight":1.0,"duration":3.0,"description":"Catalyseur de cristallisation utilise au Cristallisateur.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":20,"name":"Matrice de cristal-c","category_id":35,"price":2.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Catalyseur de cristallisation utilise au Cristallisateur.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":21,"name":"Pepite de cuivre","category_id":16,"price":3.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Petite pepite de cuivre natif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":22,"name":"Malachite","category_id":9,"price":1.5,"no_price":0,"weight":1.0,"duration":60.0,"description":"Minerai vert de cuivre carbonate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":23,"name":"Azurite","category_id":9,"price":1.5,"no_price":0,"weight":1.0,"duration":60.0,"description":"Minerai bleu de cuivre carbonate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":24,"name":"Lingot de cuivre","category_id":8,"price":8.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau hautement conducteur qui offre une grande polyvalence. C'est un metal natif que l'on peut trouver dans la nature, mais aussi dans les cristaux.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":25,"name":"Acier 4x3x2","category_id":12,"price":560.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales: une couche externe resistante au vide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":26,"name":"Kaolinite","category_id":9,"price":5.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"Argile blanche riche en aluminium, utilisee dans certains alliages specifiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":27,"name":"Minerai de titane","category_id":16,"price":3.36,"no_price":0,"weight":1.0,"duration":0.0,"description":"Minerai brut riche en titane.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":28,"name":"Pepite de titane","category_id":16,"price":1.8,"no_price":0,"weight":1.0,"duration":0.0,"description":"Petite pepite de titane natif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":29,"name":"Aigue-marine","category_id":9,"price":12.0,"no_price":0,"weight":1.0,"duration":60.0,"description":"Gemme bleutee utilisee comme composant dans certains alliages de precision.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":30,"name":"Silicate","category_id":9,"price":0.62,"no_price":0,"weight":1.0,"duration":0.0,"description":"Mineral a base de silicium, present dans de nombreuses roches.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":31,"name":"Poudre de quartz","category_id":9,"price":0.37,"no_price":0,"weight":1.0,"duration":60.0,"description":"Quartz broye en fine poudre, utilise en fonderie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":32,"name":"Quartz","category_id":9,"price":11.0,"no_price":0,"weight":1.0,"duration":60.0,"description":"Cristal de quartz brut.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":33,"name":"Minerai d'aluminium","category_id":16,"price":3.58,"no_price":0,"weight":1.0,"duration":0.0,"description":"Minerai brut riche en aluminium.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":34,"name":"Pepite d'aluminium","category_id":16,"price":1.92,"no_price":0,"weight":1.0,"duration":0.0,"description":"Petite pepite d'aluminium natif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":35,"name":"Minerai de vanadium","category_id":16,"price":5.6,"no_price":0,"weight":1.0,"duration":0.0,"description":"Minerai brut riche en vanadium.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":36,"name":"Minerai de platine","category_id":16,"price":6.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Minerai brut riche en platine.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":37,"name":"Lingot d'alu-K","category_id":8,"price":12.1,"no_price":0,"weight":1.0,"duration":4.5,"description":"Un alliage d'aluminium leger et dote d'une excellente isolation thermique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":38,"name":"Lingot de silicium","category_id":8,"price":10.0,"no_price":0,"weight":1.0,"duration":9.0,"description":"Un semi-conducteur remarquablement equilibre utilise dans la plupart des appareils electroniques. Ce metalloide se trouve egalement dans l'argile, le verre et de nombreux autres types de pierres.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":39,"name":"Lingot d'aluminium","category_id":8,"price":9.6,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau de faible densite a la conductibilite elevee. Bien qu'il soit tres abondant, on en trouve rarement a l'etat pur dans la nature.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":40,"name":"Lingot de vanadium","category_id":8,"price":15.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau communement utilise dans les alliages d'acier. C'est egalement une toxine que l'on trouve dans de nombreux organismes vivants.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":41,"name":"Lingot de platine","category_id":8,"price":16.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un metal noble de tres grande valeur. En raison de sa resistance remarquable a la corrosion, il s'agit d'un composant industriel prise.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":42,"name":"Lingot de titane-B","category_id":8,"price":18.3,"no_price":0,"weight":1.0,"duration":4.5,"description":"Un alliage de titane et de vanadium apprecie pour sa formabilite remarquable, qui en fait un excellent materiau pour la soudure.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":43,"name":"Noyau d'elmerium","category_id":8,"price":20.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau dont on sait encore peu de choses. Ses proprietes electromagnetiques permettent de faconner des champs de plasma. Sa decouverte au cours de l'ere des Planetes-Unies a ete a l'origine du developpement des boucliers supraluminiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":44,"name":"Poutrelle robuste","category_id":3,"price":50.0,"no_price":0,"weight":2.0,"duration":3.0,"description":"Une longue piece metallique a la section transversale en forme de H. Elle est communement utilisee dans le secteur du batiment afin de fournir une resistance structurelle.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":45,"name":"Plaque monomagnetique","category_id":3,"price":10.5,"no_price":0,"weight":1.0,"duration":6.0,"description":"Une plaque d'elmerium a polarisation magnetique, communement utilisee comme revetement interieur dans les reservoirs de mag-plasma.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":46,"name":"Plaque thermique","category_id":3,"price":6.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"Une plaque de metal de facture industrielle a la conductibilite thermique remarquablement faible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":47,"name":"Plaque inerte","category_id":3,"price":38.0,"no_price":0,"weight":2.0,"duration":6.0,"description":"Un epais panneau de metal qui peut resister aux conditions meteorologiques les plus rudes. Il est communement utilise dans la construction de batiments ou de fuselages.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":48,"name":"Tuyau etanche","category_id":3,"price":4.16,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un dispositif simple permettant d'acheminer un fluide entre deux points.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":49,"name":"Graphene","category_id":3,"price":2.34,"no_price":0,"weight":0.5,"duration":3.0,"description":"Un materiau bidimensionnel a base de carbone, remarquable pour sa conductivite et sa resistance. Recette de fabrication a completer.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":50,"name":"Minerai de fer","category_id":16,"price":2.16,"no_price":0,"weight":5.0,"duration":0.0,"description":"Minerai brut riche en fer.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":51,"name":"Pepite de fer","category_id":16,"price":null,"no_price":0,"weight":1.0,"duration":0.0,"description":"Petite pepite de fer natif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":52,"name":"Hematite","category_id":9,"price":7.0,"no_price":0,"weight":1.0,"duration":60.0,"description":"Mineral d'oxyde de fer, source importante de fer.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":53,"name":"Pyrite","category_id":9,"price":10.0,"no_price":0,"weight":1.0,"duration":60.0,"description":"Mineral de sulfure de fer, parfois appele 'or des fous'.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":54,"name":"Pepite d'elmerium","category_id":16,"price":5.3,"no_price":0,"weight":1.0,"duration":0.0,"description":"Petite pepite d'elmerium natif, matiere aux proprietes electromagnetiques rares.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":55,"name":"Poussiere d'elmerium","category_id":16,"price":0.3,"no_price":0,"weight":1.0,"duration":0.0,"description":"Fine poussiere d'elmerium, forme diffuse de ce materiau rare.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":56,"name":"Cristal de graphite","category_id":36,"price":9.0,"no_price":0,"weight":0.5,"duration":30.0,"description":"Un cristal constitue de plusieurs couches de graphene. Bien qu'on puisse le qualifier de diamant inacheve, il est assez bon marche pour servir a faire des crayons.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":57,"name":"Emeraude","category_id":36,"price":130.0,"no_price":0,"weight":0.5,"duration":180.0,"description":"Un cristal de la famille des beryls, vendu comme pierre precieuse et apprecie pour sa couleur vert fonce caracteristique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":58,"name":"Calcite","category_id":37,"price":3.74,"no_price":0,"weight":5.0,"duration":0.0,"description":"Un cristal de carbonate egalement connu sous le nom d'albatre. Principal composant du calcaire et du marbre, c'est le materiau ideal pour la sculpture.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":59,"name":"Cinabre","category_id":37,"price":21.4,"no_price":0,"weight":1.0,"duration":0.0,"description":"Ce cristal de sulfure de mercure etait tres utilise comme pigment en raison de sa couleur rouge vif, avant que l'on decouvre que le mercure etait hautement toxique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":60,"name":"Invariant calcifie","category_id":37,"price":100.0,"no_price":0,"weight":2.0,"duration":0.0,"description":"Certaines pierres antiques, baignees des energies primordiales du Big Bang, presentent parfois des signatures energetiques singulieres.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":61,"name":"Eau","category_id":10,"price":0.4,"no_price":0,"weight":null,"duration":0.3,"description":"Un solvant d'une neutralite remarquable dote d'une polarite elevee et d'une taille moleculaire reduite. L'eau est indispensable a toutes les formes de vie connues, ainsi qu'a la plupart des industries.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":62,"name":"Saumure","category_id":10,"price":0.3,"no_price":0,"weight":null,"duration":0.083,"description":"A ciel ouvert, les vastes etendues d'eau sont exposees a la contamination de nombreux composes. Elles doivent etre traitees avant de servir a toute operation chimique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":63,"name":"Ethanol","category_id":10,"price":2.5,"no_price":0,"weight":null,"duration":3.0,"description":"Tres connu pour ses proprietes recreatives, l'ethanol est egalement un biocarburant concentre et un solvant pratique pour eliminer les taches d'huile.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":64,"name":"Huile xenique","category_id":10,"price":16.0,"no_price":0,"weight":null,"duration":0.3,"description":"L'huile xenique est un hydrocarbure organique extrait de xenograines. C'est un bon lubrifiant, mais un carburant mediocre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":65,"name":"Mercure","category_id":10,"price":6.0,"no_price":0,"weight":null,"duration":12.0,"description":"Le mercure est le seul metal connu qui soit liquide a temperature ambiante. Il s'amalgame a de nombreux autres metaux et est tres toxique pour les humains.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":66,"name":"Mag-plasma","category_id":10,"price":0.2,"no_price":0,"weight":null,"duration":0.417,"description":"La decouverte de ce carburant remarquable a permis l'invention des sauts supraluminiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":67,"name":"Gel de silicone","category_id":3,"price":0.52,"no_price":0,"weight":0.5,"duration":12.0,"description":"Un composant semi-solide hautement absorbant et non reactif, notamment utilise en chimie, pour la filtration de l'eau et le refroidissement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":68,"name":"Explosif solide","category_id":3,"price":1.4,"no_price":0,"weight":0.5,"duration":6.0,"description":"Un compose chimique qui explose lorsqu'il est chauffe.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":69,"name":"Engrais neutre","category_id":3,"price":1.36,"no_price":0,"weight":0.1,"duration":3.0,"description":"Un complement en poudre a administrer aux xenoplantes afin de leur fournir des nutriments specifiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":70,"name":"Engrais metallique","category_id":3,"price":1.94,"no_price":0,"weight":0.1,"duration":3.0,"description":"Un complement en poudre a administrer aux xenoplantes afin de leur fournir des nutriments specifiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":71,"name":"Supercombustible carbonique","category_id":3,"price":0.72,"no_price":0,"weight":0.1,"duration":15.0,"description":"Un derive de carbone ultra-transforme concu comme alternative plus efficace aux combustibles fossiles naturels.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":72,"name":"Laine thermique","category_id":3,"price":1.72,"no_price":0,"weight":0.5,"duration":3.0,"description":"Une fibre minerale qui piege de fines couches d'air et ralentit ainsi la conduction thermique. Son nom evoque le doux souvenir d'un temps ou la veritable laine existait encore.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":73,"name":"Beton","category_id":3,"price":0.25,"no_price":0,"weight":1.0,"duration":6.0,"description":"Un agregat artificiel de mineraux fixes ensemble par une substance chimique appelee ciment. Il est principalement utilise dans le secteur du batiment, et il s'agissait du materiau produit en plus grande quantite sur Terre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":74,"name":"Chaux","category_id":3,"price":1.0,"no_price":0,"weight":0.1,"duration":3.0,"description":"Un composant mineral communement utilise dans le ciment et le beton. Obtenu en carbonatant de la pierre a chaux, il est principalement compose d'oxydes de calcium.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":75,"name":"Bobine magnetique","category_id":4,"price":9.5,"no_price":0,"weight":1.0,"duration":7.5,"description":"Un dispositif simple permettant de convertir les champs magnetiques en courant electrique, et inversement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":76,"name":"Moteur","category_id":4,"price":59.0,"no_price":0,"weight":2.0,"duration":18.8,"description":"Un dispositif permettant de convertir l'energie electrique en mouvement, et inversement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":77,"name":"Pompe","category_id":4,"price":102.0,"no_price":0,"weight":2.0,"duration":18.8,"description":"Un dispositif permettant de propulser des fluides dans des tuyaux relies.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":78,"name":"Reacteur a elmerium","category_id":4,"price":214.0,"no_price":0,"weight":2.0,"duration":18.8,"description":"Un dispositif permettant de disperser un champ de plasma sous forme de sphere. C'est un composant essentiel de la plupart des modeles de bouclier.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":79,"name":"Focalisateur cristallin","category_id":4,"price":23.1,"no_price":0,"weight":1.0,"duration":6.0,"description":"Un dispositif optique qui concentre les rayonnements a travers des cristaux polis.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":80,"name":"Hyperlentille","category_id":4,"price":179.0,"no_price":0,"weight":1.0,"duration":18.0,"description":"Un dispositif optique qui concentre les rayonnements a travers des cristaux polis.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":81,"name":"Graphenoide quantique","category_id":4,"price":296.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"Une structure en graphene presentant des effets moleculaires quantiques. Indispensable pour permettre aux reacteurs supraluminiques d'atteindre une masse negative.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":82,"name":"Alternateur Hall","category_id":4,"price":50.0,"no_price":0,"weight":1.0,"duration":18.0,"description":"Un dispositif capable de produire un puissant effet Hall, ce qui permet aux propulseurs ioniques d'accelerer leur propergol.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":83,"name":"Reseau de diffraction","category_id":4,"price":6.3,"no_price":0,"weight":1.0,"duration":12.0,"description":"Un dispositif optique qui decompose la lumiere en spectre de frequences.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":84,"name":"Chambre de confinement","category_id":4,"price":211.0,"no_price":0,"weight":5.0,"duration":15.0,"description":"Un dispositif permettant a un courant de plasma de s'ecouler a haute vitesse dans un mouvement circulaire, sans quitter sa trajectoire.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":85,"name":"Cellule photovoltaique","category_id":4,"price":6.2,"no_price":0,"weight":0.5,"duration":7.5,"description":"Un dispositif electronique qui convertit les ondes electromagnetiques en electricite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":86,"name":"Batterie chimique","category_id":4,"price":57.0,"no_price":0,"weight":2.0,"duration":3.0,"description":"Un dispositif permettant de stocker de l'energie chimique et de la convertir en electricite. Il s'agit de la base des MVD aux batteries plus imposantes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":87,"name":"Petit missile","category_id":4,"price":1.42,"no_price":0,"weight":0.1,"duration":3.0,"description":"Une enveloppe metallique dotee d'une structure de propulsion et concue pour contenir une ogive explosive.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":88,"name":"Kit modulaire","category_id":2,"price":405.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"La norme universelle qui sert de base a tous les « modules de vaisseau dependants » (MVD). Ce kit permet de fixer un MVD a un vaisseau grace a des electroaimants permanents a interrupteur B.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":89,"name":"Petit carter de piece en titane","category_id":2,"price":590.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Un carter modulaire destine a recouvrir un vaisseau ou un MVD. En plus de limiter la friction dans les espaces atmospheriques, ce carter offre une protection contre les rayonnements electromagnetiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":90,"name":"Carter de piece en titane","category_id":2,"price":3200.0,"no_price":0,"weight":25.0,"duration":24.0,"description":"Un carter modulaire destine a recouvrir un vaisseau ou un MVD. En plus de limiter la friction dans les espaces atmospheriques, ce carter offre une protection contre les rayonnements electromagnetiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":91,"name":"Drone","category_id":17,"price":79.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Ce vehicule autonome transporte des charges d'un point A a un point B en suivant un itineraire predefini.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":92,"name":"Missile explosif","category_id":6,"price":3.94,"no_price":0,"weight":0.1,"duration":3.0,"description":"Lors des operations d'extraction, des explosifs sont souvent utilises pour acceder a des mineraux proteges par d'epaisses surfaces.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":93,"name":"Petite cartouche","category_id":6,"price":0.03,"no_price":0,"weight":0.01,"duration":3.0,"description":"Les armes a projectiles sont encore largement utilisees par le Contingent de Defense Universelle, qui a cree toutes sortes de normes pour le calibre des cartouches.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":94,"name":"Laser d'extraction rudimentaire","category_id":40,"price":50.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Ce module optique amplifie la lumiere a une intensite telle qu'elle peut desintegrer la plupart des materiaux. Il n'existe pas actuellement de methode de decoupe plus precise.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":95,"name":"Balise quantique","category_id":18,"price":128.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Une methode experimentale de communication a grande vitesse. Cette balise peut instantanement devoiler sa position a une signature quantique, ou qu'elle se trouve dans la galaxie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":96,"name":"Laser d'extraction simple","category_id":40,"price":91.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module optique amplifie la lumiere a une intensite telle qu'elle peut desintegrer la plupart des materiaux. Il n'existe pas actuellement de methode de decoupe plus precise.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":97,"name":"Laser haute puissance","category_id":40,"price":1010.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Ce module optique amplifie la lumiere a une intensite telle qu'elle peut desintegrer la plupart des materiaux. Il n'existe pas actuellement de methode de decoupe plus precise.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":98,"name":"Laser haute puissance surcadence","category_id":40,"price":2240.0,"no_price":0,"weight":25.0,"duration":37.5,"description":"Ce module optique amplifie la lumiere a une intensite telle qu'elle peut desintegrer la plupart des materiaux. Il n'existe pas actuellement de methode de decoupe plus precise.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":99,"name":"Pompe peristaltique","category_id":40,"price":289.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module est concu pour recueillir toutes sortes de fluides presents dans l'environnement grace a son aspiration puissante.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":100,"name":"Detecteur de ressources spectral","category_id":34,"price":116.0,"no_price":0,"weight":10.0,"duration":15.0,"description":"Ce detecteur compare une analyse spectrale a une base de composants pour identifier les ressources connues a distance.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":101,"name":"Detecteur de ressources simple","category_id":34,"price":62.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce radar emet des ondes electromagnetiques et interprete leur refraction pour detecter et identifier les objets metalliques dans un large perimetre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":102,"name":"Petit panneau solaire","category_id":24,"price":202.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module convertit les rayonnements electromagnetiques en courant electrique afin d'alimenter les autres MVD.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":103,"name":"Panneau solaire moyen","category_id":24,"price":1040.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Ce module convertit les rayonnements electromagnetiques en courant electrique afin d'alimenter les autres MVD.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":104,"name":"Petit radiateur","category_id":25,"price":195.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module peut liberer de grandes quantites d'energie thermique. Il est principalement utilise pour refroidir l'interieur d'un vaisseau en dispersant sa chaleur dans l'espace.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":105,"name":"Lance-missile 1 tube","category_id":20,"price":61.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module permet d'envoyer une charge explosive vers une cible eloignee.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":106,"name":"Scanalyseur alpha","category_id":22,"price":51.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module emploie la spectrometrie de masse pour identifier la composition d'un echantillon. Les lasers d'extraction ne peuvent etre utilises que sur les ressources ainsi identifiees.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":107,"name":"Scanalyseur beta","category_id":22,"price":95.0,"no_price":0,"weight":10.0,"duration":15.0,"description":"Ce module emploie la spectrometrie de masse pour identifier la composition d'un echantillon. Les lasers d'extraction ne peuvent etre utilises que sur les ressources ainsi identifiees.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":108,"name":"Petite soute","category_id":23,"price":65.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module de stockage convient aux materiaux solides. Son systeme de stabilisation magnetique protege son contenu des collisions lorsque le vaisseau est en mouvement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":109,"name":"Soute","category_id":23,"price":560.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Ce module de stockage convient aux materiaux solides. Son systeme de stabilisation magnetique protege son contenu des collisions lorsque le vaisseau est en mouvement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":110,"name":"Petit reservoir de liquide","category_id":23,"price":442.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module de stockage convient aux materiaux liquides ou semi-fluides. Ses raccordements SCAM lui permettent d'alimenter d'autres MVD s'il contient du carburant ou du liquide de refroidissement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":111,"name":"Reacteur SL - Eco","category_id":27,"price":90.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":112,"name":"Petit reservoir de mag-plasma","category_id":27,"price":269.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module de stockage permet de conserver du mag-plasma actif. Ses raccordements SCAM lui permettent d'alimenter les MVD de bouclier.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":113,"name":"Reservoir de mag-plasma","category_id":27,"price":1570.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Ce module de stockage permet de conserver du mag-plasma actif. Ses raccordements SCAM lui permettent d'alimenter les MVD de bouclier.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":114,"name":"Navigateur cosmique","category_id":27,"price":48.8,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module utilise des algorithmes complexes et des coordonnees spatiales precises afin de permettre aux auxiliaires les plus distraits de prevoir leur itineraire a travers les etoiles.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":115,"name":"Petit bouclier reactif","category_id":28,"price":284.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Grace a ses deux bobines Tesla, ce module genere une bulle de plasma charge permettant de proteger un vaisseau des rayonnements et particules.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":116,"name":"Bouclier reactif","category_id":28,"price":1490.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Grace a ses deux bobines Tesla, ce module genere une bulle de plasma charge permettant de proteger un vaisseau des rayonnements et particules.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":117,"name":"Petit generateur electrique","category_id":29,"price":880.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module consomme un combustible carbonique pour produire du courant electrique afin d'alimenter les autres MDV.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":118,"name":"Module de batterie","category_id":30,"price":740.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module stocke de l'energie chimique, qu'il convertit en courant electrique afin d'alimenter d'autres MVD.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":119,"name":"Volant d'inertie","category_id":30,"price":110.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module permet de stocker de l'energie cinetique a l'aide d'une roue en rotation afin d'alimenter d'autres MVD tout en evitant les desavantages des batteries chimiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":120,"name":"Cockpit « Pionnier »","category_id":13,"price":1050.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Avec ses lignes epurees, le cockpit individuel d'AEgir est concu pour attenuer les risques de degats critiques lors des sauts supraluminiques. Il est egalement equipe d'une petite batterie hautement efficace.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":121,"name":"Cockpit « Brique »","category_id":13,"price":415.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Le cockpit d'entree de gamme de la Compagnie. Il est surtout utilise dans les appareils destines aux tests.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":122,"name":"Cockpit « Castor »","category_id":13,"price":1020.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Le cockpit individuel de Meitner & Karls est optimise pour le stockage et la resistance aux collisions. C'est le choix ideal pour le transport de marchandises a travers des champs d'asteroides.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":123,"name":"Cockpit « Cocon »","category_id":13,"price":1020.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Le cockpit individuel de Damona est un petit bijou d'ingenierie en matiere d'isolation. Moins vulnerable aux temperatures exterieures, il ralentit cependant le refroidissement des lasers. Il est egalement equipe d'un petit radiateur qui permet au vaisseau d'evacuer le trop-plein de chaleur ou d'en generer quand les temperatures chutent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":124,"name":"Propulseur « Pousse-pousse »","category_id":14,"price":315.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Ce dispositif de propulsion electrique permet de pousser et d'elever un vaisseau sans consommer de combustible ou de carburant non renouvelable.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":125,"name":"Propulseur « Brise tranquille »","category_id":14,"price":920.0,"no_price":0,"weight":20.0,"duration":180.0,"description":"Ce propulseur subtil d'AEgir s'integre en profondeur au systeme du vaisseau pour atteindre des sommets en matiere d'efficacite energetique au coeur des tenebres inexplorees.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":126,"name":"Propulseur « Sauterelle »","category_id":14,"price":930.0,"no_price":0,"weight":20.0,"duration":180.0,"description":"Meitner & Karls ont concu ce propulseur puissant pour resister a la chaleur seche des expeditions minieres les plus intenses.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":127,"name":"Propulseur « Explorateur du neant »","category_id":14,"price":890.0,"no_price":0,"weight":20.0,"duration":180.0,"description":"La science entraine souvent les esprits curieux dans des situations perilleuses. Grace a ce propulseur, Damona leur permet de retourner rapidement dans le vide sans danger de l'espace.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":128,"name":"Acier 4x3x1","category_id":12,"price":500.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":129,"name":"Acier 6x3x1","category_id":12,"price":750.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":130,"name":"Acier 8x3x1","category_id":12,"price":1000.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":131,"name":"Acier 6x3x2","category_id":12,"price":840.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":132,"name":"Acier 8x3x2","category_id":12,"price":1130.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":133,"name":"Acier thermique 4x3x1","category_id":12,"price":560.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":134,"name":"Acier thermique 6x3x1","category_id":12,"price":850.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":135,"name":"Acier thermique 8x3x1","category_id":12,"price":1130.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":136,"name":"Acier thermique 4x3x2","category_id":12,"price":640.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":137,"name":"Acier thermique 6x3x2","category_id":12,"price":960.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":138,"name":"Acier thermique 8x3x2","category_id":12,"price":1300.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":139,"name":"Titane 4x3x1","category_id":12,"price":1330.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":140,"name":"Titane 6x3x1","category_id":12,"price":2000.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":141,"name":"Titane 8x3x1","category_id":12,"price":2670.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":142,"name":"Titane 4x3x2","category_id":12,"price":1390.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":143,"name":"Titane 6x3x2","category_id":12,"price":2090.0,"no_price":0,"weight":20.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":144,"name":"Titane 8x3x2","category_id":12,"price":2790.0,"no_price":0,"weight":20.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":145,"name":"Titane 8x6x2","category_id":12,"price":7100.0,"no_price":0,"weight":50.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":146,"name":"Titane 12x6x2","category_id":12,"price":10700.0,"no_price":0,"weight":50.0,"duration":90.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":147,"name":"Titane 16x6x2","category_id":12,"price":14300.0,"no_price":0,"weight":50.0,"duration":120.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":148,"name":"Titane thermique 4x3x1","category_id":12,"price":1460.0,"no_price":0,"weight":16.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":149,"name":"Titane thermique 6x3x1","category_id":12,"price":2200.0,"no_price":0,"weight":24.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":150,"name":"Titane thermique 8x3x1","category_id":12,"price":2940.0,"no_price":0,"weight":32.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":151,"name":"Titane thermique 4x3x2","category_id":12,"price":1540.0,"no_price":0,"weight":24.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":152,"name":"Titane thermique 6x3x2","category_id":12,"price":2320.0,"no_price":0,"weight":36.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":153,"name":"Titane thermique 8x3x2","category_id":12,"price":3090.0,"no_price":0,"weight":48.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":154,"name":"Titane thermique 8x6x2","category_id":12,"price":7700.0,"no_price":0,"weight":64.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":155,"name":"Titane thermique 12x6x2","category_id":12,"price":11700.0,"no_price":0,"weight":96.0,"duration":90.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":156,"name":"Titane thermique 16x6x2","category_id":12,"price":15600.0,"no_price":0,"weight":128.0,"duration":120.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":157,"name":"Bonbonne d'eau","category_id":26,"price":38.0,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bonbonne pressurisee contenant de l'eau, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":158,"name":"Bouteille de saumure","category_id":26,"price":37.0,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bouteille scellee contenant de la saumure, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":159,"name":"Bouteille d'ethanol","category_id":26,"price":59.0,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bouteille scellee contenant de l'ethanol, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":160,"name":"Graine d'astrengrain","category_id":38,"price":null,"no_price":0,"weight":1.0,"duration":0.0,"description":"Semence de xenoplante utilisee pour la culture et la production d'huile xenique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":161,"name":"Bouteille d'huile xenique","category_id":26,"price":194.0,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bouteille scellee contenant de l'huile xenique, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":162,"name":"Bonbonne de mercure","category_id":26,"price":94.0,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bonbonne pressurisee contenant du mercure, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":163,"name":"Bonbonne de mag-plasma","category_id":26,"price":397.0,"no_price":0,"weight":1.0,"duration":0.417,"description":"Bonbonne pressurisee contenant du mag-plasma, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":164,"name":"Acide sulfurique","category_id":10,"price":0.54,"no_price":0,"weight":null,"duration":0.3,"description":"Compose chimique liquide fortement corrosif, utilise dans divers procedes industriels.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":165,"name":"Kit de deploiement de base","category_id":2,"price":null,"no_price":0,"weight":null,"duration":3.0,"description":"Kit necessaire au deploiement du centre de commandement d'une nouvelle base.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":166,"name":"Centre de commandement simple","category_id":42,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment central fournit le stockage, l'electricite et les systemes administratifs essentiels au fonctionnement d'une petite base planetaire. En termes juridiques, le deploiement d'une base permet de revendiquer la zone ou elle se trouve et ses gisements. Le centre est egalement equipe d'une fonderie manuelle et de machines de fabrication rudimentaires.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":167,"name":"Tour de commande","category_id":42,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment permet a une base de s'etendre sur une zone de terrain de niveau 2 et ainsi de doubler sa capacite d'encombrement et de debloquer les seuils d'experience jusqu'a 800 points.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":168,"name":"Extracteur","category_id":43,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment ne peut etre assemble que sur un gisement de ressources, qu'il pourra automatiquement forer afin d'en extraire du minerai brut.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":169,"name":"Extracteur de liquide","category_id":43,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment peut uniquement etre construit au-dessus d'un bassin geothermique dont il extrait automatiquement le fluide pur.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":170,"name":"Cristallisateur","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment utilise des solutions chimiques pour generer des cristaux a une vitesse nettement plus elevee que le procede naturel.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":171,"name":"Ferme xenique","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment fournit un environnement adapte a la culture d'organismes vivants.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":172,"name":"Assembleur","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment assemble des ressources de base pour produire des composes industriels. Il s'agit d'une alternative automatisee a l'atelier manuel. Il peut fonctionner en continu sans intervention humaine, ce qui le rend tres utile pour toute production a grande echelle.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":173,"name":"Fonderie","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment convertit des mineraux bruts en lingots industriels. Il s'agit d'une alternative a la fonderie manuelle. Il peut fonctionner en continu sans intervention humaine, ce qui le rend tres utile pour toute production a grande echelle.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":174,"name":"Micro-fourneau","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Meitner & Karls ont optimise le processus de transformation de minerai en lingots avec ce micro-fourneau. Plus petit et plus rapide qu'une fonderie normale, c'est l'accessoire ideal pour les periodes de fabrication intenses.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":175,"name":"Usine chimique","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment combine des elements chimiques pour produire des composes industriels. Il peut fonctionner en continu sans intervention humaine, ce qui le rend tres utile pour toute production a grande echelle.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":176,"name":"Usine de conditionnement","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment permet de conditionner des produits liquides ou semi-fluides dans des contenants normalises.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":177,"name":"Centrale solaire","category_id":45,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment convertit les rayonnements electromagnetiques en courant electrique afin d'alimenter le reseau de la base. Il necessite de la place et doit etre oriente correctement, mais il fonctionne sans combustible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":178,"name":"Pylone","category_id":45,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette structure permet de supporter des cables electriques et de relier des batiments au reseau electrique de la base. Pour y raccorder un cable, visez le haut du pylone et appuyez sur E.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":179,"name":"Centrale a combustible","category_id":45,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment consomme un combustible carbonique pour produire du courant electrique afin d'alimenter le reseau de la base. Il est efficace et compact, mais gourmand en ressources.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":180,"name":"Groupement de batteries","category_id":45,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment stocke de l'energie chimique lorsque le reseau electrique est en surproduction. Il permet ensuite de la reconvertir en electricite lors des pics de consommation.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":181,"name":"Repartiteur de drones","category_id":46,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment permet de gerer plusieurs itineraires de drones et de les combiner pour creer de veritables chaines de production. C'est le pilier de toute entreprise industrielle bien rodee.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":182,"name":"Plateforme d'atterrissage","category_id":46,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette plateforme permet de stationner un vaisseau dans la base et de le relier a un systeme de distribution de carburant ou d'autres fluides.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":183,"name":"Chantier spatial","category_id":46,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette plateforme permet de stationner un vaisseau dans la base pour modifier sa structure ou remplacer ses modules. Elle est semblable aux chantiers spatiaux des stations spatiales.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":184,"name":"Entrepot","category_id":47,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment permet de stocker des materiaux solides, qui peuvent aisement etre deplaces par drone.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":185,"name":"Boite d'echange","category_id":47,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette petite boite permet a tous les membres de la meme corpo que son proprietaire de deposer des cadeaux ou d'en prendre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":186,"name":"Citerne","category_id":47,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment convient au stockage de materiaux liquides et semi-fluides.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":187,"name":"Citerne de mag-plasma","category_id":47,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment permet de conserver du mag-plasma actif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":188,"name":"Proteine xenique","category_id":3,"price":1.0,"no_price":0,"weight":0.1,"duration":0.0,"description":"Composant essentiel des organismes vivants, les proteines sont des biomolecules qui renferment des chaines d'acides amines.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":189,"name":"Engrais acide","category_id":3,"price":1.36,"no_price":0,"weight":0.1,"duration":3.0,"description":"Un complement en poudre a administrer aux xenoplantes afin de leur fournir des nutriments specifiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":190,"name":"Engrais carbonique","category_id":3,"price":1.5,"no_price":0,"weight":0.1,"duration":3.0,"description":"Un complement en poudre a administrer aux xenoplantes afin de leur fournir des nutriments specifiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":191,"name":"Bonbonne en inox","category_id":26,"price":34.0,"no_price":0,"weight":5.0,"duration":3.0,"description":"Un contenant rudimentaire, mais fiable permettant de conserver des substances liquides ou semi-fluides et de les stocker dans une soute.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":192,"name":"Bonbonne de confinement","category_id":26,"price":387.0,"no_price":0,"weight":25.0,"duration":3.0,"description":"Un contenant robuste destine au mag-plasma et permettant de stocker cette substance dans toutes les soutes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":193,"name":"Detecteur mimetique","category_id":34,"price":168.0,"no_price":0,"weight":10.0,"duration":15.0,"description":"Ce detecteur peut utiliser un echantillon d'une ressource determinee pour localiser les gisements proches contenant le meme element.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":194,"name":"Reacteur SL - Leger","category_id":27,"price":460.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":195,"name":"Reacteur SL - Moyen","category_id":27,"price":1300.0,"no_price":0,"weight":25.0,"duration":0.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":196,"name":"Reacteur SL - Lourd","category_id":27,"price":13200.0,"no_price":0,"weight":50.0,"duration":0.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":197,"name":"Pulpe ordinaire","category_id":3,"price":null,"no_price":0,"weight":0.1,"duration":0.0,"description":"Ressource organique brute extraite de graines, utilisee comme base pour les proteines xeniques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":198,"name":"Grand kit modulaire","category_id":2,"price":9800.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"La norme universelle de grande taille servant de base aux modules de vaisseau dependants (MVD) les plus imposants.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":199,"name":"Lingot de tungstene","category_id":8,"price":null,"no_price":0,"weight":1.0,"duration":3.0,"description":"Materiau de fonderie. Fiche non entierement visible sur la capture (prix, poids et description a completer).","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":200,"name":"Lingot de rigidium","category_id":8,"price":25.8,"no_price":0,"weight":1.0,"duration":6.0,"description":"Materiau de fonderie. Fiche non entierement visible sur la capture (prix, poids et description a completer).","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":201,"name":"Lingot de levinium","category_id":8,"price":47.6,"no_price":0,"weight":1.0,"duration":3.0,"description":"Materiau de fonderie. Fiche non entierement visible sur la capture (prix, poids et description a completer).","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":202,"name":"Cockpit « Bercail »","category_id":13,"price":17100.0,"no_price":0,"weight":50.0,"duration":0.0,"description":"Le cockpit de grande taille d'AEgir est un veritable bijou de technologie. Il peut garder en memoire un emplacement precis et y revenir a tout moment sans consommer de mag-plasma ni subir de degats.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":203,"name":"Usine","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Les plus gros elements des vaisseaux ne peuvent etre construits que dans une grande usine dediee qui consomme enormement d'energie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":204,"name":"Actionneur hydraulique","category_id":4,"price":970.0,"no_price":0,"weight":2.0,"duration":3.0,"description":"Un dispositif qui transforme la pression des fluides en mouvements precis et controles.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":205,"name":"Plaque de metal superieure","category_id":3,"price":20.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"Une plaque de metal de facture industrielle, communement utilisee comme materiau de construction de base.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":206,"name":"Grande soute","category_id":23,"price":15800.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"Ce module de stockage convient aux materiaux solides. Son systeme de stabilisation magnetique protege son contenu des collisions lorsque le vaisseau est en mouvement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":207,"name":"Lentille ciliaire","category_id":4,"price":2840.0,"no_price":0,"weight":1.0,"duration":18.0,"description":"Un dispositif optique qui concentre les rayonnements a travers des cristaux polis.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":208,"name":"Laboratoire","category_id":41,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment contient un laboratoire Ninmah compact, qui contient tout le necessaire pour analyser des substances exotiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":209,"name":"Chauffage electrique","category_id":49,"price":56.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Les chauffages permettent d'affronter les environnements glaciaux en transformant l'electricite en chaleur brute.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":210,"name":"Chaudiere","category_id":49,"price":1190.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"Les chauffages permettent d'affronter les environnements glaciaux en transformant l'electricite en chaleur brute.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":211,"name":"Pate thermique","category_id":10,"price":3.0,"no_price":0,"weight":null,"duration":3.0,"description":"Une pate semi-organique exceptionnellement resistante aux changements de temperature. Elle peut servir de protection face a des conditions extremes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":212,"name":"Bouteille de pate thermique","category_id":26,"price":64.0,"no_price":0,"weight":5.0,"duration":0.083,"description":"Une pate semi-organique exceptionnellement resistante aux changements de temperature. Elle peut servir de protection face a des conditions extremes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":213,"name":"Pulpe gelee","category_id":3,"price":null,"no_price":0,"weight":1.0,"duration":0.0,"description":"Ressource organique brute utilisee en synthese chimique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":214,"name":"Bonbonne d'acide sulfurique","category_id":26,"price":null,"no_price":0,"weight":1.0,"duration":0.083,"description":"Bonbonne pressurisee contenant de l'acide sulfurique, utilisee pour son transport et son stockage.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":215,"name":"Navette","category_id":17,"price":2380.0,"no_price":0,"weight":50.0,"duration":3.0,"description":"Ce vehicule autonome transporte differentes cargaisons entre les bases.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":216,"name":"Plateforme d'atterrissage de navette","category_id":46,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette plateforme permet de stationner une navette dans la base pour le transport de marchandises.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":217,"name":"Usine de recyclage","category_id":44,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ce batiment traite rebuts et debris pour en extraire divers composants et les preparer a etre reutilises.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":218,"name":"Terminal de couloir","category_id":41,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Cette structure imposante permet de stabiliser un tunnel spatiotemporel, meme dans le puits gravitationnel d'une planete. Les vaisseaux dotes d'un reacteur supraluminique peuvent emprunter ces couloirs. Un Noyau de couloir doit etre deploye avec un Perforateur d'espace-temps au point de sortie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":219,"name":"Cockpit « Enclume »","category_id":13,"price":18300.0,"no_price":0,"weight":50.0,"duration":120.0,"description":"Cockpit de vaisseau (prix, poids et description non visibles sur la capture, seul le panneau ingredients etait cadre).","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":220,"name":"Perforateur d'espace-temps","category_id":5,"price":null,"no_price":0,"weight":null,"duration":12.0,"description":"Ce module peut percer un petit trou dans le continuum espace-temps, ce qui permet de deployer un Noyau de couloir et d'ouvrir un couloir vers un Terminal de couloir existant.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":221,"name":"Noyau de couloir","category_id":4,"price":null,"no_price":0,"weight":null,"duration":7.5,"description":"Combine a un Perforateur d'espace-temps, ce noyau permet d'ouvrir un couloir vers n'importe quel Terminal de couloir disponible. Ce couloir vous permettra de voyager entre deux points a l'aide d'un reacteur supraluminique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":222,"name":"Poutrelle inflexible","category_id":3,"price":106.0,"no_price":0,"weight":2.0,"duration":3.0,"description":"Une longue piece metallique a la section transversale en forme de H. Elle est communement utilisee dans le secteur du batiment afin de fournir une resistance structurelle.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":223,"name":"Petit carter de chassis solide","category_id":2,"price":1540.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Un carter modulaire destine a recouvrir un vaisseau ou un MVD. En plus de limiter la friction dans les espaces atmospheriques, ce carter offre une protection contre les rayonnements electromagnetiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":224,"name":"Carter de chassis solide","category_id":2,"price":8000.0,"no_price":0,"weight":25.0,"duration":24.0,"description":"Un carter modulaire destine a recouvrir un vaisseau ou un MVD. En plus de limiter la friction dans les espaces atmospheriques, ce carter offre une protection contre les rayonnements electromagnetiques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":225,"name":"Chassis solide 4x3x1","category_id":12,"price":6400.0,"no_price":0,"weight":20.0,"duration":30.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":226,"name":"Chassis solide 6x3x1","category_id":12,"price":9600.0,"no_price":0,"weight":30.0,"duration":45.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":227,"name":"Chassis solide 8x3x1","category_id":12,"price":12800.0,"no_price":0,"weight":40.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":228,"name":"Chassis solide 8x6x2","category_id":12,"price":33200.0,"no_price":0,"weight":80.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":229,"name":"Chassis solide 12x6x2","category_id":12,"price":49900.0,"no_price":0,"weight":120.0,"duration":90.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":230,"name":"Chassis solide 16x6x2","category_id":12,"price":66000.0,"no_price":0,"weight":160.0,"duration":120.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":231,"name":"Levinium 4x3x2","category_id":12,"price":3710.0,"no_price":0,"weight":12.0,"duration":3.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":232,"name":"Levinium 6x3x2","category_id":12,"price":5500.0,"no_price":0,"weight":18.0,"duration":3.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":233,"name":"Levinium 8x3x2","category_id":12,"price":7400.0,"no_price":0,"weight":24.0,"duration":3.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel. Stellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":234,"name":"Petit carter en levinium","category_id":2,"price":1660.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Un carter modulaire en levinium destine a recouvrir un vaisseau ou un MVD.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":235,"name":"Deporteur « Nimbus »","category_id":32,"price":126.0,"no_price":0,"weight":5.0,"duration":15.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":236,"name":"Deporteur « Aileron »","category_id":32,"price":126.0,"no_price":0,"weight":5.0,"duration":15.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":237,"name":"Aile « Gardien »","category_id":32,"price":252.0,"no_price":0,"weight":10.0,"duration":15.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":238,"name":"Deporteur « Nimbus » thermique","category_id":32,"price":142.0,"no_price":0,"weight":5.0,"duration":7.5,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":239,"name":"Deporteur « Aileron » thermique","category_id":32,"price":142.0,"no_price":0,"weight":5.0,"duration":7.5,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":240,"name":"Deporteur « Gardien » thermique","category_id":32,"price":285.0,"no_price":0,"weight":5.0,"duration":15.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":241,"name":"Aile « Condor »","category_id":32,"price":7100.0,"no_price":0,"weight":50.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":242,"name":"Aile « Condor » thermique","category_id":32,"price":7700.0,"no_price":0,"weight":50.0,"duration":60.0,"description":"Les vaisseaux spatiaux sont constitues de trois couches principales : une couche externe resistante au vide, constituee d'un materiau solide, un chassis solide constitue de lourdes poutrelles, et des systemes internes qui permettent au vaisseau de rester habitable et fonctionnel.\n\nStellar Engineering rassemble les trois couches dans la conception de ses pieces modulaires afin de vous permettre de construire le vaisseau de vos reves.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":243,"name":"Plaque ultralegere","category_id":3,"price":99.0,"no_price":0,"weight":2.0,"duration":6.0,"description":"Un epais panneau de metal qui peut resister aux conditions meteorologiques les plus rudes. Il est communement utilise dans la construction de batiments ou de fuselages.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":244,"name":"Transmetteur energetique","category_id":45,"price":null,"no_price":0,"weight":null,"duration":0.0,"description":"Ce batiment se sert d'une technologie de bouclier de pointe et de la deformation gravitationnelle de l'espace-temps pour alimenter en electricite, sans deperdition, les differentes bases de son systeme stellaire.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":245,"name":"Entrepot avance","category_id":47,"price":null,"no_price":0,"weight":null,"duration":0.0,"description":"Un entrepot plus grand destine aux materiaux solides et dote d'itineraires de drones supplementaires, de limites de capacite de stockage des objets et d'une connexion directe a l'atelier de la base.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":246,"name":"Lance-missile 8 tubes","category_id":20,"price":null,"no_price":1,"weight":10.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":247,"name":"Charbon actif","category_id":3,"price":3.78,"no_price":0,"weight":0.5,"duration":3.0,"description":"Du carbone sous une forme poreuse aux proprietes absorbantes remarquables. Largement utilise pour filtrer des gaz et fluides.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":248,"name":"Extracteur avance","category_id":43,"price":1180.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This building can only be assembled over a resource deposit, which it will then drill into to extract raw ore automatically.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":249,"name":"Reacteur SL avance - Solo","category_id":27,"price":null,"no_price":1,"weight":10.0,"duration":0.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible. Ce modele est optimise pour un seul vaisseau.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":250,"name":"Reacteur SL avance - Soutien","category_id":27,"price":null,"no_price":1,"weight":50.0,"duration":0.0,"description":"Consideree comme la plus grande invention de l'ere des Planetes-Unies, cette categorie de modules permet de contracter et d'etendre l'espace, ce qui rend le voyage supraluminique possible. Ce modele peut prendre en charge plusieurs vaisseaux a la fois.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":251,"name":"Centrale a combustible avancee","category_id":45,"price":251.0,"no_price":0,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":252,"name":"Pont « Observateur celeste » AE","category_id":13,"price":14800.0,"no_price":0,"weight":1.0,"duration":120.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":253,"name":"Alliage X 12x6x2","category_id":12,"price":368.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":254,"name":"Alliage X 12x6x4","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":255,"name":"Alliage X 16x6x2","category_id":12,"price":491.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":256,"name":"Alliage X 16x6x4","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":257,"name":"Alliage X 4x3x1","category_id":12,"price":61.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":258,"name":"Alliage X 4x3x2","category_id":12,"price":122.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":259,"name":"Alliage X 6x3x1","category_id":12,"price":92.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":260,"name":"Alliage X 6x3x2","category_id":12,"price":184.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":261,"name":"Alliage X 8x3x1","category_id":12,"price":122.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":262,"name":"Alliage X 8x3x2","category_id":12,"price":245.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":263,"name":"Alliage X 8x6x2","category_id":12,"price":245.0,"no_price":0,"weight":1.0,"duration":3.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":264,"name":"Carter de piece en alliage X","category_id":2,"price":null,"no_price":1,"weight":25.0,"duration":24.0,"description":"A modular hull encasing a ship or an RSM. In addition to limiting friction in atmospheric spaces, the casing provides protection against electromagnetic radiation.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":265,"name":"Poudre d'aluminium","category_id":3,"price":0.5,"no_price":0,"weight":0.1,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":266,"name":"Debris d'aluminium","category_id":56,"price":7.2,"no_price":0,"weight":5.0,"duration":0.0,"description":"Scraps are the result of industrial disassembly. They cannot be reused without extensive processing at a [B_RecyclingPlant].","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":267,"name":"Torpille antimatiere","category_id":6,"price":7.8,"no_price":0,"weight":0.1,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":268,"name":"Bouclier barriere","category_id":28,"price":1500.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"This plasma shield module has enough charge to protect a spaceship from light man-made weapons, but takes longer to load than regular shields.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":269,"name":"Generateur central de base","category_id":2,"price":100.0,"no_price":0,"weight":5.0,"duration":0.0,"description":"Ce dispositif permet de revendiquer les alentours de la base de son utilisateur et de les alimenter en electricite. Son utilisation est reservee aux auxiliaires ayant recu l'autorisation de la Compagnie.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":270,"name":"Modificateur de batterie : surcharge I","category_id":33,"price":25.3,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":271,"name":"Modificateur de batterie : surcharge II","category_id":33,"price":232.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":272,"name":"Modificateur de batterie : surcharge III","category_id":33,"price":2410.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":273,"name":"Gemme magnifique","category_id":19,"price":35.0,"no_price":0,"weight":0.1,"duration":0.0,"description":"Gemstones can have different compositions, aspects and properties. Their common trait is an aesthetic appeal that makes them valuable to humans.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":274,"name":"Module BESS","category_id":30,"price":14400.0,"no_price":0,"weight":25.0,"duration":24.0,"description":"This module can store chemical energy and readily convert it to electric current to power other RSMs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":275,"name":"Grand reservoir de mag-plasma","category_id":27,"price":11900.0,"no_price":0,"weight":50.0,"duration":0.0,"description":"This storage module is suitable for active mag-plasma. Its MACS connections enable it to supply shield RSMs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":276,"name":"Plan: Bouclier barriere","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Barrier Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":277,"name":"Plan: Modificateur de batterie : surcharge I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Battery Patch: Overload I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":278,"name":"Plan: Modificateur de batterie : surcharge II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Battery Patch: Overload II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":279,"name":"Plan: Modificateur de batterie : surcharge III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Battery Patch: Overload III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":280,"name":"Plan: Module BESS","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for BESS Module.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":281,"name":"Plan: Beton","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Concrete.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":282,"name":"Plan: Laser de refroidissement","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Cooling Laser.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":283,"name":"Plan: Focalisateur cristallin","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Crystalline Focuser.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":284,"name":"Plan: Focalisateur cristallin","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Crystalline Focuser.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":285,"name":"Plan: Focalisateur cristallin","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Crystalline Focuser.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":286,"name":"Plan: Reseau de diffraction","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Diffraction Grating.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":287,"name":"Plan: Reseau de diffraction","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Diffraction Grating.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":288,"name":"Plan: Modificateur SL : cieux cartographies I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Charted Skies I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":289,"name":"Plan: Modificateur SL : cieux cartographies II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Charted Skies II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":290,"name":"Plan: Modificateur SL : cieux cartographies III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Charted Skies III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":291,"name":"Plan: Modificateur SL : exploration des confins I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Edge Explorer I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":292,"name":"Plan: Modificateur SL : exploration des confins II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Edge Explorer II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":293,"name":"Plan: Modificateur SL : esquive eclair I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Light Dodging I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":294,"name":"Plan: Modificateur SL : esquive eclair II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Light Dodging II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":295,"name":"Plan: Modificateur SL : esquive eclair III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Light Dodging III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":296,"name":"Plan: Modificateur SL : mag-plasma I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Mag-Plasma I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":297,"name":"Plan: Modificateur SL : mag-plasma II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Mag-Plasma II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":298,"name":"Plan: Modificateur SL : mag-plasma III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for FTL Patch: Mag-Plasma III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":299,"name":"Plan: Modificateur de generateur : alimentation I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Generator Patch: Power I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":300,"name":"Plan: Modificateur de generateur : alimentation III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Generator Patch: Power III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":301,"name":"Plan: Puce antichaleur","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Heat-Protec Suit Chip.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":302,"name":"Plan: Bouclier lourd","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Heavy Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":303,"name":"Plan: Bouclier hyperreactif","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Hyper Reactive Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":304,"name":"Plan: Kaolinite","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Kaolinite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":305,"name":"Plan: Grand bouclier barriere","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Large Barrier Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":306,"name":"Plan: Grand bouclier lourd","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Large Heavy Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":307,"name":"Plan: Grand reservoir de liquide","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Large Liquid Tank.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":308,"name":"Plan: Grand panneau solaire","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Large Solar Panel.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":309,"name":"Plan: Modificateur de laser : production accrue I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Increased Output I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":310,"name":"Plan: Modificateur de laser : production accrue II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Increased Output II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":311,"name":"Plan: Modificateur de laser : production accrue III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Increased Output III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":312,"name":"Plan: Modificateur de laser : rendement bonus I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Last Yield I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":313,"name":"Plan: Modificateur de laser : puissance d'extraction I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Mining Power I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":314,"name":"Plan: Modificateur de laser : puissance d'extraction III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Mining Power III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":315,"name":"Plan: Modificateur de laser : trouvaille rare I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Rare Find I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":316,"name":"Plan: Modificateur de laser : trouvaille rare II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Rare Find II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":317,"name":"Plan: Modificateur de laser : trouvaille rare III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Laser Patch: Rare Find III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":318,"name":"Plan: Bobine magnetique","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Magnetic Coil.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":319,"name":"Plan: Radiateur moyen","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Medium Radiator.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":320,"name":"Plan: Plaque de metal","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Metal Sheet.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":321,"name":"Plan: Plaque de metal","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Metal Sheet.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":322,"name":"Plan: Plaque de metal","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Metal Sheet.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":323,"name":"Plan: Modificateur de module : efficacite du carburant I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Fuel Efficiency I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":324,"name":"Plan: Modificateur de module : efficacite du carburant III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Fuel Efficiency III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":325,"name":"Plan: Modificateur de module : absorption de chaleur I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Heat Absorber I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":326,"name":"Plan: Modificateur de module : absorption de chaleur III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Heat Absorber III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":327,"name":"Plan: Modificateur de module : efficacite energetique I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Power Efficiency I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":328,"name":"Plan: Modificateur de module : efficacite energetique III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: Power Efficiency III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":329,"name":"Plan: Modificateur de module : systeme I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: System I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":330,"name":"Plan: Modificateur de module : systeme III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Module Patch: System III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":331,"name":"Plan: Ecrou et boulon","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Nut and Bolt.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":332,"name":"Plan: Modificateur de radar : portee I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Radar Patch: Range I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":333,"name":"Plan: Modificateur de radar : portee II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Radar Patch: Range II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":334,"name":"Plan: Modificateur de radar : portee III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Radar Patch: Range III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":335,"name":"Plan: Substrat semi-conducteur","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Semiconductor Substrate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":336,"name":"Plan: Substrat semi-conducteur","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Semiconductor Substrate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":337,"name":"Plan: Modificateur de bouclier : robustesse I","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Shield Patch: Tough I.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":338,"name":"Plan: Modificateur de bouclier : robustesse II","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Shield Patch: Tough II.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":339,"name":"Plan: Modificateur de bouclier : robustesse III","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Shield Patch: Tough III.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":340,"name":"Plan: Petit bouclier barriere","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Small Barrier Shield.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":341,"name":"Plan: Explosif solide","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Solid Explosive.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":342,"name":"Plan: Plaque d'inox","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Stainless Plate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":343,"name":"Plan: Plaque d'inox","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Stainless Plate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":344,"name":"Plan: Plaque de metal robuste","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Strong Metal Sheet.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":345,"name":"Plan: Plaque de metal robuste","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Strong Metal Sheet.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":346,"name":"Plan: Tuyau etanche","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Watertight Pipe.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":347,"name":"Plan: Tuyau etanche","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Watertight Pipe.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":348,"name":"Plan: Fil electrique","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Wire.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":349,"name":"Plan: Fil electrique","category_id":52,"price":10.0,"no_price":0,"weight":null,"duration":0.0,"description":"This detailed plan contains all the necessary instructions to build a specific ship module. It can be read by a human or by a machine. Unlocks the recipe for Wire.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":350,"name":"Module de controle d'acceleration","category_id":31,"price":98.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce petit composant informatique renforce le controle des propulseurs. Appuyez sur [key.Booster] pour activer ou desactiver l'acceleration.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":351,"name":"Gemme nebuleuse","category_id":19,"price":3.0,"no_price":0,"weight":0.1,"duration":0.0,"description":"Gemstones can have different compositions, aspects and properties. Their common trait is an aesthetic appeal that makes them valuable to humans.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":352,"name":"Puce antifroid","category_id":53,"price":71.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Cet accessoire augmente la capacite isolante d'une combinaison face aux temperatures basses. Plusieurs puces peuvent etre appliquees a la fois pour accroitre leur efficacite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":353,"name":"Relais de commande","category_id":42,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment permet a une base de s'etendre sur une zone de terrain de niveau 3 et ainsi de doubler sa capacite d'encombrement et de debloquer les seuils d'experience jusqu'a 2000 points.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":354,"name":"Conglomerats : enfant desherite","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"A l'origine, Eris Corp. est issu d'une filiale mineure de la Compagnie : Star Foods. Cette branche a developpe les premieres marques grand public a succes d'Atlas, imposant ses distributeurs automatiques dans tous les espaces publics du nouveau territoire humain. Cependant, les tensions grandissantes entre les dirigeants de la filiale et l'autorite centrale de la Compagnie ont donne lieu a une serie de conflits, qui a finalement debouche sur le rachat complet de Star Foods par ses propres directeurs et employes. La provenance des fonds qui ont rendu ce rachat possible reste nebuleuse.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":355,"name":"Conglomerats : Eris Corp","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Eris Corp. est le seul conglomerat a avoir ete fonde apres la guerre. Bien qu'il ne soit pas aussi puissant que les conglomerats historiques, c'est celui qui est le mieux connu du grand public. En plus de dominer l'industrie alimentaire avec ses marques populaires, comme Star Sip et Master Soda, c'est aussi d'un empire mediatique et du principal organisateur d'evenements sportifs de la galaxie. Il est actuellement dirige par Nasim de Beaumont.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":356,"name":"Conglomerats : espionnage industriel","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"L'UBI, anciennement controlee par la Federation, a consolide son influence sur les autres conglomerats par le biais d'operations d'espionnage. A la fin de la guerre, sa filiale Ophanim avait decouvert suffisamment de secrets compromettants pour constituer a la fois une serieuse menace et un excellent consultant en matiere de strategie commerciale. En negociant des accords de non-divulgation sur certains points cles, l'UBI a su devenir un acteur essentiel du paysage industriel d'Atlas et reconquerir son independance.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":357,"name":"Conglomerats : l'UBI","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"L'UBI, ou Union Bancaire Interstellaire, a ete fondee au cours de l'ere de la Voie lactee. Requisitionnee par la Federation des Planetes-Unies pendant la guerre, elle a depuis recouvre son autonomie en nouant des partenariats avec d'autres conglomerats et en diversifiant ses activites. Aujourd'hui, elle controle la Bourse QUASR et l'entreprise de surveillance Ophanim ainsi que plusieurs institutions financieres, chaines de casino et restaurants de luxe. Elle est actuellement dirigee par Edith Wei.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":358,"name":"Conglomerats : le groupe Ninmah","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ninmah a ete fonde pendant la Guerre des tripodes dans le but de proposer des denrees et du materiel medical a prix abordable dans les situations de crise. Au commencement de l'ere d'Atlas, le groupe est devenu une mouvance spirituelle qui promeut l'idee que la Terre peut, et doit, etre reconstruite. Le groupe domine aujourd'hui les secteurs pharmaceutique, medical et hydroponique et controle plusieurs geants mediatiques, ainsi que le principal constructeur de MVD, Damona. Il est actuellement dirige par Claudia Katavsky.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":359,"name":"Conglomerats : contacts pirates","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Bo Zeya, la plus connue et la plus recherchee des figures emblematiques de la federation pirate Vox Populi, se cacherait dans des installations controlees par Eris Corp. La direction du conglomerat n'a devoile aucune information pouvant mener a son interpellation. La traque de Bo a ete copieusement mediatisee par les filiales de presse d'Eris, qui en ont fait un veritable sujet d'interet public. Malgre son soutien apparent en faveur de Bo, le conglomerat emploie des methodes brutales contre les pirates dans ses secteurs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":360,"name":"Conglomerats : Stellar Engineering","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Stellar Engineering etait le conglomerat le plus important de l'ere de la Voie lactee. Apres s'etre etablie dans toutes les colonies des Planetes-Unies sous le nom de Meitner & Karls, l'organisation a connu une croissance considerable pendant la guerre. La plupart de ses brevets, dont celui des modules de vaisseaux dependants (MVD), ont ete rendus publics a cette periode afin de diversifier les fournisseurs de l'armee. Par la suite, Stellar a malgre tout reussi a absorber ses principaux concurrents, AEgir et Luo Ri. Stellar domine egalement les secteurs des transports et de l'informatique. Le groupe est actuellement dirige par Jin Yichen.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":361,"name":"Conglomerats : crimes de guerre","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Le groupe Ninmah a vu le jour en tant que structure humanitaire pendant la Guerre des tripodes. Il s'est bati une reputation grace a sa capacite a produire a une cadence record des denrees et des medicaments a l'efficacite miraculeuse. En realite, les experiences de Ninmah ont ete la cause, directe ou non, de la chute de trois des huit colonies humaines de la Voie lactee. Dans les trois cas, Ninmah a reussi a dissimuler sa responsabilite suffisamment longtemps pour que les premieres affaires judiciaires n'eclatent que peu de temps avant l'exode vers Atlas, alors que les institutions etaient en deliquescence.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":362,"name":"Conglomerats","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Les conglomerats sont des societes qui multiplient les filiales dans differentes industries. Pour etre reconnue comme conglomerat par la Republique, une societe doit detenir une part de marche d'au moins 20 % dans trois secteurs distincts ou plus. En dehors de la Compagnie, quatre entites seulement sont actuellement considerees comme des conglomerats : l'UBI, Stellar Engineering, le groupe Ninmah et Eris Corp.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":363,"name":"Outil de construction 2.0","category_id":54,"price":88.0,"no_price":0,"weight":0.1,"duration":3.0,"description":"Cet outil ameliore inclut la fonctionnalite « deconstruction de matiere », qui permet d'inverser un procede de construction acheve en causant des degats minimes aux composants utilises.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":364,"name":"Outil de construction 3.0","category_id":54,"price":478.0,"no_price":0,"weight":0.1,"duration":3.0,"description":"Cet outil ameliore inclut la fonctionnalite « integrite continue », qui permet de deplacer un batiment au sein d'une base sans le demanteler au prealable.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":365,"name":"Outil de construction","category_id":54,"price":13.7,"no_price":0,"weight":0.1,"duration":3.0,"description":"La « synthese de plan » libere un nuage de nanorobots capables de reconnaitre, decouper et assembler des materiaux selon un modele predefini. Pour resumer, elle permet de construire des objets.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":366,"name":"Laser de refroidissement","category_id":40,"price":162.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce flux de gaz liquefie a haute pression offre une alternative aux rayons laser : il a l'effet oppose sur la temperature de la cible. Les deux lasers peuvent etre utilises ensemble.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":367,"name":"Centre de commandement de corpo","category_id":42,"price":306000.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Toute corporation legale digne de ce nom a besoin d'un endroit ou centraliser ses operations. Ce batiment augmente la taille maximale d'une base de la corporation et contient des machines de fabrication, une salle de conference et un vaste espace personnalisable.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":368,"name":"Batterie rudimentaire","category_id":30,"price":65.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"This module can store chemical energy and readily convert it to electric current to power other RSMs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":369,"name":"Detecteur de ressources rudimentaire","category_id":34,"price":50.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Ce radar emet des ondes electromagnetiques et interprete leur refraction pour detecter et identifier les objets metalliques dans un large perimetre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":370,"name":"Diamant","category_id":36,"price":400.0,"no_price":0,"weight":0.5,"duration":720.0,"description":"Une forme cristalline du carbone pur. Il reste le materiau le plus dur et le meilleur conducteur thermique jamais observe.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":371,"name":"Hologramme de plongee","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":372,"name":"Sporule onirique","category_id":38,"price":5.5,"no_price":0,"weight":0.1,"duration":0.0,"description":"La consommation de ce fruit est fortement decouragee. Effets secondaires possibles : hallucinations, paranoia aigue, mort subite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":373,"name":"Gemme moyenne","category_id":19,"price":10.0,"no_price":0,"weight":0.1,"duration":0.0,"description":"Les gemmes peuvent presenter differents aspects, compositions et proprietes. Leur point commun est leur attrait esthetique qui les rend precieuses aux yeux des humains.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":374,"name":"Outil agricole","category_id":54,"price":85.0,"no_price":0,"weight":0.1,"duration":3.0,"description":"Faire tremper une graine sale peut sembler une tache banale, mais cet outil sublime l'art de mettre un germe de xenoplante a l'endroit ideal pour assurer sa croissance.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":375,"name":"Modificateur SL : cieux cartographies I","category_id":33,"price":29.4,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":376,"name":"Modificateur SL : cieux cartographies II","category_id":33,"price":296.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":377,"name":"Modificateur SL : cieux cartographies III","category_id":33,"price":4260.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":378,"name":"Modificateur SL : exploration des confins I","category_id":33,"price":349.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":379,"name":"Modificateur SL : exploration des confins II","category_id":33,"price":3620.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":380,"name":"Modificateur SL : esquive eclair I","category_id":33,"price":26.6,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":381,"name":"Modificateur SL : esquive eclair II","category_id":33,"price":282.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":382,"name":"Modificateur SL : esquive eclair III","category_id":33,"price":4220.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":383,"name":"Modificateur SL : mag-plasma I","category_id":33,"price":31.7,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":384,"name":"Modificateur SL : mag-plasma II","category_id":33,"price":354.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":385,"name":"Modificateur SL : mag-plasma III","category_id":33,"price":4780.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":386,"name":"Centrale a fusion","category_id":45,"price":2120.0,"no_price":0,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":387,"name":"Modificateur de generateur : alimentation I","category_id":33,"price":25.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":388,"name":"Modificateur de generateur : alimentation II","category_id":33,"price":248.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":389,"name":"Modificateur de generateur : alimentation III","category_id":33,"price":2570.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":390,"name":"Laser geant","category_id":40,"price":null,"no_price":1,"weight":50.0,"duration":0.0,"description":"This optical module amplifies light to an intensity that can vaporise many materials. It is currently the most precise way to cut through things.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":391,"name":"Globule luisant","category_id":38,"price":null,"no_price":1,"weight":0.1,"duration":0.0,"description":"Ce fruit brillant degage une douce chaleur, signe d'une radioactivite latente.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":392,"name":"Gravitron","category_id":34,"price":790.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Ce detecteur specialise permet de localiser la gravite avec precision. Il est tres different des autres detecteurs, qui permettent de localiser a peu pres tout, sauf la gravite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":393,"name":"Tourelle","category_id":20,"price":null,"no_price":1,"weight":10.0,"duration":0.0,"description":"Projectile weapons are still used extensively by the Universal Defense Corps, which developed an array of standards for cartridge calibers.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":394,"name":"Phare","category_id":21,"price":13.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"A good light, used to open a path of vision in the darkness.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":395,"name":"Condensateur thermique","category_id":45,"price":2120.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"reduce temperature around the base. Produce power based on current temperature","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":396,"name":"Condensateur thermique","category_id":49,"price":1390.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Turn heat into power slowly and increase heat capacity alot","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":397,"name":"Puce antichaleur","category_id":53,"price":99.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Cet accessoire augmente la capacite isolante d'une combinaison face aux temperatures elevees. Plusieurs puces peuvent etre appliquees a la fois pour accroitre leur efficacite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":398,"name":"Bouclier lourd","category_id":28,"price":1510.0,"no_price":0,"weight":25.0,"duration":12.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":399,"name":"Helium","category_id":58,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":400,"name":"Gros rebuts electroniques","category_id":56,"price":8.1,"no_price":0,"weight":5.0,"duration":0.0,"description":"Les rebuts electroniques sont des appareils trop endommages pour etre repares. Il est possible de les demanteler pour en extraire des pieces en cuivre ou en silicium.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":401,"name":"Bouclier hyperreactif","category_id":28,"price":17400.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"Using a pair of Tesla coils, this module generates a bubble of charged plasma that can protect a spaceship from radiation and particles.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":402,"name":"Decombres industriels","category_id":56,"price":5.3,"no_price":0,"weight":5.0,"duration":0.0,"description":"Les decombres sont le resultat composite du desassemblage industriel. Ils sont composes de differents debris metalliques.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":403,"name":"Debris de fer","category_id":56,"price":4.34,"no_price":0,"weight":5.0,"duration":0.0,"description":"Scraps are the result of industrial disassembly. They cannot be reused without extensive processing at a [B_RecyclingPlant].","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":404,"name":"Projecteur de bouclier cinetique","category_id":48,"price":1390.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Generate shield for all ships in the group at relatively close proximity.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":405,"name":"Grand bouclier barriere","category_id":28,"price":17500.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"This plasma shield module has enough charge to protect a spaceship from light man-made weapons, but takes longer to load than regular shields.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":406,"name":"Grand generateur electrique","category_id":29,"price":null,"no_price":1,"weight":25.0,"duration":0.0,"description":"This module consumes carbon-based fuel to produce electric current to power other RSMs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":407,"name":"Grand bouclier lourd","category_id":28,"price":18000.0,"no_price":0,"weight":50.0,"duration":24.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":408,"name":"Grand reservoir de liquide","category_id":23,"price":23000.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"This storage module is suitable for liquid or semi-fluid materials. Its MACS connections allow it to supply other RSMs if it contains fuel or cooling fluid.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":409,"name":"Grand reservoir sous pression","category_id":23,"price":null,"no_price":1,"weight":10.0,"duration":0.0,"description":"This storage module is suitable for liquid gas requiring extreme pressurization. Its MACS connections allow it to supply other RSMs if it contains fuel or cooling fluid.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":410,"name":"Grand panneau solaire","category_id":24,"price":15600.0,"no_price":0,"weight":50.0,"duration":24.0,"description":"This module converts electromagnetic radiation into electric current to power other RSMs.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":411,"name":"Modificateur de laser : production accrue I","category_id":33,"price":28.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":412,"name":"Modificateur de laser : production accrue II","category_id":33,"price":266.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":413,"name":"Modificateur de laser : production accrue III","category_id":33,"price":3420.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":414,"name":"Modificateur de laser : rendement bonus I","category_id":33,"price":336.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":415,"name":"Modificateur de laser : puissance d'extraction I","category_id":33,"price":27.3,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":416,"name":"Modificateur de laser : puissance d'extraction II","category_id":33,"price":311.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":417,"name":"Modificateur de laser : puissance d'extraction III","category_id":33,"price":3230.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":418,"name":"Modificateur de laser : palier d'extraction I","category_id":33,"price":334.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":419,"name":"Modificateur de laser : palier d'extraction II","category_id":33,"price":3470.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":420,"name":"Modificateur de laser : trouvaille rare I","category_id":33,"price":23.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":421,"name":"Modificateur de laser : trouvaille rare II","category_id":33,"price":238.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":422,"name":"Modificateur de laser : trouvaille rare III","category_id":33,"price":3730.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":423,"name":"Levinium 4x3x1","category_id":12,"price":null,"no_price":1,"weight":20.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":424,"name":"Levinium 6x3x1","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":425,"name":"Levinium 8x3x1","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":426,"name":"Neon","category_id":21,"price":13.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"A good light, used to open a path of vision in the darkness.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":427,"name":"« Accelerateur Long cours »","category_id":14,"price":11200.0,"no_price":0,"weight":1.0,"duration":240.0,"description":"This electric propulsion device can provide thrust and lift to a spaceship without requiring any combustion or non-renewable fuel.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":428,"name":"Cockpit « Intercepteur » LR","category_id":13,"price":840.0,"no_price":0,"weight":20.0,"duration":45.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":429,"name":"Pont « Maraudeur » LR","category_id":13,"price":14800.0,"no_price":0,"weight":1.0,"duration":120.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":430,"name":"Cockpit « Raptor » LR","category_id":13,"price":14800.0,"no_price":0,"weight":50.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":431,"name":"« Fonceur » LR","category_id":55,"price":115.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Le module de moteur auxiliaire d'entree de gamme de Luo Ri. Il offre un avantage de vitesse non negligeable aux pilotes au budget limite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":432,"name":"Pont « Contremaitre » M&K","category_id":13,"price":14800.0,"no_price":0,"weight":1.0,"duration":120.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":433,"name":"Generateur de bouclier magnetocinetique","category_id":28,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Shield that negate 30% of damage received and turn it into power for the ship. If there are no batteries to hold that power, the excedent power gain is turned back into damage that affect directly the hull.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":434,"name":"Gemme merveilleuse","category_id":19,"price":100.0,"no_price":0,"weight":0.1,"duration":0.0,"description":"Gemstones can have different compositions, aspects and properties. Their common trait is an aesthetic appeal that makes them valuable to humans.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":435,"name":"Reservoir de liquide moyen","category_id":23,"price":1880.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"This storage module is suitable for liquid or semi-fluid materials. Its MACS connections allow it to supply other RSMs if it contains fuel or cooling fluid.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":436,"name":"Reservoir sous pression moyen","category_id":23,"price":null,"no_price":1,"weight":10.0,"duration":0.0,"description":"This storage module is suitable for liquid gas requiring extreme pressurization. Its MACS connections allow it to supply other RSMs if it contains fuel or cooling fluid.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":437,"name":"Radiateur moyen","category_id":25,"price":1250.0,"no_price":0,"weight":25.0,"duration":12.0,"description":"This module can release large quantities of thermal energy. It is mostly used to cool off a spaceship's interior by dispersing its heat into space.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":438,"name":"Module de controle du laser d'extraction","category_id":31,"price":44.5,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce petit composant informatique renforce le controle du laser d'extraction. Appuyez sur [key.Mine] pour activer ou desactiver la competence d'extraction.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":439,"name":"Modificateur de module : efficacite du carburant I","category_id":33,"price":24.8,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":440,"name":"Modificateur de module : efficacite du carburant II","category_id":33,"price":103.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":441,"name":"Modificateur de module : efficacite du carburant III","category_id":33,"price":1070.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":442,"name":"Modificateur de module : absorption de chaleur I","category_id":33,"price":24.1,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":443,"name":"Modificateur de module : absorption de chaleur II","category_id":33,"price":237.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":444,"name":"Modificateur de module : absorption de chaleur III","category_id":33,"price":2460.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":445,"name":"Modificateur de module : efficacite energetique I","category_id":33,"price":26.1,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":446,"name":"Modificateur de module : efficacite energetique II","category_id":33,"price":256.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":447,"name":"Modificateur de module : efficacite energetique III","category_id":33,"price":2660.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":448,"name":"Modificateur de module : systeme I","category_id":33,"price":25.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":449,"name":"Modificateur de module : systeme II","category_id":33,"price":247.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":450,"name":"Modificateur de module : systeme III","category_id":33,"price":2560.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":451,"name":"Intelligence non humaine","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":452,"name":"Laser geant surcadence","category_id":40,"price":null,"no_price":1,"weight":50.0,"duration":0.0,"description":"This optical module amplifies light to an intensity that can vaporise many materials. It is currently the most precise way to cut through things.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":453,"name":"Laser d'extraction surcandence","category_id":40,"price":212.0,"no_price":0,"weight":10.0,"duration":15.0,"description":"This optical module amplifies light to an intensity that can vaporise many materials. It is currently the most precise way to cut through things.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":454,"name":"Batterie paradoxale","category_id":30,"price":62.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"A Battery that load fully when jumping in FTL (and cannot reload in any other way). Is consumed before any other battery.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":455,"name":"Factions pirates : l'Alliance verte","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Bien qu'elle ne soit pas consideree comme une organisation pirate, l'Alliance verte se fait de plus en plus active au sein des secteurs pirates depuis que plusieurs de ses membres, dont la lanceuse d'alerte Jeongwol, sont devenus des fugitifs. Sa presence au senat de la Republique, bien que minime, fait regulierement l'objet de controverses, en particulier en raison des associations frequentes de l'Alliance avec Vox Populi.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":456,"name":"Factions pirates : l'ACI","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"L'Agence de communication interespece etait un laboratoire public fonde par Lauren Amaechi afin d'etudier les tripodes et leurs capacites d'autoreplication, ainsi que l'espece non-humaine a l'origine de leur creation. Privee de financements par la Republique, elle poursuit ses activites en dehors du cadre legal, ce qui a peu a peu mene a sa criminalisation.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":457,"name":"Factions pirates : encombrantes verites","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Fondee a l'origine par le Contingent de Defense Universelle de la Republique, 'l'Agence de communication interespece a vu ses financements degringoler apres la decouverte de mines abandonnees dans la galaxie Atlas. Dans les annees qui ont suivi, le laboratoire a ete declare hors-la-loi pour des raisons inconnues. Beaucoup de ses chercheurs ont trouve refuge a bord de stations pirates. L'agence poursuit desormais ses operations en tant qu'institution pirate.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":458,"name":"Factions pirates : station perdue","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La station pirate Clousden a ete detruite lors d'un conflit entre deux factions qui s'en disputaient le controle. Le premier groupe, associe a Vox Populi, avait fourni la majeure partie des ressources necessaires a la construction de la station. Le second, lie a Rallize, representait a l'origine la majorite de ses habitants. Afin d'elargir son influence, Vox Populi a encourage des travailleurs venus d'autres stations a s'y installer, causant sa surpopulation, ce qui lui a toutefois permis de securiser la majorite des votes. Le conflit s'est conclu par le bombardement de la station par Rallize.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":459,"name":"Factions pirates : le schisme originel","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Rallize a ete le premier groupe pirate d'Atlas. Une fois la construction de sa premiere station spatiale achevee, l'organisation a commence a dedier une grande partie de ses capacites industrielles a l'armement. Ses ambitions sur le long terme, initialement limitees a sa simple survie, se sont etendues a l'obliteration totale de la Republique. Dans le meme temps, Vox Populi s'est imposee en tant que branche reformiste et pacifiste de la resistance pirate. Ce groupe s'efforce depuis de reconcilier les interets des pirates et leur integration aux institutions de la Republique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":460,"name":"Factions pirates : la premiere mutinerie","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Les premiers groupes pirates ont emerge lors de soulevements dans les mines de la Compagnie, apres le report indefini et injustifie de la liberation de prisonniers condamnes aux travaux forces. Ces derniers ont alors pris le controle de plusieurs mines et extrait assez de ressources pour batir leurs propres stations spatiales. Ils ont par la suite demantele les anciennes installations, dont ils recyclent encore les composants aujourd'hui. Ces evenements ont pousse la Compagnie a cesser la construction de mines d'envergure et a s'en remettre a des auxiliaires isoles.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":461,"name":"Factions pirates : Rallize","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Rallize est un groupe revolutionnaire arme dont l'objectif principal est de destabiliser l'ordre mercantile des conglomerats et de la Republique. Ses methodes de lutte incluent vol, enlevements, sabotage et affrontements directs avec le Contingent de Defense Universelle. Dans les medias, le terme « pirates » fait souvent reference a Rallize, et seules les actions les plus violentes du groupe sont documentees. Toutefois, ce dernier se consacre egalement a de nombreuses activites d'assistance sociale et de protection au sein des secteurs pirates.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":462,"name":"Factions pirates : Vox Populi","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Vox Populi est une federation politique qui reunit plusieurs stations spatiales pirates. Elle est en grande partie organisee selon un modele communiste. Contrairement aux stations controlees par les conglomerats, les stations pirates sont assemblees graduellement, et ses occupants peuvent y ajouter leurs propres modules. Depuis que Vox Populi a ete categorisee comme organisation terroriste par la Republique, Bo Zeya, son principal representant, est devenu un fugitif.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":463,"name":"Factions pirates","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Les factions pirates sont nombreuses, diverses et decentralisees. Aux yeux de la loi, elles incluent tous les individus et activites non reconnus par la Republique ou non affilies a l'un des conglomerats approuves. Les interets de ces soi-disant factions pirates ne se rejoignent pas toujours, mais differents groupes collaborent regulierement pour constituer des reseaux commerciaux alternatifs, echanger des informations ou etablir des stations spatiales pirates.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":464,"name":"Hologramme pirate","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":465,"name":"Hologramme de planete","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":466,"name":"Platinium 12x6x4","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":467,"name":"Platinium 16x6x4","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":468,"name":"Platinium 4x3x2","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":469,"name":"Platinium 6x3x2","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":470,"name":"Platinium 8x3x2","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":471,"name":"Platinium 8x6x4","category_id":12,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":472,"name":"Pepite de platine","category_id":16,"price":3.2,"no_price":0,"weight":1.0,"duration":0.0,"description":"A noble metal of especially high value. Its remarkable resistance to corrosion makes it a prized industrial component.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":473,"name":"Eau polluee","category_id":10,"price":0.2,"no_price":0,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":474,"name":"Tuyau resistant a la pression","category_id":3,"price":12.9,"no_price":0,"weight":1.0,"duration":6.0,"description":"A simple device to move fluids between two points.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":475,"name":"Puce antiradiation","category_id":53,"price":23.1,"no_price":0,"weight":1.0,"duration":3.0,"description":"Cet accessoire augmente la capacite isolante d'une combinaison face aux radiations. Plusieurs puces peuvent etre appliquees a la fois pour accroitre leur efficacite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":476,"name":"Modificateur de radar : portee I","category_id":33,"price":22.9,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":477,"name":"Modificateur de radar : portee II","category_id":33,"price":221.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":478,"name":"Modificateur de radar : portee III","category_id":33,"price":3240.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":479,"name":"Radon","category_id":58,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce gaz radioactif dangereux ne doit pas etre manipule sans equipement adequat.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":480,"name":"Cockpit « Realite »","category_id":13,"price":null,"no_price":1,"weight":50.0,"duration":0.0,"description":"I don't know the effect, nor the name of this one","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":481,"name":"Noix de lithobois","category_id":38,"price":null,"no_price":1,"weight":0.1,"duration":0.0,"description":"Le lithobois combine des composes mineraux et organiques de facon inhabituelle. Il peut produire des structures minerales complexes que l'on trouve rarement ailleurs dans la nature.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":482,"name":"Ecorce rugueuse","category_id":3,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Cette ecorce sombre et rugueuse vient d'un environnement radioactif, mais elle ne semble pas avoir ete affectee.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":483,"name":"Hologramme sakura","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":484,"name":"Missile autoguide","category_id":6,"price":7.3,"no_price":0,"weight":0.1,"duration":3.0,"description":"Avant l'exode, les explosifs chimiques simples etaient des armes repandues. Il existe des options plus destructrices, mais aucune n'est aussi simple a produire et bon marche.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":485,"name":"Modificateur de bouclier : rapidite I","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":486,"name":"Modificateur de bouclier : rapidite II","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":487,"name":"Modificateur de bouclier : rapidite III","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":488,"name":"Modificateur de bouclier : lourd I","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":489,"name":"Modificateur de bouclier : lourd II","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":490,"name":"Modificateur de bouclier : lourd III","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":491,"name":"Modificateur de bouclier : robustesse I","category_id":33,"price":31.9,"no_price":0,"weight":1.0,"duration":3.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":492,"name":"Modificateur de bouclier : robustesse II","category_id":33,"price":356.0,"no_price":0,"weight":1.0,"duration":6.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":493,"name":"Modificateur de bouclier : robustesse III","category_id":33,"price":4560.0,"no_price":0,"weight":1.0,"duration":30.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":494,"name":"« Propulseur silencieux »","category_id":14,"price":7400.0,"no_price":0,"weight":1.0,"duration":180.0,"description":"This electric propulsion device can provide thrust and lift to a spaceship without requiring any combustion or non-renewable fuel.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":495,"name":"Lingot d'argent","category_id":8,"price":20.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Le metal le plus reflechissant et le plus conducteur. On le trouve a l'etat pur dans la nature, et il est utilise dans de nombreux aspects de l'industrie et de l'art humains depuis des millenaires.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":496,"name":"Pepite d'argent","category_id":16,"price":4.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"The most conductive and reflective of all metals. It can be found in its pure form naturally, and has been used in numerous aspects of human industry and art for millennia.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":497,"name":"Petit carter de piece en alliage X","category_id":2,"price":null,"no_price":1,"weight":10.0,"duration":12.0,"description":"A modular hull encasing a ship or an RSM. In addition to limiting friction in atmospheric spaces, the casing provides protection against electromagnetic radiation.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":498,"name":"Petit bouclier barriere","category_id":28,"price":285.0,"no_price":0,"weight":10.0,"duration":12.0,"description":"Ce module de bouclier plasma est assez puissant pour proteger un vaisseau des armes de fabrication humaine legeres, mais son chargement est plus long que celui des boucliers ordinaires.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":499,"name":"Petite tourelle","category_id":20,"price":100.0,"no_price":0,"weight":10.0,"duration":0.0,"description":"Projectile weapons are still used extensively by the Universal Defense Corps, which developed an array of standards for cartridge calibers.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":500,"name":"Petit reservoir sous pression","category_id":23,"price":620.0,"no_price":0,"weight":10.0,"duration":37.5,"description":"Ce module de stockage convient aux gaz liquides qui necessitent une mise sous pression extreme. Ses raccordements SCAM lui permettent d'alimenter d'autres MVD s'il contient du carburant ou du liquide de refroidissement.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":501,"name":"Hologramme de serpent","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":502,"name":"Pulpe aigre","category_id":3,"price":12.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Cette pulpe a deja tourne et pourrait representer une source de composes fermentes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":503,"name":"Spot lumineux","category_id":21,"price":13.2,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un bon eclairage qui permet d'illuminer les tenebres.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":504,"name":"Fondations autonomes","category_id":41,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":null,"created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":505,"name":"Macroprojecteur furtif","category_id":48,"price":62.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Tool that makes it more difficult to detect the ship (both for PC and NPC) and friendly ships around (Consume Antimatter Core)","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":506,"name":"Microprojecteur furtif","category_id":48,"price":62.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Tool that makes it more difficult to detect the ship (both for PC and NPC) (Consume Antimatter Core)","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":507,"name":"Debris d'acier","category_id":56,"price":7.8,"no_price":0,"weight":5.0,"duration":0.0,"description":"Ces rebuts sont le resultat d'un desassemblage industriel. Il n'est pas possible de les reemployer sans les transformer dans une [B_RecyclingPlant] au prealable.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":508,"name":"La Compagnie : surveillance des affilies","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"L'agence de renseignements Ophanim, filiale du conglomerat bancaire UBI, a ete mandatee par la Compagnie pour fournir des rapports de surveillance sur tous ses auxiliaires. Les informations qu'ils contiennent sont utilisees par la Compagnie pour evaluer la loyaute de ses auxiliaires. Le score de loyaute des auxiliaires est tenu secret et determine les prix qu'ils se voient proposer par les agents speculateurs. Il peut aussi mener a la rupture de leur contrat ou a leur arrestation immediate, en cas d'interaction avec des pirates.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":509,"name":"La Compagnie : penuries artificielles","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La Compagnie cree des penuries artificielles de ressources cles afin d'accroitre artificiellement leur valeur marchande, tout en les achetant a bas cout a ses auxiliaires. Au moins 167 accidents mortels auraient ete causes apres que des entreprises ou sous-traitants ont ete contraints de remplacer des pieces de vaisseaux essentielles par des alternatives bon marche au cours de telles penuries. On estime que 19 petites entreprises ont ete poussees mettre a la cle sous la porte apres que la Compagnie a intentionnellement accumule des materiaux qui leur etaient indispensables.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":510,"name":"La Compagnie : le signal","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Apres que l'incident H-378 a mis fin a tout espoir de victoire humaine dans la Guerre des tripodes, les ingenieurs en communication de la Compagnie ont dechiffre le signal qui menerait a la decouverte de la galaxie Atlas. Par la suite, l'exode de la plupart des citoyens humains survivants vers Atlas a permis a la Compagnie de faire table rase du passe, sans aucune institution pour contrer son monopole. Elle a donc joue un role central dans le modelage de la nouvelle societe humaine de l'ere d'Atlas.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":511,"name":"La Compagnie : operations de vol","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Ne disposant pas du budget necessaire pour defendre ses secteurs habites des attaques pirates, la Republique a passe un accord officieux avec la Compagnie, qui est ainsi autorisee a mener ses propres operations militaires sous la banniere du Contingent de Defense Universelle (CDU). Cet accord stipule que la Compagnie peut revendiquer les marchandises et epaves des vaisseaux pirates abattus, sans obligation de prouver que la cible etait bien affiliee aux factions criminelles.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":512,"name":"La Compagnie : la Guerre des tripodes","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La Compagnie, fondee alors que l'humanite habitait encore la Voie lactee, etait a l'origine une agence contractuelle de services publics. Elle a gagne en importance au cours de la Guerre des tripodes, quand la Federation des Planetes-Unies, peinant de plus en plus a maintenir son emprise sur les territoires menaces, a commence a s'appuyer davantage sur ses contractuels prives. A la fin du conflit, la Compagnie avait etendu son controle a la plupart des services essentiels des huit colonies humaines.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":513,"name":"La Compagnie","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La plupart des stations spatiales de la galaxie Atlas ont ete construites et sont administrees par la Compagnie. Suite au rachat de son concurrent, United Industries, son programme d'affiliation des auxiliaires lui a permis de s'assurer le quasi-monopole de l'extraction et de la transformation des ressources naturelles. Elle maintient des partenariats a long terme avec la Republique, ainsi qu'avec les autres conglomerats. Elle est actuellement dirigee par Martin J. Miller.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":514,"name":"La Republique : revolution avortee","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Dans les premieres heures de la Republique, une coalition de lanceurs d'alerte et d'anciens legislateurs des Planetes-Unies ont vote en faveur du suffrage universel, de l'interdiction du lobbying industriel, de la mise en place d'impots sur les societes et de la suppression du droit de veto des conglomerats. Les groupes mediatiques controlant la presse ont aussitot presente ce vote comme une insurrection pirate, et des milices ont pris le controle des institutions de la Republique. Les senateurs qui l'avaient organise ont disparu, avant d'etre accuses d'avoir fui a bord de vaisseaux pirates pour echapper a la justice.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":515,"name":"La Republique : travail force","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Les contrats publics de la Compagnie incluent la gestion et la maintenance de camps de travail a destination d'individus condamnes a des peines de prison longues. Avant la mise en place du programme d'affiliation des auxiliaires, la plupart de ces camps etaient des mines. Aujourd'hui, ce sont des vaisseaux a bord desquels sont assemblees les stations spatiales de la Compagnie. Aucune loi n'a ete mise en place pour encadrer les conditions de travail a bord de ces vaisseaux. Les individus incarceres avant l'incident H-378 et l'effondrement de la Federation des Planetes-Unies ont tous disparu.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":516,"name":"La Republique : cartel glorifie","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La Republique a ete faconnee par les principaux conglomerats qui lui fournissent, aujourd'hui encore, le gros de son budget. Le but de cette institution etait de proteger les interets de la galaxie Atlas, de resoudre les disputes de territoire, de reprimer les premieres rebellions pirates en evitant les scandales et de faire taire les partisans d'un retour de la democratie. Ses premiers senateurs ont ete choisis parmi les membres de la classe politique de la Federation des Planetes-Unies qui avaient prouve leur loyaute aux conglomerats et perdu la quasi-totalite de leur influence politique.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":517,"name":"La Republique : forces de l'ordre","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Si les conglomerats emploient des milices privees pour imposer leur propre loi dans leurs stations spatiales et usines, la Republique entretient une force de police, la Garde civile universelle, qui est principalement mobilisee contre les factions pirates. Elle administre egalement une petite armee, le Contingent de Defense Universelle, qui est charge de la protection du portail vers la Voie lactee, du maintien de mesures defensives dans l'eventualite d'un retour des tripodes et du developpement de technologies defensives.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":518,"name":"La Republique : repression masquee","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La Republique qualifie de « pirate » toute activite menee sans licence officielle, meme dans les cas ou l'Agence d'accreditation universelle rejette de facon repetee une demande de licence sans fournir de justification. Les licences sont souvent revoquees sans preavis, l'institution visee et ses collaborateurs etant immediatement accuses de piraterie. Parmi les victimes se trouvent des journalistes, des scientifiques, des artistes et des travailleurs sociaux. Pour survivre, elles sont contraintes de gagner les secteurs pirates et de s'associer a des entites plus radicales.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":519,"name":"La Republique : la Federation des Planetes-Unies","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"Fondee a l'aube de l'ere d'Atlas, la Republique est percue comme succedant a la Federation des Planetes-Unies, qui avait supervise le developpement des premiers reacteurs supraluminiques avant de devenir le principal corps administratif de la Voie lactee, a l'epoque de sa colonisation. L'eveil des tripodes, des machines capables d'autoreplication, a marque le debut de plusieurs decennies de conflit : la Guerre des tripodes. L'humanite a alors ete contrainte d'abandonner la Voie lactee, et la Federation des Planetes-Unies a disparu.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":520,"name":"La Republique","category_id":57,"price":null,"no_price":1,"weight":null,"duration":0.0,"description":"La Republique est une institution politique qui encadre la legislation commerciale et territoriale de la galaxie Atlas. Sa juridiction inclut la gestion des permis de travail, l'application des regles de propriete et de territoire, la lutte contre la piraterie et la mediation entre les societes privees. Son senat, actuellement dirige par Leni Lehman, se reunit a bord de la station Sumer et regroupe des representants de tous les conglomerats.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":521,"name":"Bouclier thermique","category_id":48,"price":1390.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Improve the shield of the ship, so that, as long as it is active, the ship also benefit from a protection from environmental heat and cold (reduction of the heat interface), and from heat-related weapons","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":522,"name":"Puce thermique","category_id":53,"price":21.8,"no_price":0,"weight":1.0,"duration":3.0,"description":"Cet accessoire augmente la capacite isolante d'une combinaison face aux temperatures basses et elevees. Plusieurs puces peuvent etre appliquees a la fois pour accroitre leur efficacite.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":523,"name":"Debris de titane","category_id":56,"price":6.7,"no_price":0,"weight":5.0,"duration":0.0,"description":"Scraps are the result of industrial disassembly. They cannot be reused without extensive processing at a [B_RecyclingPlant].","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":524,"name":"Hologramme transcendant","category_id":51,"price":null,"no_price":1,"weight":1.0,"duration":0.0,"description":"Ce batiment est purement decoratif, mais c'est souvent par le style que les auxiliaires d'exception se demarquent.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":525,"name":"Pepite de tungstene","category_id":16,"price":3.2,"no_price":0,"weight":1.0,"duration":0.0,"description":"A dense and hard metal with an exceptionally high melting point, tungsten is difficult to work, but its properties also make it a critical component of many alloys.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":526,"name":"Minerai de tungstene","category_id":16,"price":6.0,"no_price":0,"weight":5.0,"duration":0.0,"description":"A dense and hard metal with an exceptionally high melting point, tungsten is difficult to work, but its properties also make it a critical component of many alloys.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":527,"name":"Perle de turquoise","category_id":19,"price":5.0,"no_price":0,"weight":0.1,"duration":6.0,"description":"An opaque gemstone formed by the contact of meteoritic water and copper porphyry.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":528,"name":"Turquoise","category_id":37,"price":15.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Une pierre fine opaque formee par le contact entre de l'eau meteorique et du porphyre cuprifere.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":529,"name":"Pepite d'uranium","category_id":16,"price":1.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"Cette matiere radioactive dangereuse ne doit pas etre manipulee sans equipement adequat.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":530,"name":"Modificateur d'arme : precision I","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":531,"name":"Modificateur d'arme : precision II","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":532,"name":"Modificateur d'arme : precision III","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":533,"name":"Modificateur d'arme : tir assure I","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":534,"name":"Modificateur d'arme : tir assure II","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":535,"name":"Modificateur d'arme : tir assure III","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":536,"name":"Modificateur d'arme : tir imprevisible I","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":537,"name":"Modificateur d'arme : tir imprevisible II","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":538,"name":"Modificateur d'arme : tir imprevisible III","category_id":33,"price":10.0,"no_price":0,"weight":1.0,"duration":0.0,"description":"This enhancement can be permanently attached to a spaceship module. If the module is recycled, its attached patch has a 50% chance of being preserved.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":539,"name":"Grain laineux","category_id":38,"price":null,"no_price":1,"weight":0.1,"duration":0.0,"description":"Cette enveloppe fibreuse dure devrait contenir quelques graines d'astrengrain. Une meule est necessaire pour les en extraire.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":540,"name":"Fuselage detruit","category_id":56,"price":7.8,"no_price":0,"weight":5.0,"duration":0.0,"description":"Les fuselages detruits sont des pieces de vaisseau trop endommagees pour etre reparees. Il est possible de les demanteler pour en extraire des pieces en acier, en aluminium ou en cuivre.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":541,"name":"Lingot de zirconium","category_id":8,"price":28.0,"no_price":0,"weight":1.0,"duration":3.0,"description":"Un materiau dote d'une resistance remarquable a la corrosion et aux temperatures elevees. Il permet egalement de stocker de l'energie radioactive en limitant les pertes.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":542,"name":"Pepite de zirconium","category_id":16,"price":5.6,"no_price":0,"weight":1.0,"duration":0.0,"description":"A material remarkably resistant to corrosion and high temperatures. It is also capable of storing radioactive energy with minimal loss.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"},{"id":543,"name":"Minerai de zirconium","category_id":16,"price":10.5,"no_price":0,"weight":5.0,"duration":0.0,"description":"A material remarkably resistant to corrosion and high temperatures. It is also capable of storing radioactive energy with minimal loss.","created_at":"2026-09-21 09:58:30","updated_at":"2026-09-21 09:58:30"}],"specifications":[{"id":1,"product_id":25,"spec_key":"Apport systeme","spec_value":"240","spec_unit":"SP"},{"id":2,"product_id":25,"spec_key":"Chassis","spec_value":"36","spec_unit":null},{"id":3,"product_id":25,"spec_key":"Masse","spec_value":"30.0","spec_unit":"t"},{"id":4,"product_id":25,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":5,"product_id":25,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":6,"product_id":25,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":7,"product_id":25,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":8,"product_id":63,"spec_key":"Compatible avec","spec_value":"Generateur carbonique","spec_unit":null},{"id":9,"product_id":64,"spec_key":"Compatible avec","spec_value":"Generateur carbonique","spec_unit":null},{"id":10,"product_id":71,"spec_key":"Utilisation","spec_value":"Generateur carbonique","spec_unit":null},{"id":11,"product_id":91,"spec_key":"Stockage de solides","spec_value":"10.0","spec_unit":"su"},{"id":12,"product_id":94,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":13,"product_id":95,"spec_key":"Portee","spec_value":"300.0","spec_unit":"m"},{"id":14,"product_id":96,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":15,"product_id":96,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":16,"product_id":97,"spec_key":"Apport requis","spec_value":"400","spec_unit":"SP"},{"id":17,"product_id":97,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":18,"product_id":98,"spec_key":"Apport requis","spec_value":"800","spec_unit":"SP"},{"id":19,"product_id":98,"spec_key":"Emplacements de modificateurs","spec_value":"4","spec_unit":null},{"id":20,"product_id":98,"spec_key":"Durabilite","spec_value":"2000","spec_unit":null},{"id":21,"product_id":99,"spec_key":"Apport requis","spec_value":"250","spec_unit":"SP"},{"id":22,"product_id":99,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":23,"product_id":100,"spec_key":"Niveau d'exploration requis","spec_value":"2","spec_unit":null},{"id":24,"product_id":100,"spec_key":"Apport requis","spec_value":"300","spec_unit":"SP"},{"id":25,"product_id":100,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":26,"product_id":100,"spec_key":"Durabilite","spec_value":"1000","spec_unit":null},{"id":27,"product_id":101,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":28,"product_id":101,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":29,"product_id":102,"spec_key":"Apport requis","spec_value":"120","spec_unit":"SP"},{"id":30,"product_id":102,"spec_key":"Production d'electricite","spec_value":"40.0","spec_unit":"MA"},{"id":31,"product_id":103,"spec_key":"Apport requis","spec_value":"360","spec_unit":"SP"},{"id":32,"product_id":103,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":33,"product_id":103,"spec_key":"Production d'electricite","spec_value":"150.0","spec_unit":"MA"},{"id":34,"product_id":104,"spec_key":"Apport requis","spec_value":"300","spec_unit":"SP"},{"id":35,"product_id":104,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":36,"product_id":104,"spec_key":"Dissipation de chaleur","spec_value":"150.0","spec_unit":"MW"},{"id":37,"product_id":104,"spec_key":"Utilisation d'electricite","spec_value":"5.0","spec_unit":"MA"},{"id":38,"product_id":105,"spec_key":"Apport requis","spec_value":"150","spec_unit":"SP"},{"id":39,"product_id":105,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":40,"product_id":106,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":41,"product_id":107,"spec_key":"Niveau d'exploration requis","spec_value":"2","spec_unit":null},{"id":42,"product_id":107,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":43,"product_id":108,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":44,"product_id":108,"spec_key":"Stockage de solides","spec_value":"100.0","spec_unit":"su"},{"id":45,"product_id":109,"spec_key":"Apport requis","spec_value":"350","spec_unit":"SP"},{"id":46,"product_id":109,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":47,"product_id":109,"spec_key":"Stockage de solides","spec_value":"500.0","spec_unit":"su"},{"id":48,"product_id":110,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":49,"product_id":110,"spec_key":"Taille du reservoir","spec_value":"600.0","spec_unit":"L"},{"id":50,"product_id":111,"spec_key":"Niveau d'exploration requis","spec_value":"1","spec_unit":null},{"id":51,"product_id":111,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":52,"product_id":111,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":53,"product_id":111,"spec_key":"Stockage de mag-plasma","spec_value":"200.0","spec_unit":"L"},{"id":54,"product_id":111,"spec_key":"Classe de reacteur SL","spec_value":"1","spec_unit":null},{"id":55,"product_id":112,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":56,"product_id":112,"spec_key":"Stockage de mag-plasma","spec_value":"200.0","spec_unit":"L"},{"id":57,"product_id":113,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":58,"product_id":113,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":59,"product_id":113,"spec_key":"Stockage de mag-plasma","spec_value":"1000.0","spec_unit":"L"},{"id":60,"product_id":114,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":61,"product_id":115,"spec_key":"Apport requis","spec_value":"600","spec_unit":"SP"},{"id":62,"product_id":115,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":63,"product_id":116,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":64,"product_id":116,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":65,"product_id":117,"spec_key":"Niveau de technologie requis","spec_value":"3","spec_unit":null},{"id":66,"product_id":117,"spec_key":"Apport requis","spec_value":"400","spec_unit":"SP"},{"id":67,"product_id":117,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":68,"product_id":118,"spec_key":"Apport requis","spec_value":"300","spec_unit":"SP"},{"id":69,"product_id":118,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":70,"product_id":118,"spec_key":"Stockage energetique","spec_value":"5000","spec_unit":"MAs"},{"id":71,"product_id":118,"spec_key":"Vitesse de recharge max","spec_value":"100.0","spec_unit":"MA"},{"id":72,"product_id":118,"spec_key":"Efficacite theorique","spec_value":"70.0","spec_unit":"%"},{"id":73,"product_id":118,"spec_key":"Autodecharge","spec_value":"0.01","spec_unit":"%/s"},{"id":74,"product_id":119,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":75,"product_id":119,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":76,"product_id":119,"spec_key":"Stockage energetique","spec_value":"500","spec_unit":"MAs"},{"id":77,"product_id":119,"spec_key":"Vitesse de recharge max","spec_value":"500.0","spec_unit":"MA"},{"id":78,"product_id":119,"spec_key":"Efficacite theorique","spec_value":"100.0","spec_unit":"%"},{"id":79,"product_id":119,"spec_key":"Autodecharge","spec_value":"0.8","spec_unit":"%/s"},{"id":80,"product_id":120,"spec_key":"Apport systeme","spec_value":"200","spec_unit":"SP"},{"id":81,"product_id":120,"spec_key":"Chassis","spec_value":"48","spec_unit":null},{"id":82,"product_id":120,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":83,"product_id":120,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":84,"product_id":120,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":85,"product_id":120,"spec_key":"Stockage energetique","spec_value":"1000","spec_unit":"MAs"},{"id":86,"product_id":120,"spec_key":"Vitesse de recharge max","spec_value":"100.0","spec_unit":"MA"},{"id":87,"product_id":120,"spec_key":"Efficacite theorique","spec_value":"100.0","spec_unit":"%"},{"id":88,"product_id":120,"spec_key":"Autodecharge","spec_value":"0.0","spec_unit":"%/s"},{"id":89,"product_id":120,"spec_key":"Chances de critique SL","spec_value":"-50","spec_unit":"%"},{"id":90,"product_id":121,"spec_key":"Apport systeme","spec_value":"200","spec_unit":"SP"},{"id":91,"product_id":121,"spec_key":"Chassis","spec_value":"20","spec_unit":null},{"id":92,"product_id":121,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":93,"product_id":121,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":94,"product_id":121,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":95,"product_id":122,"spec_key":"Apport systeme","spec_value":"100","spec_unit":"SP"},{"id":96,"product_id":122,"spec_key":"Chassis","spec_value":"48","spec_unit":null},{"id":97,"product_id":122,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":98,"product_id":122,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":99,"product_id":122,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":100,"product_id":122,"spec_key":"Stockage de solides","spec_value":"300.0","spec_unit":"su"},{"id":101,"product_id":122,"spec_key":"Degats de collision du fuselage","spec_value":"-40","spec_unit":"%"},{"id":102,"product_id":123,"spec_key":"Apport systeme","spec_value":"200","spec_unit":"SP"},{"id":103,"product_id":123,"spec_key":"Chassis","spec_value":"48","spec_unit":null},{"id":104,"product_id":123,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":105,"product_id":123,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":106,"product_id":123,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":107,"product_id":123,"spec_key":"Dissipation de chaleur","spec_value":"300.0","spec_unit":"MW"},{"id":108,"product_id":123,"spec_key":"Generation de chaleur","spec_value":"4000.0","spec_unit":"MW"},{"id":109,"product_id":124,"spec_key":"Apport requis","spec_value":"300","spec_unit":"SP"},{"id":110,"product_id":124,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":111,"product_id":124,"spec_key":"Puissance","spec_value":"300.0","spec_unit":"t"},{"id":112,"product_id":124,"spec_key":"Propulsion","spec_value":"50.0","spec_unit":"np/s"},{"id":113,"product_id":124,"spec_key":"Consommation d'electricite","spec_value":"35.0","spec_unit":"MA"},{"id":114,"product_id":124,"spec_key":"Force directrice","spec_value":"8.0","spec_unit":null},{"id":115,"product_id":124,"spec_key":"Propulsion supplementaire","spec_value":"100.0","spec_unit":null},{"id":116,"product_id":124,"spec_key":"Consommation electrique des accelerateurs","spec_value":"100.0","spec_unit":"MA"},{"id":117,"product_id":124,"spec_key":"Generation de chaleur des accelerateurs","spec_value":"1000.0","spec_unit":"MW"},{"id":118,"product_id":125,"spec_key":"Apport requis","spec_value":"1000","spec_unit":"SP"},{"id":119,"product_id":125,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":120,"product_id":125,"spec_key":"Puissance","spec_value":"700.0","spec_unit":"t"},{"id":121,"product_id":125,"spec_key":"Propulsion","spec_value":"60.0","spec_unit":"np/s"},{"id":122,"product_id":125,"spec_key":"Consommation d'electricite","spec_value":"15.0","spec_unit":"MA"},{"id":123,"product_id":125,"spec_key":"Force directrice","spec_value":"15.0","spec_unit":null},{"id":124,"product_id":125,"spec_key":"Consommation d'electricite nocturne","spec_value":"-60","spec_unit":"%"},{"id":125,"product_id":126,"spec_key":"Apport requis","spec_value":"600","spec_unit":"SP"},{"id":126,"product_id":126,"spec_key":"Conductibilite thermique de materiau","spec_value":"120.0","spec_unit":"W/aK"},{"id":127,"product_id":126,"spec_key":"Puissance","spec_value":"600.0","spec_unit":"t"},{"id":128,"product_id":126,"spec_key":"Propulsion","spec_value":"100.0","spec_unit":"np/s"},{"id":129,"product_id":126,"spec_key":"Consommation d'electricite","spec_value":"80.0","spec_unit":"MA"},{"id":130,"product_id":126,"spec_key":"Force directrice","spec_value":"15.0","spec_unit":null},{"id":131,"product_id":126,"spec_key":"Propulsion supplementaire","spec_value":"150.0","spec_unit":null},{"id":132,"product_id":126,"spec_key":"Consommation electrique des accelerateurs","spec_value":"150.0","spec_unit":"MA"},{"id":133,"product_id":126,"spec_key":"Dissipation de chaleur des reacteurs","spec_value":"50.0","spec_unit":"Ws/p"},{"id":134,"product_id":127,"spec_key":"Apport requis","spec_value":"450","spec_unit":"SP"},{"id":135,"product_id":127,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":136,"product_id":127,"spec_key":"Puissance","spec_value":"600.0","spec_unit":"t"},{"id":137,"product_id":127,"spec_key":"Propulsion","spec_value":"50.0","spec_unit":"np/s"},{"id":138,"product_id":127,"spec_key":"Consommation d'electricite","spec_value":"70.0","spec_unit":"MA"},{"id":139,"product_id":127,"spec_key":"Force directrice","spec_value":"20.0","spec_unit":null},{"id":140,"product_id":127,"spec_key":"Propulsion supplementaire","spec_value":"80.0","spec_unit":null},{"id":141,"product_id":127,"spec_key":"Consommation electrique des accelerateurs","spec_value":"80.0","spec_unit":"MA"},{"id":142,"product_id":127,"spec_key":"Generation de chaleur des accelerateurs","spec_value":"800.0","spec_unit":"MW"},{"id":143,"product_id":127,"spec_key":"Bonus de vitesse au decollage","spec_value":"+120","spec_unit":"%"},{"id":144,"product_id":128,"spec_key":"Apport systeme","spec_value":"96","spec_unit":"SP"},{"id":145,"product_id":128,"spec_key":"Chassis","spec_value":"40","spec_unit":null},{"id":146,"product_id":128,"spec_key":"Masse","spec_value":"20.0","spec_unit":"t"},{"id":147,"product_id":128,"spec_key":"Fuselage","spec_value":"10","spec_unit":null},{"id":148,"product_id":128,"spec_key":"Capacite thermique","spec_value":"20","spec_unit":"MJ/K"},{"id":149,"product_id":128,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":150,"product_id":128,"spec_key":"Capacite de decoration","spec_value":"4.0","spec_unit":"DP"},{"id":151,"product_id":129,"spec_key":"Apport systeme","spec_value":"144","spec_unit":"SP"},{"id":152,"product_id":129,"spec_key":"Chassis","spec_value":"60","spec_unit":null},{"id":153,"product_id":129,"spec_key":"Masse","spec_value":"30.0","spec_unit":"t"},{"id":154,"product_id":129,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":155,"product_id":129,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":156,"product_id":129,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":157,"product_id":129,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":158,"product_id":130,"spec_key":"Apport systeme","spec_value":"192","spec_unit":"SP"},{"id":159,"product_id":130,"spec_key":"Chassis","spec_value":"80","spec_unit":null},{"id":160,"product_id":130,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":161,"product_id":130,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":162,"product_id":130,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":163,"product_id":130,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":164,"product_id":130,"spec_key":"Capacite de decoration","spec_value":"8.0","spec_unit":"DP"},{"id":165,"product_id":131,"spec_key":"Apport systeme","spec_value":"360","spec_unit":"SP"},{"id":166,"product_id":131,"spec_key":"Chassis","spec_value":"54","spec_unit":null},{"id":167,"product_id":131,"spec_key":"Masse","spec_value":"45.0","spec_unit":"t"},{"id":168,"product_id":131,"spec_key":"Fuselage","spec_value":"22","spec_unit":null},{"id":169,"product_id":131,"spec_key":"Capacite thermique","spec_value":"45","spec_unit":"MJ/K"},{"id":170,"product_id":131,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":171,"product_id":131,"spec_key":"Capacite de decoration","spec_value":"9.0","spec_unit":"DP"},{"id":172,"product_id":132,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":173,"product_id":132,"spec_key":"Chassis","spec_value":"72","spec_unit":null},{"id":174,"product_id":132,"spec_key":"Masse","spec_value":"60.0","spec_unit":"t"},{"id":175,"product_id":132,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":176,"product_id":132,"spec_key":"Capacite thermique","spec_value":"60","spec_unit":"MJ/K"},{"id":177,"product_id":132,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":178,"product_id":132,"spec_key":"Capacite de decoration","spec_value":"12.0","spec_unit":"DP"},{"id":179,"product_id":133,"spec_key":"Apport systeme","spec_value":"96","spec_unit":"SP"},{"id":180,"product_id":133,"spec_key":"Chassis","spec_value":"40","spec_unit":null},{"id":181,"product_id":133,"spec_key":"Masse","spec_value":"20.0","spec_unit":"t"},{"id":182,"product_id":133,"spec_key":"Fuselage","spec_value":"10","spec_unit":null},{"id":183,"product_id":133,"spec_key":"Capacite thermique","spec_value":"20","spec_unit":"MJ/K"},{"id":184,"product_id":133,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":185,"product_id":133,"spec_key":"Capacite de decoration","spec_value":"4.0","spec_unit":"DP"},{"id":186,"product_id":134,"spec_key":"Apport systeme","spec_value":"144","spec_unit":"SP"},{"id":187,"product_id":134,"spec_key":"Chassis","spec_value":"60","spec_unit":null},{"id":188,"product_id":134,"spec_key":"Masse","spec_value":"30.0","spec_unit":"t"},{"id":189,"product_id":134,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":190,"product_id":134,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":191,"product_id":134,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":192,"product_id":134,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":193,"product_id":135,"spec_key":"Apport systeme","spec_value":"192","spec_unit":"SP"},{"id":194,"product_id":135,"spec_key":"Chassis","spec_value":"80","spec_unit":null},{"id":195,"product_id":135,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":196,"product_id":135,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":197,"product_id":135,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":198,"product_id":135,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":199,"product_id":135,"spec_key":"Capacite de decoration","spec_value":"8.0","spec_unit":"DP"},{"id":200,"product_id":136,"spec_key":"Apport systeme","spec_value":"240","spec_unit":"SP"},{"id":201,"product_id":136,"spec_key":"Chassis","spec_value":"36","spec_unit":null},{"id":202,"product_id":136,"spec_key":"Masse","spec_value":"30.0","spec_unit":"t"},{"id":203,"product_id":136,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":204,"product_id":136,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":205,"product_id":136,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":206,"product_id":136,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":207,"product_id":137,"spec_key":"Apport systeme","spec_value":"360","spec_unit":"SP"},{"id":208,"product_id":137,"spec_key":"Chassis","spec_value":"54","spec_unit":null},{"id":209,"product_id":137,"spec_key":"Masse","spec_value":"45.0","spec_unit":"t"},{"id":210,"product_id":137,"spec_key":"Fuselage","spec_value":"22","spec_unit":null},{"id":211,"product_id":137,"spec_key":"Capacite thermique","spec_value":"45","spec_unit":"MJ/K"},{"id":212,"product_id":137,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":213,"product_id":137,"spec_key":"Capacite de decoration","spec_value":"9.0","spec_unit":"DP"},{"id":214,"product_id":138,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":215,"product_id":138,"spec_key":"Chassis","spec_value":"72","spec_unit":null},{"id":216,"product_id":138,"spec_key":"Masse","spec_value":"60.0","spec_unit":"t"},{"id":217,"product_id":138,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":218,"product_id":138,"spec_key":"Capacite thermique","spec_value":"60","spec_unit":"MJ/K"},{"id":219,"product_id":138,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":220,"product_id":138,"spec_key":"Capacite de decoration","spec_value":"12.0","spec_unit":"DP"},{"id":221,"product_id":139,"spec_key":"Apport systeme","spec_value":"96","spec_unit":"SP"},{"id":222,"product_id":139,"spec_key":"Chassis","spec_value":"40","spec_unit":null},{"id":223,"product_id":139,"spec_key":"Masse","spec_value":"16.0","spec_unit":"t"},{"id":224,"product_id":139,"spec_key":"Fuselage","spec_value":"10","spec_unit":null},{"id":225,"product_id":139,"spec_key":"Capacite thermique","spec_value":"22","spec_unit":"MJ/K"},{"id":226,"product_id":139,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":227,"product_id":139,"spec_key":"Capacite de decoration","spec_value":"4.0","spec_unit":"DP"},{"id":228,"product_id":140,"spec_key":"Apport systeme","spec_value":"144","spec_unit":"SP"},{"id":229,"product_id":140,"spec_key":"Chassis","spec_value":"60","spec_unit":null},{"id":230,"product_id":140,"spec_key":"Masse","spec_value":"24.0","spec_unit":"t"},{"id":231,"product_id":140,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":232,"product_id":140,"spec_key":"Capacite thermique","spec_value":"33","spec_unit":"MJ/K"},{"id":233,"product_id":140,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":234,"product_id":140,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":235,"product_id":141,"spec_key":"Apport systeme","spec_value":"192","spec_unit":"SP"},{"id":236,"product_id":141,"spec_key":"Chassis","spec_value":"80","spec_unit":null},{"id":237,"product_id":141,"spec_key":"Masse","spec_value":"32.0","spec_unit":"t"},{"id":238,"product_id":141,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":239,"product_id":141,"spec_key":"Capacite thermique","spec_value":"44","spec_unit":"MJ/K"},{"id":240,"product_id":141,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":241,"product_id":141,"spec_key":"Capacite de decoration","spec_value":"8.0","spec_unit":"DP"},{"id":242,"product_id":142,"spec_key":"Apport systeme","spec_value":"240","spec_unit":"SP"},{"id":243,"product_id":142,"spec_key":"Chassis","spec_value":"36","spec_unit":null},{"id":244,"product_id":142,"spec_key":"Masse","spec_value":"24.0","spec_unit":"t"},{"id":245,"product_id":142,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":246,"product_id":142,"spec_key":"Capacite thermique","spec_value":"33","spec_unit":"MJ/K"},{"id":247,"product_id":142,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":248,"product_id":142,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":249,"product_id":143,"spec_key":"Apport systeme","spec_value":"360","spec_unit":"SP"},{"id":250,"product_id":143,"spec_key":"Chassis","spec_value":"54","spec_unit":null},{"id":251,"product_id":143,"spec_key":"Masse","spec_value":"36.0","spec_unit":"t"},{"id":252,"product_id":143,"spec_key":"Fuselage","spec_value":"22","spec_unit":null},{"id":253,"product_id":143,"spec_key":"Capacite thermique","spec_value":"49","spec_unit":"MJ/K"},{"id":254,"product_id":143,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":255,"product_id":143,"spec_key":"Capacite de decoration","spec_value":"9.0","spec_unit":"DP"},{"id":256,"product_id":144,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":257,"product_id":144,"spec_key":"Chassis","spec_value":"72","spec_unit":null},{"id":258,"product_id":144,"spec_key":"Masse","spec_value":"48.0","spec_unit":"t"},{"id":259,"product_id":144,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":260,"product_id":144,"spec_key":"Capacite thermique","spec_value":"66","spec_unit":"MJ/K"},{"id":261,"product_id":144,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":262,"product_id":144,"spec_key":"Capacite de decoration","spec_value":"12.0","spec_unit":"DP"},{"id":263,"product_id":145,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":264,"product_id":145,"spec_key":"Chassis","spec_value":"256","spec_unit":null},{"id":265,"product_id":145,"spec_key":"Masse","spec_value":"64.0","spec_unit":"t"},{"id":266,"product_id":145,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":267,"product_id":145,"spec_key":"Capacite thermique","spec_value":"88","spec_unit":"MJ/K"},{"id":268,"product_id":145,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":269,"product_id":145,"spec_key":"Capacite de decoration","spec_value":"16.0","spec_unit":"DP"},{"id":270,"product_id":146,"spec_key":"Apport systeme","spec_value":"720","spec_unit":"SP"},{"id":271,"product_id":146,"spec_key":"Chassis","spec_value":"384","spec_unit":null},{"id":272,"product_id":146,"spec_key":"Masse","spec_value":"96.0","spec_unit":"t"},{"id":273,"product_id":146,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":274,"product_id":146,"spec_key":"Capacite thermique","spec_value":"132","spec_unit":"MJ/K"},{"id":275,"product_id":146,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":276,"product_id":146,"spec_key":"Capacite de decoration","spec_value":"24.0","spec_unit":"DP"},{"id":277,"product_id":147,"spec_key":"Apport systeme","spec_value":"960","spec_unit":"SP"},{"id":278,"product_id":147,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":279,"product_id":147,"spec_key":"Masse","spec_value":"128.0","spec_unit":"t"},{"id":280,"product_id":147,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":281,"product_id":147,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":282,"product_id":147,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":283,"product_id":147,"spec_key":"Capacite de decoration","spec_value":"32.0","spec_unit":"DP"},{"id":284,"product_id":148,"spec_key":"Apport systeme","spec_value":"96","spec_unit":"SP"},{"id":285,"product_id":148,"spec_key":"Chassis","spec_value":"40","spec_unit":null},{"id":286,"product_id":148,"spec_key":"Masse","spec_value":"16.0","spec_unit":"t"},{"id":287,"product_id":148,"spec_key":"Fuselage","spec_value":"10","spec_unit":null},{"id":288,"product_id":148,"spec_key":"Capacite thermique","spec_value":"22","spec_unit":"MJ/K"},{"id":289,"product_id":148,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":290,"product_id":148,"spec_key":"Capacite de decoration","spec_value":"4.0","spec_unit":"DP"},{"id":291,"product_id":149,"spec_key":"Apport systeme","spec_value":"144","spec_unit":"SP"},{"id":292,"product_id":149,"spec_key":"Chassis","spec_value":"60","spec_unit":null},{"id":293,"product_id":149,"spec_key":"Masse","spec_value":"24.0","spec_unit":"t"},{"id":294,"product_id":149,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":295,"product_id":149,"spec_key":"Capacite thermique","spec_value":"33","spec_unit":"MJ/K"},{"id":296,"product_id":149,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":297,"product_id":149,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":298,"product_id":150,"spec_key":"Apport systeme","spec_value":"192","spec_unit":"SP"},{"id":299,"product_id":150,"spec_key":"Chassis","spec_value":"80","spec_unit":null},{"id":300,"product_id":150,"spec_key":"Masse","spec_value":"32.0","spec_unit":"t"},{"id":301,"product_id":150,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":302,"product_id":150,"spec_key":"Capacite thermique","spec_value":"44","spec_unit":"MJ/K"},{"id":303,"product_id":150,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":304,"product_id":150,"spec_key":"Capacite de decoration","spec_value":"8.0","spec_unit":"DP"},{"id":305,"product_id":151,"spec_key":"Apport systeme","spec_value":"240","spec_unit":"SP"},{"id":306,"product_id":151,"spec_key":"Chassis","spec_value":"36","spec_unit":null},{"id":307,"product_id":151,"spec_key":"Masse","spec_value":"24.0","spec_unit":"t"},{"id":308,"product_id":151,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":309,"product_id":151,"spec_key":"Capacite thermique","spec_value":"33","spec_unit":"MJ/K"},{"id":310,"product_id":151,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":311,"product_id":151,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":312,"product_id":152,"spec_key":"Apport systeme","spec_value":"360","spec_unit":"SP"},{"id":313,"product_id":152,"spec_key":"Chassis","spec_value":"54","spec_unit":null},{"id":314,"product_id":152,"spec_key":"Masse","spec_value":"36.0","spec_unit":"t"},{"id":315,"product_id":152,"spec_key":"Fuselage","spec_value":"22","spec_unit":null},{"id":316,"product_id":152,"spec_key":"Capacite thermique","spec_value":"49","spec_unit":"MJ/K"},{"id":317,"product_id":152,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":318,"product_id":152,"spec_key":"Capacite de decoration","spec_value":"9.0","spec_unit":"DP"},{"id":319,"product_id":153,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":320,"product_id":153,"spec_key":"Chassis","spec_value":"72","spec_unit":null},{"id":321,"product_id":153,"spec_key":"Masse","spec_value":"48.0","spec_unit":"t"},{"id":322,"product_id":153,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":323,"product_id":153,"spec_key":"Capacite thermique","spec_value":"66","spec_unit":"MJ/K"},{"id":324,"product_id":153,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":325,"product_id":153,"spec_key":"Capacite de decoration","spec_value":"12.0","spec_unit":"DP"},{"id":326,"product_id":154,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":327,"product_id":154,"spec_key":"Chassis","spec_value":"256","spec_unit":null},{"id":328,"product_id":154,"spec_key":"Masse","spec_value":"64.0","spec_unit":"t"},{"id":329,"product_id":154,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":330,"product_id":154,"spec_key":"Capacite thermique","spec_value":"88","spec_unit":"MJ/K"},{"id":331,"product_id":154,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":332,"product_id":154,"spec_key":"Capacite de decoration","spec_value":"16.0","spec_unit":"DP"},{"id":333,"product_id":155,"spec_key":"Apport systeme","spec_value":"720","spec_unit":"SP"},{"id":334,"product_id":155,"spec_key":"Chassis","spec_value":"384","spec_unit":null},{"id":335,"product_id":155,"spec_key":"Masse","spec_value":"96.0","spec_unit":"t"},{"id":336,"product_id":155,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":337,"product_id":155,"spec_key":"Capacite thermique","spec_value":"132","spec_unit":"MJ/K"},{"id":338,"product_id":155,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":339,"product_id":155,"spec_key":"Capacite de decoration","spec_value":"24.0","spec_unit":"DP"},{"id":340,"product_id":156,"spec_key":"Apport systeme","spec_value":"960","spec_unit":"SP"},{"id":341,"product_id":156,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":342,"product_id":156,"spec_key":"Masse","spec_value":"128.0","spec_unit":"t"},{"id":343,"product_id":156,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":344,"product_id":156,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":345,"product_id":156,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":346,"product_id":156,"spec_key":"Capacite de decoration","spec_value":"32.0","spec_unit":"DP"},{"id":347,"product_id":166,"spec_key":"Capacite d'encombrement","spec_value":"60","spec_unit":"FP"},{"id":348,"product_id":166,"spec_key":"Capacite de decoration","spec_value":"50","spec_unit":"DP"},{"id":349,"product_id":166,"spec_key":"Capacite d'experience","spec_value":"400","spec_unit":null},{"id":350,"product_id":166,"spec_key":"Generation d'electricite","spec_value":"50.0","spec_unit":"MA"},{"id":351,"product_id":166,"spec_key":"Capacite de raccordement","spec_value":"6","spec_unit":null},{"id":352,"product_id":166,"spec_key":"Stockage de solides","spec_value":"500.0","spec_unit":"su"},{"id":353,"product_id":167,"spec_key":"Capacite d'encombrement","spec_value":"50","spec_unit":"FP"},{"id":354,"product_id":167,"spec_key":"Capacite de decoration","spec_value":"50","spec_unit":"DP"},{"id":355,"product_id":167,"spec_key":"Capacite d'experience","spec_value":"400","spec_unit":null},{"id":356,"product_id":168,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":357,"product_id":168,"spec_key":"Besoins en electricite","spec_value":"20.0","spec_unit":"MA"},{"id":358,"product_id":168,"spec_key":"Stockage de produits","spec_value":"100.0","spec_unit":"su"},{"id":359,"product_id":168,"spec_key":"Capacite d'itineraires de drone","spec_value":"2","spec_unit":null},{"id":360,"product_id":169,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":361,"product_id":169,"spec_key":"Besoins en electricite","spec_value":"20.0","spec_unit":"MA"},{"id":362,"product_id":170,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":363,"product_id":170,"spec_key":"Stockage de materiaux","spec_value":"50.0","spec_unit":"su"},{"id":364,"product_id":170,"spec_key":"Stockage de produits","spec_value":"50.0","spec_unit":"su"},{"id":365,"product_id":171,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":366,"product_id":171,"spec_key":"Besoins en electricite","spec_value":"10.0","spec_unit":"MA"},{"id":367,"product_id":171,"spec_key":"Stockage de materiaux","spec_value":"20.0","spec_unit":"su"},{"id":368,"product_id":171,"spec_key":"Stockage de produits","spec_value":"100.0","spec_unit":"su"},{"id":369,"product_id":172,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":370,"product_id":172,"spec_key":"Stockage de materiaux","spec_value":"50.0","spec_unit":"su"},{"id":371,"product_id":172,"spec_key":"Stockage de produits","spec_value":"50.0","spec_unit":"su"},{"id":372,"product_id":172,"spec_key":"Genere de l'experience technologique","spec_value":"Oui","spec_unit":null},{"id":373,"product_id":173,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":374,"product_id":173,"spec_key":"Stockage de materiaux","spec_value":"100.0","spec_unit":"su"},{"id":375,"product_id":173,"spec_key":"Stockage de produits","spec_value":"50.0","spec_unit":"su"},{"id":376,"product_id":173,"spec_key":"Genere de l'experience technologique","spec_value":"Oui","spec_unit":null},{"id":377,"product_id":174,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":378,"product_id":174,"spec_key":"Stockage de materiaux","spec_value":"80.0","spec_unit":"su"},{"id":379,"product_id":174,"spec_key":"Stockage de produits","spec_value":"20.0","spec_unit":"su"},{"id":380,"product_id":175,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":381,"product_id":175,"spec_key":"Stockage de materiaux","spec_value":"100.0","spec_unit":"su"},{"id":382,"product_id":175,"spec_key":"Stockage de produits","spec_value":"50.0","spec_unit":"su"},{"id":383,"product_id":175,"spec_key":"Genere de l'experience technologique","spec_value":"Oui","spec_unit":null},{"id":384,"product_id":176,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":385,"product_id":176,"spec_key":"Stockage de materiaux","spec_value":"500.0","spec_unit":"su"},{"id":386,"product_id":176,"spec_key":"Stockage de produits","spec_value":"500.0","spec_unit":"su"},{"id":387,"product_id":177,"spec_key":"Encombrement","spec_value":"4","spec_unit":"FP"},{"id":388,"product_id":177,"spec_key":"Generation d'electricite","spec_value":"10.0","spec_unit":"MA"},{"id":389,"product_id":178,"spec_key":"Capacite de raccordement","spec_value":"6","spec_unit":null},{"id":390,"product_id":179,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":391,"product_id":179,"spec_key":"Generation d'electricite","spec_value":"40.0","spec_unit":"MA"},{"id":392,"product_id":179,"spec_key":"Stockage de solides","spec_value":"50.0","spec_unit":"su"},{"id":393,"product_id":179,"spec_key":"Consommation de carburant","spec_value":"75.0","spec_unit":"Hz"},{"id":394,"product_id":180,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":395,"product_id":180,"spec_key":"Capacite energetique","spec_value":"90000.0","spec_unit":"MAs"},{"id":396,"product_id":181,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":397,"product_id":181,"spec_key":"Stockage de solides","spec_value":"50.0","spec_unit":"su"},{"id":398,"product_id":181,"spec_key":"Capacite d'itineraires de drone","spec_value":"5","spec_unit":null},{"id":399,"product_id":182,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":400,"product_id":183,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":401,"product_id":184,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":402,"product_id":184,"spec_key":"Stockage de solides","spec_value":"2000.0","spec_unit":"su"},{"id":403,"product_id":184,"spec_key":"Capacite d'itineraires de drone","spec_value":"5","spec_unit":null},{"id":404,"product_id":185,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":405,"product_id":185,"spec_key":"Stockage de solides","spec_value":"400.0","spec_unit":"su"},{"id":406,"product_id":185,"spec_key":"Capacite d'itineraires de drone","spec_value":"0","spec_unit":null},{"id":407,"product_id":186,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":408,"product_id":186,"spec_key":"Taille du reservoir","spec_value":"4000.0","spec_unit":"L"},{"id":409,"product_id":187,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":410,"product_id":187,"spec_key":"Stockage de mag-plasma","spec_value":"2000.0","spec_unit":"L"},{"id":411,"product_id":193,"spec_key":"Niveau d'exploration requis","spec_value":"4","spec_unit":null},{"id":412,"product_id":193,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":413,"product_id":193,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":414,"product_id":193,"spec_key":"Durabilite","spec_value":"500","spec_unit":null},{"id":415,"product_id":193,"spec_key":"Capacite","spec_value":"Detection d'objet","spec_unit":null},{"id":416,"product_id":194,"spec_key":"Niveau d'exploration requis","spec_value":"4","spec_unit":null},{"id":417,"product_id":194,"spec_key":"Apport requis","spec_value":"150","spec_unit":"SP"},{"id":418,"product_id":194,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":419,"product_id":194,"spec_key":"Stockage de mag-plasma","spec_value":"200.0","spec_unit":"L"},{"id":420,"product_id":194,"spec_key":"Classe de reacteur SL","spec_value":"2","spec_unit":null},{"id":421,"product_id":194,"spec_key":"Optimal jusqu'a","spec_value":"500.0","spec_unit":"t"},{"id":422,"product_id":194,"spec_key":"Capacite","spec_value":"Voyage","spec_unit":null},{"id":423,"product_id":195,"spec_key":"Niveau d'exploration requis","spec_value":"4","spec_unit":null},{"id":424,"product_id":195,"spec_key":"Apport requis","spec_value":"300","spec_unit":"SP"},{"id":425,"product_id":195,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":426,"product_id":195,"spec_key":"Stockage de mag-plasma","spec_value":"200.0","spec_unit":"L"},{"id":427,"product_id":195,"spec_key":"Classe de reacteur SL","spec_value":"2","spec_unit":null},{"id":428,"product_id":195,"spec_key":"Optimal jusqu'a","spec_value":"1500.0","spec_unit":"t"},{"id":429,"product_id":195,"spec_key":"Capacite","spec_value":"Voyage","spec_unit":null},{"id":430,"product_id":196,"spec_key":"Niveau d'exploration requis","spec_value":"4","spec_unit":null},{"id":431,"product_id":196,"spec_key":"Apport requis","spec_value":"600","spec_unit":"SP"},{"id":432,"product_id":196,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":433,"product_id":196,"spec_key":"Stockage de mag-plasma","spec_value":"200.0","spec_unit":"L"},{"id":434,"product_id":196,"spec_key":"Classe de reacteur SL","spec_value":"2","spec_unit":null},{"id":435,"product_id":196,"spec_key":"Optimal jusqu'a","spec_value":"5000.0","spec_unit":"t"},{"id":436,"product_id":196,"spec_key":"Capacite","spec_value":"Voyage","spec_unit":null},{"id":437,"product_id":202,"spec_key":"Niveau d'exploration requis","spec_value":"4","spec_unit":null},{"id":438,"product_id":202,"spec_key":"Apport systeme","spec_value":"400","spec_unit":"SP"},{"id":439,"product_id":202,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":440,"product_id":202,"spec_key":"Masse","spec_value":"128.0","spec_unit":"t"},{"id":441,"product_id":202,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":442,"product_id":202,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":443,"product_id":203,"spec_key":"Encombrement","spec_value":"10","spec_unit":"FP"},{"id":444,"product_id":203,"spec_key":"Stockage de materiaux","spec_value":"1000.0","spec_unit":"su"},{"id":445,"product_id":203,"spec_key":"Stockage de produits","spec_value":"500.0","spec_unit":"su"},{"id":446,"product_id":203,"spec_key":"Genere de l'experience technologique","spec_value":"Oui","spec_unit":null},{"id":447,"product_id":206,"spec_key":"Apport requis","spec_value":"3000","spec_unit":"SP"},{"id":448,"product_id":206,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":449,"product_id":206,"spec_key":"Stockage de solides","spec_value":"5000.0","spec_unit":"su"},{"id":450,"product_id":208,"spec_key":"Encombrement","spec_value":"1","spec_unit":"FP"},{"id":451,"product_id":209,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":452,"product_id":209,"spec_key":"Generation de chaleur","spec_value":"400.0","spec_unit":"MW"},{"id":453,"product_id":209,"spec_key":"Utilisation d'electricite","spec_value":"35.0","spec_unit":"MA"},{"id":454,"product_id":210,"spec_key":"Apport requis","spec_value":"400","spec_unit":"SP"},{"id":455,"product_id":210,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":456,"product_id":210,"spec_key":"Generation de chaleur","spec_value":"5000.0","spec_unit":"MW"},{"id":457,"product_id":210,"spec_key":"Utilisation d'electricite","spec_value":"200.0","spec_unit":"MA"},{"id":458,"product_id":215,"spec_key":"Stockage de solides","spec_value":"500.0","spec_unit":"su"},{"id":459,"product_id":215,"spec_key":"Portee de la navette","spec_value":"950000.0","spec_unit":"np"},{"id":460,"product_id":216,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":461,"product_id":216,"spec_key":"Stockage de solides","spec_value":"1000.0","spec_unit":"su"},{"id":462,"product_id":216,"spec_key":"Capacite d'itineraires de drone","spec_value":"4","spec_unit":null},{"id":463,"product_id":216,"spec_key":"Emplacements de navette","spec_value":"4.0","spec_unit":null},{"id":464,"product_id":217,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":465,"product_id":217,"spec_key":"Stockage de materiaux","spec_value":"2000.0","spec_unit":"su"},{"id":466,"product_id":217,"spec_key":"Stockage de produits","spec_value":"1000.0","spec_unit":"su"},{"id":467,"product_id":217,"spec_key":"Genere de l'experience technologique","spec_value":"Oui","spec_unit":null},{"id":468,"product_id":218,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":469,"product_id":218,"spec_key":"Besoins en electricite","spec_value":"15.0","spec_unit":"MA"},{"id":470,"product_id":219,"spec_key":"Niveau de technologie requis","spec_value":"4","spec_unit":null},{"id":471,"product_id":219,"spec_key":"Apport systeme","spec_value":"400","spec_unit":"SP"},{"id":472,"product_id":219,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":473,"product_id":219,"spec_key":"Masse","spec_value":"128.0","spec_unit":"t"},{"id":474,"product_id":219,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":475,"product_id":219,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":476,"product_id":225,"spec_key":"Chassis","spec_value":"160","spec_unit":null},{"id":477,"product_id":225,"spec_key":"Masse","spec_value":"20.0","spec_unit":"t"},{"id":478,"product_id":225,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":479,"product_id":225,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":480,"product_id":225,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":481,"product_id":225,"spec_key":"Capacite de decoration","spec_value":"4.0","spec_unit":"DP"},{"id":482,"product_id":226,"spec_key":"Chassis","spec_value":"240","spec_unit":null},{"id":483,"product_id":226,"spec_key":"Masse","spec_value":"30.0","spec_unit":"t"},{"id":484,"product_id":226,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":485,"product_id":226,"spec_key":"Capacite thermique","spec_value":"45","spec_unit":"MJ/K"},{"id":486,"product_id":226,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":487,"product_id":226,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":488,"product_id":227,"spec_key":"Chassis","spec_value":"320","spec_unit":null},{"id":489,"product_id":227,"spec_key":"Masse","spec_value":"40.0","spec_unit":"t"},{"id":490,"product_id":227,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":491,"product_id":227,"spec_key":"Capacite thermique","spec_value":"60","spec_unit":"MJ/K"},{"id":492,"product_id":227,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":493,"product_id":227,"spec_key":"Capacite de decoration","spec_value":"8.0","spec_unit":"DP"},{"id":494,"product_id":228,"spec_key":"Chassis","spec_value":"1024","spec_unit":null},{"id":495,"product_id":228,"spec_key":"Masse","spec_value":"80.0","spec_unit":"t"},{"id":496,"product_id":228,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":497,"product_id":228,"spec_key":"Capacite thermique","spec_value":"120","spec_unit":"MJ/K"},{"id":498,"product_id":228,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":499,"product_id":228,"spec_key":"Capacite de decoration","spec_value":"16.0","spec_unit":"DP"},{"id":500,"product_id":229,"spec_key":"Chassis","spec_value":"1536","spec_unit":null},{"id":501,"product_id":229,"spec_key":"Masse","spec_value":"120.0","spec_unit":"t"},{"id":502,"product_id":229,"spec_key":"Fuselage","spec_value":"60","spec_unit":null},{"id":503,"product_id":229,"spec_key":"Capacite thermique","spec_value":"180","spec_unit":"MJ/K"},{"id":504,"product_id":229,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":505,"product_id":229,"spec_key":"Capacite de decoration","spec_value":"24.0","spec_unit":"DP"},{"id":506,"product_id":230,"spec_key":"Chassis","spec_value":"2048","spec_unit":null},{"id":507,"product_id":230,"spec_key":"Masse","spec_value":"160.0","spec_unit":"t"},{"id":508,"product_id":230,"spec_key":"Fuselage","spec_value":"80","spec_unit":null},{"id":509,"product_id":230,"spec_key":"Capacite thermique","spec_value":"240","spec_unit":"MJ/K"},{"id":510,"product_id":230,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":511,"product_id":230,"spec_key":"Capacite de decoration","spec_value":"32.0","spec_unit":"DP"},{"id":512,"product_id":231,"spec_key":"Apport systeme","spec_value":"240","spec_unit":"SP"},{"id":513,"product_id":231,"spec_key":"Chassis","spec_value":"2","spec_unit":null},{"id":514,"product_id":231,"spec_key":"Masse","spec_value":"12.0","spec_unit":"t"},{"id":515,"product_id":231,"spec_key":"Fuselage","spec_value":"3","spec_unit":null},{"id":516,"product_id":231,"spec_key":"Capacite thermique","spec_value":"15","spec_unit":"MJ/K"},{"id":517,"product_id":231,"spec_key":"Conductibilite thermique de materiau","spec_value":"120.0","spec_unit":"W/aK"},{"id":518,"product_id":231,"spec_key":"Capacite de decoration","spec_value":"6.0","spec_unit":"DP"},{"id":519,"product_id":232,"spec_key":"Apport systeme","spec_value":"360","spec_unit":"SP"},{"id":520,"product_id":232,"spec_key":"Chassis","spec_value":"3","spec_unit":null},{"id":521,"product_id":232,"spec_key":"Masse","spec_value":"18.0","spec_unit":"t"},{"id":522,"product_id":232,"spec_key":"Fuselage","spec_value":"5","spec_unit":null},{"id":523,"product_id":232,"spec_key":"Capacite thermique","spec_value":"23","spec_unit":"MJ/K"},{"id":524,"product_id":232,"spec_key":"Conductibilite thermique de materiau","spec_value":"120.0","spec_unit":"W/aK"},{"id":525,"product_id":232,"spec_key":"Capacite de decoration","spec_value":"9.0","spec_unit":"DP"},{"id":526,"product_id":233,"spec_key":"Apport systeme","spec_value":"480","spec_unit":"SP"},{"id":527,"product_id":233,"spec_key":"Chassis","spec_value":"4","spec_unit":null},{"id":528,"product_id":233,"spec_key":"Masse","spec_value":"24.0","spec_unit":"t"},{"id":529,"product_id":233,"spec_key":"Fuselage","spec_value":"6","spec_unit":null},{"id":530,"product_id":233,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":531,"product_id":233,"spec_key":"Conductibilite thermique de materiau","spec_value":"120.0","spec_unit":"W/aK"},{"id":532,"product_id":233,"spec_key":"Capacite de decoration","spec_value":"12.0","spec_unit":"DP"},{"id":533,"product_id":235,"spec_key":"Apport systeme","spec_value":"19","spec_unit":"SP"},{"id":534,"product_id":235,"spec_key":"Chassis","spec_value":"8","spec_unit":null},{"id":535,"product_id":235,"spec_key":"Masse","spec_value":"4.0","spec_unit":"t"},{"id":536,"product_id":235,"spec_key":"Fuselage","spec_value":"1","spec_unit":null},{"id":537,"product_id":235,"spec_key":"Force directrice","spec_value":"2.0","spec_unit":null},{"id":538,"product_id":235,"spec_key":"Capacite thermique","spec_value":"5","spec_unit":"MJ/K"},{"id":539,"product_id":235,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":540,"product_id":236,"spec_key":"Apport systeme","spec_value":"19","spec_unit":"SP"},{"id":541,"product_id":236,"spec_key":"Chassis","spec_value":"8","spec_unit":null},{"id":542,"product_id":236,"spec_key":"Masse","spec_value":"4.0","spec_unit":"t"},{"id":543,"product_id":236,"spec_key":"Fuselage","spec_value":"1","spec_unit":null},{"id":544,"product_id":236,"spec_key":"Force directrice","spec_value":"2.0","spec_unit":null},{"id":545,"product_id":236,"spec_key":"Capacite thermique","spec_value":"5","spec_unit":"MJ/K"},{"id":546,"product_id":236,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":547,"product_id":237,"spec_key":"Apport systeme","spec_value":"38","spec_unit":"SP"},{"id":548,"product_id":237,"spec_key":"Chassis","spec_value":"16","spec_unit":null},{"id":549,"product_id":237,"spec_key":"Masse","spec_value":"8.0","spec_unit":"t"},{"id":550,"product_id":237,"spec_key":"Fuselage","spec_value":"3","spec_unit":null},{"id":551,"product_id":237,"spec_key":"Force directrice","spec_value":"4.0","spec_unit":null},{"id":552,"product_id":237,"spec_key":"Capacite thermique","spec_value":"10","spec_unit":"MJ/K"},{"id":553,"product_id":237,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":554,"product_id":238,"spec_key":"Apport systeme","spec_value":"19","spec_unit":"SP"},{"id":555,"product_id":238,"spec_key":"Chassis","spec_value":"8","spec_unit":null},{"id":556,"product_id":238,"spec_key":"Masse","spec_value":"4.0","spec_unit":"t"},{"id":557,"product_id":238,"spec_key":"Fuselage","spec_value":"1","spec_unit":null},{"id":558,"product_id":238,"spec_key":"Force directrice","spec_value":"2.0","spec_unit":null},{"id":559,"product_id":238,"spec_key":"Capacite thermique","spec_value":"5","spec_unit":"MJ/K"},{"id":560,"product_id":238,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":561,"product_id":239,"spec_key":"Apport systeme","spec_value":"19","spec_unit":"SP"},{"id":562,"product_id":239,"spec_key":"Chassis","spec_value":"8","spec_unit":null},{"id":563,"product_id":239,"spec_key":"Masse","spec_value":"4.0","spec_unit":"t"},{"id":564,"product_id":239,"spec_key":"Fuselage","spec_value":"1","spec_unit":null},{"id":565,"product_id":239,"spec_key":"Force directrice","spec_value":"2.0","spec_unit":null},{"id":566,"product_id":239,"spec_key":"Capacite thermique","spec_value":"5","spec_unit":"MJ/K"},{"id":567,"product_id":239,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":568,"product_id":240,"spec_key":"Apport systeme","spec_value":"38","spec_unit":"SP"},{"id":569,"product_id":240,"spec_key":"Chassis","spec_value":"16","spec_unit":null},{"id":570,"product_id":240,"spec_key":"Masse","spec_value":"8.0","spec_unit":"t"},{"id":571,"product_id":240,"spec_key":"Fuselage","spec_value":"3","spec_unit":null},{"id":572,"product_id":240,"spec_key":"Force directrice","spec_value":"4.0","spec_unit":null},{"id":573,"product_id":240,"spec_key":"Capacite thermique","spec_value":"10","spec_unit":"MJ/K"},{"id":574,"product_id":240,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":575,"product_id":241,"spec_key":"Apport systeme","spec_value":"384","spec_unit":"SP"},{"id":576,"product_id":241,"spec_key":"Chassis","spec_value":"204","spec_unit":null},{"id":577,"product_id":241,"spec_key":"Masse","spec_value":"51.2","spec_unit":"t"},{"id":578,"product_id":241,"spec_key":"Fuselage","spec_value":"12","spec_unit":null},{"id":579,"product_id":241,"spec_key":"Force directrice","spec_value":"16.0","spec_unit":null},{"id":580,"product_id":241,"spec_key":"Capacite thermique","spec_value":"88","spec_unit":"MJ/K"},{"id":581,"product_id":241,"spec_key":"Conductibilite thermique de materiau","spec_value":"60.0","spec_unit":"W/aK"},{"id":582,"product_id":242,"spec_key":"Apport systeme","spec_value":"384","spec_unit":"SP"},{"id":583,"product_id":242,"spec_key":"Chassis","spec_value":"204","spec_unit":null},{"id":584,"product_id":242,"spec_key":"Masse","spec_value":"51.2","spec_unit":"t"},{"id":585,"product_id":242,"spec_key":"Fuselage","spec_value":"12","spec_unit":null},{"id":586,"product_id":242,"spec_key":"Force directrice","spec_value":"16.0","spec_unit":null},{"id":587,"product_id":242,"spec_key":"Capacite thermique","spec_value":"88","spec_unit":"MJ/K"},{"id":588,"product_id":242,"spec_key":"Conductibilite thermique de materiau","spec_value":"40.0","spec_unit":"W/aK"},{"id":589,"product_id":244,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":590,"product_id":244,"spec_key":"Capacite de transfert","spec_value":"200.0","spec_unit":"MA"},{"id":591,"product_id":245,"spec_key":"Encombrement","spec_value":"3","spec_unit":"FP"},{"id":592,"product_id":245,"spec_key":"Stockage de solides","spec_value":"5 000.0","spec_unit":"su"},{"id":593,"product_id":245,"spec_key":"Capacite d'itineraires de drone","spec_value":"12","spec_unit":null},{"id":594,"product_id":246,"spec_key":"Apport requis","spec_value":"400","spec_unit":"SP"},{"id":595,"product_id":246,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":596,"product_id":248,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":597,"product_id":248,"spec_key":"Besoins en electricite","spec_value":"40","spec_unit":"MA"},{"id":598,"product_id":248,"spec_key":"Stockage de produits","spec_value":"100","spec_unit":"su"},{"id":599,"product_id":248,"spec_key":"Capacite d'itineraires de drone","spec_value":"2","spec_unit":null},{"id":600,"product_id":249,"spec_key":"Niveau d'exploration requis","spec_value":"8","spec_unit":null},{"id":601,"product_id":249,"spec_key":"Apport requis","spec_value":"360","spec_unit":"SP"},{"id":602,"product_id":249,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":603,"product_id":249,"spec_key":"Stockage de mag-plasma","spec_value":"200","spec_unit":"L"},{"id":604,"product_id":250,"spec_key":"Niveau d'exploration requis","spec_value":"8","spec_unit":null},{"id":605,"product_id":250,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":606,"product_id":250,"spec_key":"Apport requis","spec_value":"900","spec_unit":"SP"},{"id":607,"product_id":250,"spec_key":"Stockage de mag-plasma","spec_value":"200","spec_unit":"L"},{"id":608,"product_id":251,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":609,"product_id":251,"spec_key":"Generation d'electricite","spec_value":"120","spec_unit":"MA"},{"id":610,"product_id":251,"spec_key":"Stockage de solides","spec_value":"50","spec_unit":"su"},{"id":611,"product_id":251,"spec_key":"Consommation de carburant","spec_value":"200","spec_unit":"Hz"},{"id":612,"product_id":252,"spec_key":"Apport systeme","spec_value":"1000","spec_unit":"SP"},{"id":613,"product_id":252,"spec_key":"Chassis","spec_value":"1280","spec_unit":null},{"id":614,"product_id":252,"spec_key":"Masse","spec_value":"298","spec_unit":"t"},{"id":615,"product_id":252,"spec_key":"Capacite thermique","spec_value":"352","spec_unit":"MJ/K"},{"id":616,"product_id":252,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":617,"product_id":253,"spec_key":"Apport systeme","spec_value":"300","spec_unit":"SP"},{"id":618,"product_id":253,"spec_key":"Chassis","spec_value":"240","spec_unit":null},{"id":619,"product_id":253,"spec_key":"Masse","spec_value":"60","spec_unit":"t"},{"id":620,"product_id":253,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":621,"product_id":253,"spec_key":"Capacite thermique","spec_value":"120","spec_unit":"MJ/K"},{"id":622,"product_id":253,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":623,"product_id":254,"spec_key":"Apport systeme","spec_value":"300","spec_unit":"SP"},{"id":624,"product_id":254,"spec_key":"Chassis","spec_value":"240","spec_unit":null},{"id":625,"product_id":254,"spec_key":"Masse","spec_value":"60","spec_unit":"t"},{"id":626,"product_id":254,"spec_key":"Fuselage","spec_value":"30","spec_unit":null},{"id":627,"product_id":254,"spec_key":"Capacite thermique","spec_value":"120","spec_unit":"MJ/K"},{"id":628,"product_id":254,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":629,"product_id":255,"spec_key":"Apport systeme","spec_value":"400","spec_unit":"SP"},{"id":630,"product_id":255,"spec_key":"Chassis","spec_value":"320","spec_unit":null},{"id":631,"product_id":255,"spec_key":"Masse","spec_value":"80","spec_unit":"t"},{"id":632,"product_id":255,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":633,"product_id":255,"spec_key":"Capacite thermique","spec_value":"160","spec_unit":"MJ/K"},{"id":634,"product_id":255,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":635,"product_id":256,"spec_key":"Apport systeme","spec_value":"400","spec_unit":"SP"},{"id":636,"product_id":256,"spec_key":"Chassis","spec_value":"320","spec_unit":null},{"id":637,"product_id":256,"spec_key":"Masse","spec_value":"80","spec_unit":"t"},{"id":638,"product_id":256,"spec_key":"Fuselage","spec_value":"40","spec_unit":null},{"id":639,"product_id":256,"spec_key":"Capacite thermique","spec_value":"160","spec_unit":"MJ/K"},{"id":640,"product_id":256,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":641,"product_id":257,"spec_key":"Apport systeme","spec_value":"60","spec_unit":"SP"},{"id":642,"product_id":257,"spec_key":"Chassis","spec_value":"10","spec_unit":null},{"id":643,"product_id":257,"spec_key":"Masse","spec_value":"10","spec_unit":"t"},{"id":644,"product_id":257,"spec_key":"Fuselage","spec_value":"10","spec_unit":null},{"id":645,"product_id":257,"spec_key":"Capacite thermique","spec_value":"20","spec_unit":"MJ/K"},{"id":646,"product_id":257,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":647,"product_id":258,"spec_key":"Apport systeme","spec_value":"150","spec_unit":"SP"},{"id":648,"product_id":258,"spec_key":"Chassis","spec_value":"15","spec_unit":null},{"id":649,"product_id":258,"spec_key":"Masse","spec_value":"15","spec_unit":"t"},{"id":650,"product_id":258,"spec_key":"Fuselage","spec_value":"9","spec_unit":null},{"id":651,"product_id":258,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":652,"product_id":258,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":653,"product_id":259,"spec_key":"Apport systeme","spec_value":"90","spec_unit":"SP"},{"id":654,"product_id":259,"spec_key":"Chassis","spec_value":"15","spec_unit":null},{"id":655,"product_id":259,"spec_key":"Masse","spec_value":"15","spec_unit":"t"},{"id":656,"product_id":259,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":657,"product_id":259,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":658,"product_id":259,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":659,"product_id":260,"spec_key":"Apport systeme","spec_value":"225","spec_unit":"SP"},{"id":660,"product_id":260,"spec_key":"Chassis","spec_value":"22","spec_unit":null},{"id":661,"product_id":260,"spec_key":"Masse","spec_value":"22.5","spec_unit":"t"},{"id":662,"product_id":260,"spec_key":"Fuselage","spec_value":"14","spec_unit":null},{"id":663,"product_id":260,"spec_key":"Capacite thermique","spec_value":"45","spec_unit":"MJ/K"},{"id":664,"product_id":260,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":665,"product_id":261,"spec_key":"Apport systeme","spec_value":"120","spec_unit":"SP"},{"id":666,"product_id":261,"spec_key":"Chassis","spec_value":"20","spec_unit":null},{"id":667,"product_id":261,"spec_key":"Masse","spec_value":"20","spec_unit":"t"},{"id":668,"product_id":261,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":669,"product_id":261,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":670,"product_id":261,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":671,"product_id":262,"spec_key":"Apport systeme","spec_value":"300","spec_unit":"SP"},{"id":672,"product_id":262,"spec_key":"Chassis","spec_value":"30","spec_unit":null},{"id":673,"product_id":262,"spec_key":"Masse","spec_value":"30","spec_unit":"t"},{"id":674,"product_id":262,"spec_key":"Fuselage","spec_value":"18","spec_unit":null},{"id":675,"product_id":262,"spec_key":"Capacite thermique","spec_value":"60","spec_unit":"MJ/K"},{"id":676,"product_id":262,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":677,"product_id":263,"spec_key":"Apport systeme","spec_value":"200","spec_unit":"SP"},{"id":678,"product_id":263,"spec_key":"Chassis","spec_value":"160","spec_unit":null},{"id":679,"product_id":263,"spec_key":"Masse","spec_value":"40","spec_unit":"t"},{"id":680,"product_id":263,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":681,"product_id":263,"spec_key":"Capacite thermique","spec_value":"80","spec_unit":"MJ/K"},{"id":682,"product_id":263,"spec_key":"Conductibilite thermique de materiau","spec_value":"36","spec_unit":"W/aK"},{"id":683,"product_id":268,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":684,"product_id":268,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":685,"product_id":274,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":686,"product_id":274,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":687,"product_id":274,"spec_key":"Stockage energetique","spec_value":"40000","spec_unit":"MAs"},{"id":688,"product_id":274,"spec_key":"Vitesse de recharge max","spec_value":"1000","spec_unit":"MA"},{"id":689,"product_id":274,"spec_key":"Efficacite theorique","spec_value":"70","spec_unit":"%"},{"id":690,"product_id":274,"spec_key":"Autodecharge","spec_value":"0.01","spec_unit":"%/s"},{"id":691,"product_id":275,"spec_key":"Apport requis","spec_value":"3000","spec_unit":"SP"},{"id":692,"product_id":275,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":693,"product_id":275,"spec_key":"Stockage de mag-plasma","spec_value":"2000","spec_unit":"L"},{"id":694,"product_id":276,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":695,"product_id":276,"spec_key":"Recipe Level","spec_value":"2","spec_unit":null},{"id":696,"product_id":277,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":697,"product_id":277,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":698,"product_id":278,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":699,"product_id":278,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":700,"product_id":279,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":701,"product_id":279,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":702,"product_id":280,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":703,"product_id":280,"spec_key":"Recipe Level","spec_value":"8","spec_unit":null},{"id":704,"product_id":281,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":705,"product_id":281,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":706,"product_id":282,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":707,"product_id":282,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":708,"product_id":283,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":709,"product_id":283,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":710,"product_id":283,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":711,"product_id":283,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":712,"product_id":283,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":713,"product_id":283,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":714,"product_id":286,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":715,"product_id":286,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":716,"product_id":286,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":717,"product_id":286,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":718,"product_id":288,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":719,"product_id":288,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":720,"product_id":289,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":721,"product_id":289,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":722,"product_id":290,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":723,"product_id":290,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":724,"product_id":291,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":725,"product_id":291,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":726,"product_id":292,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":727,"product_id":292,"spec_key":"Recipe Level","spec_value":"10","spec_unit":null},{"id":728,"product_id":293,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":729,"product_id":293,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":730,"product_id":294,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":731,"product_id":294,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":732,"product_id":295,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":733,"product_id":295,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":734,"product_id":296,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":735,"product_id":296,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":736,"product_id":297,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":737,"product_id":297,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":738,"product_id":298,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":739,"product_id":298,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":740,"product_id":299,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":741,"product_id":299,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":742,"product_id":300,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":743,"product_id":300,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":744,"product_id":301,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":745,"product_id":301,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":746,"product_id":302,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":747,"product_id":302,"spec_key":"Recipe Level","spec_value":"2","spec_unit":null},{"id":748,"product_id":303,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":749,"product_id":303,"spec_key":"Recipe Level","spec_value":"10","spec_unit":null},{"id":750,"product_id":304,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":751,"product_id":304,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":752,"product_id":305,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":753,"product_id":305,"spec_key":"Recipe Level","spec_value":"2","spec_unit":null},{"id":754,"product_id":306,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":755,"product_id":306,"spec_key":"Recipe Level","spec_value":"2","spec_unit":null},{"id":756,"product_id":307,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":757,"product_id":307,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":758,"product_id":308,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":759,"product_id":308,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":760,"product_id":309,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":761,"product_id":309,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":762,"product_id":310,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":763,"product_id":310,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":764,"product_id":311,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":765,"product_id":311,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":766,"product_id":312,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":767,"product_id":312,"spec_key":"Recipe Level","spec_value":"8","spec_unit":null},{"id":768,"product_id":313,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":769,"product_id":313,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":770,"product_id":314,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":771,"product_id":314,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":772,"product_id":315,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":773,"product_id":315,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":774,"product_id":316,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":775,"product_id":316,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":776,"product_id":317,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":777,"product_id":317,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":778,"product_id":318,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":779,"product_id":318,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":780,"product_id":319,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":781,"product_id":319,"spec_key":"Recipe Level","spec_value":"6","spec_unit":null},{"id":782,"product_id":320,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":783,"product_id":320,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":784,"product_id":320,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":785,"product_id":320,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":786,"product_id":320,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":787,"product_id":320,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":788,"product_id":323,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":789,"product_id":323,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":790,"product_id":324,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":791,"product_id":324,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":792,"product_id":325,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":793,"product_id":325,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":794,"product_id":326,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":795,"product_id":326,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":796,"product_id":327,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":797,"product_id":327,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":798,"product_id":328,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":799,"product_id":328,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":800,"product_id":329,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":801,"product_id":329,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":802,"product_id":330,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":803,"product_id":330,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":804,"product_id":331,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":805,"product_id":331,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":806,"product_id":332,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":807,"product_id":332,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":808,"product_id":333,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":809,"product_id":333,"spec_key":"Recipe Level","spec_value":"6","spec_unit":null},{"id":810,"product_id":334,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":811,"product_id":334,"spec_key":"Recipe Level","spec_value":"8","spec_unit":null},{"id":812,"product_id":335,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":813,"product_id":335,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":814,"product_id":335,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":815,"product_id":335,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":816,"product_id":337,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":817,"product_id":337,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":818,"product_id":338,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":819,"product_id":338,"spec_key":"Recipe Level","spec_value":"7","spec_unit":null},{"id":820,"product_id":339,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":821,"product_id":339,"spec_key":"Recipe Level","spec_value":"9","spec_unit":null},{"id":822,"product_id":340,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":823,"product_id":340,"spec_key":"Recipe Level","spec_value":"2","spec_unit":null},{"id":824,"product_id":341,"spec_key":"Unlock Type","spec_value":"Unique Blueprint","spec_unit":null},{"id":825,"product_id":341,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":826,"product_id":342,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":827,"product_id":342,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":828,"product_id":342,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":829,"product_id":342,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":830,"product_id":344,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":831,"product_id":344,"spec_key":"Recipe Level","spec_value":"6","spec_unit":null},{"id":832,"product_id":344,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":833,"product_id":344,"spec_key":"Recipe Level","spec_value":"6","spec_unit":null},{"id":834,"product_id":346,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":835,"product_id":346,"spec_key":"Recipe Level","spec_value":"5","spec_unit":null},{"id":836,"product_id":346,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":837,"product_id":346,"spec_key":"Recipe Level","spec_value":"4","spec_unit":null},{"id":838,"product_id":348,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":839,"product_id":348,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":840,"product_id":348,"spec_key":"Unlock Type","spec_value":"Random Blueprint","spec_unit":null},{"id":841,"product_id":348,"spec_key":"Recipe Level","spec_value":"3","spec_unit":null},{"id":842,"product_id":350,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":843,"product_id":352,"spec_key":"Cout d'equipement","spec_value":"15","spec_unit":null},{"id":844,"product_id":352,"spec_key":"Durabilite","spec_value":"100","spec_unit":null},{"id":845,"product_id":352,"spec_key":"Protection antifroid","spec_value":"50","spec_unit":null},{"id":846,"product_id":353,"spec_key":"Capacite d'encombrement","spec_value":"100","spec_unit":"FP"},{"id":847,"product_id":353,"spec_key":"Capacite d'experience","spec_value":"1200","spec_unit":null},{"id":848,"product_id":363,"spec_key":"Cout d'equipement","spec_value":"2","spec_unit":null},{"id":849,"product_id":363,"spec_key":"Niveau de technologie requis","spec_value":"2","spec_unit":null},{"id":850,"product_id":364,"spec_key":"Cout d'equipement","spec_value":"2","spec_unit":null},{"id":851,"product_id":364,"spec_key":"Niveau de technologie requis","spec_value":"3","spec_unit":null},{"id":852,"product_id":364,"spec_key":"Demantelement d'epave","spec_value":"1","spec_unit":null},{"id":853,"product_id":365,"spec_key":"Cout d'equipement","spec_value":"2","spec_unit":null},{"id":854,"product_id":366,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":855,"product_id":366,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":856,"product_id":367,"spec_key":"Capacite d'encombrement","spec_value":"100","spec_unit":"FP"},{"id":857,"product_id":367,"spec_key":"Capacite de decoration","spec_value":"100","spec_unit":"DP"},{"id":858,"product_id":368,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":859,"product_id":368,"spec_key":"Stockage energetique","spec_value":"1000","spec_unit":"MAs"},{"id":860,"product_id":368,"spec_key":"Vitesse de recharge max","spec_value":"100","spec_unit":"MA"},{"id":861,"product_id":368,"spec_key":"Efficacite theorique","spec_value":"70","spec_unit":"%"},{"id":862,"product_id":368,"spec_key":"Autodecharge","spec_value":"0.8","spec_unit":"%/s"},{"id":863,"product_id":369,"spec_key":"Apport requis","spec_value":"100","spec_unit":"SP"},{"id":864,"product_id":371,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":865,"product_id":374,"spec_key":"Cout d'equipement","spec_value":"2","spec_unit":null},{"id":866,"product_id":374,"spec_key":"Niveau de science requis","spec_value":"4","spec_unit":null},{"id":867,"product_id":386,"spec_key":"Encombrement","spec_value":"10","spec_unit":"FP"},{"id":868,"product_id":386,"spec_key":"Generation d'electricite","spec_value":"50","spec_unit":"MA"},{"id":869,"product_id":386,"spec_key":"Stockage de solides","spec_value":"20","spec_unit":"su"},{"id":870,"product_id":390,"spec_key":"Apport requis","spec_value":"3500","spec_unit":"SP"},{"id":871,"product_id":390,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":872,"product_id":393,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":873,"product_id":393,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":874,"product_id":394,"spec_key":"Puissance d'eclairage","spec_value":"1","spec_unit":"lm"},{"id":875,"product_id":394,"spec_key":"Portee d'eclairage","spec_value":"400","spec_unit":"np"},{"id":876,"product_id":394,"spec_key":"Utilisation d'electricite","spec_value":"0.08","spec_unit":"MA"},{"id":877,"product_id":395,"spec_key":"Encombrement","spec_value":"5","spec_unit":"FP"},{"id":878,"product_id":395,"spec_key":"Generation d'electricite","spec_value":"50","spec_unit":"MA"},{"id":879,"product_id":395,"spec_key":"Stockage de solides","spec_value":"20","spec_unit":"su"},{"id":880,"product_id":395,"spec_key":"Apport requis","spec_value":"250","spec_unit":"SP"},{"id":881,"product_id":395,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":882,"product_id":395,"spec_key":"Dissipation de chaleur","spec_value":"500","spec_unit":"MW"},{"id":883,"product_id":395,"spec_key":"Capacite thermique","spec_value":"100","spec_unit":"MJ/K"},{"id":884,"product_id":397,"spec_key":"Cout d'equipement","spec_value":"8","spec_unit":null},{"id":885,"product_id":397,"spec_key":"Durabilite","spec_value":"100","spec_unit":null},{"id":886,"product_id":397,"spec_key":"Protection antichaleur","spec_value":"30","spec_unit":null},{"id":887,"product_id":398,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":888,"product_id":398,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":889,"product_id":401,"spec_key":"Apport requis","spec_value":"4000","spec_unit":"SP"},{"id":890,"product_id":401,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":891,"product_id":405,"spec_key":"Apport requis","spec_value":"8000","spec_unit":"SP"},{"id":892,"product_id":405,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":893,"product_id":406,"spec_key":"Niveau de technologie requis","spec_value":"8","spec_unit":null},{"id":894,"product_id":406,"spec_key":"Apport requis","spec_value":"4000","spec_unit":"SP"},{"id":895,"product_id":406,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":896,"product_id":407,"spec_key":"Apport requis","spec_value":"8000","spec_unit":"SP"},{"id":897,"product_id":407,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":898,"product_id":408,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":899,"product_id":408,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":900,"product_id":408,"spec_key":"Taille du reservoir","spec_value":"10000","spec_unit":"L"},{"id":901,"product_id":409,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":902,"product_id":409,"spec_key":"Taille du reservoir","spec_value":"500","spec_unit":"L"},{"id":903,"product_id":410,"spec_key":"Apport requis","spec_value":"2000","spec_unit":"SP"},{"id":904,"product_id":410,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":905,"product_id":410,"spec_key":"Production d'electricite","spec_value":"1000","spec_unit":"MA"},{"id":906,"product_id":423,"spec_key":"Apport systeme","spec_value":"96","spec_unit":"SP"},{"id":907,"product_id":423,"spec_key":"Chassis","spec_value":"2","spec_unit":null},{"id":908,"product_id":423,"spec_key":"Masse","spec_value":"8","spec_unit":"t"},{"id":909,"product_id":423,"spec_key":"Fuselage","spec_value":"2","spec_unit":null},{"id":910,"product_id":423,"spec_key":"Capacite thermique","spec_value":"10","spec_unit":"MJ/K"},{"id":911,"product_id":423,"spec_key":"Conductibilite thermique de materiau","spec_value":"120","spec_unit":"W/aK"},{"id":912,"product_id":424,"spec_key":"Apport systeme","spec_value":"90","spec_unit":"SP"},{"id":913,"product_id":424,"spec_key":"Chassis","spec_value":"6","spec_unit":null},{"id":914,"product_id":424,"spec_key":"Masse","spec_value":"12","spec_unit":"t"},{"id":915,"product_id":424,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":916,"product_id":424,"spec_key":"Capacite thermique","spec_value":"30","spec_unit":"MJ/K"},{"id":917,"product_id":424,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":918,"product_id":425,"spec_key":"Apport systeme","spec_value":"120","spec_unit":"SP"},{"id":919,"product_id":425,"spec_key":"Chassis","spec_value":"8","spec_unit":null},{"id":920,"product_id":425,"spec_key":"Masse","spec_value":"16","spec_unit":"t"},{"id":921,"product_id":425,"spec_key":"Fuselage","spec_value":"20","spec_unit":null},{"id":922,"product_id":425,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":923,"product_id":425,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":924,"product_id":426,"spec_key":"Puissance d'eclairage","spec_value":"0.5","spec_unit":"lm"},{"id":925,"product_id":426,"spec_key":"Portee d'eclairage","spec_value":"200","spec_unit":"np"},{"id":926,"product_id":426,"spec_key":"Utilisation d'electricite","spec_value":"0.05","spec_unit":"MA"},{"id":927,"product_id":427,"spec_key":"Apport requis","spec_value":"1200","spec_unit":"SP"},{"id":928,"product_id":427,"spec_key":"Puissance","spec_value":"1400","spec_unit":"t"},{"id":929,"product_id":427,"spec_key":"Propulsion","spec_value":"150","spec_unit":"np/s"},{"id":930,"product_id":427,"spec_key":"Force directrice","spec_value":"30","spec_unit":null},{"id":931,"product_id":427,"spec_key":"Consommation d'electricite","spec_value":"60","spec_unit":"MA"},{"id":932,"product_id":427,"spec_key":"Propulsion supplementaire","spec_value":"600","spec_unit":null},{"id":933,"product_id":427,"spec_key":"Consommation electrique des accelerateurs","spec_value":"190","spec_unit":"MA"},{"id":934,"product_id":427,"spec_key":"Generation de chaleur des accelerateurs","spec_value":"1400","spec_unit":"MW"},{"id":935,"product_id":428,"spec_key":"Apport systeme","spec_value":"200","spec_unit":"SP"},{"id":936,"product_id":428,"spec_key":"Chassis","spec_value":"20","spec_unit":null},{"id":937,"product_id":428,"spec_key":"Masse","spec_value":"40","spec_unit":"t"},{"id":938,"product_id":428,"spec_key":"Fuselage","spec_value":"50","spec_unit":null},{"id":939,"product_id":428,"spec_key":"Capacite thermique","spec_value":"40","spec_unit":"MJ/K"},{"id":940,"product_id":428,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":941,"product_id":429,"spec_key":"Apport systeme","spec_value":"1000","spec_unit":"SP"},{"id":942,"product_id":429,"spec_key":"Chassis","spec_value":"1280","spec_unit":null},{"id":943,"product_id":429,"spec_key":"Masse","spec_value":"298","spec_unit":"t"},{"id":944,"product_id":429,"spec_key":"Fuselage","spec_value":"150","spec_unit":null},{"id":945,"product_id":429,"spec_key":"Capacite thermique","spec_value":"352","spec_unit":"MJ/K"},{"id":946,"product_id":429,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":947,"product_id":430,"spec_key":"Apport systeme","spec_value":"1000","spec_unit":"SP"},{"id":948,"product_id":430,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":949,"product_id":430,"spec_key":"Masse","spec_value":"128","spec_unit":"t"},{"id":950,"product_id":430,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":951,"product_id":430,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":952,"product_id":431,"spec_key":"Apport requis","spec_value":"450","spec_unit":"SP"},{"id":953,"product_id":431,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":954,"product_id":431,"spec_key":"Propulsion supplementaire","spec_value":"200","spec_unit":null},{"id":955,"product_id":431,"spec_key":"Consommation electrique des accelerateurs","spec_value":"80","spec_unit":"MA"},{"id":956,"product_id":431,"spec_key":"Generation de chaleur des accelerateurs","spec_value":"500","spec_unit":"MW"},{"id":957,"product_id":432,"spec_key":"Apport systeme","spec_value":"1000","spec_unit":"SP"},{"id":958,"product_id":432,"spec_key":"Chassis","spec_value":"1280","spec_unit":null},{"id":959,"product_id":432,"spec_key":"Masse","spec_value":"298","spec_unit":"t"},{"id":960,"product_id":432,"spec_key":"Capacite thermique","spec_value":"352","spec_unit":"MJ/K"},{"id":961,"product_id":432,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":962,"product_id":435,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":963,"product_id":435,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":964,"product_id":435,"spec_key":"Taille du reservoir","spec_value":"2000","spec_unit":"L"},{"id":965,"product_id":436,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":966,"product_id":436,"spec_key":"Taille du reservoir","spec_value":"500","spec_unit":"L"},{"id":967,"product_id":437,"spec_key":"Apport requis","spec_value":"1000","spec_unit":"SP"},{"id":968,"product_id":437,"spec_key":"Emplacements de modificateurs","spec_value":"2","spec_unit":null},{"id":969,"product_id":437,"spec_key":"Dissipation de chaleur","spec_value":"600","spec_unit":"MW"},{"id":970,"product_id":437,"spec_key":"Utilisation d'electricite","spec_value":"16","spec_unit":"MA"},{"id":971,"product_id":438,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":972,"product_id":452,"spec_key":"Apport requis","spec_value":"7000","spec_unit":"SP"},{"id":973,"product_id":452,"spec_key":"Emplacements de modificateurs","spec_value":"5","spec_unit":null},{"id":974,"product_id":452,"spec_key":"Durabilite","spec_value":"4000","spec_unit":null},{"id":975,"product_id":453,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":976,"product_id":453,"spec_key":"Emplacements de modificateurs","spec_value":"3","spec_unit":null},{"id":977,"product_id":453,"spec_key":"Durabilite","spec_value":"1000","spec_unit":null},{"id":978,"product_id":454,"spec_key":"Apport requis","spec_value":"200","spec_unit":"SP"},{"id":979,"product_id":454,"spec_key":"Stockage energetique","spec_value":"2000","spec_unit":"MAs"},{"id":980,"product_id":454,"spec_key":"Vitesse de recharge max","spec_value":"0","spec_unit":"MA"},{"id":981,"product_id":454,"spec_key":"Efficacite theorique","spec_value":"100","spec_unit":"%"},{"id":982,"product_id":454,"spec_key":"Autodecharge","spec_value":"0.2","spec_unit":"%/s"},{"id":983,"product_id":464,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":984,"product_id":465,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":985,"product_id":466,"spec_key":"Apport systeme","spec_value":"750","spec_unit":"SP"},{"id":986,"product_id":466,"spec_key":"Chassis","spec_value":"900","spec_unit":null},{"id":987,"product_id":466,"spec_key":"Masse","spec_value":"180","spec_unit":"t"},{"id":988,"product_id":466,"spec_key":"Fuselage","spec_value":"46","spec_unit":null},{"id":989,"product_id":466,"spec_key":"Capacite thermique","spec_value":"216","spec_unit":"MJ/K"},{"id":990,"product_id":466,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":991,"product_id":467,"spec_key":"Apport systeme","spec_value":"1000","spec_unit":"SP"},{"id":992,"product_id":467,"spec_key":"Chassis","spec_value":"1200","spec_unit":null},{"id":993,"product_id":467,"spec_key":"Masse","spec_value":"240","spec_unit":"t"},{"id":994,"product_id":467,"spec_key":"Fuselage","spec_value":"61","spec_unit":null},{"id":995,"product_id":467,"spec_key":"Capacite thermique","spec_value":"288","spec_unit":"MJ/K"},{"id":996,"product_id":467,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":997,"product_id":468,"spec_key":"Apport systeme","spec_value":"150","spec_unit":"SP"},{"id":998,"product_id":468,"spec_key":"Chassis","spec_value":"38","spec_unit":null},{"id":999,"product_id":468,"spec_key":"Masse","spec_value":"30","spec_unit":"t"},{"id":1000,"product_id":468,"spec_key":"Fuselage","spec_value":"15","spec_unit":null},{"id":1001,"product_id":468,"spec_key":"Capacite thermique","spec_value":"36","spec_unit":"MJ/K"},{"id":1002,"product_id":468,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":1003,"product_id":469,"spec_key":"Apport systeme","spec_value":"225","spec_unit":"SP"},{"id":1004,"product_id":469,"spec_key":"Chassis","spec_value":"56","spec_unit":null},{"id":1005,"product_id":469,"spec_key":"Masse","spec_value":"45","spec_unit":"t"},{"id":1006,"product_id":469,"spec_key":"Fuselage","spec_value":"23","spec_unit":null},{"id":1007,"product_id":469,"spec_key":"Capacite thermique","spec_value":"54","spec_unit":"MJ/K"},{"id":1008,"product_id":469,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":1009,"product_id":470,"spec_key":"Apport systeme","spec_value":"300","spec_unit":"SP"},{"id":1010,"product_id":470,"spec_key":"Chassis","spec_value":"75","spec_unit":null},{"id":1011,"product_id":470,"spec_key":"Masse","spec_value":"60","spec_unit":"t"},{"id":1012,"product_id":470,"spec_key":"Fuselage","spec_value":"31","spec_unit":null},{"id":1013,"product_id":470,"spec_key":"Capacite thermique","spec_value":"72","spec_unit":"MJ/K"},{"id":1014,"product_id":470,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":1015,"product_id":471,"spec_key":"Apport systeme","spec_value":"500","spec_unit":"SP"},{"id":1016,"product_id":471,"spec_key":"Chassis","spec_value":"600","spec_unit":null},{"id":1017,"product_id":471,"spec_key":"Masse","spec_value":"120","spec_unit":"t"},{"id":1018,"product_id":471,"spec_key":"Fuselage","spec_value":"31","spec_unit":null},{"id":1019,"product_id":471,"spec_key":"Capacite thermique","spec_value":"144","spec_unit":"MJ/K"},{"id":1020,"product_id":471,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":1021,"product_id":475,"spec_key":"Cout d'equipement","spec_value":"6","spec_unit":null},{"id":1022,"product_id":475,"spec_key":"Durabilite","spec_value":"150","spec_unit":null},{"id":1023,"product_id":475,"spec_key":"Protection antiradiation","spec_value":"5","spec_unit":"MBq"},{"id":1024,"product_id":480,"spec_key":"Apport systeme","spec_value":"400","spec_unit":"SP"},{"id":1025,"product_id":480,"spec_key":"Chassis","spec_value":"512","spec_unit":null},{"id":1026,"product_id":480,"spec_key":"Masse","spec_value":"128","spec_unit":"t"},{"id":1027,"product_id":480,"spec_key":"Capacite thermique","spec_value":"176","spec_unit":"MJ/K"},{"id":1028,"product_id":480,"spec_key":"Conductibilite thermique de materiau","spec_value":"60","spec_unit":"W/aK"},{"id":1029,"product_id":483,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":1030,"product_id":494,"spec_key":"Apport requis","spec_value":"1100","spec_unit":"SP"},{"id":1031,"product_id":494,"spec_key":"Puissance","spec_value":"1250","spec_unit":"t"},{"id":1032,"product_id":494,"spec_key":"Propulsion","spec_value":"150","spec_unit":"np/s"},{"id":1033,"product_id":494,"spec_key":"Force directrice","spec_value":"30","spec_unit":null},{"id":1034,"product_id":494,"spec_key":"Consommation d'electricite","spec_value":"50","spec_unit":"MA"},{"id":1035,"product_id":494,"spec_key":"Propulsion supplementaire","spec_value":"200","spec_unit":null},{"id":1036,"product_id":494,"spec_key":"Consommation electrique des accelerateurs","spec_value":"150","spec_unit":"MA"},{"id":1037,"product_id":494,"spec_key":"Generation de chaleur des accelerateurs","spec_value":"500","spec_unit":"MW"},{"id":1038,"product_id":498,"spec_key":"Apport requis","spec_value":"600","spec_unit":"SP"},{"id":1039,"product_id":498,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":1040,"product_id":499,"spec_key":"Apport requis","spec_value":"50","spec_unit":"SP"},{"id":1041,"product_id":499,"spec_key":"Emplacements de modificateurs","spec_value":"1","spec_unit":null},{"id":1042,"product_id":500,"spec_key":"Apport requis","spec_value":"500","spec_unit":"SP"},{"id":1043,"product_id":500,"spec_key":"Taille du reservoir","spec_value":"500","spec_unit":"L"},{"id":1044,"product_id":501,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":1045,"product_id":503,"spec_key":"Puissance d'eclairage","spec_value":"4","spec_unit":"lm"},{"id":1046,"product_id":503,"spec_key":"Portee d'eclairage","spec_value":"200","spec_unit":"np"},{"id":1047,"product_id":503,"spec_key":"Utilisation d'electricite","spec_value":"0.05","spec_unit":"MA"},{"id":1048,"product_id":522,"spec_key":"Cout d'equipement","spec_value":"5","spec_unit":null},{"id":1049,"product_id":522,"spec_key":"Durabilite","spec_value":"30","spec_unit":null},{"id":1050,"product_id":522,"spec_key":"Protection antichaleur","spec_value":"10","spec_unit":null},{"id":1051,"product_id":522,"spec_key":"Protection antifroid","spec_value":"10","spec_unit":null},{"id":1052,"product_id":524,"spec_key":"Points de decoration","spec_value":"15","spec_unit":"DP"},{"id":1053,"product_id":529,"spec_key":"Radioactivite","spec_value":"0.5","spec_unit":"MBq"}],"recipes":[{"id":1,"product_id":1,"station_id":1,"recipe_type":"standard","output_qty":8},{"id":2,"product_id":1,"station_id":1,"recipe_type":"plan","output_qty":15},{"id":3,"product_id":2,"station_id":1,"recipe_type":"standard","output_qty":4},{"id":4,"product_id":2,"station_id":1,"recipe_type":"plan","output_qty":10},{"id":5,"product_id":2,"station_id":1,"recipe_type":"plan","output_qty":9},{"id":6,"product_id":3,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":7,"product_id":3,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":8,"product_id":3,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":9,"product_id":3,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":10,"product_id":4,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":11,"product_id":4,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":12,"product_id":6,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":13,"product_id":7,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":14,"product_id":7,"station_id":1,"recipe_type":"plan","output_qty":4},{"id":15,"product_id":7,"station_id":1,"recipe_type":"plan","output_qty":8},{"id":16,"product_id":7,"station_id":1,"recipe_type":"plan","output_qty":20},{"id":17,"product_id":8,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":18,"product_id":8,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":19,"product_id":8,"station_id":1,"recipe_type":"plan","output_qty":3},{"id":20,"product_id":9,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":21,"product_id":10,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":22,"product_id":10,"station_id":1,"recipe_type":"plan","output_qty":3},{"id":23,"product_id":10,"station_id":1,"recipe_type":"plan","output_qty":5},{"id":24,"product_id":11,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":25,"product_id":12,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":26,"product_id":13,"station_id":1,"recipe_type":"standard","output_qty":4},{"id":27,"product_id":13,"station_id":1,"recipe_type":"plan","output_qty":15},{"id":28,"product_id":13,"station_id":1,"recipe_type":"plan","output_qty":4},{"id":29,"product_id":14,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":30,"product_id":15,"station_id":2,"recipe_type":"standard","output_qty":3},{"id":31,"product_id":17,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":32,"product_id":17,"station_id":5,"recipe_type":"standard","output_qty":4},{"id":33,"product_id":18,"station_id":1,"recipe_type":"standard","output_qty":7},{"id":34,"product_id":18,"station_id":1,"recipe_type":"standard","output_qty":11},{"id":35,"product_id":18,"station_id":1,"recipe_type":"standard","output_qty":9},{"id":36,"product_id":18,"station_id":1,"recipe_type":"standard","output_qty":12},{"id":37,"product_id":19,"station_id":1,"recipe_type":"standard","output_qty":18},{"id":38,"product_id":19,"station_id":1,"recipe_type":"standard","output_qty":16},{"id":39,"product_id":20,"station_id":1,"recipe_type":"standard","output_qty":3},{"id":40,"product_id":22,"station_id":4,"recipe_type":"standard","output_qty":8},{"id":41,"product_id":23,"station_id":4,"recipe_type":"standard","output_qty":2},{"id":42,"product_id":24,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":43,"product_id":24,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":44,"product_id":24,"station_id":2,"recipe_type":"standard","output_qty":4},{"id":45,"product_id":24,"station_id":2,"recipe_type":"standard","output_qty":4},{"id":46,"product_id":25,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":47,"product_id":26,"station_id":4,"recipe_type":"plan","output_qty":40},{"id":48,"product_id":29,"station_id":4,"recipe_type":"standard","output_qty":40},{"id":49,"product_id":31,"station_id":4,"recipe_type":"standard","output_qty":140},{"id":50,"product_id":32,"station_id":4,"recipe_type":"standard","output_qty":25},{"id":51,"product_id":37,"station_id":2,"recipe_type":"standard","output_qty":3},{"id":52,"product_id":38,"station_id":2,"recipe_type":"standard","output_qty":2},{"id":53,"product_id":38,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":54,"product_id":38,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":55,"product_id":38,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":56,"product_id":39,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":57,"product_id":39,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":58,"product_id":39,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":59,"product_id":40,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":60,"product_id":41,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":61,"product_id":42,"station_id":2,"recipe_type":"standard","output_qty":3},{"id":62,"product_id":43,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":63,"product_id":43,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":64,"product_id":44,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":65,"product_id":45,"station_id":1,"recipe_type":"standard","output_qty":3},{"id":66,"product_id":46,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":67,"product_id":47,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":68,"product_id":48,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":69,"product_id":48,"station_id":1,"recipe_type":"plan","output_qty":5},{"id":70,"product_id":48,"station_id":1,"recipe_type":"plan","output_qty":10},{"id":71,"product_id":49,"station_id":1,"recipe_type":"standard","output_qty":4},{"id":72,"product_id":52,"station_id":4,"recipe_type":"standard","output_qty":40},{"id":73,"product_id":53,"station_id":4,"recipe_type":"standard","output_qty":40},{"id":74,"product_id":56,"station_id":4,"recipe_type":"standard","output_qty":12},{"id":75,"product_id":61,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":76,"product_id":61,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":77,"product_id":62,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":78,"product_id":63,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":79,"product_id":64,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":80,"product_id":64,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":81,"product_id":65,"station_id":5,"recipe_type":"standard","output_qty":4},{"id":82,"product_id":65,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":83,"product_id":65,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":84,"product_id":66,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":85,"product_id":67,"station_id":1,"recipe_type":"standard","output_qty":20},{"id":86,"product_id":68,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":87,"product_id":68,"station_id":1,"recipe_type":"plan","output_qty":100},{"id":88,"product_id":69,"station_id":5,"recipe_type":"standard","output_qty":10},{"id":89,"product_id":70,"station_id":5,"recipe_type":"standard","output_qty":10},{"id":90,"product_id":71,"station_id":5,"recipe_type":"standard","output_qty":28},{"id":91,"product_id":71,"station_id":5,"recipe_type":"standard","output_qty":5},{"id":92,"product_id":72,"station_id":1,"recipe_type":"standard","output_qty":3},{"id":93,"product_id":73,"station_id":2,"recipe_type":"standard","output_qty":5},{"id":94,"product_id":73,"station_id":2,"recipe_type":"plan","output_qty":7},{"id":95,"product_id":74,"station_id":2,"recipe_type":"standard","output_qty":5},{"id":96,"product_id":75,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":97,"product_id":75,"station_id":1,"recipe_type":"plan","output_qty":2},{"id":98,"product_id":76,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":99,"product_id":77,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":100,"product_id":78,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":101,"product_id":79,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":102,"product_id":79,"station_id":1,"recipe_type":"plan","output_qty":4},{"id":103,"product_id":79,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":104,"product_id":79,"station_id":1,"recipe_type":"plan","output_qty":2},{"id":105,"product_id":80,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":106,"product_id":81,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":107,"product_id":82,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":108,"product_id":83,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":109,"product_id":83,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":110,"product_id":83,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":111,"product_id":84,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":112,"product_id":85,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":113,"product_id":86,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":114,"product_id":87,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":115,"product_id":88,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":116,"product_id":89,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":117,"product_id":90,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":118,"product_id":91,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":119,"product_id":92,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":120,"product_id":93,"station_id":1,"recipe_type":"standard","output_qty":120},{"id":121,"product_id":95,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":122,"product_id":96,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":123,"product_id":97,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":124,"product_id":98,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":125,"product_id":99,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":126,"product_id":100,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":127,"product_id":101,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":128,"product_id":102,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":129,"product_id":103,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":130,"product_id":104,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":131,"product_id":105,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":132,"product_id":106,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":133,"product_id":107,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":134,"product_id":108,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":135,"product_id":109,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":136,"product_id":110,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":137,"product_id":111,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":138,"product_id":112,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":139,"product_id":113,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":140,"product_id":114,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":141,"product_id":115,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":142,"product_id":116,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":143,"product_id":117,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":144,"product_id":118,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":145,"product_id":119,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":146,"product_id":120,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":147,"product_id":121,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":148,"product_id":122,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":149,"product_id":123,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":150,"product_id":124,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":151,"product_id":125,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":152,"product_id":126,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":153,"product_id":127,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":154,"product_id":128,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":155,"product_id":129,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":156,"product_id":130,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":157,"product_id":131,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":158,"product_id":132,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":159,"product_id":133,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":160,"product_id":134,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":161,"product_id":135,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":162,"product_id":136,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":163,"product_id":137,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":164,"product_id":138,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":165,"product_id":139,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":166,"product_id":140,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":167,"product_id":141,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":168,"product_id":142,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":169,"product_id":143,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":170,"product_id":144,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":171,"product_id":145,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":172,"product_id":146,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":173,"product_id":147,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":174,"product_id":148,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":175,"product_id":149,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":176,"product_id":150,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":177,"product_id":151,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":178,"product_id":152,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":179,"product_id":153,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":180,"product_id":154,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":181,"product_id":155,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":182,"product_id":156,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":183,"product_id":157,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":184,"product_id":158,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":185,"product_id":159,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":186,"product_id":161,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":187,"product_id":162,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":188,"product_id":163,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":189,"product_id":164,"station_id":5,"recipe_type":"standard","output_qty":2},{"id":190,"product_id":164,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":191,"product_id":166,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":192,"product_id":167,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":193,"product_id":168,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":194,"product_id":169,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":195,"product_id":170,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":196,"product_id":171,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":197,"product_id":172,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":198,"product_id":173,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":199,"product_id":174,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":200,"product_id":175,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":201,"product_id":176,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":202,"product_id":177,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":203,"product_id":178,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":204,"product_id":179,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":205,"product_id":180,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":206,"product_id":181,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":207,"product_id":182,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":208,"product_id":183,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":209,"product_id":184,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":210,"product_id":185,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":211,"product_id":186,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":212,"product_id":187,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":213,"product_id":188,"station_id":8,"recipe_type":"standard","output_qty":3},{"id":214,"product_id":189,"station_id":5,"recipe_type":"standard","output_qty":10},{"id":215,"product_id":190,"station_id":5,"recipe_type":"standard","output_qty":10},{"id":216,"product_id":191,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":217,"product_id":192,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":218,"product_id":192,"station_id":6,"recipe_type":"standard","output_qty":50},{"id":219,"product_id":193,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":220,"product_id":194,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":221,"product_id":195,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":222,"product_id":196,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":223,"product_id":198,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":224,"product_id":200,"station_id":2,"recipe_type":"standard","output_qty":6},{"id":225,"product_id":201,"station_id":5,"recipe_type":"standard","output_qty":3},{"id":226,"product_id":202,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":227,"product_id":203,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":228,"product_id":204,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":229,"product_id":205,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":230,"product_id":206,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":231,"product_id":207,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":232,"product_id":208,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":233,"product_id":209,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":234,"product_id":210,"station_id":5,"recipe_type":"standard","output_qty":1},{"id":235,"product_id":211,"station_id":5,"recipe_type":"standard","output_qty":4},{"id":236,"product_id":211,"station_id":6,"recipe_type":"standard","output_qty":10},{"id":237,"product_id":212,"station_id":6,"recipe_type":"standard","output_qty":1},{"id":238,"product_id":215,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":239,"product_id":216,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":240,"product_id":217,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":241,"product_id":218,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":242,"product_id":219,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":243,"product_id":220,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":244,"product_id":221,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":245,"product_id":222,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":246,"product_id":223,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":247,"product_id":224,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":248,"product_id":225,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":249,"product_id":226,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":250,"product_id":227,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":251,"product_id":228,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":252,"product_id":229,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":253,"product_id":230,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":254,"product_id":231,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":255,"product_id":232,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":256,"product_id":233,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":257,"product_id":234,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":258,"product_id":235,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":259,"product_id":236,"station_id":1,"recipe_type":"standard","output_qty":2},{"id":260,"product_id":237,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":261,"product_id":238,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":262,"product_id":239,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":263,"product_id":240,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":264,"product_id":241,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":265,"product_id":242,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":266,"product_id":243,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":267,"product_id":244,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":268,"product_id":245,"station_id":null,"recipe_type":"standard","output_qty":1},{"id":269,"product_id":247,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":270,"product_id":252,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":271,"product_id":253,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":272,"product_id":255,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":273,"product_id":257,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":274,"product_id":258,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":275,"product_id":259,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":276,"product_id":260,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":277,"product_id":261,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":278,"product_id":262,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":279,"product_id":263,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":280,"product_id":264,"station_id":7,"recipe_type":"standard","output_qty":1},{"id":281,"product_id":268,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":282,"product_id":270,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":283,"product_id":271,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":284,"product_id":272,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":285,"product_id":274,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":286,"product_id":350,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":287,"product_id":363,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":288,"product_id":364,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":289,"product_id":365,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":290,"product_id":366,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":291,"product_id":367,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":292,"product_id":370,"station_id":4,"recipe_type":"standard","output_qty":1},{"id":293,"product_id":371,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":294,"product_id":374,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":295,"product_id":375,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":296,"product_id":376,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":297,"product_id":377,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":298,"product_id":378,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":299,"product_id":379,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":300,"product_id":380,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":301,"product_id":381,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":302,"product_id":382,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":303,"product_id":383,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":304,"product_id":384,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":305,"product_id":385,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":306,"product_id":387,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":307,"product_id":389,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":308,"product_id":394,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":309,"product_id":397,"station_id":5,"recipe_type":"plan","output_qty":1},{"id":310,"product_id":398,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":311,"product_id":401,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":312,"product_id":405,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":313,"product_id":407,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":314,"product_id":408,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":315,"product_id":410,"station_id":7,"recipe_type":"plan","output_qty":1},{"id":316,"product_id":411,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":317,"product_id":412,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":318,"product_id":413,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":319,"product_id":414,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":320,"product_id":415,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":321,"product_id":417,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":322,"product_id":420,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":323,"product_id":421,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":324,"product_id":422,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":325,"product_id":426,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":326,"product_id":427,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":327,"product_id":428,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":328,"product_id":429,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":329,"product_id":431,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":330,"product_id":432,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":331,"product_id":435,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":332,"product_id":437,"station_id":5,"recipe_type":"plan","output_qty":1},{"id":333,"product_id":438,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":334,"product_id":439,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":335,"product_id":441,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":336,"product_id":442,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":337,"product_id":444,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":338,"product_id":445,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":339,"product_id":447,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":340,"product_id":448,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":341,"product_id":450,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":342,"product_id":453,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":343,"product_id":464,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":344,"product_id":465,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":345,"product_id":474,"station_id":1,"recipe_type":"standard","output_qty":3},{"id":346,"product_id":475,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":347,"product_id":476,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":348,"product_id":477,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":349,"product_id":478,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":350,"product_id":483,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":351,"product_id":484,"station_id":1,"recipe_type":"standard","output_qty":3},{"id":352,"product_id":491,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":353,"product_id":492,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":354,"product_id":493,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":355,"product_id":494,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":356,"product_id":495,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":357,"product_id":497,"station_id":3,"recipe_type":"standard","output_qty":1},{"id":358,"product_id":498,"station_id":1,"recipe_type":"plan","output_qty":1},{"id":359,"product_id":500,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":360,"product_id":501,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":361,"product_id":503,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":362,"product_id":522,"station_id":1,"recipe_type":"standard","output_qty":1},{"id":363,"product_id":524,"station_id":9,"recipe_type":"standard","output_qty":1},{"id":364,"product_id":527,"station_id":1,"recipe_type":"standard","output_qty":5},{"id":365,"product_id":541,"station_id":2,"recipe_type":"standard","output_qty":1},{"id":366,"product_id":541,"station_id":2,"recipe_type":"standard","output_qty":1}],"recipe_ingredients":[{"id":1,"recipe_id":1,"ingredient_id":3,"quantity":1.0},{"id":2,"recipe_id":2,"ingredient_id":4,"quantity":1.0},{"id":3,"recipe_id":3,"ingredient_id":24,"quantity":1.0},{"id":4,"recipe_id":4,"ingredient_id":3,"quantity":3.0},{"id":5,"recipe_id":5,"ingredient_id":39,"quantity":2.0},{"id":6,"recipe_id":6,"ingredient_id":50,"quantity":2.0},{"id":7,"recipe_id":7,"ingredient_id":51,"quantity":4.0},{"id":8,"recipe_id":8,"ingredient_id":52,"quantity":1.0},{"id":9,"recipe_id":9,"ingredient_id":53,"quantity":1.0},{"id":10,"recipe_id":10,"ingredient_id":27,"quantity":2.0},{"id":11,"recipe_id":11,"ingredient_id":28,"quantity":4.0},{"id":12,"recipe_id":12,"ingredient_id":1,"quantity":20.0},{"id":13,"recipe_id":12,"ingredient_id":2,"quantity":10.0},{"id":14,"recipe_id":13,"ingredient_id":3,"quantity":1.0},{"id":15,"recipe_id":14,"ingredient_id":4,"quantity":1.0},{"id":16,"recipe_id":15,"ingredient_id":24,"quantity":3.0},{"id":17,"recipe_id":16,"ingredient_id":39,"quantity":4.0},{"id":18,"recipe_id":16,"ingredient_id":38,"quantity":1.0},{"id":19,"recipe_id":17,"ingredient_id":4,"quantity":1.0},{"id":20,"recipe_id":17,"ingredient_id":3,"quantity":1.0},{"id":21,"recipe_id":18,"ingredient_id":7,"quantity":2.0},{"id":22,"recipe_id":18,"ingredient_id":1,"quantity":4.0},{"id":23,"recipe_id":19,"ingredient_id":42,"quantity":1.0},{"id":24,"recipe_id":20,"ingredient_id":15,"quantity":2.0},{"id":25,"recipe_id":21,"ingredient_id":39,"quantity":2.0},{"id":26,"recipe_id":21,"ingredient_id":24,"quantity":1.0},{"id":27,"recipe_id":22,"ingredient_id":39,"quantity":3.0},{"id":28,"recipe_id":22,"ingredient_id":3,"quantity":2.0},{"id":29,"recipe_id":23,"ingredient_id":15,"quantity":3.0},{"id":30,"recipe_id":23,"ingredient_id":38,"quantity":1.0},{"id":31,"recipe_id":24,"ingredient_id":9,"quantity":6.0},{"id":32,"recipe_id":24,"ingredient_id":10,"quantity":4.0},{"id":33,"recipe_id":25,"ingredient_id":2,"quantity":12.0},{"id":34,"recipe_id":25,"ingredient_id":14,"quantity":1.0},{"id":35,"recipe_id":26,"ingredient_id":38,"quantity":1.0},{"id":36,"recipe_id":27,"ingredient_id":49,"quantity":10.0},{"id":37,"recipe_id":28,"ingredient_id":53,"quantity":1.0},{"id":38,"recipe_id":29,"ingredient_id":13,"quantity":1.0},{"id":39,"recipe_id":30,"ingredient_id":3,"quantity":4.0},{"id":40,"recipe_id":30,"ingredient_id":5,"quantity":4.0},{"id":41,"recipe_id":31,"ingredient_id":53,"quantity":1.0},{"id":42,"recipe_id":32,"ingredient_id":59,"quantity":1.0},{"id":43,"recipe_id":33,"ingredient_id":52,"quantity":1.0},{"id":44,"recipe_id":34,"ingredient_id":32,"quantity":1.0},{"id":45,"recipe_id":35,"ingredient_id":56,"quantity":1.0},{"id":46,"recipe_id":36,"ingredient_id":29,"quantity":1.0},{"id":47,"recipe_id":37,"ingredient_id":23,"quantity":1.0},{"id":48,"recipe_id":38,"ingredient_id":22,"quantity":1.0},{"id":49,"recipe_id":39,"ingredient_id":53,"quantity":1.0},{"id":50,"recipe_id":40,"ingredient_id":24,"quantity":50.0},{"id":51,"recipe_id":40,"ingredient_id":19,"quantity":1.0},{"id":52,"recipe_id":41,"ingredient_id":24,"quantity":50.0},{"id":53,"recipe_id":41,"ingredient_id":19,"quantity":1.0},{"id":54,"recipe_id":42,"ingredient_id":16,"quantity":2.0},{"id":55,"recipe_id":43,"ingredient_id":21,"quantity":4.0},{"id":56,"recipe_id":44,"ingredient_id":22,"quantity":1.0},{"id":57,"recipe_id":45,"ingredient_id":23,"quantity":1.0},{"id":58,"recipe_id":46,"ingredient_id":11,"quantity":2.0},{"id":59,"recipe_id":46,"ingredient_id":12,"quantity":4.0},{"id":60,"recipe_id":47,"ingredient_id":39,"quantity":10.0},{"id":61,"recipe_id":47,"ingredient_id":38,"quantity":10.0},{"id":62,"recipe_id":47,"ingredient_id":19,"quantity":1.0},{"id":63,"recipe_id":48,"ingredient_id":38,"quantity":32.0},{"id":64,"recipe_id":48,"ingredient_id":39,"quantity":16.0},{"id":65,"recipe_id":48,"ingredient_id":18,"quantity":1.0},{"id":66,"recipe_id":49,"ingredient_id":38,"quantity":32.0},{"id":67,"recipe_id":49,"ingredient_id":18,"quantity":1.0},{"id":68,"recipe_id":50,"ingredient_id":38,"quantity":32.0},{"id":69,"recipe_id":50,"ingredient_id":18,"quantity":1.0},{"id":70,"recipe_id":51,"ingredient_id":39,"quantity":3.0},{"id":71,"recipe_id":51,"ingredient_id":26,"quantity":1.0},{"id":72,"recipe_id":52,"ingredient_id":29,"quantity":3.0},{"id":73,"recipe_id":53,"ingredient_id":30,"quantity":12.0},{"id":74,"recipe_id":54,"ingredient_id":31,"quantity":20.0},{"id":75,"recipe_id":55,"ingredient_id":32,"quantity":1.0},{"id":76,"recipe_id":56,"ingredient_id":33,"quantity":2.0},{"id":77,"recipe_id":57,"ingredient_id":34,"quantity":4.0},{"id":78,"recipe_id":58,"ingredient_id":29,"quantity":3.0},{"id":79,"recipe_id":59,"ingredient_id":35,"quantity":2.0},{"id":80,"recipe_id":60,"ingredient_id":36,"quantity":2.0},{"id":81,"recipe_id":61,"ingredient_id":4,"quantity":4.0},{"id":82,"recipe_id":61,"ingredient_id":40,"quantity":1.0},{"id":83,"recipe_id":62,"ingredient_id":54,"quantity":3.0},{"id":84,"recipe_id":63,"ingredient_id":55,"quantity":50.0},{"id":85,"recipe_id":64,"ingredient_id":42,"quantity":2.0},{"id":86,"recipe_id":64,"ingredient_id":15,"quantity":1.0},{"id":87,"recipe_id":65,"ingredient_id":3,"quantity":1.0},{"id":88,"recipe_id":65,"ingredient_id":49,"quantity":1.0},{"id":89,"recipe_id":65,"ingredient_id":43,"quantity":1.0},{"id":90,"recipe_id":66,"ingredient_id":37,"quantity":1.0},{"id":91,"recipe_id":67,"ingredient_id":42,"quantity":2.0},{"id":92,"recipe_id":68,"ingredient_id":24,"quantity":1.0},{"id":93,"recipe_id":69,"ingredient_id":39,"quantity":1.0},{"id":94,"recipe_id":69,"ingredient_id":24,"quantity":1.0},{"id":95,"recipe_id":70,"ingredient_id":37,"quantity":3.0},{"id":96,"recipe_id":71,"ingredient_id":56,"quantity":1.0},{"id":97,"recipe_id":72,"ingredient_id":3,"quantity":50.0},{"id":98,"recipe_id":72,"ingredient_id":18,"quantity":1.0},{"id":99,"recipe_id":73,"ingredient_id":17,"quantity":200.0},{"id":100,"recipe_id":73,"ingredient_id":3,"quantity":50.0},{"id":101,"recipe_id":73,"ingredient_id":20,"quantity":1.0},{"id":102,"recipe_id":74,"ingredient_id":5,"quantity":50.0},{"id":103,"recipe_id":74,"ingredient_id":18,"quantity":1.0},{"id":104,"recipe_id":75,"ingredient_id":62,"quantity":1.0},{"id":105,"recipe_id":76,"ingredient_id":157,"quantity":1.0},{"id":106,"recipe_id":77,"ingredient_id":158,"quantity":1.0},{"id":107,"recipe_id":78,"ingredient_id":159,"quantity":1.0},{"id":108,"recipe_id":79,"ingredient_id":160,"quantity":1.0},{"id":109,"recipe_id":80,"ingredient_id":161,"quantity":1.0},{"id":110,"recipe_id":81,"ingredient_id":59,"quantity":1.0},{"id":111,"recipe_id":82,"ingredient_id":162,"quantity":1.0},{"id":112,"recipe_id":83,"ingredient_id":62,"quantity":40.0},{"id":113,"recipe_id":84,"ingredient_id":163,"quantity":1.0},{"id":114,"recipe_id":85,"ingredient_id":38,"quantity":1.0},{"id":115,"recipe_id":86,"ingredient_id":17,"quantity":5.0},{"id":116,"recipe_id":86,"ingredient_id":5,"quantity":2.0},{"id":117,"recipe_id":87,"ingredient_id":265,"quantity":30.0},{"id":118,"recipe_id":87,"ingredient_id":3,"quantity":3.0},{"id":119,"recipe_id":88,"ingredient_id":164,"quantity":5.0},{"id":120,"recipe_id":88,"ingredient_id":74,"quantity":10.0},{"id":121,"recipe_id":89,"ingredient_id":61,"quantity":5.0},{"id":122,"recipe_id":89,"ingredient_id":3,"quantity":1.0},{"id":123,"recipe_id":89,"ingredient_id":39,"quantity":1.0},{"id":124,"recipe_id":90,"ingredient_id":5,"quantity":10.0},{"id":125,"recipe_id":90,"ingredient_id":61,"quantity":10.0},{"id":126,"recipe_id":91,"ingredient_id":56,"quantity":1.0},{"id":127,"recipe_id":91,"ingredient_id":61,"quantity":5.0},{"id":128,"recipe_id":92,"ingredient_id":26,"quantity":1.0},{"id":129,"recipe_id":93,"ingredient_id":30,"quantity":2.0},{"id":130,"recipe_id":94,"ingredient_id":31,"quantity":3.0},{"id":131,"recipe_id":94,"ingredient_id":30,"quantity":1.0},{"id":132,"recipe_id":95,"ingredient_id":58,"quantity":1.0},{"id":133,"recipe_id":96,"ingredient_id":2,"quantity":5.0},{"id":134,"recipe_id":96,"ingredient_id":3,"quantity":1.0},{"id":135,"recipe_id":96,"ingredient_id":1,"quantity":1.0},{"id":136,"recipe_id":97,"ingredient_id":13,"quantity":5.0},{"id":137,"recipe_id":98,"ingredient_id":7,"quantity":1.0},{"id":138,"recipe_id":98,"ingredient_id":75,"quantity":5.0},{"id":139,"recipe_id":98,"ingredient_id":67,"quantity":5.0},{"id":140,"recipe_id":99,"ingredient_id":76,"quantity":1.0},{"id":141,"recipe_id":99,"ingredient_id":48,"quantity":2.0},{"id":142,"recipe_id":99,"ingredient_id":8,"quantity":3.0},{"id":143,"recipe_id":100,"ingredient_id":7,"quantity":6.0},{"id":144,"recipe_id":100,"ingredient_id":75,"quantity":14.0},{"id":145,"recipe_id":100,"ingredient_id":43,"quantity":2.0},{"id":146,"recipe_id":101,"ingredient_id":32,"quantity":1.0},{"id":147,"recipe_id":101,"ingredient_id":2,"quantity":5.0},{"id":148,"recipe_id":102,"ingredient_id":20,"quantity":9.0},{"id":149,"recipe_id":102,"ingredient_id":2,"quantity":16.0},{"id":150,"recipe_id":103,"ingredient_id":18,"quantity":9.0},{"id":151,"recipe_id":103,"ingredient_id":2,"quantity":3.0},{"id":152,"recipe_id":104,"ingredient_id":19,"quantity":6.0},{"id":153,"recipe_id":104,"ingredient_id":2,"quantity":6.0},{"id":154,"recipe_id":105,"ingredient_id":79,"quantity":3.0},{"id":155,"recipe_id":105,"ingredient_id":38,"quantity":6.0},{"id":156,"recipe_id":105,"ingredient_id":18,"quantity":12.0},{"id":157,"recipe_id":105,"ingredient_id":19,"quantity":4.0},{"id":158,"recipe_id":105,"ingredient_id":20,"quantity":3.0},{"id":159,"recipe_id":106,"ingredient_id":49,"quantity":40.0},{"id":160,"recipe_id":106,"ingredient_id":18,"quantity":15.0},{"id":161,"recipe_id":106,"ingredient_id":19,"quantity":35.0},{"id":162,"recipe_id":106,"ingredient_id":20,"quantity":50.0},{"id":163,"recipe_id":107,"ingredient_id":13,"quantity":3.0},{"id":164,"recipe_id":107,"ingredient_id":75,"quantity":3.0},{"id":165,"recipe_id":107,"ingredient_id":7,"quantity":3.0},{"id":166,"recipe_id":108,"ingredient_id":38,"quantity":1.0},{"id":167,"recipe_id":108,"ingredient_id":39,"quantity":2.0},{"id":168,"recipe_id":109,"ingredient_id":13,"quantity":3.0},{"id":169,"recipe_id":110,"ingredient_id":20,"quantity":4.0},{"id":170,"recipe_id":111,"ingredient_id":75,"quantity":4.0},{"id":171,"recipe_id":111,"ingredient_id":45,"quantity":15.0},{"id":172,"recipe_id":112,"ingredient_id":10,"quantity":1.0},{"id":173,"recipe_id":112,"ingredient_id":13,"quantity":1.0},{"id":174,"recipe_id":112,"ingredient_id":2,"quantity":5.0},{"id":175,"recipe_id":113,"ingredient_id":164,"quantity":20.0},{"id":176,"recipe_id":113,"ingredient_id":10,"quantity":1.0},{"id":177,"recipe_id":113,"ingredient_id":56,"quantity":1.0},{"id":178,"recipe_id":113,"ingredient_id":40,"quantity":1.0},{"id":179,"recipe_id":114,"ingredient_id":7,"quantity":1.0},{"id":180,"recipe_id":114,"ingredient_id":67,"quantity":1.0},{"id":181,"recipe_id":114,"ingredient_id":68,"quantity":2.0},{"id":182,"recipe_id":115,"ingredient_id":6,"quantity":4.0},{"id":183,"recipe_id":115,"ingredient_id":49,"quantity":20.0},{"id":184,"recipe_id":115,"ingredient_id":8,"quantity":20.0},{"id":185,"recipe_id":116,"ingredient_id":44,"quantity":8.0},{"id":186,"recipe_id":116,"ingredient_id":47,"quantity":4.0},{"id":187,"recipe_id":117,"ingredient_id":89,"quantity":4.0},{"id":188,"recipe_id":117,"ingredient_id":44,"quantity":12.0},{"id":189,"recipe_id":118,"ingredient_id":76,"quantity":1.0},{"id":190,"recipe_id":118,"ingredient_id":14,"quantity":1.0},{"id":191,"recipe_id":118,"ingredient_id":7,"quantity":1.0},{"id":192,"recipe_id":118,"ingredient_id":1,"quantity":6.0},{"id":193,"recipe_id":119,"ingredient_id":68,"quantity":8.0},{"id":194,"recipe_id":119,"ingredient_id":87,"quantity":5.0},{"id":195,"recipe_id":120,"ingredient_id":68,"quantity":1.0},{"id":196,"recipe_id":120,"ingredient_id":7,"quantity":1.0},{"id":197,"recipe_id":121,"ingredient_id":75,"quantity":2.0},{"id":198,"recipe_id":121,"ingredient_id":60,"quantity":1.0},{"id":199,"recipe_id":122,"ingredient_id":6,"quantity":1.0},{"id":200,"recipe_id":122,"ingredient_id":79,"quantity":2.0},{"id":201,"recipe_id":123,"ingredient_id":88,"quantity":1.0},{"id":202,"recipe_id":123,"ingredient_id":80,"quantity":3.0},{"id":203,"recipe_id":124,"ingredient_id":97,"quantity":1.0},{"id":204,"recipe_id":124,"ingredient_id":80,"quantity":5.0},{"id":205,"recipe_id":124,"ingredient_id":75,"quantity":10.0},{"id":206,"recipe_id":125,"ingredient_id":6,"quantity":1.0},{"id":207,"recipe_id":125,"ingredient_id":77,"quantity":2.0},{"id":208,"recipe_id":125,"ingredient_id":10,"quantity":1.0},{"id":209,"recipe_id":126,"ingredient_id":101,"quantity":1.0},{"id":210,"recipe_id":126,"ingredient_id":79,"quantity":1.0},{"id":211,"recipe_id":126,"ingredient_id":83,"quantity":3.0},{"id":212,"recipe_id":127,"ingredient_id":6,"quantity":1.0},{"id":213,"recipe_id":127,"ingredient_id":75,"quantity":2.0},{"id":214,"recipe_id":128,"ingredient_id":6,"quantity":1.0},{"id":215,"recipe_id":128,"ingredient_id":85,"quantity":24.0},{"id":216,"recipe_id":129,"ingredient_id":88,"quantity":1.0},{"id":217,"recipe_id":129,"ingredient_id":85,"quantity":90.0},{"id":218,"recipe_id":130,"ingredient_id":6,"quantity":1.0},{"id":219,"recipe_id":130,"ingredient_id":46,"quantity":5.0},{"id":220,"recipe_id":130,"ingredient_id":2,"quantity":50.0},{"id":221,"recipe_id":131,"ingredient_id":6,"quantity":1.0},{"id":222,"recipe_id":131,"ingredient_id":7,"quantity":3.0},{"id":223,"recipe_id":131,"ingredient_id":1,"quantity":10.0},{"id":224,"recipe_id":132,"ingredient_id":6,"quantity":1.0},{"id":225,"recipe_id":132,"ingredient_id":1,"quantity":4.0},{"id":226,"recipe_id":132,"ingredient_id":2,"quantity":2.0},{"id":227,"recipe_id":133,"ingredient_id":106,"quantity":1.0},{"id":228,"recipe_id":133,"ingredient_id":83,"quantity":5.0},{"id":229,"recipe_id":133,"ingredient_id":20,"quantity":1.0},{"id":230,"recipe_id":134,"ingredient_id":6,"quantity":1.0},{"id":231,"recipe_id":134,"ingredient_id":7,"quantity":6.0},{"id":232,"recipe_id":134,"ingredient_id":67,"quantity":4.0},{"id":233,"recipe_id":135,"ingredient_id":88,"quantity":1.0},{"id":234,"recipe_id":135,"ingredient_id":7,"quantity":30.0},{"id":235,"recipe_id":135,"ingredient_id":67,"quantity":20.0},{"id":236,"recipe_id":136,"ingredient_id":6,"quantity":1.0},{"id":237,"recipe_id":136,"ingredient_id":48,"quantity":25.0},{"id":238,"recipe_id":136,"ingredient_id":10,"quantity":15.0},{"id":239,"recipe_id":136,"ingredient_id":67,"quantity":30.0},{"id":240,"recipe_id":137,"ingredient_id":6,"quantity":1.0},{"id":241,"recipe_id":137,"ingredient_id":79,"quantity":1.0},{"id":242,"recipe_id":137,"ingredient_id":2,"quantity":7.0},{"id":243,"recipe_id":137,"ingredient_id":67,"quantity":2.0},{"id":244,"recipe_id":138,"ingredient_id":6,"quantity":1.0},{"id":245,"recipe_id":138,"ingredient_id":84,"quantity":1.0},{"id":246,"recipe_id":139,"ingredient_id":88,"quantity":1.0},{"id":247,"recipe_id":139,"ingredient_id":84,"quantity":5.0},{"id":248,"recipe_id":140,"ingredient_id":6,"quantity":1.0},{"id":249,"recipe_id":140,"ingredient_id":14,"quantity":5.0},{"id":250,"recipe_id":141,"ingredient_id":6,"quantity":1.0},{"id":251,"recipe_id":141,"ingredient_id":78,"quantity":1.0},{"id":252,"recipe_id":141,"ingredient_id":18,"quantity":1.0},{"id":253,"recipe_id":142,"ingredient_id":88,"quantity":1.0},{"id":254,"recipe_id":142,"ingredient_id":78,"quantity":4.0},{"id":255,"recipe_id":142,"ingredient_id":18,"quantity":16.0},{"id":256,"recipe_id":142,"ingredient_id":20,"quantity":3.0},{"id":257,"recipe_id":143,"ingredient_id":6,"quantity":1.0},{"id":258,"recipe_id":143,"ingredient_id":76,"quantity":10.0},{"id":259,"recipe_id":143,"ingredient_id":48,"quantity":4.0},{"id":260,"recipe_id":143,"ingredient_id":9,"quantity":5.0},{"id":261,"recipe_id":144,"ingredient_id":6,"quantity":1.0},{"id":262,"recipe_id":144,"ingredient_id":86,"quantity":5.0},{"id":263,"recipe_id":145,"ingredient_id":6,"quantity":1.0},{"id":264,"recipe_id":145,"ingredient_id":76,"quantity":1.0},{"id":265,"recipe_id":145,"ingredient_id":73,"quantity":2.0},{"id":266,"recipe_id":146,"ingredient_id":11,"quantity":3.0},{"id":267,"recipe_id":146,"ingredient_id":12,"quantity":6.0},{"id":268,"recipe_id":146,"ingredient_id":2,"quantity":20.0},{"id":269,"recipe_id":146,"ingredient_id":75,"quantity":8.0},{"id":270,"recipe_id":147,"ingredient_id":10,"quantity":10.0},{"id":271,"recipe_id":147,"ingredient_id":2,"quantity":50.0},{"id":272,"recipe_id":147,"ingredient_id":76,"quantity":2.0},{"id":273,"recipe_id":148,"ingredient_id":11,"quantity":3.0},{"id":274,"recipe_id":148,"ingredient_id":12,"quantity":6.0},{"id":275,"recipe_id":148,"ingredient_id":7,"quantity":20.0},{"id":276,"recipe_id":148,"ingredient_id":1,"quantity":40.0},{"id":277,"recipe_id":149,"ingredient_id":11,"quantity":3.0},{"id":278,"recipe_id":149,"ingredient_id":12,"quantity":6.0},{"id":279,"recipe_id":149,"ingredient_id":46,"quantity":20.0},{"id":280,"recipe_id":150,"ingredient_id":10,"quantity":10.0},{"id":281,"recipe_id":150,"ingredient_id":2,"quantity":40.0},{"id":282,"recipe_id":150,"ingredient_id":82,"quantity":1.0},{"id":283,"recipe_id":151,"ingredient_id":11,"quantity":2.0},{"id":284,"recipe_id":151,"ingredient_id":12,"quantity":4.0},{"id":285,"recipe_id":151,"ingredient_id":82,"quantity":3.0},{"id":286,"recipe_id":151,"ingredient_id":76,"quantity":2.0},{"id":287,"recipe_id":152,"ingredient_id":11,"quantity":2.0},{"id":288,"recipe_id":152,"ingredient_id":12,"quantity":4.0},{"id":289,"recipe_id":152,"ingredient_id":82,"quantity":3.0},{"id":290,"recipe_id":152,"ingredient_id":2,"quantity":15.0},{"id":291,"recipe_id":152,"ingredient_id":48,"quantity":15.0},{"id":292,"recipe_id":153,"ingredient_id":11,"quantity":2.0},{"id":293,"recipe_id":153,"ingredient_id":12,"quantity":4.0},{"id":294,"recipe_id":153,"ingredient_id":82,"quantity":3.0},{"id":295,"recipe_id":153,"ingredient_id":46,"quantity":6.0},{"id":296,"recipe_id":153,"ingredient_id":52,"quantity":3.0},{"id":297,"recipe_id":154,"ingredient_id":11,"quantity":2.0},{"id":298,"recipe_id":154,"ingredient_id":12,"quantity":2.0},{"id":299,"recipe_id":155,"ingredient_id":11,"quantity":3.0},{"id":300,"recipe_id":155,"ingredient_id":12,"quantity":3.0},{"id":301,"recipe_id":156,"ingredient_id":11,"quantity":4.0},{"id":302,"recipe_id":156,"ingredient_id":12,"quantity":4.0},{"id":303,"recipe_id":157,"ingredient_id":11,"quantity":3.0},{"id":304,"recipe_id":157,"ingredient_id":12,"quantity":6.0},{"id":305,"recipe_id":158,"ingredient_id":11,"quantity":4.0},{"id":306,"recipe_id":158,"ingredient_id":12,"quantity":8.0},{"id":307,"recipe_id":159,"ingredient_id":128,"quantity":1.0},{"id":308,"recipe_id":159,"ingredient_id":46,"quantity":4.0},{"id":309,"recipe_id":160,"ingredient_id":129,"quantity":1.0},{"id":310,"recipe_id":160,"ingredient_id":46,"quantity":6.0},{"id":311,"recipe_id":161,"ingredient_id":130,"quantity":1.0},{"id":312,"recipe_id":161,"ingredient_id":46,"quantity":8.0},{"id":313,"recipe_id":162,"ingredient_id":25,"quantity":1.0},{"id":314,"recipe_id":162,"ingredient_id":46,"quantity":6.0},{"id":315,"recipe_id":163,"ingredient_id":131,"quantity":1.0},{"id":316,"recipe_id":163,"ingredient_id":46,"quantity":9.0},{"id":317,"recipe_id":164,"ingredient_id":132,"quantity":1.0},{"id":318,"recipe_id":164,"ingredient_id":46,"quantity":12.0},{"id":319,"recipe_id":165,"ingredient_id":89,"quantity":2.0},{"id":320,"recipe_id":165,"ingredient_id":12,"quantity":2.0},{"id":321,"recipe_id":166,"ingredient_id":89,"quantity":3.0},{"id":322,"recipe_id":166,"ingredient_id":12,"quantity":3.0},{"id":323,"recipe_id":167,"ingredient_id":89,"quantity":4.0},{"id":324,"recipe_id":167,"ingredient_id":12,"quantity":4.0},{"id":325,"recipe_id":168,"ingredient_id":89,"quantity":2.0},{"id":326,"recipe_id":168,"ingredient_id":12,"quantity":4.0},{"id":327,"recipe_id":169,"ingredient_id":89,"quantity":3.0},{"id":328,"recipe_id":169,"ingredient_id":12,"quantity":6.0},{"id":329,"recipe_id":170,"ingredient_id":89,"quantity":4.0},{"id":330,"recipe_id":170,"ingredient_id":12,"quantity":8.0},{"id":331,"recipe_id":171,"ingredient_id":90,"quantity":2.0},{"id":332,"recipe_id":171,"ingredient_id":12,"quantity":8.0},{"id":333,"recipe_id":172,"ingredient_id":90,"quantity":3.0},{"id":334,"recipe_id":172,"ingredient_id":12,"quantity":12.0},{"id":335,"recipe_id":173,"ingredient_id":90,"quantity":4.0},{"id":336,"recipe_id":173,"ingredient_id":12,"quantity":16.0},{"id":337,"recipe_id":174,"ingredient_id":139,"quantity":1.0},{"id":338,"recipe_id":174,"ingredient_id":46,"quantity":4.0},{"id":339,"recipe_id":175,"ingredient_id":140,"quantity":1.0},{"id":340,"recipe_id":175,"ingredient_id":46,"quantity":6.0},{"id":341,"recipe_id":176,"ingredient_id":141,"quantity":1.0},{"id":342,"recipe_id":176,"ingredient_id":46,"quantity":8.0},{"id":343,"recipe_id":177,"ingredient_id":142,"quantity":1.0},{"id":344,"recipe_id":177,"ingredient_id":46,"quantity":6.0},{"id":345,"recipe_id":178,"ingredient_id":143,"quantity":1.0},{"id":346,"recipe_id":178,"ingredient_id":46,"quantity":9.0},{"id":347,"recipe_id":179,"ingredient_id":144,"quantity":1.0},{"id":348,"recipe_id":179,"ingredient_id":46,"quantity":12.0},{"id":349,"recipe_id":180,"ingredient_id":145,"quantity":1.0},{"id":350,"recipe_id":180,"ingredient_id":46,"quantity":16.0},{"id":351,"recipe_id":181,"ingredient_id":146,"quantity":1.0},{"id":352,"recipe_id":181,"ingredient_id":46,"quantity":24.0},{"id":353,"recipe_id":182,"ingredient_id":147,"quantity":1.0},{"id":354,"recipe_id":182,"ingredient_id":46,"quantity":32.0},{"id":355,"recipe_id":183,"ingredient_id":191,"quantity":1.0},{"id":356,"recipe_id":183,"ingredient_id":61,"quantity":10.0},{"id":357,"recipe_id":184,"ingredient_id":191,"quantity":1.0},{"id":358,"recipe_id":184,"ingredient_id":62,"quantity":10.0},{"id":359,"recipe_id":185,"ingredient_id":191,"quantity":1.0},{"id":360,"recipe_id":185,"ingredient_id":63,"quantity":10.0},{"id":361,"recipe_id":186,"ingredient_id":191,"quantity":1.0},{"id":362,"recipe_id":186,"ingredient_id":64,"quantity":10.0},{"id":363,"recipe_id":187,"ingredient_id":191,"quantity":1.0},{"id":364,"recipe_id":187,"ingredient_id":65,"quantity":10.0},{"id":365,"recipe_id":188,"ingredient_id":192,"quantity":1.0},{"id":366,"recipe_id":188,"ingredient_id":66,"quantity":50.0},{"id":367,"recipe_id":189,"ingredient_id":61,"quantity":1.0},{"id":368,"recipe_id":189,"ingredient_id":17,"quantity":1.0},{"id":369,"recipe_id":190,"ingredient_id":214,"quantity":1.0},{"id":370,"recipe_id":191,"ingredient_id":165,"quantity":1.0},{"id":371,"recipe_id":192,"ingredient_id":10,"quantity":50.0},{"id":372,"recipe_id":192,"ingredient_id":9,"quantity":25.0},{"id":373,"recipe_id":192,"ingredient_id":75,"quantity":80.0},{"id":374,"recipe_id":192,"ingredient_id":73,"quantity":250.0},{"id":375,"recipe_id":193,"ingredient_id":76,"quantity":1.0},{"id":376,"recipe_id":193,"ingredient_id":73,"quantity":4.0},{"id":377,"recipe_id":194,"ingredient_id":9,"quantity":4.0},{"id":378,"recipe_id":194,"ingredient_id":10,"quantity":40.0},{"id":379,"recipe_id":194,"ingredient_id":73,"quantity":10.0},{"id":380,"recipe_id":194,"ingredient_id":77,"quantity":20.0},{"id":381,"recipe_id":194,"ingredient_id":48,"quantity":80.0},{"id":382,"recipe_id":195,"ingredient_id":9,"quantity":2.0},{"id":383,"recipe_id":195,"ingredient_id":10,"quantity":10.0},{"id":384,"recipe_id":195,"ingredient_id":73,"quantity":10.0},{"id":385,"recipe_id":195,"ingredient_id":48,"quantity":10.0},{"id":386,"recipe_id":196,"ingredient_id":9,"quantity":10.0},{"id":387,"recipe_id":196,"ingredient_id":10,"quantity":10.0},{"id":388,"recipe_id":196,"ingredient_id":73,"quantity":50.0},{"id":389,"recipe_id":196,"ingredient_id":77,"quantity":4.0},{"id":390,"recipe_id":196,"ingredient_id":48,"quantity":60.0},{"id":391,"recipe_id":197,"ingredient_id":9,"quantity":4.0},{"id":392,"recipe_id":197,"ingredient_id":10,"quantity":8.0},{"id":393,"recipe_id":197,"ingredient_id":73,"quantity":40.0},{"id":394,"recipe_id":197,"ingredient_id":76,"quantity":3.0},{"id":395,"recipe_id":198,"ingredient_id":10,"quantity":1.0},{"id":396,"recipe_id":198,"ingredient_id":73,"quantity":10.0},{"id":397,"recipe_id":199,"ingredient_id":10,"quantity":2.0},{"id":398,"recipe_id":199,"ingredient_id":73,"quantity":5.0},{"id":399,"recipe_id":199,"ingredient_id":58,"quantity":1.0},{"id":400,"recipe_id":200,"ingredient_id":77,"quantity":5.0},{"id":401,"recipe_id":200,"ingredient_id":9,"quantity":8.0},{"id":402,"recipe_id":200,"ingredient_id":73,"quantity":40.0},{"id":403,"recipe_id":200,"ingredient_id":10,"quantity":80.0},{"id":404,"recipe_id":200,"ingredient_id":48,"quantity":120.0},{"id":405,"recipe_id":201,"ingredient_id":77,"quantity":1.0},{"id":406,"recipe_id":201,"ingredient_id":10,"quantity":10.0},{"id":407,"recipe_id":201,"ingredient_id":48,"quantity":10.0},{"id":408,"recipe_id":201,"ingredient_id":8,"quantity":5.0},{"id":409,"recipe_id":201,"ingredient_id":73,"quantity":5.0},{"id":410,"recipe_id":202,"ingredient_id":9,"quantity":1.0},{"id":411,"recipe_id":202,"ingredient_id":10,"quantity":9.0},{"id":412,"recipe_id":202,"ingredient_id":85,"quantity":36.0},{"id":413,"recipe_id":203,"ingredient_id":75,"quantity":1.0},{"id":414,"recipe_id":204,"ingredient_id":9,"quantity":5.0},{"id":415,"recipe_id":204,"ingredient_id":10,"quantity":1.0},{"id":416,"recipe_id":204,"ingredient_id":73,"quantity":5.0},{"id":417,"recipe_id":204,"ingredient_id":76,"quantity":10.0},{"id":418,"recipe_id":205,"ingredient_id":9,"quantity":4.0},{"id":419,"recipe_id":205,"ingredient_id":10,"quantity":4.0},{"id":420,"recipe_id":205,"ingredient_id":86,"quantity":100.0},{"id":421,"recipe_id":205,"ingredient_id":75,"quantity":4.0},{"id":422,"recipe_id":206,"ingredient_id":7,"quantity":1.0},{"id":423,"recipe_id":206,"ingredient_id":10,"quantity":1.0},{"id":424,"recipe_id":207,"ingredient_id":10,"quantity":8.0},{"id":425,"recipe_id":207,"ingredient_id":73,"quantity":40.0},{"id":426,"recipe_id":208,"ingredient_id":9,"quantity":12.0},{"id":427,"recipe_id":208,"ingredient_id":10,"quantity":30.0},{"id":428,"recipe_id":208,"ingredient_id":73,"quantity":90.0},{"id":429,"recipe_id":209,"ingredient_id":7,"quantity":50.0},{"id":430,"recipe_id":209,"ingredient_id":9,"quantity":4.0},{"id":431,"recipe_id":209,"ingredient_id":10,"quantity":4.0},{"id":432,"recipe_id":209,"ingredient_id":73,"quantity":20.0},{"id":433,"recipe_id":210,"ingredient_id":7,"quantity":10.0},{"id":434,"recipe_id":211,"ingredient_id":77,"quantity":10.0},{"id":435,"recipe_id":211,"ingredient_id":48,"quantity":80.0},{"id":436,"recipe_id":211,"ingredient_id":67,"quantity":80.0},{"id":437,"recipe_id":212,"ingredient_id":10,"quantity":4.0},{"id":438,"recipe_id":212,"ingredient_id":73,"quantity":20.0},{"id":439,"recipe_id":212,"ingredient_id":84,"quantity":10.0},{"id":440,"recipe_id":212,"ingredient_id":45,"quantity":10.0},{"id":441,"recipe_id":213,"ingredient_id":197,"quantity":1.0},{"id":442,"recipe_id":214,"ingredient_id":164,"quantity":5.0},{"id":443,"recipe_id":214,"ingredient_id":188,"quantity":10.0},{"id":444,"recipe_id":215,"ingredient_id":61,"quantity":5.0},{"id":445,"recipe_id":215,"ingredient_id":5,"quantity":1.0},{"id":446,"recipe_id":215,"ingredient_id":188,"quantity":10.0},{"id":447,"recipe_id":216,"ingredient_id":10,"quantity":2.0},{"id":448,"recipe_id":216,"ingredient_id":67,"quantity":4.0},{"id":449,"recipe_id":217,"ingredient_id":10,"quantity":10.0},{"id":450,"recipe_id":217,"ingredient_id":84,"quantity":1.0},{"id":451,"recipe_id":218,"ingredient_id":163,"quantity":1.0},{"id":452,"recipe_id":219,"ingredient_id":101,"quantity":2.0},{"id":453,"recipe_id":219,"ingredient_id":83,"quantity":2.0},{"id":454,"recipe_id":219,"ingredient_id":14,"quantity":1.0},{"id":455,"recipe_id":219,"ingredient_id":2,"quantity":3.0},{"id":456,"recipe_id":220,"ingredient_id":6,"quantity":1.0},{"id":457,"recipe_id":220,"ingredient_id":79,"quantity":1.0},{"id":458,"recipe_id":220,"ingredient_id":81,"quantity":1.0},{"id":459,"recipe_id":220,"ingredient_id":75,"quantity":2.0},{"id":460,"recipe_id":220,"ingredient_id":67,"quantity":3.0},{"id":461,"recipe_id":221,"ingredient_id":88,"quantity":1.0},{"id":462,"recipe_id":221,"ingredient_id":79,"quantity":1.0},{"id":463,"recipe_id":221,"ingredient_id":81,"quantity":2.0},{"id":464,"recipe_id":221,"ingredient_id":75,"quantity":5.0},{"id":465,"recipe_id":221,"ingredient_id":67,"quantity":10.0},{"id":466,"recipe_id":222,"ingredient_id":198,"quantity":1.0},{"id":467,"recipe_id":222,"ingredient_id":79,"quantity":1.0},{"id":468,"recipe_id":222,"ingredient_id":81,"quantity":3.0},{"id":469,"recipe_id":222,"ingredient_id":75,"quantity":14.0},{"id":470,"recipe_id":222,"ingredient_id":67,"quantity":30.0},{"id":471,"recipe_id":223,"ingredient_id":88,"quantity":10.0},{"id":472,"recipe_id":223,"ingredient_id":204,"quantity":4.0},{"id":473,"recipe_id":223,"ingredient_id":205,"quantity":40.0},{"id":474,"recipe_id":224,"ingredient_id":41,"quantity":4.0},{"id":475,"recipe_id":224,"ingredient_id":199,"quantity":4.0},{"id":476,"recipe_id":224,"ingredient_id":38,"quantity":1.0},{"id":477,"recipe_id":225,"ingredient_id":65,"quantity":15.0},{"id":478,"recipe_id":225,"ingredient_id":39,"quantity":2.0},{"id":479,"recipe_id":225,"ingredient_id":4,"quantity":2.0},{"id":480,"recipe_id":226,"ingredient_id":90,"quantity":4.0},{"id":481,"recipe_id":226,"ingredient_id":12,"quantity":16.0},{"id":482,"recipe_id":226,"ingredient_id":95,"quantity":1.0},{"id":483,"recipe_id":226,"ingredient_id":43,"quantity":20.0},{"id":484,"recipe_id":226,"ingredient_id":83,"quantity":50.0},{"id":485,"recipe_id":227,"ingredient_id":9,"quantity":40.0},{"id":486,"recipe_id":227,"ingredient_id":10,"quantity":40.0},{"id":487,"recipe_id":227,"ingredient_id":73,"quantity":200.0},{"id":488,"recipe_id":227,"ingredient_id":76,"quantity":10.0},{"id":489,"recipe_id":227,"ingredient_id":14,"quantity":10.0},{"id":490,"recipe_id":227,"ingredient_id":204,"quantity":4.0},{"id":491,"recipe_id":228,"ingredient_id":64,"quantity":50.0},{"id":492,"recipe_id":228,"ingredient_id":48,"quantity":5.0},{"id":493,"recipe_id":228,"ingredient_id":10,"quantity":3.0},{"id":494,"recipe_id":229,"ingredient_id":200,"quantity":1.0},{"id":495,"recipe_id":229,"ingredient_id":3,"quantity":2.0},{"id":496,"recipe_id":230,"ingredient_id":198,"quantity":1.0},{"id":497,"recipe_id":230,"ingredient_id":7,"quantity":500.0},{"id":498,"recipe_id":230,"ingredient_id":205,"quantity":100.0},{"id":499,"recipe_id":230,"ingredient_id":67,"quantity":400.0},{"id":500,"recipe_id":231,"ingredient_id":80,"quantity":5.0},{"id":501,"recipe_id":231,"ingredient_id":64,"quantity":80.0},{"id":502,"recipe_id":231,"ingredient_id":49,"quantity":150.0},{"id":503,"recipe_id":232,"ingredient_id":207,"quantity":1.0},{"id":504,"recipe_id":232,"ingredient_id":10,"quantity":2.0},{"id":505,"recipe_id":232,"ingredient_id":76,"quantity":2.0},{"id":506,"recipe_id":233,"ingredient_id":6,"quantity":1.0},{"id":507,"recipe_id":233,"ingredient_id":2,"quantity":5.0},{"id":508,"recipe_id":233,"ingredient_id":72,"quantity":1.0},{"id":509,"recipe_id":234,"ingredient_id":88,"quantity":1.0},{"id":510,"recipe_id":234,"ingredient_id":209,"quantity":5.0},{"id":511,"recipe_id":234,"ingredient_id":77,"quantity":1.0},{"id":512,"recipe_id":234,"ingredient_id":48,"quantity":10.0},{"id":513,"recipe_id":234,"ingredient_id":211,"quantity":50.0},{"id":514,"recipe_id":235,"ingredient_id":213,"quantity":1.0},{"id":515,"recipe_id":235,"ingredient_id":61,"quantity":5.0},{"id":516,"recipe_id":236,"ingredient_id":212,"quantity":1.0},{"id":517,"recipe_id":237,"ingredient_id":191,"quantity":1.0},{"id":518,"recipe_id":237,"ingredient_id":211,"quantity":10.0},{"id":519,"recipe_id":238,"ingredient_id":124,"quantity":1.0},{"id":520,"recipe_id":238,"ingredient_id":109,"quantity":1.0},{"id":521,"recipe_id":238,"ingredient_id":11,"quantity":4.0},{"id":522,"recipe_id":238,"ingredient_id":12,"quantity":6.0},{"id":523,"recipe_id":238,"ingredient_id":14,"quantity":1.0},{"id":524,"recipe_id":238,"ingredient_id":71,"quantity":20.0},{"id":525,"recipe_id":239,"ingredient_id":7,"quantity":25.0},{"id":526,"recipe_id":239,"ingredient_id":9,"quantity":2.0},{"id":527,"recipe_id":239,"ingredient_id":10,"quantity":4.0},{"id":528,"recipe_id":239,"ingredient_id":73,"quantity":20.0},{"id":529,"recipe_id":239,"ingredient_id":95,"quantity":1.0},{"id":530,"recipe_id":240,"ingredient_id":9,"quantity":8.0},{"id":531,"recipe_id":240,"ingredient_id":10,"quantity":20.0},{"id":532,"recipe_id":240,"ingredient_id":73,"quantity":50.0},{"id":533,"recipe_id":240,"ingredient_id":76,"quantity":5.0},{"id":534,"recipe_id":241,"ingredient_id":9,"quantity":12.0},{"id":535,"recipe_id":241,"ingredient_id":10,"quantity":30.0},{"id":536,"recipe_id":241,"ingredient_id":73,"quantity":90.0},{"id":537,"recipe_id":241,"ingredient_id":95,"quantity":1.0},{"id":538,"recipe_id":242,"ingredient_id":90,"quantity":4.0},{"id":539,"recipe_id":242,"ingredient_id":12,"quantity":16.0},{"id":540,"recipe_id":242,"ingredient_id":73,"quantity":80.0},{"id":541,"recipe_id":242,"ingredient_id":9,"quantity":50.0},{"id":542,"recipe_id":242,"ingredient_id":10,"quantity":50.0},{"id":543,"recipe_id":243,"ingredient_id":88,"quantity":1.0},{"id":544,"recipe_id":243,"ingredient_id":81,"quantity":3.0},{"id":545,"recipe_id":243,"ingredient_id":80,"quantity":1.0},{"id":546,"recipe_id":243,"ingredient_id":83,"quantity":20.0},{"id":547,"recipe_id":244,"ingredient_id":43,"quantity":2.0},{"id":548,"recipe_id":244,"ingredient_id":19,"quantity":5.0},{"id":549,"recipe_id":244,"ingredient_id":95,"quantity":1.0},{"id":550,"recipe_id":245,"ingredient_id":200,"quantity":3.0},{"id":551,"recipe_id":245,"ingredient_id":15,"quantity":2.0},{"id":552,"recipe_id":246,"ingredient_id":222,"quantity":12.0},{"id":553,"recipe_id":246,"ingredient_id":47,"quantity":4.0},{"id":554,"recipe_id":247,"ingredient_id":223,"quantity":4.0},{"id":555,"recipe_id":247,"ingredient_id":222,"quantity":12.0},{"id":556,"recipe_id":248,"ingredient_id":223,"quantity":4.0},{"id":557,"recipe_id":249,"ingredient_id":223,"quantity":6.0},{"id":558,"recipe_id":250,"ingredient_id":223,"quantity":8.0},{"id":559,"recipe_id":251,"ingredient_id":224,"quantity":4.0},{"id":560,"recipe_id":252,"ingredient_id":224,"quantity":6.0},{"id":561,"recipe_id":253,"ingredient_id":224,"quantity":8.0},{"id":562,"recipe_id":254,"ingredient_id":234,"quantity":2.0},{"id":563,"recipe_id":254,"ingredient_id":12,"quantity":4.0},{"id":564,"recipe_id":255,"ingredient_id":234,"quantity":3.0},{"id":565,"recipe_id":255,"ingredient_id":12,"quantity":6.0},{"id":566,"recipe_id":256,"ingredient_id":234,"quantity":4.0},{"id":567,"recipe_id":256,"ingredient_id":12,"quantity":8.0},{"id":568,"recipe_id":257,"ingredient_id":44,"quantity":1.0},{"id":569,"recipe_id":257,"ingredient_id":243,"quantity":15.0},{"id":570,"recipe_id":258,"ingredient_id":11,"quantity":1.0},{"id":571,"recipe_id":258,"ingredient_id":12,"quantity":1.0},{"id":572,"recipe_id":259,"ingredient_id":11,"quantity":1.0},{"id":573,"recipe_id":259,"ingredient_id":12,"quantity":1.0},{"id":574,"recipe_id":260,"ingredient_id":11,"quantity":1.0},{"id":575,"recipe_id":260,"ingredient_id":12,"quantity":1.0},{"id":576,"recipe_id":261,"ingredient_id":235,"quantity":1.0},{"id":577,"recipe_id":261,"ingredient_id":46,"quantity":1.0},{"id":578,"recipe_id":262,"ingredient_id":236,"quantity":1.0},{"id":579,"recipe_id":262,"ingredient_id":46,"quantity":1.0},{"id":580,"recipe_id":263,"ingredient_id":237,"quantity":1.0},{"id":581,"recipe_id":263,"ingredient_id":46,"quantity":2.0},{"id":582,"recipe_id":264,"ingredient_id":90,"quantity":2.0},{"id":583,"recipe_id":264,"ingredient_id":12,"quantity":8.0},{"id":584,"recipe_id":265,"ingredient_id":241,"quantity":1.0},{"id":585,"recipe_id":265,"ingredient_id":46,"quantity":16.0},{"id":586,"recipe_id":266,"ingredient_id":201,"quantity":2.0},{"id":587,"recipe_id":267,"ingredient_id":9,"quantity":2.0},{"id":588,"recipe_id":267,"ingredient_id":10,"quantity":5.0},{"id":589,"recipe_id":267,"ingredient_id":73,"quantity":25.0},{"id":590,"recipe_id":267,"ingredient_id":20,"quantity":2.0},{"id":591,"recipe_id":267,"ingredient_id":81,"quantity":1.0},{"id":592,"recipe_id":268,"ingredient_id":10,"quantity":40.0},{"id":593,"recipe_id":268,"ingredient_id":9,"quantity":12.0},{"id":594,"recipe_id":268,"ingredient_id":73,"quantity":40.0},{"id":595,"recipe_id":268,"ingredient_id":14,"quantity":3.0},{"id":596,"recipe_id":269,"ingredient_id":74,"quantity":2.0},{"id":597,"recipe_id":269,"ingredient_id":5,"quantity":1.0},{"id":598,"recipe_id":270,"ingredient_id":90,"quantity":4.0},{"id":599,"recipe_id":270,"ingredient_id":12,"quantity":32.0},{"id":600,"recipe_id":271,"ingredient_id":264,"quantity":3.0},{"id":601,"recipe_id":271,"ingredient_id":12,"quantity":12.0},{"id":602,"recipe_id":272,"ingredient_id":264,"quantity":4.0},{"id":603,"recipe_id":272,"ingredient_id":12,"quantity":16.0},{"id":604,"recipe_id":273,"ingredient_id":497,"quantity":2.0},{"id":605,"recipe_id":273,"ingredient_id":12,"quantity":2.0},{"id":606,"recipe_id":274,"ingredient_id":497,"quantity":2.0},{"id":607,"recipe_id":274,"ingredient_id":12,"quantity":4.0},{"id":608,"recipe_id":275,"ingredient_id":497,"quantity":3.0},{"id":609,"recipe_id":275,"ingredient_id":12,"quantity":3.0},{"id":610,"recipe_id":276,"ingredient_id":497,"quantity":3.0},{"id":611,"recipe_id":276,"ingredient_id":12,"quantity":6.0},{"id":612,"recipe_id":277,"ingredient_id":497,"quantity":4.0},{"id":613,"recipe_id":277,"ingredient_id":12,"quantity":4.0},{"id":614,"recipe_id":278,"ingredient_id":497,"quantity":4.0},{"id":615,"recipe_id":278,"ingredient_id":12,"quantity":8.0},{"id":616,"recipe_id":279,"ingredient_id":264,"quantity":2.0},{"id":617,"recipe_id":279,"ingredient_id":12,"quantity":8.0},{"id":618,"recipe_id":280,"ingredient_id":497,"quantity":2.0},{"id":619,"recipe_id":281,"ingredient_id":88,"quantity":1.0},{"id":620,"recipe_id":281,"ingredient_id":78,"quantity":4.0},{"id":621,"recipe_id":281,"ingredient_id":19,"quantity":14.0},{"id":622,"recipe_id":281,"ingredient_id":18,"quantity":5.0},{"id":623,"recipe_id":282,"ingredient_id":1,"quantity":6.0},{"id":624,"recipe_id":282,"ingredient_id":75,"quantity":2.0},{"id":625,"recipe_id":283,"ingredient_id":270,"quantity":4.0},{"id":626,"recipe_id":283,"ingredient_id":86,"quantity":2.0},{"id":627,"recipe_id":284,"ingredient_id":271,"quantity":10.0},{"id":628,"recipe_id":285,"ingredient_id":198,"quantity":1.0},{"id":629,"recipe_id":285,"ingredient_id":86,"quantity":40.0},{"id":630,"recipe_id":285,"ingredient_id":22,"quantity":20.0},{"id":631,"recipe_id":286,"ingredient_id":6,"quantity":1.0},{"id":632,"recipe_id":286,"ingredient_id":14,"quantity":1.0},{"id":633,"recipe_id":286,"ingredient_id":75,"quantity":5.0},{"id":634,"recipe_id":287,"ingredient_id":365,"quantity":1.0},{"id":635,"recipe_id":287,"ingredient_id":79,"quantity":2.0},{"id":636,"recipe_id":287,"ingredient_id":75,"quantity":2.0},{"id":637,"recipe_id":288,"ingredient_id":363,"quantity":1.0},{"id":638,"recipe_id":288,"ingredient_id":91,"quantity":2.0},{"id":639,"recipe_id":288,"ingredient_id":80,"quantity":1.0},{"id":640,"recipe_id":289,"ingredient_id":39,"quantity":1.0},{"id":641,"recipe_id":289,"ingredient_id":2,"quantity":1.0},{"id":642,"recipe_id":289,"ingredient_id":67,"quantity":1.0},{"id":643,"recipe_id":290,"ingredient_id":6,"quantity":1.0},{"id":644,"recipe_id":290,"ingredient_id":79,"quantity":2.0},{"id":645,"recipe_id":290,"ingredient_id":29,"quantity":5.0},{"id":646,"recipe_id":291,"ingredient_id":10,"quantity":2000.0},{"id":647,"recipe_id":291,"ingredient_id":47,"quantity":2000.0},{"id":648,"recipe_id":291,"ingredient_id":9,"quantity":4000.0},{"id":649,"recipe_id":291,"ingredient_id":75,"quantity":6000.0},{"id":650,"recipe_id":291,"ingredient_id":73,"quantity":10000.0},{"id":651,"recipe_id":292,"ingredient_id":5,"quantity":100.0},{"id":652,"recipe_id":292,"ingredient_id":20,"quantity":1.0},{"id":653,"recipe_id":294,"ingredient_id":8,"quantity":5.0},{"id":654,"recipe_id":294,"ingredient_id":79,"quantity":1.0},{"id":655,"recipe_id":294,"ingredient_id":48,"quantity":3.0},{"id":656,"recipe_id":295,"ingredient_id":45,"quantity":2.0},{"id":657,"recipe_id":295,"ingredient_id":2,"quantity":3.0},{"id":658,"recipe_id":296,"ingredient_id":375,"quantity":4.0},{"id":659,"recipe_id":296,"ingredient_id":95,"quantity":1.0},{"id":660,"recipe_id":296,"ingredient_id":56,"quantity":2.0},{"id":661,"recipe_id":297,"ingredient_id":376,"quantity":10.0},{"id":662,"recipe_id":297,"ingredient_id":80,"quantity":3.0},{"id":663,"recipe_id":297,"ingredient_id":81,"quantity":1.0},{"id":664,"recipe_id":298,"ingredient_id":81,"quantity":1.0},{"id":665,"recipe_id":298,"ingredient_id":56,"quantity":3.0},{"id":666,"recipe_id":299,"ingredient_id":378,"quantity":10.0},{"id":667,"recipe_id":300,"ingredient_id":43,"quantity":1.0},{"id":668,"recipe_id":300,"ingredient_id":49,"quantity":2.0},{"id":669,"recipe_id":301,"ingredient_id":380,"quantity":4.0},{"id":670,"recipe_id":301,"ingredient_id":82,"quantity":2.0},{"id":671,"recipe_id":301,"ingredient_id":56,"quantity":5.0},{"id":672,"recipe_id":302,"ingredient_id":381,"quantity":10.0},{"id":673,"recipe_id":302,"ingredient_id":78,"quantity":3.0},{"id":674,"recipe_id":302,"ingredient_id":81,"quantity":1.0},{"id":675,"recipe_id":303,"ingredient_id":45,"quantity":2.0},{"id":676,"recipe_id":303,"ingredient_id":48,"quantity":2.0},{"id":677,"recipe_id":304,"ingredient_id":383,"quantity":4.0},{"id":678,"recipe_id":304,"ingredient_id":80,"quantity":1.0},{"id":679,"recipe_id":304,"ingredient_id":56,"quantity":1.0},{"id":680,"recipe_id":305,"ingredient_id":384,"quantity":10.0},{"id":681,"recipe_id":305,"ingredient_id":81,"quantity":3.0},{"id":682,"recipe_id":306,"ingredient_id":75,"quantity":2.0},{"id":683,"recipe_id":306,"ingredient_id":2,"quantity":2.0},{"id":684,"recipe_id":307,"ingredient_id":388,"quantity":10.0},{"id":685,"recipe_id":308,"ingredient_id":7,"quantity":2.0},{"id":686,"recipe_id":308,"ingredient_id":2,"quantity":3.0},{"id":687,"recipe_id":309,"ingredient_id":46,"quantity":10.0},{"id":688,"recipe_id":309,"ingredient_id":211,"quantity":10.0},{"id":689,"recipe_id":310,"ingredient_id":88,"quantity":1.0},{"id":690,"recipe_id":310,"ingredient_id":78,"quantity":4.0},{"id":691,"recipe_id":310,"ingredient_id":20,"quantity":15.0},{"id":692,"recipe_id":310,"ingredient_id":19,"quantity":4.0},{"id":693,"recipe_id":311,"ingredient_id":198,"quantity":1.0},{"id":694,"recipe_id":311,"ingredient_id":78,"quantity":20.0},{"id":695,"recipe_id":311,"ingredient_id":18,"quantity":160.0},{"id":696,"recipe_id":311,"ingredient_id":20,"quantity":28.0},{"id":697,"recipe_id":311,"ingredient_id":57,"quantity":1.0},{"id":698,"recipe_id":312,"ingredient_id":198,"quantity":1.0},{"id":699,"recipe_id":312,"ingredient_id":78,"quantity":20.0},{"id":700,"recipe_id":312,"ingredient_id":19,"quantity":135.0},{"id":701,"recipe_id":312,"ingredient_id":18,"quantity":53.0},{"id":702,"recipe_id":312,"ingredient_id":23,"quantity":2.0},{"id":703,"recipe_id":313,"ingredient_id":198,"quantity":1.0},{"id":704,"recipe_id":313,"ingredient_id":78,"quantity":20.0},{"id":705,"recipe_id":313,"ingredient_id":20,"quantity":148.0},{"id":706,"recipe_id":313,"ingredient_id":19,"quantity":40.0},{"id":707,"recipe_id":313,"ingredient_id":370,"quantity":1.0},{"id":708,"recipe_id":314,"ingredient_id":198,"quantity":1.0},{"id":709,"recipe_id":314,"ingredient_id":48,"quantity":500.0},{"id":710,"recipe_id":314,"ingredient_id":47,"quantity":200.0},{"id":711,"recipe_id":314,"ingredient_id":67,"quantity":500.0},{"id":712,"recipe_id":315,"ingredient_id":198,"quantity":1.0},{"id":713,"recipe_id":315,"ingredient_id":85,"quantity":600.0},{"id":714,"recipe_id":315,"ingredient_id":49,"quantity":150.0},{"id":715,"recipe_id":316,"ingredient_id":79,"quantity":1.0},{"id":716,"recipe_id":316,"ingredient_id":7,"quantity":1.0},{"id":717,"recipe_id":317,"ingredient_id":411,"quantity":4.0},{"id":718,"recipe_id":317,"ingredient_id":29,"quantity":5.0},{"id":719,"recipe_id":317,"ingredient_id":8,"quantity":8.0},{"id":720,"recipe_id":318,"ingredient_id":412,"quantity":10.0},{"id":721,"recipe_id":318,"ingredient_id":80,"quantity":2.0},{"id":722,"recipe_id":318,"ingredient_id":46,"quantity":5.0},{"id":723,"recipe_id":319,"ingredient_id":80,"quantity":1.0},{"id":724,"recipe_id":319,"ingredient_id":68,"quantity":50.0},{"id":725,"recipe_id":319,"ingredient_id":53,"quantity":5.0},{"id":726,"recipe_id":320,"ingredient_id":1,"quantity":3.0},{"id":727,"recipe_id":320,"ingredient_id":79,"quantity":1.0},{"id":728,"recipe_id":321,"ingredient_id":416,"quantity":10.0},{"id":729,"recipe_id":322,"ingredient_id":75,"quantity":2.0},{"id":730,"recipe_id":322,"ingredient_id":49,"quantity":1.0},{"id":731,"recipe_id":323,"ingredient_id":420,"quantity":4.0},{"id":732,"recipe_id":323,"ingredient_id":83,"quantity":8.0},{"id":733,"recipe_id":323,"ingredient_id":79,"quantity":3.0},{"id":734,"recipe_id":324,"ingredient_id":421,"quantity":10.0},{"id":735,"recipe_id":324,"ingredient_id":80,"quantity":3.0},{"id":736,"recipe_id":324,"ingredient_id":370,"quantity":1.0},{"id":737,"recipe_id":325,"ingredient_id":7,"quantity":2.0},{"id":738,"recipe_id":325,"ingredient_id":2,"quantity":3.0},{"id":739,"recipe_id":326,"ingredient_id":90,"quantity":3.0},{"id":740,"recipe_id":326,"ingredient_id":12,"quantity":12.0},{"id":741,"recipe_id":326,"ingredient_id":24,"quantity":5.0},{"id":742,"recipe_id":327,"ingredient_id":11,"quantity":3.0},{"id":743,"recipe_id":327,"ingredient_id":12,"quantity":6.0},{"id":744,"recipe_id":328,"ingredient_id":90,"quantity":4.0},{"id":745,"recipe_id":328,"ingredient_id":12,"quantity":32.0},{"id":746,"recipe_id":329,"ingredient_id":6,"quantity":1.0},{"id":747,"recipe_id":329,"ingredient_id":9,"quantity":2.0},{"id":748,"recipe_id":329,"ingredient_id":2,"quantity":10.0},{"id":749,"recipe_id":330,"ingredient_id":90,"quantity":4.0},{"id":750,"recipe_id":330,"ingredient_id":12,"quantity":32.0},{"id":751,"recipe_id":331,"ingredient_id":88,"quantity":1.0},{"id":752,"recipe_id":331,"ingredient_id":48,"quantity":100.0},{"id":753,"recipe_id":331,"ingredient_id":10,"quantity":50.0},{"id":754,"recipe_id":331,"ingredient_id":67,"quantity":100.0},{"id":755,"recipe_id":332,"ingredient_id":88,"quantity":1.0},{"id":756,"recipe_id":332,"ingredient_id":46,"quantity":25.0},{"id":757,"recipe_id":332,"ingredient_id":2,"quantity":100.0},{"id":758,"recipe_id":332,"ingredient_id":77,"quantity":2.0},{"id":759,"recipe_id":332,"ingredient_id":211,"quantity":20.0},{"id":760,"recipe_id":333,"ingredient_id":6,"quantity":1.0},{"id":761,"recipe_id":333,"ingredient_id":14,"quantity":2.0},{"id":762,"recipe_id":334,"ingredient_id":48,"quantity":2.0},{"id":763,"recipe_id":334,"ingredient_id":10,"quantity":1.0},{"id":764,"recipe_id":335,"ingredient_id":440,"quantity":10.0},{"id":765,"recipe_id":336,"ingredient_id":7,"quantity":4.0},{"id":766,"recipe_id":336,"ingredient_id":72,"quantity":6.0},{"id":767,"recipe_id":337,"ingredient_id":443,"quantity":10.0},{"id":768,"recipe_id":338,"ingredient_id":75,"quantity":2.0},{"id":769,"recipe_id":338,"ingredient_id":13,"quantity":2.0},{"id":770,"recipe_id":339,"ingredient_id":446,"quantity":10.0},{"id":771,"recipe_id":340,"ingredient_id":1,"quantity":4.0},{"id":772,"recipe_id":340,"ingredient_id":14,"quantity":2.0},{"id":773,"recipe_id":340,"ingredient_id":2,"quantity":8.0},{"id":774,"recipe_id":341,"ingredient_id":449,"quantity":10.0},{"id":775,"recipe_id":342,"ingredient_id":96,"quantity":1.0},{"id":776,"recipe_id":342,"ingredient_id":79,"quantity":3.0},{"id":777,"recipe_id":342,"ingredient_id":75,"quantity":3.0},{"id":778,"recipe_id":345,"ingredient_id":541,"quantity":1.0},{"id":779,"recipe_id":345,"ingredient_id":24,"quantity":1.0},{"id":780,"recipe_id":346,"ingredient_id":7,"quantity":1.0},{"id":781,"recipe_id":346,"ingredient_id":265,"quantity":5.0},{"id":782,"recipe_id":346,"ingredient_id":247,"quantity":4.0},{"id":783,"recipe_id":347,"ingredient_id":75,"quantity":2.0},{"id":784,"recipe_id":347,"ingredient_id":1,"quantity":3.0},{"id":785,"recipe_id":348,"ingredient_id":476,"quantity":4.0},{"id":786,"recipe_id":348,"ingredient_id":79,"quantity":2.0},{"id":787,"recipe_id":348,"ingredient_id":10,"quantity":4.0},{"id":788,"recipe_id":349,"ingredient_id":477,"quantity":10.0},{"id":789,"recipe_id":349,"ingredient_id":83,"quantity":20.0},{"id":790,"recipe_id":349,"ingredient_id":32,"quantity":50.0},{"id":791,"recipe_id":351,"ingredient_id":68,"quantity":8.0},{"id":792,"recipe_id":351,"ingredient_id":87,"quantity":3.0},{"id":793,"recipe_id":351,"ingredient_id":14,"quantity":1.0},{"id":794,"recipe_id":351,"ingredient_id":2,"quantity":1.0},{"id":795,"recipe_id":352,"ingredient_id":75,"quantity":2.0},{"id":796,"recipe_id":352,"ingredient_id":15,"quantity":1.0},{"id":797,"recipe_id":353,"ingredient_id":491,"quantity":4.0},{"id":798,"recipe_id":353,"ingredient_id":80,"quantity":1.0},{"id":799,"recipe_id":353,"ingredient_id":2,"quantity":5.0},{"id":800,"recipe_id":354,"ingredient_id":492,"quantity":10.0},{"id":801,"recipe_id":354,"ingredient_id":78,"quantity":1.0},{"id":802,"recipe_id":354,"ingredient_id":86,"quantity":5.0},{"id":803,"recipe_id":355,"ingredient_id":90,"quantity":2.0},{"id":804,"recipe_id":355,"ingredient_id":12,"quantity":8.0},{"id":805,"recipe_id":355,"ingredient_id":24,"quantity":3.0},{"id":806,"recipe_id":356,"ingredient_id":496,"quantity":4.0},{"id":807,"recipe_id":358,"ingredient_id":6,"quantity":1.0},{"id":808,"recipe_id":358,"ingredient_id":78,"quantity":1.0},{"id":809,"recipe_id":358,"ingredient_id":19,"quantity":1.0},{"id":810,"recipe_id":359,"ingredient_id":110,"quantity":1.0},{"id":811,"recipe_id":359,"ingredient_id":474,"quantity":4.0},{"id":812,"recipe_id":359,"ingredient_id":15,"quantity":6.0},{"id":813,"recipe_id":361,"ingredient_id":7,"quantity":2.0},{"id":814,"recipe_id":361,"ingredient_id":2,"quantity":3.0},{"id":815,"recipe_id":362,"ingredient_id":7,"quantity":1.0},{"id":816,"recipe_id":362,"ingredient_id":72,"quantity":10.0},{"id":817,"recipe_id":364,"ingredient_id":528,"quantity":1.0},{"id":818,"recipe_id":365,"ingredient_id":543,"quantity":2.0},{"id":819,"recipe_id":366,"ingredient_id":542,"quantity":4.0}],"resource_sources":[{"id":1,"product_id":5,"source_name":"Agregat de charbon","rate":"3.6"},{"id":2,"product_id":5,"source_name":"Siderite","rate":"1.6"},{"id":3,"product_id":5,"source_name":"Gisement de charbon","rate":"40.0/h"},{"id":4,"product_id":16,"source_name":"Pierre cuivrique","rate":"2.4"},{"id":5,"product_id":16,"source_name":"Chalcocite","rate":"1.4"},{"id":6,"product_id":16,"source_name":"Chalcopyrite","rate":"1.2"},{"id":7,"product_id":16,"source_name":"Affleurement de cuivre","rate":"<1"},{"id":8,"product_id":16,"source_name":"Gisement de cuivre","rate":"60.0/h"},{"id":9,"product_id":17,"source_name":"Pierre sulfurique","rate":"5.8"},{"id":10,"product_id":21,"source_name":"Chalcocite","rate":"12.41"},{"id":11,"product_id":21,"source_name":"Tenorite","rate":"10.71"},{"id":12,"product_id":21,"source_name":"Affleurement de cuivre","rate":"4.5"},{"id":13,"product_id":22,"source_name":"Malachite","rate":"1.0"},{"id":14,"product_id":23,"source_name":"Azurite","rate":"1.0"},{"id":15,"product_id":26,"source_name":"Nodule d'argile","rate":"2.7"},{"id":16,"product_id":27,"source_name":"Titanomagnetite","rate":"4.0"},{"id":17,"product_id":28,"source_name":"Titanite","rate":"20.02"},{"id":18,"product_id":29,"source_name":"Nodule d'argile","rate":"1.8"},{"id":19,"product_id":29,"source_name":"Aigue-marine","rate":"<1"},{"id":20,"product_id":30,"source_name":"Monticule de gres","rate":"3.4"},{"id":21,"product_id":30,"source_name":"Nodule de calcedoine","rate":"1.0"},{"id":22,"product_id":30,"source_name":"Affleurement creux","rate":"<1"},{"id":23,"product_id":30,"source_name":"Monticule de feldspath blanc","rate":"<1"},{"id":24,"product_id":30,"source_name":"Chalcopyrite","rate":"<1"},{"id":25,"product_id":30,"source_name":"Gisement de gres","rate":"100.0/h"},{"id":26,"product_id":31,"source_name":"Nodule de calcedoine","rate":"6.5"},{"id":27,"product_id":32,"source_name":"Quartz blanc","rate":"2.2"},{"id":28,"product_id":32,"source_name":"Nodule de calcedoine","rate":"1.3"},{"id":29,"product_id":32,"source_name":"Quartz gris","rate":"1.0"},{"id":30,"product_id":33,"source_name":"Monticule de feldspath blanc","rate":"4.7"},{"id":31,"product_id":33,"source_name":"Gisement d'aluminium","rate":"60.0/h"},{"id":32,"product_id":34,"source_name":"Nodule d'argile","rate":"2.7"},{"id":33,"product_id":50,"source_name":"Siderite","rate":"3.5"},{"id":34,"product_id":50,"source_name":"Pierre ferreuse","rate":"2.4"},{"id":35,"product_id":50,"source_name":"Affleurement ferreux","rate":"<1"},{"id":36,"product_id":50,"source_name":"Gisement de fer","rate":"60.0/h"},{"id":37,"product_id":53,"source_name":"Chalcopyrite","rate":"1.2"},{"id":38,"product_id":53,"source_name":"Formation de pyrite","rate":"1.0"},{"id":39,"product_id":54,"source_name":"Elmerite","rate":"4.1"},{"id":40,"product_id":55,"source_name":"Affleurement creux","rate":"1.8"},{"id":41,"product_id":56,"source_name":"Graphite","rate":"2.5"},{"id":42,"product_id":57,"source_name":"Nodule d'argile","rate":"<1"},{"id":43,"product_id":58,"source_name":"Nodule d'argile","rate":"<1"},{"id":44,"product_id":58,"source_name":"Siderite","rate":"<1"},{"id":45,"product_id":59,"source_name":"Cinabre","rate":"1.0"},{"id":46,"product_id":60,"source_name":"Nodule de calcedoine","rate":"<1"},{"id":47,"product_id":61,"source_name":"Geyser d'eau","rate":"100.0L"},{"id":48,"product_id":65,"source_name":"Geyser de mercure","rate":"50.0L"},{"id":49,"product_id":164,"source_name":"Bassin de vitriol","rate":"400.0/h"}]};

const DEFAULT_SHIP_CONFIGS = [{"id":1788202712513,"name":"Mercury","date":"2026-08-31T18:58:32.513Z","items":[{"id":242,"name":"Aile « Condor » thermique","qty":2,"sp":384,"spType":"systeme"},{"id":202,"name":"Cockpit « Bercail »","qty":1,"sp":400,"spType":"systeme"},{"id":239,"name":"Deporteur « Aileron » thermique","qty":2,"sp":19,"spType":"systeme"},{"id":240,"name":"Deporteur « Gardien » thermique","qty":2,"sp":38,"spType":"systeme"},{"id":100,"name":"Detecteur de ressources spectral","qty":1,"sp":300,"spType":"requis"},{"id":118,"name":"Module de batterie","qty":1,"sp":300,"spType":"requis"},{"id":114,"name":"Navigateur cosmique","qty":1,"sp":50,"spType":"requis"},{"id":117,"name":"Petit generateur electrique","qty":1,"sp":400,"spType":"requis"},{"id":112,"name":"Petit reservoir de mag-plasma","qty":1,"sp":500,"spType":"requis"},{"id":125,"name":"Propulseur « Brise tranquille »","qty":1,"sp":1000,"spType":"requis"},{"id":195,"name":"Reacteur SL - Moyen","qty":1,"sp":300,"spType":"requis"},{"id":119,"name":"Volant d'inertie","qty":1,"sp":100,"spType":"requis"},{"id":107,"name":"Scanalyseur beta","qty":1,"sp":200,"spType":"requis"},{"id":103,"name":"Panneau solaire moyen","qty":2,"sp":360,"spType":"requis"},{"id":104,"name":"Petit radiateur","qty":4,"sp":300,"spType":"requis"},{"id":98,"name":"Laser haute puissance surcadence","qty":1,"sp":800,"spType":"requis"},{"id":99,"name":"Pompe peristaltique","qty":1,"sp":250,"spType":"requis"},{"id":110,"name":"Petit reservoir de liquide","qty":4,"sp":200,"spType":"requis"},{"id":109,"name":"Soute","qty":3,"sp":350,"spType":"requis"}]},{"id":1789650201611,"name":"HOl6Ks","date":"2026-09-17T13:03:21.611Z","items":[{"id":202,"name":"Cockpit « Bercail »","qty":1,"sp":400,"spType":"systeme"},{"id":236,"name":"Deporteur « Aileron »","qty":2,"sp":19,"spType":"systeme"},{"id":240,"name":"Deporteur « Gardien » thermique","qty":2,"sp":38,"spType":"systeme"},{"id":238,"name":"Deporteur « Nimbus » thermique","qty":2,"sp":19,"spType":"systeme"},{"id":101,"name":"Detecteur de ressources simple","qty":2,"sp":100,"spType":"requis"},{"id":100,"name":"Detecteur de ressources spectral","qty":1,"sp":300,"spType":"requis"},{"id":114,"name":"Navigateur cosmique","qty":1,"sp":50,"spType":"requis"},{"id":112,"name":"Petit reservoir de mag-plasma","qty":1,"sp":500,"spType":"requis"},{"id":126,"name":"Propulseur « Sauterelle »","qty":2,"sp":600,"spType":"requis"},{"id":195,"name":"Reacteur SL - Moyen","qty":1,"sp":300,"spType":"requis"},{"id":119,"name":"Volant d'inertie","qty":1,"sp":100,"spType":"requis"},{"id":107,"name":"Scanalyseur beta","qty":1,"sp":200,"spType":"requis"},{"id":103,"name":"Panneau solaire moyen","qty":1,"sp":360,"spType":"requis"},{"id":102,"name":"Petit panneau solaire","qty":2,"sp":120,"spType":"requis"},{"id":109,"name":"Soute","qty":11,"sp":350,"spType":"requis"}]},{"id":1790065227388,"name":"Final","date":"2026-09-22T08:20:27.388Z","items":[{"id":242,"name":"Aile « Condor » thermique","qty":5,"sp":384,"spType":"systeme"},{"id":116,"name":"Bouclier reactif","qty":1,"sp":2000,"spType":"requis"},{"id":202,"name":"Cockpit « Bercail »","qty":1,"sp":400,"spType":"systeme"},{"id":100,"name":"Detecteur de ressources spectral","qty":1,"sp":300,"spType":"requis"},{"id":193,"name":"Detecteur mimetique","qty":1,"sp":200,"spType":"requis"},{"id":274,"name":"Module BESS","qty":1,"sp":2000,"spType":"requis"},{"id":114,"name":"Navigateur cosmique","qty":1,"sp":50,"spType":"requis"},{"id":115,"name":"Petit bouclier reactif","qty":1,"sp":600,"spType":"requis"},{"id":117,"name":"Petit generateur electrique","qty":1,"sp":400,"spType":"requis"},{"id":112,"name":"Petit reservoir de mag-plasma","qty":2,"sp":500,"spType":"requis"},{"id":126,"name":"Propulseur « Sauterelle »","qty":2,"sp":600,"spType":"requis"},{"id":195,"name":"Reacteur SL - Moyen","qty":1,"sp":300,"spType":"requis"},{"id":107,"name":"Scanalyseur beta","qty":1,"sp":200,"spType":"requis"},{"id":103,"name":"Panneau solaire moyen","qty":6,"sp":360,"spType":"requis"},{"id":104,"name":"Petit radiateur","qty":2,"sp":300,"spType":"requis"},{"id":105,"name":"Lance-missile 1 tube","qty":1,"sp":150,"spType":"requis"},{"id":96,"name":"Laser d'extraction simple","qty":5,"sp":100,"spType":"requis"},{"id":366,"name":"Laser de refroidissement","qty":4,"sp":500,"spType":"requis"},{"id":98,"name":"Laser haute puissance surcadence","qty":1,"sp":800,"spType":"requis"},{"id":99,"name":"Pompe peristaltique","qty":1,"sp":250,"spType":"requis"},{"id":206,"name":"Grande soute","qty":1,"sp":3000,"spType":"requis"},{"id":435,"name":"Reservoir de liquide moyen","qty":1,"sp":500,"spType":"requis"}]}];
const DEFAULT_MULTI_CONFIGS = [{"id":1789676278397,"name":"Titane","date":"2026-09-17T20:17:58.397Z","items":[{"id":172,"name":"Assembleur","qty":1},{"id":177,"name":"Centrale solaire","qty":2},{"id":166,"name":"Centre de commandement simple","qty":1},{"id":245,"name":"Entrepot avance","qty":2},{"id":168,"name":"Extracteur","qty":2},{"id":173,"name":"Fonderie","qty":2},{"id":216,"name":"Plateforme d'atterrissage de navette","qty":1},{"id":178,"name":"Pylone","qty":5},{"id":218,"name":"Terminal de couloir","qty":1},{"id":244,"name":"Transmetteur energetique","qty":1}]},{"id":1790170996524,"name":"tungsten","date":"2026-09-23T13:43:16.524Z","items":[{"id":172,"name":"Assembleur","qty":1},{"id":177,"name":"Centrale solaire","qty":2},{"id":245,"name":"Entrepot avance","qty":2},{"id":168,"name":"Extracteur","qty":1},{"id":173,"name":"Fonderie","qty":1},{"id":216,"name":"Plateforme d'atterrissage de navette","qty":1},{"id":178,"name":"Pylone","qty":4},{"id":218,"name":"Terminal de couloir","qty":1}]},{"id":1790171045151,"name":"Tungsten","date":"2026-09-23T13:44:05.151Z","items":[{"id":172,"name":"Assembleur","qty":1},{"id":177,"name":"Centrale solaire","qty":2},{"id":245,"name":"Entrepot avance","qty":2},{"id":168,"name":"Extracteur","qty":1},{"id":173,"name":"Fonderie","qty":1},{"id":216,"name":"Plateforme d'atterrissage de navette","qty":1},{"id":178,"name":"Pylone","qty":4},{"id":218,"name":"Terminal de couloir","qty":1}]}];

// ==========================================================
// Couche de donnees locale (remplace le serveur Express + SQLite)
// Les donnees de base sont dans DB (ci-dessus). Les modifications
// (prix, durees, sauvegardes Ship / Multi) sont conservees dans le
// localStorage du navigateur.
// ==========================================================

const LS_OVERRIDES_KEY = 'inventaire_product_overrides';
const LS_SHIP_CONFIGS_KEY = 'inventaire_ship_configs';
const LS_MULTI_CONFIGS_KEY = 'inventaire_multi_configs';

function lsGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch (e) {
    return fallback;
  }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* stockage indisponible */ }
}

// Index en memoire
const catById = new Map(DB.categories.map(c => [c.id, c]));
const stationById = new Map(DB.stations.map(s => [s.id, s]));
const productById = new Map(DB.products.map(p => [p.id, p]));
const recipesByProduct = new Map();
DB.recipes.slice().sort((a, b) => a.id - b.id).forEach(r => {
  if (!recipesByProduct.has(r.product_id)) recipesByProduct.set(r.product_id, []);
  recipesByProduct.get(r.product_id).push(r);
});
const ingredientsByRecipe = new Map();
DB.recipe_ingredients.slice().sort((a, b) => a.id - b.id).forEach(ri => {
  if (!ingredientsByRecipe.has(ri.recipe_id)) ingredientsByRecipe.set(ri.recipe_id, []);
  ingredientsByRecipe.get(ri.recipe_id).push(ri);
});

// Application des modifications locales (prix / sans prix / duree)
(function applyOverrides() {
  const overrides = lsGet(LS_OVERRIDES_KEY, {});
  Object.keys(overrides).forEach(id => {
    const p = productById.get(Number(id));
    if (p) Object.assign(p, overrides[id]);
  });
})();
function saveOverride(id, fields) {
  const overrides = lsGet(LS_OVERRIDES_KEY, {});
  overrides[id] = Object.assign(overrides[id] || {}, fields);
  lsSet(LS_OVERRIDES_KEY, overrides);
  Object.assign(productById.get(id), fields);
}

// Comparaison facon SQLite (NULL en premier en tri ascendant)
function sqlCmp(a, b) {
  const an = a === null || a === undefined, bn = b === null || b === undefined;
  if (an || bn) return an === bn ? 0 : (an ? -1 : 1);
  return a < b ? -1 : a > b ? 1 : 0;
}

function catName(id) { const c = catById.get(id); return c ? c.name : null; }
function parentCatName(categoryId) {
  const c = catById.get(categoryId);
  return c && c.parent_id != null ? catName(c.parent_id) : null;
}

function getCategories() {
  return DB.categories
    .map(c => ({ id: c.id, name: c.name, parent_id: c.parent_id, parent_name: c.parent_id != null ? catName(c.parent_id) : null }))
    .sort((a, b) => sqlCmp(a.parent_name, b.parent_name) || sqlCmp(a.name, b.name));
}

function getProducts(query) {
  const q = query.get('q');
  const categoryId = query.get('category_id');
  const sort = ['name', 'price', 'weight', 'created_at'].includes(query.get('sort')) ? query.get('sort') : 'name';
  const order = (query.get('order') || '').toLowerCase() === 'desc' ? 'desc' : 'asc';

  let rows = DB.products.map(p => {
    const c = catById.get(p.category_id);
    return {
      id: p.id, name: p.name, price: p.price, weight: p.weight, duration: p.duration, description: p.description,
      category_id: c ? c.id : null, category_name: c ? c.name : null,
      parent_category_name: parentCatName(p.category_id),
      _parent_id: c ? c.parent_id : null, _created_at: p.created_at
    };
  });
  if (q) {
    const needle = q.toLowerCase();
    rows = rows.filter(r => r.name.toLowerCase().includes(needle));
  }
  if (categoryId) {
    const cid = Number(categoryId);
    rows = rows.filter(r => r.category_id === cid || r._parent_id === cid);
  }
  const key = sort === 'created_at' ? '_created_at' : sort;
  rows.sort((a, b) => (order === 'desc' ? -1 : 1) * sqlCmp(a[key], b[key]) || a.id - b.id);
  rows.forEach(r => { delete r._parent_id; delete r._created_at; });
  return rows;
}

function getProductDetail(id) {
  const p = productById.get(id);
  if (!p) return null;
  const product = Object.assign({}, p, {
    category_name: catName(p.category_id),
    parent_category_name: parentCatName(p.category_id)
  });
  product.specifications = DB.specifications
    .filter(s => s.product_id === id)
    .map(s => ({ spec_key: s.spec_key, spec_value: s.spec_value, spec_unit: s.spec_unit }));
  product.recipes = (recipesByProduct.get(id) || []).map(r => ({
    id: r.id, recipe_type: r.recipe_type, output_qty: r.output_qty,
    station_name: r.station_id != null && stationById.get(r.station_id) ? stationById.get(r.station_id).name : null,
    ingredients: (ingredientsByRecipe.get(r.id) || []).map(ri => {
      const ing = productById.get(ri.ingredient_id);
      return { quantity: ri.quantity, ingredient_id: ing.id, ingredient_name: ing.name, ingredient_price: ing.price };
    })
  }));
  const seen = new Set();
  product.used_in = [];
  DB.recipe_ingredients.forEach(ri => {
    if (ri.ingredient_id !== id) return;
    const r = DB.recipes.find(x => x.id === ri.recipe_id);
    const up = r && productById.get(r.product_id);
    if (up && !seen.has(up.id)) { seen.add(up.id); product.used_in.push({ id: up.id, name: up.name }); }
  });
  product.found_in = DB.resource_sources
    .filter(s => s.product_id === id)
    .map(s => ({ source_name: s.source_name, rate: s.rate }));
  return product;
}

function getStats() {
  const priced = DB.products.filter(p => p.price !== null && p.price !== undefined);
  const sum = arr => arr.reduce((s, v) => s + v, 0);

  const byCat = new Map();
  DB.products.forEach(p => {
    const key = p.category_id != null && catById.has(p.category_id) ? p.category_id : null;
    if (!byCat.has(key)) byCat.set(key, []);
    byCat.get(key).push(p);
  });
  const priceByCategory = Array.from(byCat.entries()).map(([cid, list]) => {
    const prices = list.filter(p => p.price != null).map(p => p.price);
    return {
      category: cid != null ? catName(cid) : null,
      count: list.length,
      avg_price: prices.length ? sum(prices) / prices.length : null,
      total_price: prices.length ? sum(prices) : null
    };
  }).sort((a, b) => b.count - a.count);

  const byParent = new Map();
  DB.products.forEach(p => {
    const key = parentCatName(p.category_id) || catName(p.category_id);
    byParent.set(key, (byParent.get(key) || 0) + 1);
  });
  const countByParentCategory = Array.from(byParent.entries())
    .map(([parent_category, count]) => ({ parent_category, count }))
    .sort((a, b) => b.count - a.count);

  const mostExpensive = priced.slice().sort((a, b) => b.price - a.price).slice(0, 5)
    .map(p => ({ name: p.name, price: p.price }));

  const usage = new Map();
  DB.recipe_ingredients.forEach(ri => usage.set(ri.ingredient_id, (usage.get(ri.ingredient_id) || 0) + 1));
  const mostUsedIngredients = Array.from(usage.entries())
    .map(([pid, usage_count]) => ({ name: productById.get(pid).name, usage_count }))
    .sort((a, b) => b.usage_count - a.usage_count).slice(0, 5);

  return {
    total_products: DB.products.length,
    total_recipes: DB.recipes.length,
    avg_price: priced.length ? sum(priced.map(p => p.price)) / priced.length : null,
    total_value: priced.length ? sum(priced.map(p => p.price)) : null,
    price_by_category: priceByCategory,
    count_by_parent_category: countByParentCategory,
    most_expensive: mostExpensive,
    most_used_ingredients: mostUsedIngredients
  };
}

// ---------------- Arbre de fabrication ----------------

function isFinalBuildingProduct(product) {
  return product.category_name === 'Batiment de base' || product.parent_category_name === 'Batiment de base';
}

function buildCraftingTree(productId, qtyNeeded, prefs = {}, ancestors = new Set()) {
  const p = productById.get(productId);
  if (!p) return null;
  const product = { id: p.id, name: p.name, price: p.price, duration: p.duration,
    category_name: catName(p.category_id), parent_category_name: parentCatName(p.category_id) };

  let recipes = (recipesByProduct.get(productId) || []).slice();

  const node = {
    id: product.id,
    name: product.name,
    price: product.price,
    duration: product.duration,
    quantity: qtyNeeded,
    category_name: product.category_name,
    is_raw: recipes.length === 0,
    is_final_product: isFinalBuildingProduct(product),
    recipes: []
  };

  if (recipes.length === 0) return node;

  if (ancestors.has(productId)) {
    node.is_raw = true;
    node.cycle = true;
    node.recipes = [];
    return node;
  }

  const preferredRecipeId = prefs && prefs[productId];
  if (recipes.length > 1 && preferredRecipeId) {
    const idx = recipes.findIndex(r => r.id === Number(preferredRecipeId));
    if (idx > 0) {
      const [chosen] = recipes.splice(idx, 1);
      recipes = [chosen, ...recipes];
    }
  }

  const nextAncestors = new Set(ancestors);
  nextAncestors.add(productId);

  node.recipes = recipes.map((r, idx) => {
    const ingredients = ingredientsByRecipe.get(r.id) || [];
    const craftsNeeded = Math.ceil(qtyNeeded / r.output_qty);
    const station = r.station_id != null && stationById.get(r.station_id) ? stationById.get(r.station_id).name : null;
    return {
      recipe_id: r.id,
      station,
      recipe_type: r.recipe_type,
      output_qty: r.output_qty,
      is_default: idx === 0,
      crafts_needed: craftsNeeded,
      ingredients: ingredients.map(ing => ({
        ...buildCraftingTree(ing.ingredient_id, ing.quantity * craftsNeeded, prefs, nextAncestors),
        quantity_per_craft: ing.quantity
      }))
    };
  });

  return node;
}

function isLingot(name) {
  return /^lingot\b/i.test(name || '');
}

function aggregateRawMaterials(node, acc = {}, excludeLingots = false) {
  if (!node) return acc;
  if (node.is_raw || !node.recipes.length) {
    if (!excludeLingots || !isLingot(node.name)) {
      if (!acc[node.id]) acc[node.id] = { id: node.id, name: node.name, price: node.price, quantity: 0 };
      acc[node.id].quantity += node.quantity;
    }
    return acc;
  }
  node.recipes[0].ingredients.forEach(ing => aggregateRawMaterials(ing, acc, excludeLingots));
  return acc;
}

const COMPOSITE_LINGOT_NAMES = new Set(
  ["Lingot d'acier", 'Lingot de rigidium', 'Lingot de titane-B'].map(n => n.toLowerCase())
);
function isCompositeLingot(name) {
  return COMPOSITE_LINGOT_NAMES.has((name || '').toLowerCase());
}

function aggregateLingots(node, acc = {}) {
  if (!node) return acc;
  if (isLingot(node.name) && !isCompositeLingot(node.name)) {
    if (!acc[node.id]) acc[node.id] = { id: node.id, name: node.name, quantity: 0 };
    acc[node.id].quantity += node.quantity;
  }
  if (node.is_raw || !node.recipes.length) return acc;
  node.recipes[0].ingredients.forEach(ing => aggregateLingots(ing, acc));
  return acc;
}

function parseJsonParam(value, fallback) {
  if (!value) return fallback;
  try { return JSON.parse(value); } catch (e) { return fallback; }
}

function summarize(rawAcc, lingotsAcc) {
  const raw_materials = Object.values(rawAcc).sort(
    (a, b) => (b.quantity * (b.price || 0)) - (a.quantity * (a.price || 0))
  );
  const total_cost = raw_materials.reduce((sum, m) => sum + (m.price || 0) * m.quantity, 0);
  const lingots = Object.values(lingotsAcc).sort((a, b) => a.name.localeCompare(b.name));
  return { raw_materials, total_cost, lingots };
}

// ---------------- Sauvegardes Ship / Multi ----------------

function configStore(key, defaults) {
  const read = () => {
    const v = lsGet(key, null);
    return Array.isArray(v) ? v : defaults.slice();
  };
  const write = configs => lsSet(key, configs);
  return {
    list: () => read(),
    create(body) {
      const configs = read();
      const config = { id: Date.now(), name: String(body.name).trim(), date: new Date().toISOString(), items: body.items };
      configs.push(config);
      write(configs);
      return config;
    },
    update(id, body) {
      const configs = read();
      const index = configs.findIndex(c => c.id === id);
      if (index === -1) return null;
      configs[index] = { id, name: String(body.name).trim(), date: new Date().toISOString(), items: body.items };
      write(configs);
      return configs[index];
    },
    remove(id) {
      write(read().filter(c => c.id !== id));
    }
  };
}
const shipConfigs = configStore(LS_SHIP_CONFIGS_KEY, DEFAULT_SHIP_CONFIGS);
const multiConfigs = configStore(LS_MULTI_CONFIGS_KEY, DEFAULT_MULTI_CONFIGS);

// ---------------- Routeur (meme interface que fetch) ----------------

function localResponse(data, status = 200) {
  return { ok: status >= 200 && status < 300, status, json: async () => data };
}

async function apiFetch(url, options = {}) {
  const method = (options.method || 'GET').toUpperCase();
  const body = options.body ? JSON.parse(options.body) : {};
  const [path, qs] = url.split('?');
  const query = new URLSearchParams(qs || '');
  const parts = path.replace(/^\/?api\/?/, '').split('/').filter(Boolean);

  if (parts[0] === 'categories') return localResponse(getCategories());
  if (parts[0] === 'stations') return localResponse(DB.stations.slice().sort((a, b) => sqlCmp(a.name, b.name)));
  if (parts[0] === 'stats') return localResponse(getStats());

  if (parts[0] === 'ship-configs' || parts[0] === 'multi-configs') {
    const store = parts[0] === 'ship-configs' ? shipConfigs : multiConfigs;
    const id = parts[1] ? Number(parts[1]) : null;
    if (method === 'GET') return localResponse(store.list());
    if (method === 'DELETE') { store.remove(id); return localResponse({ ok: true }); }
    if (!body.name || !String(body.name).trim() || !Array.isArray(body.items)) {
      return localResponse({ error: 'Donnees invalides' }, 400);
    }
    if (method === 'POST') return localResponse(store.create(body), 201);
    if (method === 'PUT') {
      const config = store.update(id, body);
      return config ? localResponse(config) : localResponse({ error: 'Sauvegarde introuvable' }, 404);
    }
  }

  if (parts[0] === 'products') {
    if (parts.length === 1) return localResponse(getProducts(query));

    if (parts[1] === 'tree-multi') {
      const items = parseJsonParam(query.get('items'), []);
      if (!Array.isArray(items) || !items.length) return localResponse({ error: 'Aucun produit fourni' }, 400);
      const prefs = parseJsonParam(query.get('prefs'), {});
      const trees = [], rawAcc = {}, lingotsAcc = {};
      items.forEach(item => {
        const qty = Math.max(1, parseFloat(item.qty) || 1);
        const tree = buildCraftingTree(Number(item.id), qty, prefs);
        if (!tree) return;
        trees.push(tree);
        aggregateRawMaterials(tree, rawAcc, true);
        aggregateLingots(tree, lingotsAcc);
      });
      if (!trees.length) return localResponse({ error: 'Aucun produit trouve' }, 404);
      return localResponse(Object.assign({ trees }, summarize(rawAcc, lingotsAcc)));
    }

    if (parts[1] === 'without-price') {
      return localResponse(DB.products
        .filter(p => p.price === null && !p.no_price)
        .map(p => ({ id: p.id, name: p.name }))
        .sort((a, b) => sqlCmp(a.name, b.name)));
    }

    if (parts[1] === 'update-prices') {
      (body.updates || []).forEach(item => {
        const id = Number(item.id);
        if (!id || !productById.has(id)) return;
        if (item.no_price) { saveOverride(id, { price: null, no_price: 1 }); return; }
        if (item.price === null || item.price === undefined || item.price === '') return;
        const priceValue = parseFloat(item.price);
        if (!isNaN(priceValue)) saveOverride(id, { price: priceValue, no_price: 0 });
      });
      return localResponse({ success: true });
    }

    if (parts[1] === 'update-durations') {
      (body.updates || []).forEach(item => {
        const id = Number(item.id);
        if (!id || !productById.has(id)) return;
        const durationValue = parseFloat(item.duration);
        if (!isNaN(durationValue) && durationValue >= 0) saveOverride(id, { duration: durationValue });
      });
      return localResponse({ success: true });
    }

    const id = Number(parts[1]);
    if (parts[2] === 'tree') {
      const qty = Math.max(1, parseFloat(query.get('qty')) || 1);
      const prefs = parseJsonParam(query.get('prefs'), {});
      const tree = buildCraftingTree(id, qty, prefs);
      if (!tree) return localResponse({ error: 'Produit introuvable' }, 404);
      return localResponse(Object.assign({ tree },
        summarize(aggregateRawMaterials(tree, {}, true), aggregateLingots(tree))));
    }

    const detail = getProductDetail(id);
    return detail ? localResponse(detail) : localResponse({ error: 'Produit introuvable' }, 404);
  }

  return localResponse({ error: 'Route inconnue' }, 404);
}


// ==========================================================
// Application Inventaire - logique front-end
// ==========================================================

const API = '/api';
const RECIPE_PREFS_KEY = 'inventaire_recipe_prefs';

let allProducts = [];
let currentSort = { col: 'name', order: 'asc' };

// ----------------------------------------------------------
// Preferences de recette (quelle recette utiliser dans l'arbre)
// Stockees en local, cle : { "<productId>": <recipeId> }
// ----------------------------------------------------------
function getRecipePrefs() {
  try {
    return JSON.parse(localStorage.getItem(RECIPE_PREFS_KEY) || '{}');
  } catch (e) {
    return {};
  }
}

function setRecipePref(productId, recipeId) {
  const prefs = getRecipePrefs();
  prefs[productId] = recipeId;
  localStorage.setItem(RECIPE_PREFS_KEY, JSON.stringify(prefs));
}

// ----------------------------------------------------------
// Navigation entre onglets
// ----------------------------------------------------------
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');

    if (btn.dataset.tab === 'stats') loadStats();
    if (btn.dataset.tab === 'ship') loadShipTools();
  });
});

// ----------------------------------------------------------
// Chargement initial
// ----------------------------------------------------------
async function init() {
  await loadCategories();
  await loadProducts();
  await loadMultiCategories();
  await loadSmCategories();
}

async function loadCategories() {
  const res = await apiFetch(`${API}/categories`);
  const categories = await res.json();
  const select = document.getElementById('category-filter');

  categories.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.parent_name ? `${c.parent_name} › ${c.name}` : c.name;
    select.appendChild(opt);
  });
}

async function loadProducts() {
  const q = document.getElementById('search-input').value.trim();
  const categoryId = document.getElementById('category-filter').value;

  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (categoryId) params.set('category_id', categoryId);
  params.set('sort', currentSort.col);
  params.set('order', currentSort.order);

  const res = await apiFetch(`${API}/products?${params.toString()}`);
  allProducts = await res.json();
  renderTable(allProducts);
}

function renderTable(products) {
  const tbody = document.getElementById('products-tbody');
  document.getElementById('result-count').textContent = `${products.length} objet${products.length > 1 ? 's' : ''}`;

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-row">Aucun résultat</td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => `
    <tr data-id="${p.id}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td>${p.category_name ? `<span class="cat-pill">${escapeHtml(p.category_name)}</span>` : ''}</td>
      <td class="num">${formatPrice(p.price)}</td>
      <td class="num">${formatWeight(p.weight)}</td>
    </tr>
  `).join('');

  tbody.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('click', () => openDetail(tr.dataset.id));
  });
}

// ----------------------------------------------------------
// Recherche et filtres
// ----------------------------------------------------------
let searchDebounce;
document.getElementById('search-input').addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(loadProducts, 250);
});

document.getElementById('category-filter').addEventListener('change', loadProducts);

// ----------------------------------------------------------
// Tri des colonnes
// ----------------------------------------------------------
document.querySelectorAll('th.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const col = th.dataset.sort;
    if (currentSort.col === col) {
      currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
    } else {
      currentSort = { col, order: 'asc' };
    }

    document.querySelectorAll('.sort-arrow').forEach(a => a.textContent = '');
    th.querySelector('.sort-arrow').textContent = currentSort.order === 'asc' ? '▲' : '▼';

    loadProducts();
  });
});

// ----------------------------------------------------------
// Panneau de detail
// ----------------------------------------------------------
const overlay = document.getElementById('detail-overlay');
document.getElementById('detail-close').addEventListener('click', closeDetail);
overlay.addEventListener('click', e => { if (e.target === overlay) closeDetail(); });

function closeDetail() { overlay.classList.remove('open'); }

async function openDetail(id) {
  const res = await apiFetch(`${API}/products/${id}`);
  if (!res.ok) return;
  const p = await res.json();

  const breadcrumb = [p.parent_category_name, p.category_name].filter(Boolean).join(' › ');

  let html = `
    <div class="detail-breadcrumb">${escapeHtml(breadcrumb || 'Sans catégorie')}</div>
    <h2>${escapeHtml(p.name)}</h2>
    <div class="detail-meta">
      <div class="detail-meta-item"><span class="label">Prix</span><span class="val">${formatPrice(p.price)}</span></div>
      <div class="detail-meta-item"><span class="label">Poids</span><span class="val">${formatWeight(p.weight)}</span></div>
    </div>
    ${p.description ? `<div class="detail-desc">${escapeHtml(p.description)}</div>` : ''}
  `;

  if (p.specifications && p.specifications.length) {
    html += `<div class="detail-section-title">Spécifications</div>`;
    html += p.specifications.map(s => `
      <div class="spec-row"><span class="k">${escapeHtml(s.spec_key)}</span><span class="v">${escapeHtml(s.spec_value)}${s.spec_unit ? ' ' + escapeHtml(s.spec_unit) : ''}</span></div>
    `).join('');
  }

  if (p.recipes && p.recipes.length) {
    html += `<div class="detail-section-title">Fabrication</div>`;
    html += `<button class="tree-open-btn" id="open-tree-btn">Voir l'arbre de fabrication complet ↦</button>`;

    const hasMultiple = p.recipes.length > 1;
    if (hasMultiple) {
      html += `<div class="recipe-choice-hint">Plusieurs recettes existent — coche celle à utiliser dans l'arbre de fabrication.</div>`;
    }

    const prefs = getRecipePrefs();
    const preferredId = prefs[p.id];
    // Recette consideree comme "active" : celle en preference si elle existe
    // parmi les recettes de ce produit, sinon la premiere de la liste.
    const activeId = p.recipes.some(r => r.id === preferredId) ? preferredId : p.recipes[0].id;

    html += p.recipes.map(r => `
      <div class="recipe-block${hasMultiple && r.id === activeId ? ' recipe-block-active' : ''}">
        <div class="recipe-block-head">
          ${hasMultiple ? `
            <label class="recipe-radio">
              <input type="radio" name="recipe-choice-${p.id}" value="${r.id}" ${r.id === activeId ? 'checked' : ''} data-product-id="${p.id}">
              <span class="station-badge">${escapeHtml(r.station_name || '—')}</span>
            </label>
          ` : `<span class="station-badge">${escapeHtml(r.station_name || '—')}</span>`}
          <span class="plan-badge">${r.recipe_type === 'plan' ? 'Sur plan' : 'Standard'} · produit x${r.output_qty}</span>
        </div>
        ${r.ingredients.map(i => `
          <div class="ingredient-row" data-id="${i.ingredient_id}">
            <span class="name">${escapeHtml(i.ingredient_name)}</span>
            <span class="qty">x${i.quantity}</span>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  if (p.used_in && p.used_in.length) {
    html += `<div class="detail-section-title">Utilisé pour fabriquer</div>`;
    html += p.used_in.map(u => `
      <div class="usage-row" data-id="${u.id}"><span class="name">${escapeHtml(u.name)}</span></div>
    `).join('');
  }

  if (p.found_in && p.found_in.length) {
    html += `<div class="detail-section-title">Se trouve dans les ressources</div>`;
    html += p.found_in.map(f => `
      <div class="spec-row"><span class="k">${escapeHtml(f.source_name)}</span><span class="v">${escapeHtml(f.rate ?? '')}</span></div>
    `).join('');
  }

  document.getElementById('detail-content').innerHTML = html;

  document.querySelectorAll('#detail-content [data-id]').forEach(el => {
    el.addEventListener('click', () => openDetail(el.dataset.id));
  });

  document.querySelectorAll('#detail-content input[type="radio"][data-product-id]').forEach(radio => {
    radio.addEventListener('change', () => {
      setRecipePref(radio.dataset.productId, Number(radio.value));
      // Rafraichit l'affichage pour mettre en surbrillance la recette active
      openDetail(id);
    });
  });

  const treeBtn = document.getElementById('open-tree-btn');
  if (treeBtn) {
    treeBtn.addEventListener('click', () => openTree(id));
  }

  overlay.classList.add('open');
}

// ----------------------------------------------------------
// Arbre de fabrication complet
// ----------------------------------------------------------
const treeOverlay = document.getElementById('tree-overlay');
const treeQtyInput = document.getElementById('tree-qty-input');
let currentTreeProductId = null;
let treeQtyDebounce;

document.getElementById('tree-close').addEventListener('click', closeTree);
treeOverlay.addEventListener('click', e => { if (e.target === treeOverlay) closeTree(); });

function closeTree() { treeOverlay.classList.remove('open'); }

treeQtyInput.addEventListener('input', () => {
  clearTimeout(treeQtyDebounce);
  treeQtyDebounce = setTimeout(() => {
    if (currentTreeProductId) loadTree(currentTreeProductId, treeQtyInput.value);
  }, 300);
});

async function openTree(id) {
  currentTreeProductId = id;
  treeQtyInput.value = 1;
  overlay.classList.remove('open');
  treeOverlay.classList.add('open');
  await loadTree(id, 1);
}

async function loadTree(id, qty) {
  const q = Math.max(1, parseInt(qty) || 1);
  const prefs = getRecipePrefs();
  const params = new URLSearchParams();
  params.set('qty', q);
  if (Object.keys(prefs).length) {
    params.set('prefs', JSON.stringify(prefs));
  }

  const res = await apiFetch(`${API}/products/${id}/tree?${params.toString()}`);
  if (!res.ok) return;
  const data = await res.json();

  document.getElementById('tree-title').textContent = data.tree.name;
  renderFlowGraph(document.getElementById('tree-flow'), data.tree);

  const tbody = document.getElementById('tree-raw-tbody');
  if (data.raw_materials.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucune ressource brute (produit sans recette)</td></tr>`;
  } else {
    tbody.innerHTML = data.raw_materials.map(m => `
      <tr>
        <td>${escapeHtml(m.name)}</td>
        <td class="num">${formatQty(m.quantity)}</td>
      </tr>
    `).join('');
  }

  const lingotsTbody = document.getElementById('tree-lingots-tbody');
  const lingots = data.lingots || [];
  if (lingots.length === 0) {
    lingotsTbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun lingot nécessaire</td></tr>`;
  } else {
    lingotsTbody.innerHTML = lingots.map(l => `
      <tr>
        <td>${escapeHtml(l.name)}</td>
        <td class="num">${formatQty(l.quantity)}</td>
      </tr>
    `).join('');
  }

  const recipeTbody = document.getElementById('tree-recipe-tbody');
  const rootIngredients = (data.tree.recipes && data.tree.recipes.length) ? data.tree.recipes[0].ingredients : [];
  if (!rootIngredients.length) {
    recipeTbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucune recette (produit sans recette)</td></tr>`;
    document.getElementById('tree-recipe-total-cost').textContent = '—';
  } else {
    let recipeTotal = 0;
    let anyPrice = false;
    recipeTbody.innerHTML = rootIngredients.map(ing => {
      const hasPrice = ing.price !== null && ing.price !== undefined;
      const cost = hasPrice ? ing.price * ing.quantity : null;
      if (hasPrice) { recipeTotal += cost; anyPrice = true; }
      return `
        <tr>
          <td>${escapeHtml(ing.name)}</td>
          <td class="num">${formatQty(ing.quantity)}</td>
          <td class="num">${formatPrice(cost)}</td>
        </tr>
      `;
    }).join('');
    document.getElementById('tree-recipe-total-cost').textContent = anyPrice ? formatPrice(recipeTotal) : '—';
  }
}

// Les produits "Produit Final" (categorie Batiment de base) ne sont jamais
// des ingredients d'une autre recette : ils sont toujours repositionnes dans
// la derniere colonne du diagramme, quelle que soit la profondeur naturelle
// de leur propre recette.
function renderFlowBox(n) {
  let tag;
  if (n.is_final_product) {
    tag = `<span class="tree-tag tree-tag-final">Produit Final</span>`;
  } else if (n.is_raw) {
    tag = `<span class="tree-tag">ressource brute</span>`;
  } else if (n.station) {
    tag = `<span class="station-badge small">${escapeHtml(n.station)}</span>`;
  } else {
    tag = '';
  }
  const totalDuration = (n.duration || 0) * n.quantity;
  const durationHtml = !n.is_raw
    ? `<span class="flow-duration" title="Duree de fabrication totale (duree unitaire x quantite)">⏱ ${formatQty(totalDuration)} min</span>`
    : '';
  return `
    <div class="flow-box" data-node-id="${n.id}">
      <div class="flow-qty-row">
        <span class="flow-qty">x${formatQty(n.quantity)}</span>
        ${durationHtml}
      </div>
      <div class="flow-name">${escapeHtml(n.name)}</div>
      ${tag}
    </div>`;
}

// ----------------------------------------------------------
// Chaine de fabrication "graphe" (onglet Multi uniquement) : memes
// encadres que la vue en colonnes, mais avec de vraies lignes de
// liaison SVG entre chaque ingredient et le produit qu'il sert a
// fabriquer, au lieu d'une simple fleche entre colonnes.
// ----------------------------------------------------------
function computeFlowGraph(rootOrRoots) {
  const roots = Array.isArray(rootOrRoots) ? rootOrRoots : [rootOrRoots];
  const depthCache = new Map();
  const nodes = new Map();
  const edgeSet = new Set();
  const edges = [];

  function getDepth(node) {
    if (depthCache.has(node.id)) return depthCache.get(node.id);
    depthCache.set(node.id, 0);
    let depth = 0;
    if (!node.is_raw && node.recipes && node.recipes.length) {
      node.recipes[0].ingredients.forEach(ing => {
        depth = Math.max(depth, getDepth(ing) + 1);
      });
    }
    depthCache.set(node.id, depth);
    return depth;
  }

  function visit(node) {
    const depth = getDepth(node);
    const hasRecipe = !node.is_raw && node.recipes && node.recipes.length > 0;
    const recipe = hasRecipe ? node.recipes[0] : null;
    const existing = nodes.get(node.id);
    if (existing) {
      existing.quantity += node.quantity;
    } else {
      nodes.set(node.id, {
        id: node.id,
        name: node.name,
        quantity: node.quantity,
        duration: node.duration,
        station: recipe ? recipe.station : null,
        is_raw: !hasRecipe,
        is_final_product: !!node.is_final_product,
        depth,
        recipeInfo: recipe ? {
          station: recipe.station || null,
          recipeType: recipe.recipe_type || null,
          outputQty: recipe.output_qty || 1,
          ingredients: recipe.ingredients.map(ing => ({ name: ing.name, quantity: ing.quantity_per_craft }))
        } : null
      });
    }
    if (recipe) {
      recipe.ingredients.forEach(ing => {
        const edgeKey = `${ing.id}->${node.id}`;
        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          edges.push({ from: ing.id, to: node.id });
        }
        visit(ing);
      });
    }
  }

  roots.forEach(visit);
  return { nodes, edges };
}

function renderFlowGraph(container, root) {
  const { nodes, edges } = computeFlowGraph(root);

  // Meme regle que la vue en colonnes : la chaine part directement des
  // lingots, les ressources brutes sont retirees du graphe.
  const nodeList = Array.from(nodes.values()).filter(n => !n.is_raw || n.is_final_product);
  const keepIds = new Set(nodeList.map(n => n.id));
  const graphEdges = edges.filter(e => keepIds.has(e.from) && keepIds.has(e.to));

  const normalDepths = nodeList.filter(n => !n.is_final_product).map(n => n.depth);
  const maxNormalDepth = Math.max(0, ...normalDepths);
  const finalDepth = maxNormalDepth + 1;
  nodeList.forEach(n => { if (n.is_final_product) n.depth = finalDepth; });

  const minDepth = nodeList.length ? Math.min(...nodeList.map(n => n.depth)) : 0;
  nodeList.forEach(n => { n.depth -= minDepth; });

  const maxDepth = Math.max(0, ...nodeList.map(n => n.depth));
  const columns = Array.from({ length: maxDepth + 1 }, () => []);
  nodeList.forEach(n => columns[n.depth].push(n));

  // Ordonnancement des colonnes : la premiere par ordre alphabetique, les
  // suivantes par position moyenne (barycentre) de leurs sources deja
  // positionnees, pour limiter les croisements de lignes.
  const rowIndex = new Map();
  if (columns[0]) {
    columns[0].sort((a, b) => a.name.localeCompare(b.name, 'fr'));
    columns[0].forEach((n, i) => rowIndex.set(n.id, i));
  }
  for (let d = 1; d < columns.length; d++) {
    const col = columns[d];
    col.forEach(n => {
      const sources = graphEdges
        .filter(e => e.to === n.id)
        .map(e => rowIndex.get(e.from))
        .filter(v => v !== undefined);
      n._bary = sources.length ? sources.reduce((a, b) => a + b, 0) / sources.length : 999;
    });
    col.sort((a, b) => (a._bary - b._bary) || a.name.localeCompare(b.name, 'fr'));
    col.forEach((n, i) => rowIndex.set(n.id, i));
  }

  const colsHtml = columns.map(col => `
    <div class="flow-graph-col">${col.map(renderFlowBox).join('')}</div>
  `).join('');

  container.innerHTML = `
    <div class="flow-graph-wrap">
      <svg class="flow-graph-svg"></svg>
      <div class="flow-graph-cols">${colsHtml}</div>
    </div>
  `;

  drawFlowGraphLines(container, graphEdges);
  bindFlowRecipeHover(container, nodeList);
}

// ----------------------------------------------------------
// Info-bulle au survol d'un pave de chaine de fabrication : affiche
// les composants de la recette par defaut du produit (station, type
// de recette, quantite produite et liste des ingredients), pour tous
// les diagrammes bases sur renderFlowGraph (arbre produit, Multi, Ship).
// ----------------------------------------------------------
const flowRecipeTooltip = document.getElementById('flow-recipe-tooltip');
const flowRecipeTooltipContent = document.getElementById('flow-recipe-tooltip-content');

function bindFlowRecipeHover(container, nodeList) {
  const byId = new Map(nodeList.map(n => [String(n.id), n]));
  container.querySelectorAll('.flow-box[data-node-id]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const n = byId.get(el.dataset.nodeId);
      if (n) showFlowRecipeTooltip(el, n);
    });
    el.addEventListener('mouseleave', hideFlowRecipeTooltip);
  });
}

function showFlowRecipeTooltip(el, n) {
  if (!flowRecipeTooltip || !flowRecipeTooltipContent) return;
  const info = n.recipeInfo;
  let html;

  if (!info) {
    html = `<div class="flow-recipe-tooltip-empty">Ressource brute — aucune recette</div>`;
  } else {
    // Meme gabarit que le detail d'une recette sur la page produit
    // (recipe-block-head + station-badge + plan-badge + ingredient-row).
    html = `<div class="recipe-block-head">`;
    html += `<span class="station-badge">${escapeHtml(info.station || '—')}</span>`;
    html += `<span class="plan-badge">${info.recipeType === 'plan' ? 'Sur plan' : 'Standard'} · produit x${formatQty(info.outputQty)}</span>`;
    html += `</div>`;

    html += info.ingredients.length
      ? info.ingredients.map(ing => `
          <div class="ingredient-row"><span class="name">${escapeHtml(ing.name)}</span><span class="qty">x${formatQty(ing.quantity)}</span></div>
        `).join('')
      : `<div class="flow-recipe-tooltip-empty">Aucun composant</div>`;
  }

  flowRecipeTooltipContent.innerHTML = html;

  // Position hors ecran le temps de mesurer la taille reelle de l'info-bulle
  // (contenu variable), puis la place a droite du pave (ou a gauche si pas
  // de place), verticalement alignee, sans deborder de la fenetre.
  flowRecipeTooltip.style.left = '-9999px';
  flowRecipeTooltip.style.top = '-9999px';
  flowRecipeTooltip.classList.add('open');

  const rect = el.getBoundingClientRect();
  const tipRect = flowRecipeTooltip.getBoundingClientRect();

  let left = rect.right + 12;
  if (left + tipRect.width > window.innerWidth - 12) left = rect.left - tipRect.width - 12;
  if (left < 12) left = 12;

  let top = rect.top;
  if (top + tipRect.height > window.innerHeight - 12) top = window.innerHeight - tipRect.height - 12;
  if (top < 12) top = 12;

  flowRecipeTooltip.style.left = `${left}px`;
  flowRecipeTooltip.style.top = `${top}px`;
}

function hideFlowRecipeTooltip() {
  if (flowRecipeTooltip) flowRecipeTooltip.classList.remove('open');
}

// Trace les lignes de liaison (coude horizontal/vertical/horizontal) entre
// chaque ingredient et le produit fabrique, en mesurant la position reelle
// des encadres apres leur mise en page (gere les hauteurs variables).
function drawFlowGraphLines(container, edges) {
  const wrap = container.querySelector('.flow-graph-wrap');
  const svg = container.querySelector('.flow-graph-svg');
  if (!wrap || !svg) return;

  const wrapRect = wrap.getBoundingClientRect();
  const width = wrap.scrollWidth;
  const height = wrap.scrollHeight;
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const boxes = new Map();
  wrap.querySelectorAll('.flow-box[data-node-id]').forEach(el => {
    const r = el.getBoundingClientRect();
    boxes.set(el.dataset.nodeId, {
      right: r.right - wrapRect.left,
      left: r.left - wrapRect.left,
      midY: r.top - wrapRect.top + r.height / 2
    });
  });

  // Chaque produit source a sa propre couleur de ligne, pour distinguer
  // en un coup d'oeil quelle recette alimente quel encadre.
  const linkColorOf = makeLinkColorPicker();

  svg.innerHTML = edges.map(e => {
    const from = boxes.get(String(e.from));
    const to = boxes.get(String(e.to));
    if (!from || !to) return '';
    const x1 = from.right, y1 = from.midY;
    const x2 = to.left, y2 = to.midY;
    const midX = x1 + (x2 - x1) / 2;
    const color = linkColorOf(e.from);
    return `<path d="M ${x1} ${y1} H ${midX} V ${y2} H ${x2}" class="flow-link" stroke="${color}" />`;
  }).join('');
}

const FLOW_LINK_PALETTE = [
  '#4d9dff', '#f2a623', '#1fbf8f', '#e2603f', '#a78bfa',
  '#f472b6', '#84cc16', '#22d3ee', '#fb923c', '#60a5fa'
];

// Attribue une couleur stable a chaque produit source (memorisee pour la
// duree d'un seul rendu du diagramme).
function makeLinkColorPicker() {
  const assigned = new Map();
  let next = 0;
  return (sourceId) => {
    if (!assigned.has(sourceId)) {
      assigned.set(sourceId, FLOW_LINK_PALETTE[next % FLOW_LINK_PALETTE.length]);
      next++;
    }
    return assigned.get(sourceId);
  };
}

function formatQty(v) {
  if (v === null || v === undefined) return '0';
  return Number(v).toLocaleString('fr-FR', { maximumFractionDigits: 2 });
}

// ----------------------------------------------------------
// Onglet Multi : choix par categorie (partie gauche) puis validation
// en selection definitive (partie droite) + arbre combine
// ----------------------------------------------------------
const MULTI_CATEGORY_NAMES = [
  'Batiment de base',
  'Element artificiel',
  'Piece de vaisseau',
  'Module de stockage',
  'Outils specialises',
  'Panneau solaire',
  'Panneau thermique',
  'Munitions',
  'Arme',
  'Agents robotiques',
  "Equipement d'auxiliaire",
  'Module de collecte'
];

const multiSelected = new Map(); // id (Number) -> { id, name, qty } - selection definitive
let multiCategoryId = '';
let multiSearchDebounce;

async function loadMultiCategories() {
  const res = await apiFetch(`${API}/categories`);
  const categories = await res.json();
  const select = document.getElementById('multi-category-filter');

  MULTI_CATEGORY_NAMES.forEach(name => {
    const cat = categories.find(c => c.name === name);
    if (!cat) return;
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });
}

document.getElementById('multi-category-filter').addEventListener('change', () => {
  multiCategoryId = document.getElementById('multi-category-filter').value;
  loadMultiCategoryProducts();
});

document.getElementById('multi-search-input').addEventListener('input', () => {
  clearTimeout(multiSearchDebounce);
  multiSearchDebounce = setTimeout(loadMultiCategoryProducts, 250);
});

async function loadMultiCategoryProducts() {
  const tbody = document.getElementById('multi-products-tbody');

  if (!multiCategoryId) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;
    return;
  }

  const q = document.getElementById('multi-search-input').value.trim();
  const params = new URLSearchParams();
  params.set('category_id', multiCategoryId);
  if (q) params.set('q', q);

  const res = await apiFetch(`${API}/products?${params.toString()}`);
  const products = await res.json();

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun résultat</td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => `
    <tr data-id="${p.id}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num"><input type="number" min="0" step="1" class="multi-qty-input" value="0" data-id="${p.id}" data-name="${escapeHtml(p.name)}" aria-label="Quantité"></td>
    </tr>
  `).join('');
}

document.getElementById('multi-validate-qty-btn').addEventListener('click', () => {
  document.querySelectorAll('#multi-products-tbody .multi-qty-input').forEach(inp => {
    const qty = Math.max(0, parseInt(inp.value) || 0);
    if (qty > 0) {
      const id = Number(inp.dataset.id);
      multiSelected.set(id, { id, name: inp.dataset.name, qty });
    }
  });

  renderMultiSelected();

  // Reinitialise la partie gauche pour permettre une nouvelle recherche
  multiCategoryId = '';
  document.getElementById('multi-category-filter').value = '';
  document.getElementById('multi-search-input').value = '';
  document.getElementById('multi-products-tbody').innerHTML =
    `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;
});

function renderMultiSelected() {
  const container = document.getElementById('multi-selected-list');
  const treeBtn = document.getElementById('multi-tree-btn');

  if (multiSelected.size === 0) {
    container.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun produit sélectionné</td></tr>`;
    treeBtn.disabled = true;
    multiTreeOverlay.classList.remove('open');
    return;
  }

  treeBtn.disabled = false;

  container.innerHTML = Array.from(multiSelected.values()).map(p => `
    <tr data-id="${p.id}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num">x${formatQty(p.qty)}</td>
    </tr>
  `).join('');
}

const multiTreeOverlay = document.getElementById('multi-tree-overlay');
document.getElementById('multi-tree-close').addEventListener('click', () => multiTreeOverlay.classList.remove('open'));
multiTreeOverlay.addEventListener('click', e => { if (e.target === multiTreeOverlay) multiTreeOverlay.classList.remove('open'); });

document.getElementById('multi-tree-btn').addEventListener('click', loadMultiTree);

document.getElementById('multi-reset-selection-btn').addEventListener('click', () => {
  multiSelected.clear();
  renderMultiSelected();

  multiCategoryId = '';
  document.getElementById('multi-category-filter').value = '';
  document.getElementById('multi-search-input').value = '';
  document.getElementById('multi-products-tbody').innerHTML =
    `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;

  multiTreeOverlay.classList.remove('open');
});

// ----------------------------------------------------------
// Multi : sauvegarde/chargement de la Selection Definitive.
// Stockees sur disque cote serveur (data/multi-configs.json, via
// l'API /api/multi-configs), pour une conservation durable
// (independante du navigateur, non affectee par un vidage de
// cache et non ecrasee par la reconstruction de inventaire.db).
// ----------------------------------------------------------
let multiSavedConfigsCache = [];

async function loadMultiSavedConfigs() {
  try {
    const res = await apiFetch(`${API}/multi-configs`);
    multiSavedConfigsCache = await res.json();
  } catch (e) {
    multiSavedConfigsCache = [];
  }
  renderMultiSavedConfigs();
}

function formatMultiConfigDate(iso) {
  const d = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderMultiSavedConfigs() {
  const tbody = document.getElementById('multi-saved-configs-tbody');
  if (!tbody) return;

  if (multiSavedConfigsCache.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucune configuration sauvegardée</td></tr>`;
    return;
  }

  tbody.innerHTML = multiSavedConfigsCache.map(c => `
    <tr data-id="${c.id}">
      <td class="name-cell">${escapeHtml(c.name)}</td>
      <td>${formatMultiConfigDate(c.date)}</td>
      <td class="num">
        <div class="saved-config-actions">
          <button type="button" class="ship-config-btn multi-config-load-btn" data-id="${c.id}">Charger</button>
          <button type="button" class="ship-config-btn multi-config-delete-btn" data-id="${c.id}">Supprimer</button>
        </div>
      </td>
    </tr>
  `).join('');
}

document.getElementById('multi-save-config-btn').addEventListener('click', async () => {
  const name = window.prompt('Nom de la sauvegarde :');
  if (!name || !name.trim()) return;
  const trimmedName = name.trim();

  const items = Array.from(multiSelected.values());
  const existing = multiSavedConfigsCache.find(c => c.name === trimmedName);

  if (existing) {
    const overwrite = window.confirm(`Une sauvegarde nommée "${trimmedName}" existe déjà. Voulez-vous l'écraser ?`);
    if (!overwrite) return;

    await apiFetch(`${API}/multi-configs/${existing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: trimmedName, items })
    });
  } else {
    await apiFetch(`${API}/multi-configs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: trimmedName, items })
    });
  }

  await loadMultiSavedConfigs();
});

document.getElementById('multi-saved-configs-tbody').addEventListener('click', async e => {
  const loadBtn = e.target.closest('.multi-config-load-btn');
  const deleteBtn = e.target.closest('.multi-config-delete-btn');

  if (loadBtn) {
    const id = Number(loadBtn.dataset.id);
    const config = multiSavedConfigsCache.find(c => c.id === id);
    if (!config) return;

    multiSelected.clear();
    config.items.forEach(item => multiSelected.set(item.id, item));
    renderMultiSelected();
    multiTreeOverlay.classList.remove('open');
    return;
  }

  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    await apiFetch(`${API}/multi-configs/${id}`, { method: 'DELETE' });
    await loadMultiSavedConfigs();
  }
});

loadMultiSavedConfigs();

async function loadMultiTree() {
  const products = Array.from(multiSelected.values());
  if (!products.length) return;

  const prefs = getRecipePrefs();
  const items = products.map(p => ({ id: p.id, qty: p.qty }));

  const params = new URLSearchParams();
  params.set('items', JSON.stringify(items));
  if (Object.keys(prefs).length) params.set('prefs', JSON.stringify(prefs));

  const res = await apiFetch(`${API}/products/tree-multi?${params.toString()}`);
  if (!res.ok) return;
  const data = await res.json();

  const tbody = document.getElementById('multi-raw-tbody');
  if (data.raw_materials.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucune ressource brute (produits sans recette)</td></tr>`;
  } else {
    tbody.innerHTML = data.raw_materials.map(m => `
      <tr>
        <td>${escapeHtml(m.name)}</td>
        <td class="num">${formatQty(m.quantity)}</td>
      </tr>
    `).join('');
  }

  const lingotsTbody = document.getElementById('multi-lingots-tbody');
  const lingots = data.lingots || [];
  if (lingots.length === 0) {
    lingotsTbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun lingot nécessaire</td></tr>`;
  } else {
    lingotsTbody.innerHTML = lingots.map(l => `
      <tr>
        <td>${escapeHtml(l.name)}</td>
        <td class="num">${formatQty(l.quantity)}</td>
      </tr>
    `).join('');
  }

  const recipeAcc = new Map();
  data.trees.forEach(tree => {
    const ingredients = (tree.recipes && tree.recipes.length) ? tree.recipes[0].ingredients : [];
    ingredients.forEach(ing => {
      if (recipeAcc.has(ing.id)) {
        recipeAcc.get(ing.id).quantity += ing.quantity;
      } else {
        recipeAcc.set(ing.id, { id: ing.id, name: ing.name, price: ing.price, quantity: ing.quantity });
      }
    });
  });

  const recipeTbody = document.getElementById('multi-recipe-tbody');
  const recipeComponents = Array.from(recipeAcc.values());
  if (recipeComponents.length === 0) {
    recipeTbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucune recette (produits sans recette)</td></tr>`;
    document.getElementById('multi-recipe-total-cost').textContent = '—';
  } else {
    let recipeTotal = 0;
    let anyPrice = false;
    recipeTbody.innerHTML = recipeComponents.map(ing => {
      const hasPrice = ing.price !== null && ing.price !== undefined;
      const cost = hasPrice ? ing.price * ing.quantity : null;
      if (hasPrice) { recipeTotal += cost; anyPrice = true; }
      return `
        <tr>
          <td>${escapeHtml(ing.name)}</td>
          <td class="num">${formatQty(ing.quantity)}</td>
          <td class="num">${formatPrice(cost)}</td>
        </tr>
      `;
    }).join('');
    document.getElementById('multi-recipe-total-cost').textContent = anyPrice ? formatPrice(recipeTotal) : '—';
  }

  renderFlowGraph(document.getElementById('multi-tree-flow'), data.trees);

  multiTreeOverlay.classList.add('open');
}

// ----------------------------------------------------------
// Onglet SM (Saisie Manuelle) : choix par categorie (uniquement les
// categories de produits fabricables avec un batiment de base, c'est
// a dire a la station "Atelier", disponible sans construire de
// batiment specifique) puis validation en selection definitive et
// ecriture des durees de fabrication directement en base de donnees.
// ----------------------------------------------------------
const SM_CATEGORY_NAMES = [
  'Produit simple',
  'Kit ou revetement',
  "Equipement d'auxiliaire",
  'Agents robotiques',
  'Outils specialises',
  'Panneau solaire',
  'Panneau thermique',
  'Bonbonne',
  'Munitions',
  'Arme',
  'Engin',
  'Module de stockage',
  'Matrice de cristal',
  'Lingot',
  'Module de collecte',
  'Module thermique',
  'Batterie',
  'Bouclier',
  'Cockpit',
  'Module SL',
  'Module energetique',
  'Piece de fuselage',
  'Propulseur',
  'Radar'
];

const smSelected = new Map(); // id (Number) -> { id, name, duration } - selection definitive
let smCategoryId = '';
let smSearchDebounce;

async function loadSmCategories() {
  const res = await apiFetch(`${API}/categories`);
  const categories = await res.json();
  const select = document.getElementById('sm-category-filter');

  SM_CATEGORY_NAMES.forEach(name => {
    const cat = categories.find(c => c.name === name);
    if (!cat) return;
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });
}

document.getElementById('sm-category-filter').addEventListener('change', () => {
  smCategoryId = document.getElementById('sm-category-filter').value;
  loadSmCategoryProducts();
});

document.getElementById('sm-search-input').addEventListener('input', () => {
  clearTimeout(smSearchDebounce);
  smSearchDebounce = setTimeout(loadSmCategoryProducts, 250);
});

async function loadSmCategoryProducts() {
  const tbody = document.getElementById('sm-products-tbody');

  if (!smCategoryId) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;
    return;
  }

  const q = document.getElementById('sm-search-input').value.trim();
  const params = new URLSearchParams();
  params.set('category_id', smCategoryId);
  if (q) params.set('q', q);

  const res = await apiFetch(`${API}/products?${params.toString()}`);
  const products = await res.json();

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun résultat</td></tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => `
    <tr data-id="${p.id}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num"><input type="number" min="0" step="1" class="multi-qty-input" value="${p.duration ?? 0}" data-id="${p.id}" data-name="${escapeHtml(p.name)}" aria-label="Durée"></td>
    </tr>
  `).join('');
}

document.getElementById('sm-validate-qty-btn').addEventListener('click', () => {
  document.querySelectorAll('#sm-products-tbody .multi-qty-input').forEach(inp => {
    const duration = Math.max(0, parseFloat(inp.value) || 0);
    const id = Number(inp.dataset.id);
    smSelected.set(id, { id, name: inp.dataset.name, duration });
  });

  renderSmSelected();

  // Reinitialise la partie gauche pour permettre une nouvelle recherche
  smCategoryId = '';
  document.getElementById('sm-category-filter').value = '';
  document.getElementById('sm-search-input').value = '';
  document.getElementById('sm-products-tbody').innerHTML =
    `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;
});

function renderSmSelected() {
  const container = document.getElementById('sm-selected-list');
  const validateBtn = document.getElementById('sm-validate-definitive-btn');

  if (smSelected.size === 0) {
    container.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun produit sélectionné</td></tr>`;
    validateBtn.disabled = true;
    return;
  }

  validateBtn.disabled = false;

  container.innerHTML = Array.from(smSelected.values()).map(p => `
    <tr data-id="${p.id}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num">${formatQty(p.duration)}</td>
    </tr>
  `).join('');
}

document.getElementById('sm-reset-selection-btn').addEventListener('click', () => {
  smSelected.clear();
  renderSmSelected();

  smCategoryId = '';
  document.getElementById('sm-category-filter').value = '';
  document.getElementById('sm-search-input').value = '';
  document.getElementById('sm-products-tbody').innerHTML =
    `<tr><td colspan="2" class="empty-row">Choisissez une catégorie pour afficher les produits</td></tr>`;
});

document.getElementById('sm-validate-definitive-btn').addEventListener('click', async () => {
  const products = Array.from(smSelected.values());
  if (!products.length) return;

  const updates = products.map(p => ({ id: p.id, duration: p.duration }));

  await apiFetch(`${API}/products/update-durations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates })
  });

  smSelected.clear();
  renderSmSelected();
});

// ----------------------------------------------------------
// Onglet Ship : tableau "Choix des outils"
// Articles de la categorie "Piece de vaisseau", sous-categories
// "Piece de fuselage" et "Modificateur" exclues. Meme modele que le
// tableau de gauche de l'onglet Multi (nom + quantite modifiable).
// ----------------------------------------------------------
const SHIP_MAIN_CATEGORY = 'Piece de vaisseau';
const SHIP_EXCLUDED_SUBCATEGORIES = ['Piece de fuselage', 'Modificateur'];
const SHIP_EXTRA_CATEGORIES = [
  'Outils specialises',
  'Panneau solaire',
  'Panneau thermique',
  'Arme',
  'Module de collecte',
  'Module de stockage',
  'Module de navigation'
];

async function loadShipTools() {
  const tbody = document.getElementById('ship-tools-tbody');
  tbody.innerHTML = `<tr><td colspan="4" class="loading-row">Chargement…</td></tr>`;

  const catRes = await apiFetch(`${API}/categories`);
  const categories = await catRes.json();
  const shipCategory = categories.find(c => c.name === SHIP_MAIN_CATEGORY);

  if (!shipCategory) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-row">Categorie "${SHIP_MAIN_CATEGORY}" introuvable</td></tr>`;
    return;
  }

  const extraCategories = SHIP_EXTRA_CATEGORIES
    .map(name => categories.find(c => c.name === name))
    .filter(Boolean);

  const categoryIds = [shipCategory.id, ...extraCategories.map(c => c.id)];

  const productLists = await Promise.all(categoryIds.map(async id => {
    const params = new URLSearchParams();
    params.set('category_id', id);
    const res = await apiFetch(`${API}/products?${params.toString()}`);
    return res.json();
  }));

  const products = productLists.flat().filter(p => !SHIP_EXCLUDED_SUBCATEGORIES.includes(p.category_name));

  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="empty-row">Aucun résultat</td></tr>`;
    return;
  }

  // Valeur unitaire SP : specification "Apport requis" (augmente le total)
  // ou "Apport systeme" (diminue le total) a defaut
  await Promise.all(products.map(async p => {
    let sp = 0;
    let spType = 'requis';
    try {
      const detail = await apiFetch(`${API}/products/${p.id}`).then(r => r.json());
      shipHoverCache.set(String(p.id), detail);
      const specs = detail.specifications || [];
      const requisSpec = specs.find(s => s.spec_key === 'Apport requis');
      const systemeSpec = specs.find(s => s.spec_key === 'Apport systeme');
      const spSpec = requisSpec || systemeSpec;
      spType = requisSpec ? 'requis' : 'systeme';
      sp = spSpec ? Number(spSpec.spec_value) || 0 : 0;
    } catch (e) {
      sp = 0;
    }
    p.sp = sp;
    p.spType = spType;
  }));

  tbody.innerHTML = products.map(p => `
    <tr data-id="${p.id}" data-sp="${p.sp}" data-sp-type="${p.spType}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num">${formatQty(p.sp)}</td>
      <td class="num"><input type="number" min="0" step="1" class="multi-qty-input" value="0" data-id="${p.id}" data-name="${escapeHtml(p.name)}" aria-label="Quantité"></td>
      <td class="num ship-sp-total-cell">${formatQty(0)}</td>
    </tr>
  `).join('');

  bindShipHoverRows();
  bindShipQtyInputs();
  updateShipTotalSp();
  updateShipStats();
}

// ----------------------------------------------------------
// Ship : calcul en direct de la colonne "Total SP" (SP x quantite)
// et du total general des SP dont la quantite a ete modifiee,
// affiche en haut du tableau.
// ----------------------------------------------------------
function bindShipQtyInputs() {
  document.querySelectorAll('#ship-tools-tbody .multi-qty-input').forEach(inp => {
    inp.addEventListener('input', () => updateShipRowSp(inp));
  });
}

function updateShipRowSp(inp) {
  const tr = inp.closest('tr');
  if (!tr) return;
  const sp = Number(tr.dataset.sp) || 0;
  const qty = Math.max(0, parseInt(inp.value) || 0);
  const cell = tr.querySelector('.ship-sp-total-cell');
  if (cell) cell.textContent = formatQty(sp * qty);
  updateShipTotalSp();
  updateShipStats();
}

function updateShipTotalSp() {
  const el = document.getElementById('ship-tools-total-sp');
  if (!el) return;
  // Total SP = somme des Apports requis - somme des Apports systeme
  // (uniquement pour les articles dont la quantite a ete modifiee)
  let total = 0;
  document.querySelectorAll('#ship-tools-tbody tr[data-id]').forEach(tr => {
    const sp = Number(tr.dataset.sp) || 0;
    const spType = tr.dataset.spType;
    const inp = tr.querySelector('.multi-qty-input');
    const qty = inp ? Math.max(0, parseInt(inp.value) || 0) : 0;
    if (qty > 0) {
      total += spType === 'systeme' ? -(sp * qty) : (sp * qty);
    }
  });
  el.textContent = `Total SP : ${formatQty(total)}`;
}

// ----------------------------------------------------------
// Ship : tableau "Statistiques" (au-dessus de la Selection Definitive).
// Calcule, a partir des quantites saisies dans "Choix des outils",
// le Total SP ainsi que les capacites de soute solide/liquide,
// de mag-plasma et la production d'electricite des articles
// possedant la specification correspondante.
// ----------------------------------------------------------
function getShipSpecValue(productId, key) {
  const detail = shipHoverCache.get(String(productId));
  const specs = detail && detail.specifications ? detail.specifications : [];
  const spec = specs.find(s => s.spec_key === key);
  return spec ? Number(spec.spec_value) || 0 : 0;
}

function updateShipStats() {
  let totalSp = 0;
  let solide = 0;
  let liquide = 0;
  let magplasma = 0;
  let electricite = 0;
  let energie = 0;

  document.querySelectorAll('#ship-tools-tbody tr[data-id]').forEach(tr => {
    const inp = tr.querySelector('.multi-qty-input');
    const qty = inp ? Math.max(0, parseInt(inp.value) || 0) : 0;
    if (qty <= 0) return;

    const sp = Number(tr.dataset.sp) || 0;
    const spType = tr.dataset.spType;
    totalSp += spType === 'systeme' ? -(sp * qty) : (sp * qty);

    const id = tr.dataset.id;
    solide += getShipSpecValue(id, 'Stockage de solides') * qty;
    liquide += getShipSpecValue(id, 'Taille du reservoir') * qty;
    magplasma += getShipSpecValue(id, 'Stockage de mag-plasma') * qty;
    electricite += getShipSpecValue(id, "Production d'electricite") * qty;
    energie += getShipSpecValue(id, 'Stockage energetique') * qty;
  });

  const setStat = (id, value, unit) => {
    const el = document.getElementById(id);
    if (el) el.textContent = unit ? `${formatQty(value)} ${unit}` : formatQty(value);
  };
  setStat('ship-stat-sp', totalSp, '');
  setStat('ship-stat-solide', solide, 'su');
  setStat('ship-stat-liquide', liquide, 'L');
  setStat('ship-stat-magplasma', magplasma, 'L');
  setStat('ship-stat-electricite', electricite, 'MA');
  setStat('ship-stat-energie', energie, 'MAs');
}

// ----------------------------------------------------------
// Ship : volet flottant au survol d'un article (nom, description,
// specifications). Disparait quand le pointeur quitte l'article.
// ----------------------------------------------------------
const shipHoverPanel = document.getElementById('ship-hover-panel');
const shipHoverContent = document.getElementById('ship-hover-content');
const shipHoverCache = new Map(); // productId -> detail deja recupere
let shipHoverToken = 0;

function bindShipHoverRows() {
  document.querySelectorAll('#ship-tools-tbody tr[data-id]').forEach(tr => {
    tr.addEventListener('mouseenter', () => showShipHover(tr.dataset.id));
    tr.addEventListener('mouseleave', hideShipHover);
  });
}

async function showShipHover(id) {
  const token = ++shipHoverToken;

  let p = shipHoverCache.get(id);
  if (!p) {
    const res = await apiFetch(`${API}/products/${id}`);
    if (!res.ok) return;
    p = await res.json();
    shipHoverCache.set(id, p);
  }

  // Le pointeur a change de position (autre article ou plus d'article) entre-temps
  if (token !== shipHoverToken) return;

  let html = `<h3>${escapeHtml(p.name)}</h3>`;
  html += p.image_path ? `<img class="hover-panel-img" src="${p.image_path}" alt="${escapeHtml(p.name)}">` : '';
  html += p.description ? `<div class="detail-desc">${escapeHtml(p.description)}</div>` : '';

  if (p.specifications && p.specifications.length) {
    html += `<div class="detail-section-title">Spécifications</div>`;
    html += p.specifications.map(s => `
      <div class="spec-row"><span class="k">${escapeHtml(s.spec_key)}</span><span class="v">${escapeHtml(s.spec_value)}${s.spec_unit ? ' ' + escapeHtml(s.spec_unit) : ''}</span></div>
    `).join('');
  }

  shipHoverContent.innerHTML = html;
  shipHoverPanel.classList.add('open');
}

function hideShipHover() {
  shipHoverToken++;
  shipHoverPanel.classList.remove('open');
}

const shipSelected = new Map(); // id (Number) -> { id, name, qty, sp, spType } - selection definitive Ship

document.getElementById('ship-validate-qty-btn').addEventListener('click', () => {
  document.querySelectorAll('#ship-tools-tbody .multi-qty-input').forEach(inp => {
    const qty = Math.max(0, parseInt(inp.value) || 0);
    if (qty > 0) {
      const id = Number(inp.dataset.id);
      const tr = inp.closest('tr');
      const sp = tr ? Number(tr.dataset.sp) || 0 : 0;
      const spType = tr ? tr.dataset.spType : 'requis';
      shipSelected.set(id, { id, name: inp.dataset.name, qty, sp, spType });
    }
  });

  renderShipSelected();

  // Recharge la liste de gauche (quantites remises a 0) pour une nouvelle saisie
  loadShipTools();
});

function renderShipSelected() {
  const container = document.getElementById('ship-selected-list');
  const treeBtn = document.getElementById('ship-tree-btn');
  const fuselageBtn = document.getElementById('ship-fuselage-btn');

  if (shipSelected.size === 0) {
    container.innerHTML = `<tr><td colspan="4" class="empty-row">Aucun produit sélectionné</td></tr>`;
    treeBtn.disabled = true;
    if (fuselageBtn) fuselageBtn.disabled = true;
    shipTreeOverlay.classList.remove('open');
    shipFuselageOverlay.classList.remove('open');
    updateShipSelectedTotalSp();
    return;
  }

  treeBtn.disabled = false;
  if (fuselageBtn) fuselageBtn.disabled = false;

  container.innerHTML = Array.from(shipSelected.values()).map(p => `
    <tr data-id="${p.id}" data-sp="${p.sp}" data-sp-type="${p.spType}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num">${formatQty(p.sp)}</td>
      <td class="num">x${formatQty(p.qty)}</td>
      <td class="num">${formatQty(p.sp * p.qty)}</td>
    </tr>
  `).join('');

  updateShipSelectedTotalSp();
}

function updateShipSelectedTotalSp() {
  const el = document.getElementById('ship-selected-total-sp');
  if (!el) return;
  // Total SP = somme des Apports requis - somme des Apports systeme
  let total = 0;
  shipSelected.forEach(p => {
    total += p.spType === 'systeme' ? -(p.sp * p.qty) : (p.sp * p.qty);
  });
  el.textContent = `Total SP : ${formatQty(total)}`;
}

const shipTreeOverlay = document.getElementById('ship-tree-overlay');
document.getElementById('ship-tree-close').addEventListener('click', () => shipTreeOverlay.classList.remove('open'));
shipTreeOverlay.addEventListener('click', e => { if (e.target === shipTreeOverlay) shipTreeOverlay.classList.remove('open'); });

document.getElementById('ship-tree-btn').addEventListener('click', loadShipTree);

// ----------------------------------------------------------
// Ship : panneau "Calcul des pieces de fuselage", ouvert depuis
// la Selection Definitive. Affiche a gauche la Selection Definitive
// et a droite les Statistiques calculees sur cette selection.
// ----------------------------------------------------------
const shipFuselageOverlay = document.getElementById('ship-fuselage-overlay');
document.getElementById('ship-fuselage-close').addEventListener('click', () => shipFuselageOverlay.classList.remove('open'));
shipFuselageOverlay.addEventListener('click', e => { if (e.target === shipFuselageOverlay) shipFuselageOverlay.classList.remove('open'); });

document.getElementById('ship-fuselage-btn').addEventListener('click', openShipFuselagePanel);

async function openShipFuselagePanel() {
  if (shipSelected.size === 0) return;

  let totalSp = 0;
  shipSelected.forEach(p => {
    totalSp += p.spType === 'systeme' ? -(p.sp * p.qty) : (p.sp * p.qty);
  });

  const el = document.getElementById('ship-fuselage-stat-sp');
  if (el) el.textContent = formatQty(totalSp);

  shipFuselageTargetSp = totalSp;

  shipFuselageOverlay.classList.add('open');
  await loadShipFuselageParts();
  await renderShipFuselageProposal(shipFuselageTargetSp);
}

// ----------------------------------------------------------
// Panneau "Calcul des pieces de fuselage" : tableau de choix des
// pieces (categorie "Piece de fuselage"), regroupees par materiau
// dans un ordre fixe. Meme modele que le tableau de gauche de
// l'onglet Multi (nom + quantite modifiable), avec des colonnes
// de specifications supplementaires.
// ----------------------------------------------------------
const SHIP_FUSELAGE_CATEGORY = 'Piece de fuselage';
// Categorie ajoutee a la fin du tableau (produits de la categorie "Aile")
const SHIP_FUSELAGE_EXTRA_CATEGORY = 'Aile';
// Categorie ajoutee apres les produits "Aile" (Deporteurs) : cockpits
const SHIP_FUSELAGE_COCKPIT_CATEGORY = 'Cockpit';

// Derniere liste de pieces de fuselage chargee (hors categorie "Aile"),
// reutilisee par le calcul de la Proposition sans refaire d'appels reseau.
let shipFuselageLastCandidates = [];

// SP Requis courant (Statistiques), reutilise quand la Proposition est
// recalculee suite a un changement de la colonne "Exclu".
let shipFuselageTargetSp = 0;

// Ordre d'affichage des groupes de materiaux
const SHIP_FUSELAGE_GROUP_ORDER = ['Titane thermique', 'Levinium', 'Chassis solide', 'Titane', 'Acier', 'Acier thermique'];

// Ordre de detection (prefixes les plus specifiques d'abord, pour ne pas
// confondre "Titane" avec "Titane thermique", ni "Acier" avec "Acier thermique")
const SHIP_FUSELAGE_GROUP_DETECT_ORDER = ['Titane thermique', 'Acier thermique', 'Chassis solide', 'Levinium', 'Alliage X', 'Platinium', 'Titane', 'Acier'];

// Materiaux exclus du calcul de la Proposition par defaut (case "Exclu"
// pre-cochee "O" a l'ouverture du panneau) ; l'utilisateur peut toujours
// les reactiver en repassant la case a "N".
const SHIP_FUSELAGE_DEFAULT_EXCLUDED_GROUPS = ['Alliage X', 'Acier', 'Titane', 'Platinium'];

// Materiaux exclus via les choix O/N places sous le titre "Choix des pieces
// de fuselage" : les pieces d'un materiau a "O" ne sont pas affichees dans
// le tableau et n'entrent pas dans le calcul de la Proposition.
function getShipFuselageExcludedGroups() {
  const excluded = new Set();
  document.querySelectorAll('#ship-fuselage-material-filters .fuselage-material-select').forEach(sel => {
    if (sel.value === 'O') excluded.add(sel.dataset.group);
  });
  return excluded;
}

// Derniere liste complete des pieces chargees (fuselage + Aile), reutilisee
// pour re-afficher le tableau quand un choix de materiau change.
let shipFuselageAllParts = [];

function shipFuselageGroupOf(name) {
  const lower = name.toLowerCase();
  for (const g of SHIP_FUSELAGE_GROUP_DETECT_ORDER) {
    if (lower.startsWith(g.toLowerCase())) return g;
  }
  return null;
}

// Taille (ex. "8x3x2") extraite de la fin du nom de la piece, commune a
// plusieurs materiaux. Utilisee par le tableau "Proposition" pour plafonner
// le nombre de pieces proposees pour certaines tailles (voir SHIP_FUSELAGE_PROPOSAL_SIZES).
function shipFuselageSizeOf(name) {
  const m = name.match(/(\d+x\d+x\d+)\s*$/i);
  return m ? m[1].toLowerCase() : null;
}

// Tailles pour lesquelles le tableau "Proposition" propose un plafond de
// quantite (champ "ship-fuselage-maxqty-<taille>").
const SHIP_FUSELAGE_PROPOSAL_SIZES = ['4x3x1', '4x3x2', '6x3x1', '6x3x2', '8x3x1', '8x3x2', '8x6x2', '12x6x2', '16x6x2'];

async function loadShipFuselageParts() {
  const tbody = document.getElementById('ship-fuselage-parts-tbody');
  if (!tbody) return;
  tbody.innerHTML = `<tr><td colspan="8" class="loading-row">Chargement…</td></tr>`;

  const catRes = await apiFetch(`${API}/categories`);
  const categories = await catRes.json();
  const category = categories.find(c => c.name === SHIP_FUSELAGE_CATEGORY);
  const extraCategory = categories.find(c => c.name === SHIP_FUSELAGE_EXTRA_CATEGORY);
  const cockpitCategory = categories.find(c => c.name === SHIP_FUSELAGE_COCKPIT_CATEGORY);

  if (!category) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-row">Categorie "${SHIP_FUSELAGE_CATEGORY}" introuvable</td></tr>`;
    return;
  }

  const params = new URLSearchParams();
  params.set('category_id', category.id);
  const products = await apiFetch(`${API}/products?${params.toString()}`).then(r => r.json());

  let extraProducts = [];
  if (extraCategory) {
    const extraParams = new URLSearchParams();
    extraParams.set('category_id', extraCategory.id);
    extraProducts = await apiFetch(`${API}/products?${extraParams.toString()}`).then(r => r.json());
  }

  let cockpitProducts = [];
  if (cockpitCategory) {
    const cockpitParams = new URLSearchParams();
    cockpitParams.set('category_id', cockpitCategory.id);
    cockpitProducts = await apiFetch(`${API}/products?${cockpitParams.toString()}`).then(r => r.json());
  }

  if (products.length === 0 && extraProducts.length === 0 && cockpitProducts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-row">Aucun résultat</td></tr>`;
    return;
  }

  const loadShipFuselagePartSpecs = async p => {
    let detail = shipHoverCache.get(String(p.id));
    if (!detail) {
      detail = await apiFetch(`${API}/products/${p.id}`).then(r => r.json());
      shipHoverCache.set(String(p.id), detail);
    }
    const specs = detail.specifications || [];
    const getSpec = key => {
      const s = specs.find(s => s.spec_key === key);
      return s ? Number(s.spec_value) || 0 : 0;
    };
    p.sp = getSpec('Apport systeme');
    p.chassis = getSpec('Chassis');
    p.fuselage = getSpec('Fuselage');
    p.capThermique = getSpec('Capacite thermique');
  };

  await Promise.all(products.map(async p => {
    await loadShipFuselagePartSpecs(p);
    p.group = shipFuselageGroupOf(p.name);
    p.size = shipFuselageSizeOf(p.name);
  }));

  await Promise.all(extraProducts.map(p => loadShipFuselagePartSpecs(p)));
  await Promise.all(cockpitProducts.map(p => loadShipFuselagePartSpecs(p)));

  products.sort((a, b) => {
    const ga = SHIP_FUSELAGE_GROUP_ORDER.indexOf(a.group);
    const gb = SHIP_FUSELAGE_GROUP_ORDER.indexOf(b.group);
    if (ga !== gb) return ga - gb;
    return a.name.localeCompare(b.name, 'fr');
  });

  extraProducts.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  cockpitProducts.sort((a, b) => a.name.localeCompare(b.name, 'fr'));

  shipFuselageLastCandidates = products.map(p => ({
    id: p.id,
    name: p.name,
    group: p.group,
    size: p.size,
    sp: p.sp || 0,
    frame: p.chassis || 0,
    weight: p.weight || 0,
    fuselage: p.fuselage || 0,
    capTherm: p.capThermique || 0
  }));

  shipFuselageAllParts = products.concat(extraProducts, cockpitProducts);
  renderShipFuselagePartsRows();
}

// Affiche les lignes du tableau "Choix des pieces de fuselage" en masquant
// les materiaux a "O" ; conserve les quantites et choix "Exclu" deja saisis.
function renderShipFuselagePartsRows() {
  const tbody = document.getElementById('ship-fuselage-parts-tbody');
  if (!tbody) return;

  const prevQty = new Map();
  const prevExclu = new Map();
  tbody.querySelectorAll('tr[data-id]').forEach(tr => {
    const inp = tr.querySelector('.multi-qty-input');
    if (inp) prevQty.set(String(tr.dataset.id), inp.value);
    const sel = tr.querySelector('.fuselage-exclu-select');
    if (sel) prevExclu.set(String(tr.dataset.id), sel.value);
  });

  const excludedGroups = getShipFuselageExcludedGroups();
  const visibleParts = shipFuselageAllParts.filter(p => !p.group || !excludedGroups.has(p.group));

  if (visibleParts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-row">Aucun résultat</td></tr>`;
    updateShipFuselageStats();
    return;
  }


  tbody.innerHTML = visibleParts.map(p => {
    const defaultExclu = prevExclu.get(String(p.id)) || 'N';
    return `
    <tr data-id="${p.id}" data-sp="${p.sp}" data-chassis="${p.chassis}" data-weight="${p.weight || 0}" data-fuselage="${p.fuselage}" data-capterm="${p.capThermique}" data-exclu="${defaultExclu}">
      <td class="name-cell">${escapeHtml(p.name)}</td>
      <td class="num">${formatQty(p.sp)}</td>
      <td class="num">${formatQty(p.chassis)}</td>
      <td class="num">${formatFuselageWeight(p.weight)}</td>
      <td class="num">${formatQty(p.fuselage)}</td>
      <td class="num">${formatQty(p.capThermique)}</td>
      <td class="num"><input type="number" min="0" step="1" class="multi-qty-input" value="${prevQty.get(String(p.id)) || 0}" data-id="${p.id}" data-name="${escapeHtml(p.name)}" aria-label="Quantité"></td>
      <td class="num">
        <select class="fuselage-exclu-select" data-id="${p.id}" aria-label="Exclure cette piece du calcul d'optimisation">
          <option value="N" ${defaultExclu === 'N' ? 'selected' : ''}>N</option>
          <option value="O" ${defaultExclu === 'O' ? 'selected' : ''}>O</option>
        </select>
      </td>
    </tr>
  `;
  }).join('');

  bindShipFuselagePartsQtyInputs();
  bindShipFuselagePartsExcluSelects();
  updateShipFuselageStats();
}

// Choix O/N par materiau : re-affiche le tableau et recalcule la Proposition.
document.querySelectorAll('#ship-fuselage-material-filters .fuselage-material-select').forEach(sel => {
  sel.addEventListener('change', () => {
    renderShipFuselagePartsRows();
    renderShipFuselageProposal(shipFuselageTargetSp);
  });
});

// ----------------------------------------------------------
// Panneau "Calcul des pieces de fuselage" : calcul en direct des
// statistiques (colonne de droite) a partir des quantites saisies
// dans le tableau "Choix des pieces de fuselage".
// ----------------------------------------------------------
function bindShipFuselagePartsQtyInputs() {
  document.querySelectorAll('#ship-fuselage-parts-tbody .multi-qty-input').forEach(inp => {
    inp.addEventListener('input', updateShipFuselageStats);
  });
}

function bindShipFuselagePartsExcluSelects() {
  document.querySelectorAll('#ship-fuselage-parts-tbody .fuselage-exclu-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const tr = sel.closest('tr');
      if (tr) tr.dataset.exclu = sel.value;
      renderShipFuselageProposal(shipFuselageTargetSp);
    });
  });
}

// Objectifs "Integrite" et "Cap Thermique Total" (tableau "Proposition") :
// recalcule la proposition des qu'un de ces deux champs change.
['ship-fuselage-integrity-target-input', 'ship-fuselage-captherm-target-input'].forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('change', () => {
      renderShipFuselageProposal(shipFuselageTargetSp);
    });
  }
});

// Plafonds de quantite par taille (tableau "Proposition") : recalcule la
// proposition des qu'un des champs "ship-fuselage-maxqty-<taille>" change.
SHIP_FUSELAGE_PROPOSAL_SIZES.forEach(size => {
  const input = document.getElementById(`ship-fuselage-maxqty-${size}`);
  if (input) {
    input.addEventListener('change', () => {
      renderShipFuselageProposal(shipFuselageTargetSp);
    });
  }
});

function updateShipFuselageStats() {
  let spTotal = 0;
  let poidsTotal = 0;
  let frameTotal = 0;
  let fuselageTotal = 0;
  let capTermTotal = 0;

  document.querySelectorAll('#ship-fuselage-parts-tbody tr[data-id]').forEach(tr => {
    const inp = tr.querySelector('.multi-qty-input');
    const qty = inp ? Math.max(0, parseInt(inp.value) || 0) : 0;
    if (qty <= 0) return;

    spTotal += (Number(tr.dataset.sp) || 0) * qty;
    poidsTotal += (Number(tr.dataset.weight) || 0) * qty;
    frameTotal += (Number(tr.dataset.chassis) || 0) * qty;
    fuselageTotal += (Number(tr.dataset.fuselage) || 0) * qty;
    capTermTotal += (Number(tr.dataset.capterm) || 0) * qty;
  });

  const integrite = frameTotal > 0 ? 200 - 0.28 * (poidsTotal * poidsTotal) / frameTotal : 0;

  const setStat = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = formatQty(value);
  };

  setStat('ship-fuselage-stat-integrite', integrite);
  setStat('ship-fuselage-stat-sp-total', spTotal);
  setStat('ship-fuselage-stat-poids-total', poidsTotal);
  setStat('ship-fuselage-stat-frame-total', frameTotal);
  setStat('ship-fuselage-stat-fuselage-total', fuselageTotal);
  setStat('ship-fuselage-stat-capterm-total', capTermTotal);
}

// ----------------------------------------------------------
// Tableau "Statistiques" : colonne "Proposition", calculee a partir des
// lignes du tableau "Proposition" (elements deja valides Aile/Cockpit +
// pieces de fuselage proposees), pour comparer avec la colonne "Choix"
// (saisie manuelle dans le tableau "Choix des pieces de fuselage").
// ----------------------------------------------------------
function setShipFuselageProposalStats(stats) {
  const setStat = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = formatQty(value);
  };
  setStat('ship-fuselage-stat-sp-total-proposal', stats.spTotal);
  setStat('ship-fuselage-stat-integrite-proposal', stats.integrite);
  setStat('ship-fuselage-stat-poids-total-proposal', stats.poidsTotal);
  setStat('ship-fuselage-stat-frame-total-proposal', stats.frameTotal);
  setStat('ship-fuselage-stat-fuselage-total-proposal', stats.fuselageTotal);
  setStat('ship-fuselage-stat-capterm-total-proposal', stats.capTermTotal);
}

function resetShipFuselageProposalStats() {
  setShipFuselageProposalStats({
    spTotal: 0, integrite: 0, poidsTotal: 0, frameTotal: 0, fuselageTotal: 0, capTermTotal: 0
  });
}

// ----------------------------------------------------------
// Panneau "Calcul des pieces de fuselage" : tableau "Proposition".
// Calcule automatiquement, a l'ouverture du panneau, une combinaison
// de pieces de fuselage qui :
//   - ne descend jamais en dessous de 100% d'integrite (objectif prioritaire) ;
//   - vise ensuite a atteindre le "SP Requis" affiche dans les Statistiques ;
//   - utilise au moins 30 pieces au total ;
//   - ne depasse pas la masse totale autorisee par la puissance du/des
//     propulseur(s) presents dans la Selection Definitive ;
//   - entre plusieurs materiaux de meme format (ex. 4x3x2), privilegie la
//     variante thermique (Titane/Acier "plain" est donc exclu du calcul des
//     qu'une variante thermique existe pour le meme format, ce qui est
//     toujours le cas dans les donnees actuelles).
// ----------------------------------------------------------
const SHIP_FUSELAGE_PROPOSAL_MIN_INTEGRITY = 100;
const SHIP_FUSELAGE_PROPOSAL_CAPTHERM_TARGET_DEFAULT = 2000;

function shipFuselageIntegrityFor(weight, frame) {
  if (frame <= 0) return weight > 0 ? -Infinity : 200;
  return 200 - 0.28 * (weight * weight) / frame;
}

// Recherche, dans la Selection Definitive, tout produit portant une
// specification "Puissance" (le/les propulseur(s)) et additionne
// (valeur x quantite) pour obtenir la masse totale autorisee.
async function getShipPropulsionMassBudget() {
  let total = 0;
  let found = false;

  for (const p of shipSelected.values()) {
    let detail = shipHoverCache.get(String(p.id));
    if (!detail) {
      detail = await apiFetch(`${API}/products/${p.id}`).then(r => r.json());
      shipHoverCache.set(String(p.id), detail);
    }
    const specs = detail.specifications || [];
    const puissance = specs.find(s => s.spec_key === 'Puissance');
    if (puissance) {
      found = true;
      total += (Number(puissance.spec_value) || 0) * p.qty;
    }
  }

  return { total, found };
}

// ----------------------------------------------------------
// Elements de la Selection Definitive qui font partie du fuselage : Aile,
// Deporteur (tous deux dans la categorie "Aile") et Cockpit. Ils apportent
// du SP (deja pris en compte dans le SP Requis global, via leur "Apport
// systeme") mais aussi du poids et du chassis, qui doivent servir de point
// de depart fixe (avant optimisation) pour le calcul des pieces de
// fuselage : sinon l'optimiseur ignorerait le poids qu'ils ajoutent deja
// au vaisseau et pourrait depasser la masse maximale reelle.
// ----------------------------------------------------------
const SHIP_FUSELAGE_BASELINE_CATEGORIES = ['Aile', 'Cockpit'];

async function getShipFuselageSelectionBaseline() {
  let weight = 0;
  let frame = 0;
  let sp = 0;
  let fuselage = 0;
  let capTherm = 0;
  const items = [];

  for (const p of shipSelected.values()) {
    let detail = shipHoverCache.get(String(p.id));
    if (!detail) {
      detail = await apiFetch(`${API}/products/${p.id}`).then(r => r.json());
      shipHoverCache.set(String(p.id), detail);
    }
    if (!SHIP_FUSELAGE_BASELINE_CATEGORIES.includes(detail.category_name)) continue;

    const specs = detail.specifications || [];
    const getSpec = key => {
      const s = specs.find(s => s.spec_key === key);
      return s ? Number(s.spec_value) || 0 : 0;
    };
    const itemFrame = getSpec('Chassis');
    const itemWeight = Number(detail.weight) || 0;
    const itemSp = getSpec('Apport systeme');
    const itemFuselage = getSpec('Fuselage');
    const itemCapTherm = getSpec('Capacite thermique');

    weight += itemWeight * p.qty;
    frame += itemFrame * p.qty;
    sp += itemSp * p.qty;
    fuselage += itemFuselage * p.qty;
    capTherm += itemCapTherm * p.qty;
    items.push({ id: p.id, name: p.name, qty: p.qty });
  }

  return { weight, frame, sp, fuselage, capTherm, items };
}

// Calcul glouton en deux phases.
// Phase 1 : ajoute les pieces une par une tant que le SP Requis n'est pas
// atteint. Tant que l'integrite resultante resterait >= objectif
// d'integrite (integrityTarget), on choisit la piece qui fait le plus
// progresser le SP total vers l'objectif. Si plus aucune piece ne permet de
// rester au-dessus de l'objectif, on passe en "recuperation" : on ajoute la
// piece avec le meilleur ratio Chassis/Poids pour remonter l'integrite,
// jusqu'a ce que la masse maximale soit atteinte.
// Phase 2 (uniquement si capThermTarget est defini) : une fois le SP Requis
// atteint, continue d'ajouter des pieces (en respectant toujours l'objectif
// d'integrite, la masse et les plafonds de taille) tant que cela rapproche
// le Cap Thermique Total de l'objectif "capThermTarget" ; s'arrete des que
// plus aucun ajout ne rapproche de cet objectif.
// "sizeCaps" (ex. { '8x3x2': 2 }) plafonne le nombre total de pieces
// proposees pour certaines tailles, tous materiaux confondus.
function computeShipFuselageProposal(candidates, targetSp, massBudget, sizeCaps, integrityTarget, capThermTarget, baselineWeight, baselineFrame, baselineSp, baselineCapTherm) {
  const qty = new Map();
  candidates.forEach(c => qty.set(c.id, 0));

  let totalWeight = baselineWeight || 0, totalFrame = baselineFrame || 0, totalSp = baselineSp || 0;
  let totalCapTherm = baselineCapTherm || 0, totalPieces = 0;
  const MIN_INTEGRITY = Number.isFinite(integrityTarget) ? integrityTarget : SHIP_FUSELAGE_PROPOSAL_MIN_INTEGRITY;
  const EPS = 1e-6;
  const caps = sizeCaps || {};
  const sizeUsed = new Map();
  Object.keys(caps).forEach(size => sizeUsed.set(size, 0));
  const sizeCapOk = c => !c.size || !(c.size in caps) || (sizeUsed.get(c.size) || 0) < caps[c.size];

  const pick = choice => {
    qty.set(choice.id, qty.get(choice.id) + 1);
    if (choice.size && choice.size in caps) sizeUsed.set(choice.size, (sizeUsed.get(choice.size) || 0) + 1);
    totalWeight += choice.weight;
    totalFrame += choice.frame;
    totalSp += choice.sp;
    totalCapTherm += choice.capTherm;
    totalPieces += 1;
  };

  let guard = 0;
  while (guard++ < 20000) {
    const needMoreSp = totalSp < targetSp - EPS;
    if (!needMoreSp) break;

    const feasible = candidates.filter(c => totalWeight + c.weight <= massBudget + EPS && sizeCapOk(c));
    if (feasible.length === 0) break;

    const safe = feasible.filter(c =>
      shipFuselageIntegrityFor(totalWeight + c.weight, totalFrame + c.frame) >= MIN_INTEGRITY - EPS
    );

    let choice = null;

    if (safe.length > 0) {
      for (const c of safe) {
        if (!choice
          || c.sp > choice.sp
          || (c.sp === choice.sp && c.weight < choice.weight)
          || (c.sp === choice.sp && c.weight === choice.weight && c.frame > choice.frame)) {
          choice = c;
        }
      }
    } else {
      const curIntegrity = shipFuselageIntegrityFor(totalWeight, totalFrame);
      for (const c of feasible) {
        const ratio = c.weight > 0 ? c.frame / c.weight : Infinity;
        const bestRatio = choice ? (choice.weight > 0 ? choice.frame / choice.weight : Infinity) : -Infinity;
        if (!choice || ratio > bestRatio) choice = c;
      }
      if (choice) {
        const newIntegrity = shipFuselageIntegrityFor(totalWeight + choice.weight, totalFrame + choice.frame);
        if (totalWeight > 0 && newIntegrity <= curIntegrity + EPS) break;
      }
    }

    if (!choice) break;
    pick(choice);
  }

  if (Number.isFinite(capThermTarget)) {
    let guard2 = 0;
    while (guard2++ < 20000) {
      const feasible = candidates.filter(c => totalWeight + c.weight <= massBudget + EPS && sizeCapOk(c));
      if (feasible.length === 0) break;

      const safe = feasible.filter(c =>
        shipFuselageIntegrityFor(totalWeight + c.weight, totalFrame + c.frame) >= MIN_INTEGRITY - EPS
      );
      if (safe.length === 0) break;

      const curDist = Math.abs(totalCapTherm - capThermTarget);
      let choice = null, bestDist = curDist;
      for (const c of safe) {
        const newDist = Math.abs(totalCapTherm + c.capTherm - capThermTarget);
        if (newDist < bestDist - EPS) { choice = c; bestDist = newDist; }
      }

      if (!choice) break;
      pick(choice);
    }
  }

  const integrite = shipFuselageIntegrityFor(totalWeight, totalFrame);
  const warnings = [];
  if (totalSp < targetSp - EPS) warnings.push(`SP Requis non atteint dans la limite de masse`);
  if (integrite < MIN_INTEGRITY - EPS) warnings.push(`intégrité sous l'objectif de ${formatQty(MIN_INTEGRITY)}% : aucune combinaison possible dans la limite de masse`);

  return { qty, totalWeight, totalFrame, totalSp, totalCapTherm, totalPieces, integrite, warnings };
}

async function renderShipFuselageProposal(targetSpRaw) {
  const tbody = document.getElementById('ship-fuselage-proposal-tbody');
  const noteEl = document.getElementById('ship-fuselage-proposal-note');
  if (!tbody) return;

  tbody.innerHTML = `<tr><td colspan="2" class="loading-row">Calcul…</td></tr>`;
  if (noteEl) { noteEl.textContent = ''; noteEl.classList.remove('warning'); }

  const targetSp = Math.max(0, targetSpRaw || 0);

  // Pieces cochees "O" dans la colonne "Exclu" du tableau "Choix des pieces
  // de fuselage" : elles ne doivent pas entrer dans le calcul d'optimisation.
  const excludedIds = new Set();
  document.querySelectorAll('#ship-fuselage-parts-tbody tr[data-id]').forEach(tr => {
    const sel = tr.querySelector('.fuselage-exclu-select');
    const value = sel ? sel.value : tr.dataset.exclu;
    if (value === 'O') excludedIds.add(String(tr.dataset.id));
  });

  // Materiaux exclus par defaut (Alliage X, Acier, Titane, Platinium) et
  // pieces cochees "O" manuellement : geres via la colonne "Exclu"
  // (voir SHIP_FUSELAGE_DEFAULT_EXCLUDED_GROUPS et excludedIds ci-dessus).
  const excludedGroups = getShipFuselageExcludedGroups();
  const candidates = (shipFuselageLastCandidates || [])
    .filter(c => !excludedIds.has(String(c.id)))
    .filter(c => !c.group || !excludedGroups.has(c.group));

  // Plafonds de quantite par taille (champs a droite du titre "Proposition") :
  // valeur saisie si valide (>= 0), sinon 0 (aucune piece de cette taille).
  const sizeCaps = {};
  SHIP_FUSELAGE_PROPOSAL_SIZES.forEach(size => {
    const input = document.getElementById(`ship-fuselage-maxqty-${size}`);
    const value = input ? parseInt(input.value, 10) : NaN;
    sizeCaps[size] = Number.isFinite(value) && value >= 0 ? value : 0;
  });

  // Objectif "Integrite" : valeur saisie si valide, sinon 100 par defaut.
  const integrityTargetInput = document.getElementById('ship-fuselage-integrity-target-input');
  let integrityTarget = integrityTargetInput ? parseFloat(integrityTargetInput.value) : NaN;
  if (!Number.isFinite(integrityTarget)) integrityTarget = SHIP_FUSELAGE_PROPOSAL_MIN_INTEGRITY;

  // Objectif "Cap Thermique Total" : valeur a essayer d'atteindre au plus
  // pres, valeur saisie si valide, sinon 2000 par defaut. Applique des la
  // toute premiere proposition.
  const capThermTargetInput = document.getElementById('ship-fuselage-captherm-target-input');
  let capThermTarget = capThermTargetInput ? parseFloat(capThermTargetInput.value) : NaN;
  if (!Number.isFinite(capThermTarget) || capThermTarget < 0) capThermTarget = SHIP_FUSELAGE_PROPOSAL_CAPTHERM_TARGET_DEFAULT;

  // Ailes, Deporteurs et Cockpit deja valides dans la Selection Definitive :
  // affiches dans le tableau et pris en compte comme poids/chassis de
  // depart pour le calcul d'optimisation.
  const baseline = await getShipFuselageSelectionBaseline();
  const baselineRowsHtml = baseline.items
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'))
    .map(item => `
      <tr>
        <td class="name-cell">${escapeHtml(item.name)}</td>
        <td class="num">${formatQty(item.qty)}</td>
      </tr>
    `).join('');

  if (candidates.length === 0) {
    tbody.innerHTML = baselineRowsHtml + `<tr><td colspan="2" class="empty-row">Aucune piece de fuselage disponible (verifiez la colonne "Exclu")</td></tr>`;
    resetShipFuselageProposalStats();
    return;
  }

  const { total: massBudget, found: hasPropulsor } = await getShipPropulsionMassBudget();

  if (!hasPropulsor || massBudget <= 0) {
    tbody.innerHTML = baselineRowsHtml + `<tr><td colspan="2" class="empty-row">Aucun propulseur dans la Sélection définitive : masse maximale inconnue</td></tr>`;
    resetShipFuselageProposalStats();
    return;
  }

  const result = computeShipFuselageProposal(candidates, targetSp, massBudget, sizeCaps, integrityTarget, capThermTarget, baseline.weight, baseline.frame, baseline.sp, baseline.capTherm);

  const rows = candidates
    .map(c => ({ c, qty: result.qty.get(c.id) || 0 }))
    .filter(r => r.qty > 0)
    .sort((a, b) => b.qty - a.qty || a.c.name.localeCompare(b.c.name, 'fr'));

  const proposalRowsHtml = rows.length === 0
    ? `<tr><td colspan="2" class="empty-row">Aucune combinaison trouvée dans la limite de masse</td></tr>`
    : rows.map(r => `
      <tr>
        <td class="name-cell">${escapeHtml(r.c.name)}</td>
        <td class="num">${formatQty(r.qty)}</td>
      </tr>
    `).join('');

  tbody.innerHTML = baselineRowsHtml + proposalRowsHtml;

  // Colonne "Proposition" du tableau Statistiques : additionne les elements
  // deja valides (Aile/Cockpit) et les pieces de fuselage proposees, pour
  // permettre la comparaison avec la colonne "Choix" (saisie manuelle).
  const propSpTotal = baseline.sp + rows.reduce((sum, r) => sum + r.c.sp * r.qty, 0);
  const propFuselageTotal = baseline.fuselage + rows.reduce((sum, r) => sum + r.c.fuselage * r.qty, 0);
  const propCapTermTotal = result.totalCapTherm;
  const propWeightTotal = result.totalWeight;
  const propFrameTotal = result.totalFrame;

  setShipFuselageProposalStats({
    spTotal: propSpTotal,
    integrite: result.integrite,
    poidsTotal: propWeightTotal,
    frameTotal: propFrameTotal,
    fuselageTotal: propFuselageTotal,
    capTermTotal: propCapTermTotal
  });

  if (noteEl) {
    const summary = `Total : ${formatQty(result.totalPieces)} pièces · Masse ${formatQty(result.totalWeight)} / ${formatQty(massBudget)} t · SP ${formatQty(result.totalSp)} / ${formatQty(targetSp)} · Intégrité ${formatQty(result.integrite)} % (objectif ${formatQty(integrityTarget)}%) · Cap Therm ${formatQty(result.totalCapTherm)}${Number.isFinite(capThermTarget) ? ` / ${formatQty(capThermTarget)}` : ''}`;
    if (result.warnings.length > 0) {
      noteEl.textContent = `${summary} — ${result.warnings.join(', ')}.`;
      noteEl.classList.add('warning');
    } else {
      noteEl.textContent = summary;
    }
  }
}

document.getElementById('ship-reset-selection-btn').addEventListener('click', () => {
  shipSelected.clear();
  renderShipSelected();
  loadShipTools();
  shipTreeOverlay.classList.remove('open');
  shipFuselageOverlay.classList.remove('open');
});

// ----------------------------------------------------------
// Ship : sauvegarde/chargement de la Selection Definitive.
// Stockees sur disque cote serveur (data/ship-configs.json, via
// l'API /api/ship-configs), pour une conservation durable
// (independante du navigateur, non affectee par un vidage de
// cache et non ecrasee par la reconstruction de inventaire.db).
// ----------------------------------------------------------
let shipSavedConfigsCache = [];

async function loadShipSavedConfigs() {
  try {
    const res = await apiFetch(`${API}/ship-configs`);
    shipSavedConfigsCache = await res.json();
  } catch (e) {
    shipSavedConfigsCache = [];
  }
  renderShipSavedConfigs();
}

function formatShipConfigDate(iso) {
  const d = new Date(iso);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderShipSavedConfigs() {
  const tbody = document.getElementById('ship-saved-configs-tbody');
  if (!tbody) return;

  if (shipSavedConfigsCache.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucune configuration sauvegardée</td></tr>`;
    return;
  }

  tbody.innerHTML = shipSavedConfigsCache.map(c => `
    <tr data-id="${c.id}">
      <td class="name-cell">${escapeHtml(c.name)}</td>
      <td>${formatShipConfigDate(c.date)}</td>
      <td class="num">
        <div class="saved-config-actions">
          <button type="button" class="ship-config-btn ship-config-load-btn" data-id="${c.id}">Charger</button>
          <button type="button" class="ship-config-btn ship-config-delete-btn" data-id="${c.id}">Supprimer</button>
        </div>
      </td>
    </tr>
  `).join('');
}

document.getElementById('ship-save-config-btn').addEventListener('click', async () => {
  const name = window.prompt('Nom de la sauvegarde :');
  if (!name || !name.trim()) return;
  const trimmedName = name.trim();

  const items = Array.from(shipSelected.values());
  const existing = shipSavedConfigsCache.find(c => c.name === trimmedName);

  if (existing) {
    const overwrite = window.confirm(`Une sauvegarde nommée "${trimmedName}" existe déjà. Voulez-vous l'écraser ?`);
    if (!overwrite) return;

    await apiFetch(`${API}/ship-configs/${existing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: trimmedName, items })
    });
  } else {
    await apiFetch(`${API}/ship-configs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: trimmedName, items })
    });
  }

  await loadShipSavedConfigs();
});

document.getElementById('ship-saved-configs-tbody').addEventListener('click', async e => {
  const loadBtn = e.target.closest('.ship-config-load-btn');
  const deleteBtn = e.target.closest('.ship-config-delete-btn');

  if (loadBtn) {
    const id = Number(loadBtn.dataset.id);
    const config = shipSavedConfigsCache.find(c => c.id === id);
    if (!config) return;

    shipSelected.clear();
    config.items.forEach(item => shipSelected.set(item.id, item));
    renderShipSelected();
    shipTreeOverlay.classList.remove('open');
    shipFuselageOverlay.classList.remove('open');
    return;
  }

  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.id);
    await apiFetch(`${API}/ship-configs/${id}`, { method: 'DELETE' });
    await loadShipSavedConfigs();
  }
});

loadShipSavedConfigs();

async function loadShipTree() {
  const products = Array.from(shipSelected.values());
  if (!products.length) return;

  const prefs = getRecipePrefs();
  const items = products.map(p => ({ id: p.id, qty: p.qty }));

  const params = new URLSearchParams();
  params.set('items', JSON.stringify(items));
  if (Object.keys(prefs).length) params.set('prefs', JSON.stringify(prefs));

  const res = await apiFetch(`${API}/products/tree-multi?${params.toString()}`);
  if (!res.ok) return;
  const data = await res.json();

  const tbody = document.getElementById('ship-raw-tbody');
  if (data.raw_materials.length === 0) {
    tbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucune ressource brute (produits sans recette)</td></tr>`;
  } else {
    tbody.innerHTML = data.raw_materials.map(m => `
      <tr>
        <td>${escapeHtml(m.name)}</td>
        <td class="num">${formatQty(m.quantity)}</td>
      </tr>
    `).join('');
  }

  const lingotsTbody = document.getElementById('ship-lingots-tbody');
  const lingots = data.lingots || [];
  if (lingots.length === 0) {
    lingotsTbody.innerHTML = `<tr><td colspan="2" class="empty-row">Aucun lingot nécessaire</td></tr>`;
  } else {
    lingotsTbody.innerHTML = lingots.map(l => `
      <tr>
        <td>${escapeHtml(l.name)}</td>
        <td class="num">${formatQty(l.quantity)}</td>
      </tr>
    `).join('');
  }

  const recipeAcc = new Map();
  data.trees.forEach(tree => {
    const ingredients = (tree.recipes && tree.recipes.length) ? tree.recipes[0].ingredients : [];
    ingredients.forEach(ing => {
      if (recipeAcc.has(ing.id)) {
        recipeAcc.get(ing.id).quantity += ing.quantity;
      } else {
        recipeAcc.set(ing.id, { id: ing.id, name: ing.name, price: ing.price, quantity: ing.quantity });
      }
    });
  });

  const recipeTbody = document.getElementById('ship-recipe-tbody');
  const recipeComponents = Array.from(recipeAcc.values());
  if (recipeComponents.length === 0) {
    recipeTbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucune recette (produits sans recette)</td></tr>`;
    document.getElementById('ship-recipe-total-cost').textContent = '—';
  } else {
    let recipeTotal = 0;
    let anyPrice = false;
    recipeTbody.innerHTML = recipeComponents.map(ing => {
      const hasPrice = ing.price !== null && ing.price !== undefined;
      const cost = hasPrice ? ing.price * ing.quantity : null;
      if (hasPrice) { recipeTotal += cost; anyPrice = true; }
      return `
        <tr>
          <td>${escapeHtml(ing.name)}</td>
          <td class="num">${formatQty(ing.quantity)}</td>
          <td class="num">${formatPrice(cost)}</td>
        </tr>
      `;
    }).join('');
    document.getElementById('ship-recipe-total-cost').textContent = anyPrice ? formatPrice(recipeTotal) : '—';
  }

  renderFlowGraph(document.getElementById('ship-tree-flow'), data.trees);

  shipTreeOverlay.classList.add('open');
}

// ----------------------------------------------------------
// Statistiques
// ----------------------------------------------------------
let statsLoaded = false;

async function loadStats() {
  const res = await apiFetch(`${API}/stats`);
  const stats = await res.json();

  document.getElementById('stat-total-products').textContent = stats.total_products;
  document.getElementById('stat-total-recipes').textContent = stats.total_recipes;
  document.getElementById('stat-avg-price').textContent = formatPrice(stats.avg_price);
  document.getElementById('stat-total-value').textContent = formatPrice(stats.total_value);

  renderCategoryTable(stats.count_by_parent_category);
  renderExpensiveTable(stats.most_expensive);
  loadNoPriceTable();
}

const CATEGORY_TABLE_NAMES = [
  'Batiment de base',
  'Collecte',
  'Element artificiel',
  'Materiau',
  'Module externe',
  'Module interne',
  'Piece de vaisseau'
];

function renderCategoryTable(data) {
  const tbody = document.querySelector('#category-table tbody');
  tbody.innerHTML = CATEGORY_TABLE_NAMES.map(name => {
    const entry = data.find(d => d.parent_category === name);
    return `
      <tr>
        <td>${escapeHtml(name)}</td>
        <td class="num">${entry ? formatQty(entry.count) : '0'}</td>
      </tr>
    `;
  }).join('');
}

function renderExpensiveTable(items) {
  const tbody = document.querySelector('#expensive-table tbody');
  tbody.innerHTML = items.map(i => `
    <tr><td>${escapeHtml(i.name)}</td><td class="num">${formatPrice(i.price)}</td></tr>
  `).join('');
}

// ----------------------------------------------------------
// Produits sans prix + panneau "Mise a Jour Manuelle"
// ----------------------------------------------------------
async function loadNoPriceTable() {
  const res = await apiFetch(`${API}/products/without-price`);
  const products = await res.json();

  const tbody = document.querySelector('#no-price-table tbody');
  if (products.length === 0) {
    tbody.innerHTML = `<tr><td class="empty-row">Tous les produits ont un prix</td></tr>`;
  } else {
    tbody.innerHTML = products.map(p => `<tr><td>${escapeHtml(p.name)}</td></tr>`).join('');
  }
}

const priceUpdateOverlay = document.getElementById('price-update-overlay');
document.getElementById('open-price-update-btn').addEventListener('click', openPriceUpdatePanel);
document.getElementById('price-update-close').addEventListener('click', () => priceUpdateOverlay.classList.remove('open'));
document.getElementById('price-update-validate-btn').addEventListener('click', validatePriceUpdates);

async function openPriceUpdatePanel() {
  const res = await apiFetch(`${API}/products/without-price`);
  const products = await res.json();

  const tbody = document.getElementById('price-update-tbody');
  if (products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="empty-row">Aucun produit sans prix</td></tr>`;
  } else {
    tbody.innerHTML = products.map(p => `
      <tr data-id="${p.id}">
        <td>${escapeHtml(p.name)}</td>
        <td class="num"><input type="number" step="0.01" min="0" class="multi-qty-input price-input" data-id="${p.id}" placeholder="Prix"></td>
        <td class="num"><button type="button" class="no-price-btn" data-id="${p.id}">Sans Prix</button></td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.no-price-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = btn.closest('tr');
        const input = row.querySelector('.price-input');
        const active = btn.classList.toggle('active');
        if (active) {
          input.value = '';
          input.disabled = true;
        } else {
          input.disabled = false;
        }
      });
    });

    tbody.querySelectorAll('.price-input').forEach(input => {
      input.addEventListener('input', () => {
        if (input.value === '') return;
        const row = input.closest('tr');
        const btn = row.querySelector('.no-price-btn');
        btn.classList.remove('active');
      });
    });
  }

  priceUpdateOverlay.classList.add('open');
}

async function validatePriceUpdates() {
  const rows = document.querySelectorAll('#price-update-tbody tr[data-id]');
  const updates = Array.from(rows).map(row => {
    const id = row.dataset.id;
    const noPrice = row.querySelector('.no-price-btn').classList.contains('active');
    const priceVal = row.querySelector('.price-input').value;
    return {
      id,
      no_price: noPrice,
      price: noPrice ? null : (priceVal === '' ? null : priceVal)
    };
  }).filter(u => u.no_price || u.price !== null);

  if (updates.length === 0) {
    priceUpdateOverlay.classList.remove('open');
    return;
  }

  await apiFetch(`${API}/products/update-prices`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates })
  });

  priceUpdateOverlay.classList.remove('open');
  loadNoPriceTable();
}

// ----------------------------------------------------------
// Utilitaires
// ----------------------------------------------------------
function formatPrice(v) {
  if (v === null || v === undefined) return '—';
  return Number(v).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' su';
}

function formatWeight(v) {
  if (v === null || v === undefined) return '—';
  return Number(v).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' kg';
}

// Poids des pieces de fuselage : l'unite de masse utilisee pour ce
// panneau est la tonne (t), pas le kg.
function formatFuselageWeight(v) {
  if (v === null || v === undefined) return '—';
  return Number(v).toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' t';
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

init();
