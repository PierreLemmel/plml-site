import { descriptionHtml } from "../lib/utils";
import type { PortfolioItemData } from "./content-types";

export const techniqueItems = {
    Frichti: {
        id: 'frichti',
        title: 'Frichti',
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
        tags: ['Outils de régie', 'Improvisation', 'Développement web'],
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
        date: {
            status: "InCreation"
        },
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
        date: {
            status: "InCreation"
        },
        link: "https://www.lumiia.fr/"
    },
} satisfies Record<string, PortfolioItemData>;