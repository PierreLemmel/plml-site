import type { PortfolioItemData } from "../components/portfolio/PortfolioItem.astro";

export const contentItems = {

    QuelqueChoseAChangeDansLAir: {
        id: 'qacda',
        title: "Quelque chose a changé dans l'air",
        description: 'Danse, théâtre, musique et couleurs rendent hommage aux moments qui ont transformé notre vie.',
        fullDescription: "Quelque chose a changé dans l'air explore les moments qui transforment notre existence. A partir de témoignages du public, danse, théâtre et musique se rencontrent et improvisent ensemble pour révéler les traces physiques ou symboliques que les événements marquent sur nos corps. Une matière colorée leur donne vie, sous forme de motifs, de formes et de traînées dans l'air et sur les corps et crée une expérience visuelle et émotionnelle captivante.",
        coverImage: '/img/theatre/qacda/qacda-cover.jpg',
        additionalImages: [
            '/img/theatre/qacda/qacda-cover.jpg',
            '/img/theatre/qacda/qacda-01.jpg',
            '/img/theatre/qacda/qacda-02.jpg',
            '/img/theatre/qacda/qacda-03.jpg',
            '/img/theatre/qacda/qacda-04.jpg',
            '/img/theatre/qacda/qacda-05.jpg',
        ],
        tags: ['Danse', 'Théâtre', 'Improvisation'],
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
        fromDate: '2022',
        toDate: '2025',
        link: "https://www.billetreduc.com/spectacle/aleas-330517/avis"
    }
    
} satisfies Record<string, PortfolioItemData>;