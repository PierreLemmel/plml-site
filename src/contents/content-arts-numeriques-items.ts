import type { PortfolioItemData } from "./content-types";

export const artsNumeriquesItems = {
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
        link: "https://www.billetreduc.com/spectacle/aleas-330517/avis",
        pressKit: "/dossiers/theatre/Dossier Aléas.pdf",
    },
} satisfies Record<string, PortfolioItemData>;