import { descritionHtml } from "../lib/utils";
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
            '/img/theatre/plg/plg-04.jpg',
            '/img/theatre/plg/plg-cover.jpg',
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
                value: 'Luc Mouret, Emma Debroise, Johnathan Chaboissier, Marine Galland, Stella Pueyo, Jérémy Veluire, Pierre Lemmel, Julie Douine',
            },
        ]
    },

    TresChairCorps: {
        id: 'tres-chair-corps',
        title: 'Très chair corps',
        description: 'Un seul en scène improvisé explorant le rapport au corps.',
        roles: ['Création lumières', 'Régie Improvisée'],
        fullDescription: 'À travers des témoignages audio anonymes, ce seule en scène explore nos rapports intimes, complexes et souvent ambigus au corps – le nôtre, mais aussi celui des autres. Un spectacle intime mêlant saynètes improvisées et récits personnels',
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

    Terrarium: {
        id: 'terrarium',
        title: 'Terrarium',
        description: 'Deux personnes cherchent une issue l’un·e à l’autre',
        fullDescription: `<div>Entre quatre murs, deux personnes cherchent une issue l’un·e à l’autre, assourdi·e·s par le bruit de leurs cris intérieurs.</div>
        <div>Survivre l’enfermement, et toi aussi. A ciel ouvert, l’enfer c’est toi ici.</div>`,
        coverImage: '/img/theatre/terrarium/terrarium-cover.jpg',
        additionalImages: [
            '/img/theatre/terrarium/terrarium-01.jpg',
            '/img/theatre/terrarium/terrarium-cover.jpg',
            '/img/theatre/terrarium/terrarium-02.jpg',
            '/img/theatre/terrarium/terrarium-03.jpg',
            '/img/theatre/terrarium/terrarium-04.jpg',
        ],
        tags: ['Improvisation', 'Huis Clos'],
        roles: ['Mise en scène', 'Comédien'],
        fromDate: '2022',
        toDate: '2023',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorces',
            },
            {
                label: 'Mise en scène',
                value: 'Pierre Lemmel',
            },
            {
                label: 'Distribution',
                value: 'Pierre Lemmel, Charles-Henri Botton',
            },
            {
                label: 'Musique',
                value: 'Carole Piclet, Quentin Legris',
            },
        ],
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

    LesSonsDeMaVie: {
        id: 'les-sons-de-ma-vie',
        title: 'Les Sons de ma vie',
        description: "Des histoires improvisées, sous l'impulsion des musiques et des souvenirs du public !",
        fullDescription: `<div>Il y a des musiques qui nous marquent. Parfois elles nous plaisent, parfois elles nous obsèdent, parfois elles nous entêtent, et parfois elles accompagnent un moment de notre vie, comme la bande son d’un film.</div>
        <div>Dans ce spectacle, venez présenter les titres qui vous ont marqué et les tranches de vie qu’ils illustrent !</div>`,
        coverImage: '/img/theatre/lsdmv/lsdmv-cover.jpg',
        additionalImages: [
            '/img/theatre/lsdmv/lsdmv-01.jpg',
            '/img/theatre/lsdmv/lsdmv-02.jpg',
            '/img/theatre/lsdmv/lsdmv-03.jpg',
            '/img/theatre/lsdmv/lsdmv-04.jpg',
        ],
        tags: [
            'Improvisation'
        ],
        fromDate: '2019',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorces',
            },
        ],
        link: "https://www.les-ecorces.com/spectacles"
    },

    CaNeSImprovisePas: {
        id: 'ca-ne-simprovise-pas',
        title: "Ca ne s'improvise pas",
        description: 'Création improvisée réalisée en 24h',
        fullDescription: `<div>Création improvisée réalisée en 24h dans le cadre du festival <span class="italic font-semibold">Ca ne s'improvise pas</span></div>
        <div><span class="italic font-semibold">C'est le bordel de ma teuté</span> met en scène un personnage isolé et relate sa vie, ses réflexions et sa santé mentale qui s'amenuise jour après jour</div>`,
        coverImage: '/img/theatre/cnsip/cnsip-cover.jpg',
        additionalImages: [
            '/img/theatre/cnsip/cnsip-01.jpg',
            '/img/theatre/cnsip/cnsip-02.jpg',
            '/img/theatre/cnsip/cnsip-03.jpg',
        ],
        tags: [
            'Improvisation',
            'Festival',
            'Seul en scène',
        ],
        roles: ['Création', 'Jeu'],
        fromDate: '2024',
        toDate: '2024',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Whata',
            },
        ],
        link: "https://www.instagram.com/whataimpro/"
    },

    LireUnePageBlanche: {
        id: 'lire-une-page-blanche',
        title: 'Lire une page blanche',
        description: "Pourquoi apprendre un texte quand on peut lire une page blanche ?",
        fullDescription: "Dans ce spectacle, Pierre Lemmel nous propose un monologue improvisé d'une heure. Seul sur scène, il se livre, il laisse à lire en lui comme en un livre ouvert. Venez assister à un texte qui s'écrit devant le spectateur, devant le comédien, une pensée pudique et impudique qui se découvre au fil des mots.",
        coverImage: '/img/theatre/misc/page-blanche.jpg',
        additionalImages: [],
        tags: [
            'Improvisation',
            'Seul en scène'
        ],
        roles: ['Créateur', 'Comédien'],
        fromDate: '2022',
        toDate: '2023',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Tout est dans le Titre',
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://improfestival.com/" target="_blank">Semaine de l'Impro</a> (Nancy)</li>
                    <li><a href="https://www.theatrepixel.org/" target="_blank">Théâtre Pixel</a> (Paris)</li>
                    <li>Improvib'bar (Paris)</li>
                </ul>`,
            }
        ],
        link: "https://www.billetreduc.com/spectacle/lire-une-page-blanche-288477"
    },

    Accoudes: {
        id: 'accoudes',
        title: 'Accoudés',
        description: 'Spectacle immersif au comptoir : 4 comédiens incarnent serveurs et clients, mêlant anecdotes, récits, musique et chant improvisés.',
        fullDescription: "« Bienvenue au comptoir ! Qu'est-ce que j'vous sers ? » Derrière chaque personne accoudée au comptoir se cache une histoire. Quatre comédiens jouent directement dans le décor du bar, incarnant à la fois serveurs et clients. Les récits s'appuient sur les anecdotes du comptoir, pensées, désirs, des histoires inattendues aux tons variés, avec musique et chant improvisés.",
        coverImage: '/img/theatre/accoudes/accoudes-cover.jpg',
        additionalImages: [
            '/img/theatre/accoudes/accoudes-01.jpg',
            '/img/theatre/accoudes/accoudes-02.jpg',
            '/img/theatre/accoudes/accoudes-03.jpg',
        ],
        tags: ['Improvisation', 'Immersif', 'Musique'],
        roles: [ 'Comédien', 'Guest' ],
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Le 13eme cri',
            },
        ],
        fromDate: '2019',
        link: "https://le13emecri.com/"
    },

    Madeleine: {
        id: 'madeleine',
        title: 'Madeleine',
        description: 'Un personnage créé sur l\'instant, son passé, ses rêves et cauchemars, ses envolées et ses fantasmes…',
        fullDescription: descritionHtml([
            'Embarquez pour un voyage introspectif, intime et onirique, une conversation avec ses souvenirs présents, passés et futurs.',
            'Venez expérimenter un moment suspendu qui va diluer le temps du spectacle et tisser les fils d\'une histoire aussi drôle que chaotique où une seconde devient infini, l’ordinaire extraordinaire.',
        ]),
        roles: ['Comédien'],
        coverImage: '/img/theatre/madeleine/madeleine-cover.jpg',
        additionalImages: [
            '/img/theatre/madeleine/madeleine-01.jpg',
            '/img/theatre/madeleine/madeleine-02.jpg',
            '/img/theatre/madeleine/madeleine-cover.jpg',
            '/img/theatre/madeleine/madeleine-03.jpg',
            '/img/theatre/madeleine/madeleine-04.jpg',
            '/img/theatre/madeleine/madeleine-05.jpg',
        ],
        tags: ['Improvisation','Théâtre contemporain'],
        fromDate: '2021',
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorces',
            },
            {
                label: 'Mise en scène',
                value: 'Alice Rey',
            },
            {
                label: 'Distribution',
                value: 'Alice Rey, Pierre Lemmel, Charles-Henri Botton',
            },
        ]
    },

    LaSeance: {
        id: 'la-seance',
        title: 'La séance',
        description: "Une patiente inédite prend vie sous vos yeux, façonnée par les suggestions du public.",
        fullDescription: descritionHtml([
            "Ce spectacle aborde la santé mentale avec justesse et humanité, en mêlant profondeur et légèreté. À travers différentes techniques d'impro (expression corporelle, danse, voix off, multi-personnages), les interprètes donnent vie aux émotions et aux réalités intérieures, dans une exploration à la fois sensible et légère.",
            "L’humour devient alors un outil puissant pour susciter l’empathie, libérer la parole et rendre ces enjeux accessibles au plus grand nombre. Appuyé sur des apports scientifiques issus de la psychologie, ce spectacle propose une expérience à la fois touchante, drôle et résolument actuelle.",
        ]),
        coverImage: '/img/theatre/la-seance/la-seance-cover.jpg',
        additionalImages: [
            '/img/theatre/la-seance/la-seance-01.jpg',
            '/img/theatre/la-seance/la-seance-cover.jpg',
            '/img/theatre/la-seance/la-seance-02.jpg',
            '/img/theatre/la-seance/la-seance-03.jpg',
            '/img/theatre/la-seance/la-seance-04.jpg',
            '/img/theatre/la-seance/la-seance-05.jpg',
        ],
        tags: ['Improvisation'],
        roles: ['Metteur en scène', 'Comédien'],
        fromDate: '2024',
        additionalInfo: [
            {
                label: 'Mise en scène',
                value: 'Pierre Lemmel',
            },
            {
                label: 'Distribution',
                value: 'Alice Béchu, Kenan Philbert-Zehani, Pierre Lemmel',
            },
        ],
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