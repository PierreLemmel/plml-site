import type { PortfolioItemData } from "./content-types";

export const techniqueItems = {
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
} satisfies Record<string, PortfolioItemData>;