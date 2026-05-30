import { descriptionHtml } from "../lib/utils";
import type { PortfolioItemData } from "./content-types";

export const theatreItems = {

    QuelqueChoseAChangeDansLAir: {
        id: 'qacda',
        title: "Quelque chose a changé dans l'air",
        description: 'Danse, théâtre, musique et couleurs rendent hommage aux moments qui ont transformé notre vie.',
        fullDescription: "Quelque chose a changé dans l'air explore les moments qui transforment notre existence. A partir de témoignages du public, danse, théâtre et musique se rencontrent et improvisent ensemble pour révéler les traces physiques ou symboliques que les événements marquent sur nos corps. Une matière colorée leur donne vie, sous forme de motifs, de formes et de traînées dans l'air et sur les corps et crée une expérience visuelle et émotionnelle captivante.",
        additionalInfo: [
            {
                label: 'Compagnie',
                value: '<a href="https://www.les-ecorces.com" target="_blank">Les Écorcés</a>',
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
            '/img/theatre/qacda/qacda-01.jpg',
            '/img/theatre/qacda/qacda-02.jpg',
            '/img/theatre/qacda/qacda-03.jpg',
            '/img/theatre/qacda/qacda-04.jpg',
            '/img/theatre/qacda/qacda-05.jpg',
        ],
        tags: ['Danse', 'Théâtre', 'Improvisation'],
        roles: ['Comédien', 'Assisant mise en scène'],
        date: {
            status: "OnGoing",
            from: "2023"
        },
        link: "https://www.les-ecorces.com/spectacles",
        pressKit: "/dossiers/theatre/Dossier diffusion - QACDA.pdf",
    },

    Aleas: {
        id: 'aleas',
        title: 'Aleas',
        description: "Spectacle aléatoire et improvisé.",
        fullDescription: "Dans ce spectacle, la lumière, les musiques, les vidéo-projections et même la durée de chaque scène, sont controlées aléatoirement par un ordinateur. Charge aux artistes de transformer ces hasardeuses propositions en moments de plaisir, de magie ou de tout autre chose.",
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
        date: {
            status: "Finished",
            from: "2022",
            to: "2025"
        },
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
        link: "https://www.billetreduc.com/spectacle/aleas-330517/avis",
        pressKit: "/dossiers/theatre/Dossier Aléas.pdf",
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
        date: {
            status: "Finished",
            from: "2021",
            to: "2026"
        },
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
        date: {
            status: "Finished",
            from: "2021",
            to: "2023"
        },
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
        date: {
            status: "OnGoing",
            from: "2025"
        },
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
        ],
        pressKit: "/dossiers/theatre/Très chair corps - dossier global.pdf",
    },

    ImproEnSeine: {
        id: 'impro-en-seine',
        title: 'Impro en Seine',
        description: "Directeur technique et régisseur général pour le festival d'improvisation Impro en Seine.",
        fullDescription: descriptionHtml(
            "Régisseur général du festival Impro en Seine, le plus gros festival d’improvisation français avec 97 spectacles, s’enchainant avec 10 minutes entre chaque spectacle, répartis sur 3 salles en parallèle sur 4 jours.",
            "Mon travail consiste à coordonner les compagnies et le théâtre, rechercher le matériel, recruter, former et coordonner une équipe d'une douzaine de bénévoles.",
        ),
        coverImage: '/img/theatre/misc/improenseine-cover.jpg',
        additionalImages: [
            '/img/theatre/misc/improenseine-cover.jpg'
        ],
        date: {
            status: "Finished",
            from: "2022",
            to: "2025"
        },
        tags: ['Improvisation', 'Festival', 'Régie'],
        roles: ['Régisseur général', 'Directeur technique'],
        link: "https://improenseine.com/",
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
        date: {
            status: "OnGoing",
            from: "2025"
        },
    },

    SavantMelange: {
        id: 'savant-melange',
        title: 'Savant mélange',
        description: 'Quand science et impro se rencontrent.',
        fullDescription: descriptionHtml(
            "Savant Mélange est une compagnie fondée en 2025 autour d’une envie commune : faire dialoguer la scène et la science ! Nous proposons des spectacles de théâtre improvisé, pour transmettre la science de manière vivante, sensible et ludique.",
            "L’improvisation théâtrale est une discipline artistique qui demande aux comédien-nes d’inventer des histoires en temps réel sans texte ni mise en scène préétablie. Depuis quelques années, elle s’invite dans les fêtes de la science, les festivals de vulgarisation scientifique et les universités. Elle constitue un outil original et pertinent à la médiation scientifique.",
        ),
        coverImage: '/img/theatre/savant-melange/savant-melange-cover.jpg',
        additionalImages: [
            '/img/theatre/savant-melange/savant-melange-01.jpg',
            '/img/theatre/savant-melange/savant-melange-02.jpg',
            '/img/theatre/savant-melange/savant-melange-03.jpg',
            '/img/theatre/savant-melange/savant-melange-04.jpg',
        ],
        tags: [
            'Improvisation',
            'Médiation scientifique',
        ],
        link: "https://savantmelange.fr/",
        pressKit: "/dossiers/theatre/Dossier diffusion - Savant Mélange.pdf",
        date: {
            status: "OnGoing",
            from: "2025"
        },
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
        date: {
            status: "Finished",
            from: "2022",
            to: "2023"
        },
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
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
        date: {
            status: "Finished",
            from: "2023",
            to: "2023"
        },
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
        date: {
            status: "Finished",
            from: "2022",
            to: "2024"
        },
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
        date: {
            status: "OnGoing",
            from: "2019"
        },
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
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
        date: {
            status: "Finished",
            from: "2024",
            to: "2024"
        },
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
        additionalImages: [
            '/img/theatre/misc/page-blanche.jpg'
        ],
        tags: [
            'Improvisation',
            'Seul en scène'
        ],
        roles: ['Créateur', 'Comédien'],
        date: {
            status: "Finished",
            from: "2022",
            to: "2023"
        },
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
        date: {
            status: "OnGoing",
            from: "2019"
        },
        link: "https://le13emecri.com/"
    },

    Madeleine: {
        id: 'madeleine',
        title: 'Madeleine',
        description: 'Un personnage créé sur l\'instant, son passé, ses rêves et cauchemars, ses envolées et ses fantasmes…',
        fullDescription: descriptionHtml(
            'Embarquez pour un voyage introspectif, intime et onirique, une conversation avec ses souvenirs présents, passés et futurs.',
            'Venez expérimenter un moment suspendu qui va diluer le temps du spectacle et tisser les fils d\'une histoire aussi drôle que chaotique où une seconde devient infini, l’ordinaire extraordinaire.',
        ),
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
        date: {
            status: "OnGoing",
            from: "2021"
        },
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
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
        fullDescription: descriptionHtml(
            "Ce spectacle aborde la santé mentale avec justesse et humanité, en mêlant profondeur et légèreté. À travers différentes techniques d'impro (expression corporelle, danse, voix off, multi-personnages), les interprètes donnent vie aux émotions et aux réalités intérieures, dans une exploration à la fois sensible et légère.",
            "L’humour devient alors un outil puissant pour susciter l’empathie, libérer la parole et rendre ces enjeux accessibles au plus grand nombre. Appuyé sur des apports scientifiques issus de la psychologie, ce spectacle propose une expérience à la fois touchante, drôle et résolument actuelle.",
        ),
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
        date: {
            status: "OnGoing",
            from: "2024"
        },
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

    LesMainsBavardes: {
        id: 'les-mains-bavardes',
        title: 'Les Mains Bavardes',
        description: 'Spectacle bilingue LSF/Français accessible à toustes, né de l\'intérêt de trois comédiens pour la Langue des Signes Française.',
        fullDescription: "Les Mains Bavardes est une création de la compagnie Les Écorcés née de l'intérêt partagé de trois comédiens pour la Langue des Signes Française (LSF). Le spectacle est conçu pour être accessible à tous — entendants ou non, signants ou non. Il privilégie le corps et l'expression visuelle pour transmettre les histoires.",
        coverImage: '/img/theatre/lmb/lmb-cover.jpg',
        additionalImages: [
            '/img/theatre/lmb/lmb-01.jpg',
            '/img/theatre/lmb/lmb-cover.jpg',
            '/img/theatre/lmb/lmb-02.jpg',
            '/img/theatre/lmb/lmb-10.jpg',
            '/img/theatre/lmb/lmb-03.jpg',
            '/img/theatre/lmb/lmb-04.jpg',
            '/img/theatre/lmb/lmb-05.jpg',
            '/img/theatre/lmb/lmb-06.jpg',
            '/img/theatre/lmb/lmb-07.jpg',
            '/img/theatre/lmb/lmb-08.jpg',
            '/img/theatre/lmb/lmb-09.jpg',
        ],
        tags: ['Improvisation', 'Accessibilité'],
        roles: ['Comédien'],
        date: {
            status: "Finished",
            from: "2018",
            to: "2023"
        },
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
            },
            {
                label: 'Distribution',
                value: 'Pauline Granjon, Pierre Lemmel, Alice Rey',
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://www.theatredutemps.net/" target="_blank">Théâtre du Temps</a>  (Nancy)</li>
                    <li><a href="https://www.theatredutemps.net/" target="_blank">Théâtre du Temps</a>  (Paris)</li>
                </ul>`,
            }
        ]
    },

    LaConference: {
        id: 'la-conference',
        title: 'La conférence',
        description: 'Vous avez les questions, il n\'a pas les réponses.',
        fullDescription: 'Dans cette conférence d\'un genre particulier, un clown tente - avec plus ou moins de succès - d\'apporter des réponses aux questions que les humains se posent.',
        coverImage: '/img/theatre/conference/conference-gif.gif',
        additionalImages: [
            '/img/theatre/conference/conference-gif.gif',
        ],
        tags: ['Improvisation', 'Clown'],
        roles: ['Comédien'],
        date: {
            status: "Finished",
            from: "2023",
            to: "2023"
        },
    },

    Fluide: {
        id: 'fluide',
        title: 'Fluide',
        description: 'Un geste, un mot, un regard et les voilà embarqués dans un nouvel univers.',
        fullDescription: descriptionHtml(
            "A chaque instant, n’importe quel artiste peut s’emparer d’un élément du spectacle afin d’initier une transition vers une nouvelle scène. Cela peut être par exemple un mot repris pour commencer un nouveau monologue, un son inopiné qui devient une mélodie pour un chant improvisé ou encore un geste anodin qui se transforme en une chorégraphie de groupe…",
            "Les scènes s'enchaînent, comiques, dramatiques, corporelles, poétiques ou autres... Rien n’est interdit, au contraire ! Une seule règle : être à l’écoute de l’énergie de l’instant, de ses envies et de ses partenaires.",
        ),
        coverImage: '/img/theatre/fluide/fluide-cover.jpg',
        additionalImages: [
            '/img/theatre/fluide/fluide-01.jpg',
            '/img/theatre/fluide/fluide-02.jpg',
            '/img/theatre/fluide/fluide-03.jpg',
            '/img/theatre/fluide/fluide-04.jpg',
            '/img/theatre/fluide/fluide-05.jpg',
            '/img/theatre/fluide/fluide-06.jpg',
        ],
        tags: ['Improvisation', 'Organicité'],
        roles: [ 
            'Comédien',
            'Directeur artistique',
        ],
        date: {
            status: "Finished",
            from: "2018",
            to: "2020"
        },
        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
            },
        ],
    },

    JQAR: {
        id: 'jqar',
        title: "Journal de ce qu'on a retenu",
        tags: ['Théâtre', 'Contemporain', 'Création émergente'],
        description: 'Une récréation qui grince des dents entre actus troubles et rage créative.',
        fullDescription: descriptionHtml(
            'Une satyre déjantée en roue libre : comme un Sarko libéré, comme un éclat de rage contre celles tombées trop tôt, et comme un big up à celleux qui se lèvent, se barrent et se battent pour qu’il ne soit pas trop tard !',
            'Tout a commencé quand Nicolas Sarkozy est allé en prison puis en est sorti 20 jours après pour ensuite publier son livre « Journal d’un prisonnier » le 10 décembre 2025, top 1 des ventes Amazon. En est sorti un éclat théâtral, dansé et chanté, comme une soupape pour encaisser le coup. Journal de ce qu’on a retenu, c’est des fragments d’actualités sourcés, des personnages qui partent dans tout les sens et une ambiance goût pile électrique pour ouvrir un espace de rage et de joie.'
        ),
        roles: [
            'Création lumières',
            'Création vidéo'
        ],
        coverImage: '/img/theatre/jqar/jqar-cover.jpg',
        additionalImages: [
            '/img/theatre/jqar/jqar-01.jpeg',
            '/img/theatre/jqar/jqar-02.jpeg',
            '/img/theatre/jqar/jqar-03.jpeg',
            '/img/theatre/jqar/jqar-04.jpeg',
            '/img/theatre/jqar/jqar-05.jpeg',
        ],
        date: {
            status: "OnGoing",
            from: "2026"
        },
        link: 'https://lavoirpublic.com/journal-de-ce-quon-a-retenu',

        additionalInfo: [
            {
                label: 'Compagnie',
                value: 'Les Écorcés',
            },
            {
                label: 'Mise en scène',
                value: 'Alice Rey',
            },
            {
                label: 'Distribution',
                value: 'Kenan Philbert-Zehani, Luana Dumartheray, Constanza Aliste, Benoît Decorse, Thomas Saraiva'
            },
            {
                label: 'Lieux de représentation',
                value: `<ul>
                    <li><a href="https://lavoirpublic.com/" target="_blank">Le Lavoir Public</a> (Lyon)</li>
                </ul>
                `,
            }
        ],
    }

} satisfies Record<string, PortfolioItemData>;