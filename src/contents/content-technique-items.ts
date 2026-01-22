import { descriptionHtml, htmlList } from "../lib/utils";
import type { PortfolioItemData } from "./content-types";

export const techniqueItems = {
    Frichti: {
        id: 'frichti',
        title: 'Improvidence - Frichti',
        description: 'Spectacle d\'improvisation interactive où les comédiens créent une pièce à partir de 50 ingrédients proposés par le public.',
        fullDescription: descriptionHtml(
            "Le travail effectué consiste à la réalisation d'un outil d'affichage et d'une interface de configuration et de contrôle pour le spectacle Frichti.",
            "Le spectacle existe depuis 2021 et se joue régulièrement à Lyon et Bordeaux.",
            "Les comédiens doivent créer de toutes pièces un spectacle en intégrant 50 « ingrédients » — des propositions données par le public. Comme un repas improvisé avec ce qu'on trouve dans le frigo, chaque représentation est unique et éphémère. Le public devient co-auteur de cette création spontanée.",
        ),
        coverImage: '/img/technique/frichti/frichti-cover.jpg',
        additionalImages: [
            '/img/technique/frichti/frichti-01.jpg',
            {
                type: 'youtube',
                id: 'CPSVpLJiB2A',
            },
            '/img/technique/frichti/frichti-02.jpg',
            '/img/technique/frichti/frichti-03.jpg',
            '/img/technique/frichti/frichti-04.jpg',
            '/img/technique/frichti/frichti-cover.jpg'
        ],
        tags: ['Outils de régie', 'Improvisation', 'Développement web', 'Prestation'],
        roles: ['Réalisation technique'],
        additionalInfo: [
            {
                label: 'Production',
                value: '<a href="https://improvidence.fr/" target="_blank">Improvidence</a>',
            },
        ],
        date: {
            status: "Finished",
            from: "2021",
            to: "2021"
        },
        link: "https://improvidence.fr/spectacles/43359-frichti/"
    },

    SauteMoutons: {
        id: 'saute-moutons',
        title: 'Lumiia - Saute moutons',
        description: 'Jeu par capture de mouvement',
        fullDescription: descriptionHtml(
            "Développement et intégration d'un jeu par capture de mouvement pour un public familial.",
            "Dans ce jeu, les joueur·euse·s sont placé·e·s devant un fond vert et doivent sauter sur certains ennemis pour les éliminer, éviter des monstres.",
        ),
        coverImage: '/img/technique/saute-moutons/saute-moutons-cover.jpg',
        additionalImages: [
            '/img/technique/saute-moutons/saute-moutons-01.png',
            {
                type: 'video',
                src: '/img/technique/saute-moutons/saute-moutons-video.mp4',
                videoType: 'mp4',
            },
            '/img/technique/saute-moutons/saute-moutons-02.png',
            '/img/technique/saute-moutons/saute-moutons-03.png',
        ],
        tags: [
            'Immersif',
            'Jeu',
            'Développement web',
            'Prestation',
        ],
        roles: ["Conception", "Réalisation technique"],
        date: {
            status: "Finished",
            from: "2025",
            to: "2025"
        },
        link: "https://www.lumiia.fr/",
        additionalInfo: [
            {
                label: 'Outils utilisés',
                value: htmlList(
                    '<a href="https://benjamin.kuperberg.fr/chataigne/fr" target="_blank">Chataigne</a>',
                    "React.js",
                    "Kinnect"
                ),
            },
        ],
    },

    Reed: {
        id: 'reed',
        title: 'Reed',
        description: 'Système de synchronisation sons et lumières pour le groupe de musique Reed',
        roles: ["Conception", "Réalisation technique"],
        fullDescription: descriptionHtml(
            "Développement d'un système de synchronisation sons et lumières pour le groupe de musique Reed.",
            "Ce système permet de synchroniser plusieurs musiciens, une station de travail audionumérique et une installation de lumières."
        ),
        coverImage: "/img/technique/reed/reed-cover.jpg",
        additionalImages: [
            '/img/technique/reed/reed-cover.jpg',
            {
                type: 'video',
                src: '/img/technique/reed/reed-video.mp4',
                videoType: 'mp4',
            }
        ],
        date: {
            status: "Finished",
            from: "2025",
            to: "2025"
        },
        additionalInfo: [
            {
                label: 'Outils utilisés',
                value: htmlList(
                    '<a href="https://benjamin.kuperberg.fr/chataigne/fr" target="_blank">Chataigne</a>',
                ),
            },
        ],
    },

    BibiFish: {
        id: 'fish',
        title: 'Bibi - Fish',
        description: "Randomisation d'un système de contrôle de lumières",
        fullDescription: descriptionHtml(
            "Aide à la réalisation technique d'un système de contrôle de lumières pour une oeuvre de l'artiste plasticien <a href='https://www.bibi.fr/' target='_blank'>Bibi</a>.",
            "Création d'un module de randomisation du contrôle des lumières."
        ),
        roles: ["Aide à la réalisation technique"],
        coverImage: "/img/technique/fish/bibi-fish-cover.jpg",
        additionalImages: [
            '/img/technique/fish/bibi-fish-01.jpg',
        ],
        additionalInfo: [
            {
                label: 'Artiste',
                value: '<a href="https://www.instagram.com/bibi_artist/" target="_blank">Bibi</a>',
            },
            {
                label: 'Outils utilisés',
                value: htmlList(
                    '<a href="https://benjamin.kuperberg.fr/chataigne/fr" target="_blank">Chataigne</a>',
                    '<a href="https://benjamin.kuperberg.fr/chataigne/fr" target="_blank">Blux</a>',
                ),
            },
        ],
        date: {
            status: "Finished",
            from: "2025",
            to: "2025"
        },
        link: "https://www.bibi.fr/poissons/",
    },

    MuseeGuerreEtPaix: {
        id: 'mgp',
        title: 'Musée de la Guerre et de la Paix',
        roles: ["Maintenance technique"],
        description: "Maintenance technique pour le musée Guerre et Paix de Novion-Porcien",
        fullDescription: descriptionHtml(
            "Maintenance technique pour le musée Guerre et Paix de Novion-Porcien.",
            "Diagnostic et remise en fonctionnement du parc matériel du musée (ordinateurs, lecteurs sons, vidéo-projecteurs, etc.).",
        ),
        coverImage: "/img/technique/mgp/mgp-cover.jpg",
        additionalImages: [
            '/img/technique/mgp/mgp-01.jpg',
            '/img/technique/mgp/mgp-02.jpg',
        ],
        link: "https://www.guerreetpaix.fr/",
        date: {
            status: "OnGoing",
            from: "2025"
        },
    }
} satisfies Record<string, PortfolioItemData>;