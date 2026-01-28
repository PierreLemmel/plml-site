import type { PortfolioItemData } from "./content-types";
import { descriptionHtml } from "../lib/utils";

const unJourUnProjetDescription = "<i>Un jour, un projet</i> est une série de créations numériques personnelles réalisées en moins de 24 heures."

export const artsNumeriquesItems = {
    DanceWithLightness: {
        id: 'dance-with-lightness',
        title: 'Dance with Lightness',
        description: 'Spectacle à la croisée des arts numériques et de la danse.',
        fullDescription: descriptionHtml(
            "Le projet Dance with Lightness est né d’une volonté de voir se rencontrer les arts numériques et la danse. À la croisée de ces disciplines, il existe un point de convergence : celui de donner à voir la musique.",
            "Sur scène, trois danseur·euse·s évoluent devant une surface de projection sans musique pré-enregistrée. Le plateau est équipé d'un système de tracking vidéo (reconnaissance de squelette). Ce programme de reconnaissance d'image en temps réel va suivre les positions de différents points du corps : poignets, coudes, bassins, yeux etc. et analyser les mouvements afin de les associer d'une part à une image, via un logiciel de rendu graphique, d’autre part à des sons, via un logiciel de synthèse audio.",
            "Le cœur du projet repose sur la transformation de la donnée physique en émotion sensorielle. Tout d’abord, le programme extrait des informations précises (vitesses de rotation, positions dans l'espace, accélérations des mouvements, distances entre différents points du corps etc.). Ces valeurs sont ensuite traitées puis transmises à un moteur de rendu graphique pour créer des projections paramétriques évolutives. Les données sont envoyées simultanément vers un logiciel de synthèse audio numérique. Ce dernier génère une musique vivante, organique, qui n'existe que par et pour le mouvement présent.",
            "À chaque interprète sont assignés des paramètres spécifiques. Ainsi, le mouvement du premier danseur ne générera pas le même son ni le même effet visuel que celui du second. La superposition de leurs trajectoires crée la symphonie finale.",
            "Les artistes sont pensés comme des instruments composant un orchestre tant visuel que sonore.",
        ),
        coverImage: '/img/arts-numeriques/dwl/dwl-cover.png',
        additionalImages: [
            "/img/arts-numeriques/dwl/dwl-cover.png",
            {
                type: 'video',
                src: '/img/arts-numeriques/dwl/dwl-mapping.mp4',
                videoType: 'mp4',
            },
            "/img/arts-numeriques/dwl/dwl-01.png",
            {
                type: 'video',
                src: '/img/arts-numeriques/dwl/dwl-synth.mp4',
                videoType: 'mp4',
            },
        ],
        tags: ['Arts numériques', 'Danse', 'Mapping', 'Synthèse sonore'],
        roles: ['Création', 'Réalisation technique', 'Direction artistique'],
        date: {
            status: "InCreation",
        },
        link: "https://drive.google.com/drive/folders/1cwm4G7zQVZ7AbD2lRJJTV1QdP17miGMn",
        pressKit: "/dossiers/arts-numeriques/Dossier - Dance with Lightness.pdf",
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

    FlowerEater: {
        id: 'flower-eater',
        title: 'Flower Eater',
        date: {
            status: "Finished",
            from: "2026",
            to: "2026",
        },
        description: "Et si notre bouche était une fleur, qu'aurait-elle à dire ?",
        fullDescription: descriptionHtml(
            "Et si notre bouche était une fleur, qu'aurait-elle à dire ?",
            "Vidéo et synthèse sonore contrôlées par détection de mouvement.",
            unJourUnProjetDescription,
        ),
        coverImage: '/img/arts-numeriques/flower-eater/flower-eater-cover.png',
        additionalImages: [
            {
                type: 'video',
                src: '/img/arts-numeriques/flower-eater/flower-eater-video.mp4',
                videoType: 'mp4',
            }
        ],
        additionalInfo: [
            {
                label: 'Code source',
                value: '<a href="https://github.com/pierrelemmel/un-jour-un-truc" target="_blank">GitHub</a>',
            },
        ],
        tags: ['Arts numériques', 'Un jour, un projet'],
        link: "https://flower-eater.plml.fr/",
    },

    MesangesCharbonneuses: {
        id: 'mesanges-charbonneuses',
        title: 'Les mésanges Charbonneuses',
        description: 'Duo sons et lumières',
        fullDescription: descriptionHtml(
            'Lionel Boucharlat - alias <a href="https://soundcloud.com/lyonnais-bouchon" target="_blank">Lyonnais Bouchon</a> - et Pierre Lemmel se sont rencontrés sur le spectacle <a href="/theatre?id=qacda" target="_blank">Quelque Chose a changé dans l’air</a>. Tous deux à la fois artistes, geeks et passionnés d’ornithologie, ils ont décidé de s’associer dans leur recherche artistique, afin de voir comment son et lumière se répondent.',
            'C’est ainsi que sont néees « Les mésanges Charbonneuses », depuis 2025, nos deux petites mésanges sont au travail pour proposer des créations originales et percutantes.'
        ),
        coverImage: '/img/arts-numeriques/msg-chb/msg-chb-cover.jpg',
        additionalImages: [
            {
                type: 'video',
                src: '/img/arts-numeriques/msg-chb/msg-chb-01.mp4',
                videoType: 'mp4',
            },
            '/img/arts-numeriques/msg-chb/msg-chb-02.jpg',
            '/img/arts-numeriques/msg-chb/msg-chb-cover.jpg',
        ],
        tags: ['Arts numériques'],
        roles: ['Création lumière'],
        date: {
            status: "InCreation"
        },
        additionalInfo: [
            {
                label: 'Sons',
                value: 'Lionel Boucharlat',
            },
            {
                label: 'Lumières',
                value: 'Pierre Lemmel',
            },
        ],
        link: "https://soundcloud.com/lyonnais-bouchon",
        pressKit: '/dossiers/arts-numeriques/Dossier présentation - Mésanges Charbonneuses.pdf',
    },

    VideoMappings: {
        id: 'video-mappings',
        title: 'Video Mappings',
        description: 'Quelques heures et un vidéo-projecteur',
        fullDescription: descriptionHtml(
            "Je me balade souvent avec un vidéo-projecteur à la recherche de surfaces et de formes sur lesquelles créer des mappings divers pour le plaisir.",
        ),
        coverImage: '/img/arts-numeriques/videomapping/videomapping-cover.jpg',
        additionalImages: [
            {
                type: 'video',
                src: '/img/arts-numeriques/videomapping/videomapping-01.mp4',
                videoType: 'mp4',
            },
            {
                type: 'video',
                src: '/img/arts-numeriques/videomapping/videomapping-02.mp4',
                videoType: 'mp4',
            },
        ],
        tags: ['Arts numériques'],
        roles: ['Arts numériques'],
        date: {
            status: "OnGoing",
            from: "2025"
        },
    },

    LightAndMotion: {
        id: 'light-and-motion',
        title: 'Light and Motion',
        description: 'Contrôle de lumières par détection de mouvement',
        fullDescription: 'Création d\'une installation interactive de lumières contrôlées par détection de mouvement.',
        coverImage: '/img/arts-numeriques/light-and-motion/light-and-motion-cover.jpg',
        additionalImages: [
            {
                type: 'video',
                src: '/img/arts-numeriques/light-and-motion/light-and-motion-video.mp4',
                videoType: 'mp4',
            }
        ],
        tags: ['Arts numériques'],
        roles: ['Création', 'Réalisation technique'],
        date: {
            status: "Finished",
            from: "2025",
            to: "2025"
        },
    },
} satisfies Record<string, PortfolioItemData>;