import type { PortfolioItemData } from "./content-types";

export const contentItems = {

    QuelqueChoseAChangeDansLAir: {
        id: 'qacda',
        title: "Quelque chose a changé dans l'air",
        description: 'Danse, théâtre, musique et couleurs rendent hommage aux moments qui ont transformé notre vie.',
        fullDescription: "Quelque chose a changé dans l'air explore les moments qui transforment notre existence. A partir de témoignages du public, danse, théâtre et musique se rencontrent et improvisent ensemble pour révéler les traces physiques ou symboliques que les événements marquent sur nos corps. Une matière colorée leur donne vie, sous forme de motifs, de formes et de traînées dans l'air et sur les corps et crée une expérience visuelle et émotionnelle captivante.",
        additionalInfo: [
            {
                label: 'Compagnie',
                value: '<a href="https://www.les-ecorces.com" target="_blank">Les Écorces</a>',
            },
            {
                label: 'Mise en scène',
                value: 'Alice Rey',
            },
            {
                label: 'Distribution',
                value: 'Alice Rey, Kenan Philbert-Zehani, Pierre Lemmel, Lionel Boucharlat, Alice Bounmy, Constanza Aliste',
            },
            {
                label: 'Nombre de représentations',
                value: '35',
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://www.la-factory.org/" target="_blank">Théâtre de l'Oulle</a>  (Avignon)</li>
                    <li><a href="https://www.lecroiseur.fr/" target="_blank">Le Croiseur</a>  (Lyon)</li>
                    <li>Salle Paul Garçin (Lyon)</li>
                    <li><a href="https://www.improviste.be/" target="_blank">L'Improviste</a>  (Bruxelles)</li>
                    <li><a href="https://www.theatre-clavel.com/" target="_blank">Théâtre Clavel</a>  (Paris)</li>
                    <li><a href="https://improenseine.com/" target="_blank">Impro en Seine</a>  (Paris)</li>
                    <li><a href="https://improfestival.com/" target="_blank">Semaine de l'Impro</a>  (Nancy)</li>
                </ul>
                `,
            }
        ],
        coverImage: '/img/theatre/qacda/qacda-cover.jpg',
        additionalImages: [
            '/img/theatre/qacda/qacda-cover.jpg',
            {
                type: 'youtube',
                id: 'jfNCNQVzyCw',
            },
            {
                type: 'video',
                src: '/img/arts-numeriques/dwl/dwl-poc-mapping.mp4',
                videoType: 'mp4',
            },
            '/img/theatre/qacda/qacda-01.jpg',
            '/img/theatre/qacda/qacda-02.jpg',
            '/img/theatre/qacda/qacda-03.jpg',
            '/img/theatre/qacda/qacda-04.jpg',
            '/img/theatre/qacda/qacda-05.jpg',
        ],
        tags: ['Danse', 'Théâtre', 'Improvisation'],
        roles: ['Comédien', 'Assisant mise en scène'],
        fromDate: '2023',
        link: "https://www.les-ecorces.com/spectacles"
    },

    Aleas: {
        id: 'aleas',
        title: 'Aleas',
        description: "Spectacle aléatoire et improvisé.",
        fullDescription: "Dans ce spectacle, la lumière, les musiques, les vidéo-projections et même la durée de chaque scène, sont controlés aléatoirement par un ordinateur. Charge aux artistes de transformer ces hasardeuses propositions en moments de plaisir, de magie ou de tout autre chose.",
        coverImage: '/img/theatre/aleas/aleas-cover.jpg',
        additionalImages: [
            '/img/theatre/aleas/aleas-01.jpg',
            '/img/theatre/aleas/aleas-cover.jpg',
            '/img/theatre/aleas/aleas-02.jpg',
            '/img/theatre/aleas/aleas-03.jpg',
            '/img/theatre/aleas/aleas-04.jpg',
            '/img/theatre/aleas/aleas-05.jpg',
        ],
        tags: ['Improvisation', 'Aléatoire', 'Arts numériques'],
        roles: ['Directeur artistique', 'Directeur technique', 'Comédien'],
        fromDate: '2022',
        toDate: '2025',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Tout est dans le titre',
            },
            {
                label: 'Mise en scène',
                value: 'Pierre Lemmel',
            },
            {
                label: 'Distribution',
                value: 'Luc Mouret, Charlotte Finet, Clémence Mollet, Romain Guyot, Dorine Bocquet, Kenan Philbert-Zehani, Pierre Lemmel, Alice Rey',
            },
            {
                label: 'Nombre de représentations',
                value: '100+',
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://www.theatres-luna.fr/" target="_blank">Théâtre de la Luna</a>  (Avignon)</li>
                    <li><a href="https://www.theatredutemps.net/" target="_blank">Théâtre du temps</a>  (Paris)</li>
                    <li><a href="https://www.improviste.be/" target="_blank">L'Improviste</a>  (Bruxelles)</li>
                    <li><a href="https://www.theatredutemps.net/" target="_blank">Théâtre du Temps</a>  (Paris)</li>
                    <li><a href="https://www.theotheatre.com/" target="_blank">Théo Théâtre</a>  (Paris)</li>
                    <li><a href="https://improenseine.com/" target="_blank">Impro en Seine</a>  (Paris)</li>
                    <li>Théâtre Tremplin (Avignon)</li>
                    <li>Improvi'bar (Paris)</li>
                    <li><a href="https://lafabriqueaimpros.com/" target="_blank">Fabrique à Impros</a>  (Nantes)</li>
                </ul>
                `,
            }, 
        ],
        link: "https://www.billetreduc.com/spectacle/aleas-330517/avis"
    },

    PleinLaGueule: {
        id: 'plein-la-gueule',
        title: 'Plein la gueule',
        description: 'Gros sons, grosses lumières, gros mots… tous les moyens sont bons pour vous en mettre plein la gueule !',
        fullDescription: 'A partir de textes du public, les artistes créent un univers allant de l’onirique à l’absurde, du quotidien au merveilleux. Les histoires se répondent et font écho les unes aux autres. Le spectacle est à la croisée des théâtres improvisé, écrit et physique. La beauté du texte y rencontre l’animalité de l’improvisation et la puissance graphique des corps.',
        coverImage: '/img/theatre/plg/plg-cover.jpg',
        tags: ['Théâtre contemporain', 'Théâtre physique', 'Improvisation'],
        roles: ['Metteur en scène', 'Comédien', 'Réalisation technique'],
        additionalImages: [
            '/img/theatre/plg/plg-01.jpg',
            '/img/theatre/plg/plg-02.jpg',
            '/img/theatre/plg/plg-03.jpg',
        ],
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Tout est dans le titre',
            },
            {
                label: 'Mise en scène',
                value: 'Pierre Lemmel',
            },
            {
                label: 'Distribution',
                value: 'Juliette Baron, Simon Coulm, Pierre Lemmel',
            },
            {
                label: 'Lumières',
                value: 'David Buit, Harmonie Freyburger',
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://www.improviste.be/" target="_blank">L'Improviste</a>  (Bruxelles)</li>
                    <li><a href="https://www.theatredutemps.net/" target="_blank">Théâtre du Temps</a>  (Paris)</li>
                    <li><a href="https://improenseine.com/" target="_blank">Impro en Seine</a>  (Paris)</li>
                    <li><a href="https://theatredugouvernail.fr/letheatre/" target="_blank">Théâtre du Gouvernail</a>  (Paris)</li>
                    <li>Improvi'bar (Paris)</li>
                </ul>
                `,
            },
        ],
        fromDate: '2021',
    },

    NSFW: {
        id: 'nsfw',
        title: 'NSFW',
        description: 'Spectacle improvisé expérimental entre adultes consentant.e.s.',
        fullDescription: 'Spectacle improvisé expérimental entre adultes consentant.e.s.',
        coverImage: '/img/theatre/misc/nsfw-cover.jpg',
        additionalImages: [
            '/img/theatre/misc/nsfw-cover.jpg'
        ],
        tags: ['Improvisation', 'Théâtre contemporain', 'Spectacle pour adultes'],
        roles: ['Comédien'],
        fromDate: '2021',
        toDate: '2023',
        additionalInfo: [
            {
                label: 'Mise en scène',
                value: 'Luc Mouret',
            },
            {
                label: 'Distribution',
                value: 'Luc Mouret, Emma Debroise, Jo',
            },
        ]
    },

    TresChairCorps: {
        id: 'tres-chair-corps',
        title: 'Très chair corps',
        description: 'Un seul en scène improvisé explorant le rapport au corps.',
        roles: ['Création lumières', 'Régie Improvisée'],
        fullDescription: 'À travers des anecdotes et témoignages anonymes, ce seul en scène improvisé explore le corps que l\'on porte depuis la naissance – ce qu\'il révèle, ce qu\'il dissimule, notre rapport à soi et au regard des autres. Un spectacle intime mêlant saynètes improvisées et récits personnels.',
        coverImage: '/img/theatre/tcc/tcc-cover.jpg',
        additionalImages: [
            '/img/theatre/tcc/tcc-01.jpg',
            '/img/theatre/tcc/tcc-02.jpg',
            '/img/theatre/tcc/tcc-03.jpg',
            '/img/theatre/tcc/tcc-04.jpg',
            '/img/theatre/tcc/tcc-05.jpg',
        ],
        tags: ['Improvisation', 'Seule en scène', 'Théâtre contemporain'],
        fromDate: '2025',
        link: "https://www.tres-chair-corps.fr/",
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Anamorphoses',
            },
            {
                label: 'Mise en scène',
                value: 'Sylvie Nadin',
            },
            {
                label: 'Interpète',
                value: 'Sylvie Nadin',
            },
        ]
    },

    Ensemble: {
        id: 'ensemble',
        title: 'Ensemble',
        description: 'Un spectacle sur la rencontre entre individus dans un monde en fuite, présenté avec l\'Orchestre Philharmonique de Genève.',
        fullDescription: `<div>Dans un monde en fuite, une troupe d'individus se croise, pressée, bruyante, chacun portant avec lui ses souvenirs, ses espoirs et ses peurs. Comment réagit-on quand on ne sait pas où aller et quand on ne connaît pas ceux qui nous entourent ? L'orage éclate. Chacun cherche à se protéger, à sa manière : ils se rapprochent, s'éloignent, hésitent. Ils apprennent peu à peu à se comprendre. C'est dans le partage des émotions et des défauts, dans la douceur du campement et des rêves, que chacun va essayer de se trouver, se comprendre et se réveiller.</div>
        <div>Avec les adolescent·es de la classe Acces II et de l'atelier théâtre du Collège Rousseau, accompagné·es sur scène par les seniors de la structure AVIVO.</div>`,
        coverImage: '/img/theatre/ensemble/ensemble-cover.jpg',
        additionalImages: [
            '/img/theatre/ensemble/ensemble-01.jpg',
            '/img/theatre/ensemble/ensemble-02.jpg',
            '/img/theatre/ensemble/ensemble-03.jpg',
            '/img/theatre/ensemble/ensemble-04.jpg',
        ],
        additionalInfo: [
            {
                label: 'Représentations',
                value: '17 avril - 13 mai 2025',
            },
            {
                label: 'Mise en scène et texte',
                value: 'Victoria May et Loup Lacaille',
            },
            {
                label: 'Enseignants référents',
                value: 'Raouf Sana et Marc Zucchello',
            },
            {
                label: 'Création sonore et interprétation',
                value: 'Aida Diop',
            },
        ],
        tags: ['Musique', 'Orchestre'],
        roles: ['Création lumière'],
        link: "https://locg.ch/fr/calendrier/ensemble",
        fromDate: '2025',
    },

    SystemeExploitation: {
        id: 'systeme-exploitation',
        title: "Système d'exploitation",
        description: 'Une tragi-comédie dystopique entre Brecht et Black Mirror sur l\'omniprésence des écrans.',
        fullDescription: "Dans un futur proche marqué par une crise écologique et économique, les citoyens sont devenus dépendants des écrans. Une intelligence artificielle nommée « Minotaure » observe et enquête. Militants éco-anxieux, livreurs ubérisés, mères isolées, cadres en burn-out... tous sont impactés par les métadonnées croisées et l'omniprésence numérique. Une pièce contemporaine mêlant humour et gravité, inspirée de Black Mirror et Brecht.",
        coverImage: '/img/theatre/sysex/sysex-cover.jpg',
        additionalImages: [
            '/img/theatre/sysex/sysex-01.jpg',
            '/img/theatre/sysex/sysex-02.jpg',
            '/img/theatre/sysex/sysex-03.jpg',
            '/img/theatre/sysex/sysex-04.jpg',
        ],
        tags: ['Théâtre', 'Dystopie'],
        roles: [
            'Comédien',
        ],
        fromDate: '2023',
        toDate: '2023',
        additionalInfo: [
            {
                label: 'Mise en scène',
                value: 'Luc Mouret',
            },
            {
                label: 'Distribution',
                value: '(En alternance) Adeline Belloc, Amira Hadzic, Pierre Lemmel, Emma Debroise, Karine Bocobza, Nathalie Charade, Tom Bérenger, Xavier Kutalian, Emma Ceya, Lucas de La Loge',
            },
            {
                label: 'Représentations',
                value: '30 dates à la Folie Théâtre (Paris)',
            }
        ],
        link: "https://www.folietheatre.com/?page=Spectacle&spectacle=408"
    },

    Zermos: {
        id: 'zermos',
        title: 'Zermos',
        description: 'Zone Exposée aux Risques de Mouvements Spontanés – théâtre physique improvisé mêlant danse, mime et parole.',
        fullDescription: "Le spectacle commence par une chanson tirée au sort par le public, source d'inspiration pour les comédiens. À partir de cette musique, ils improvisent une histoire à la fois poétique et burlesque. Les émotions, les rêves, le quotidien sont incarnés par les corps, les mots, les gestes. Chaque représentation est unique, mêlant danse, mime, parole et mouvements spontanés.",
        coverImage: '/img/theatre/zermos/zermos-cover.png',
        additionalImages: [
            '/img/theatre/zermos/zermos-cover.png',
            {
                type: 'youtube',
                id: 'Dnd62kSrSUM',
            },
        ],
        roles: ['Comédien'],
        tags: ['Improvisation', 'Danse', 'Théâtre physique'],
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Sémillants',
            },
            {
                label: 'Mise en scène',
                value: 'Sarah Zetiou',
            },
        ],
        fromDate: '2022',
        toDate: '2024',
    },

    // TODO: Les Sons de ma vie - Aucune information trouvée en ligne. À compléter avec les infos du site les-ecorces.com
    LesSonsDeMaVie: {
        id: 'les-sons-de-ma-vie',
        title: 'Les Sons de ma vie',
        description: 'TODO: Description courte à compléter',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/les-sons-de-ma-vie/les-sons-de-ma-vie-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation'], // TODO: À compléter avec les bons tags
        // fromDate: 'TODO',
        link: "https://www.les-ecorces.com/spectacles"
    },

    // TODO: Madeleine - Aucune information trouvée en ligne. À compléter avec les infos du site les-ecorces.com
    Madeleine: {
        id: 'madeleine',
        title: 'Madeleine',
        description: 'TODO: Description courte à compléter',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/madeleine/madeleine-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation'], // TODO: À compléter avec les bons tags
        // fromDate: 'TODO',
        link: "https://www.les-ecorces.com/spectacles"
    },

    // TODO: Terrarium - Aucune information trouvée en ligne. À compléter avec les infos du site les-ecorces.com
    Terrarium: {
        id: 'terrarium',
        title: 'Terrarium',
        description: 'TODO: Description courte à compléter',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/terrarium/terrarium-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation'], // TODO: À compléter avec les bons tags
        // fromDate: 'TODO',
        link: "https://www.les-ecorces.com/spectacles"
    },

    Frichti: {
        id: 'frichti',
        title: 'Frichti',
        description: 'Spectacle d\'improvisation interactive où les comédiens créent une pièce à partir de 50 ingrédients proposés par le public.',
        fullDescription: "Les comédiens doivent créer de toutes pièces un spectacle en intégrant 50 « ingrédients » — des propositions données par le public. Comme un repas improvisé avec ce qu'on trouve dans le frigo, chaque représentation est unique et éphémère. Le public devient co-auteur de cette création spontanée.",
        coverImage: '/img/theatre/frichti/frichti-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'Interactif'],
        roles: ['Réalisation technique'],
        // fromDate: 'TODO',
        link: "https://improvidence.fr/spectacles/43359-frichti/"
    },

    Accoudes: {
        id: 'accoudes',
        title: 'Accoudés',
        description: 'Spectacle immersif au comptoir : 4 comédiens incarnent serveurs et clients, mêlant anecdotes, récits, musique et chant improvisés.',
        fullDescription: "« Bienvenue au comptoir ! Qu'est-ce que j'vous sers ? » Derrière chaque personne accoudée au comptoir se cache une histoire. Quatre comédiens jouent directement dans le décor du bar, incarnant à la fois serveurs et clients. Les récits s'appuient sur les anecdotes du comptoir, pensées, désirs, des histoires inattendues aux tons variés, avec musique et chant improvisés.",
        coverImage: '/img/theatre/accoudes/accoudes-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'Immersif', 'Musique'],
        roles: ['Comédien'],
        // fromDate: 'TODO',
        link: "https://le13emecri.com/spectacles"
    },

    // TODO: Ca ne s'improvise pas - Aucune information trouvée en ligne. À compléter.
    CaNeSImprovisePas: {
        id: 'ca-ne-simprovise-pas',
        title: "Ca ne s'improvise pas",
        description: 'TODO: Description courte à compléter - Festival de la compagnie Whata',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/ca-ne-simprovise-pas/ca-ne-simprovise-pas-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'Festival'], // TODO: À compléter
        roles: ['Créateur spectacle'],
        // fromDate: 'TODO',
    },

    // TODO: Impro en Seine - Aucune information détaillée trouvée en ligne.
    ImproEnSeine: {
        id: 'impro-en-seine',
        title: 'Impro en Seine',
        description: 'TODO: Description courte à compléter - Festival d\'improvisation',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/impro-en-seine/impro-en-seine-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'Festival'],
        roles: ['Régisseur général'],
        // fromDate: 'TODO',
    },

    // TODO: La séance - Aucune information trouvée en ligne. À compléter.
    LaSeance: {
        id: 'la-seance',
        title: 'La séance',
        description: 'TODO: Description courte à compléter - Spectacle créé avec Alice Béchu et Kenan Philbert',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/la-seance/la-seance-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation'], // TODO: À compléter avec les bons tags
        roles: ['Créateur', 'Comédien'],
        // fromDate: 'TODO',
    },

    // TODO: La galerie des beaux gens - Aucune information trouvée en ligne. Bar immersif Lumiia.
    GalerieDesBeauxGens: {
        id: 'galerie-des-beaux-gens',
        title: 'La galerie des beaux gens',
        description: 'TODO: Description courte à compléter - Création pour le bar immersif Lumiia',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/galerie-des-beaux-gens/galerie-des-beaux-gens-cover.jpg',
        additionalImages: [],
        tags: ['Immersif'], // TODO: À compléter avec les bons tags
        roles: ['Créateur'],
        // fromDate: 'TODO',
        link: "https://www.lumiia.fr/"
    },

    // TODO: Saute moutons - Aucune information trouvée en ligne. Jeu pour le bar immersif Lumiia.
    SauteMoutons: {
        id: 'saute-moutons',
        title: 'Saute moutons',
        description: 'TODO: Description courte à compléter - Jeu créé pour le bar immersif Lumiia',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/saute-moutons/saute-moutons-cover.jpg',
        additionalImages: [],
        tags: ['Immersif', 'Jeu'], // TODO: À compléter avec les bons tags
        roles: ['Créateur'],
        // fromDate: 'TODO',
        link: "https://www.lumiia.fr/"
    },

    // TODO: Lire une page blanche - Aucune information trouvée en ligne.
    LireUnePageBlanche: {
        id: 'lire-une-page-blanche',
        title: 'Lire une page blanche',
        description: 'TODO: Description courte à compléter - Seul en scène improvisé',
        fullDescription: 'TODO: Description complète à compléter',
        coverImage: '/img/theatre/lire-une-page-blanche/lire-une-page-blanche-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'Seul en scène'], // TODO: À compléter avec les bons tags
        roles: ['Créateur', 'Comédien'],
        // fromDate: 'TODO',
    },

    LesMainsBavardes: {
        id: 'les-mains-bavardes',
        title: 'Les Mains Bavardes',
        description: 'Spectacle bilingue LSF/Français accessible à tous, né de l\'intérêt de trois comédiens pour la Langue des Signes Française.',
        fullDescription: "Les Mains Bavardes est une création de la compagnie Les Écorces née de l'intérêt partagé de trois comédiens pour la Langue des Signes Française (LSF). Le spectacle est conçu pour être accessible à tous — entendants ou non, signants ou non. Il privilégie le corps et l'expression visuelle pour transmettre les histoires. Le spectacle commence par une présentation bilingue LSF/Français, pour familiariser le public au langage et à la culture sourde.",
        coverImage: '/img/theatre/les-mains-bavardes/les-mains-bavardes-cover.jpg',
        additionalImages: [],
        tags: ['Improvisation', 'LSF', 'Accessibilité'],
        // TODO: Vérifier les dates et le rôle exact
        // fromDate: 'TODO',
        link: "https://www.les-ecorces.com/spectacles"
    }

} satisfies Record<string, PortfolioItemData>;