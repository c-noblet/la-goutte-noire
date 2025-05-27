import { phone } from "./config";

export const menuMain = [
    {
        name: "Accueil",
        url: "/",
        highlighted: false,
    },
    {
        name: "Hôtel",
        url: "/hotel",
        highlighted: false,
    },
    {
        name: "Menu",
        url: "/menu",
        highlighted: false,
    },
    {
        name: "Traiteur",
        url: "/catering",
        highlighted: false,
        subLinks: [
            {
                name: 'Mariage & Réception',
                description: 'Organisez votre mariage ou réception avec notre service traiteur.',
                url: '/catering/wedding',
                highlighted: false,
            },
            {
                name: 'Une équipe à domicile',
                description: 'Profitez de notre service traiteur à domicile pour vos événements.',
                url: '/catering/home-team',
                highlighted: false
            },
            {
                name: 'Plats à emporter',
                description: 'Découvrez notre sélection de plats à emporter, prêts à déguster.',
                url: '/catering/takeaway',
                highlighted: false
            },
            {
                name: 'Nos références',
                description: 'Consultez nos références pour découvrir nos réalisations en traiteur.',
                url: '/catering/references',
                highlighted: false
            },
        ]
    },
    {
        name: "Galerie",
        url: "/gallery",
        highlighted: false,
    },
    {
        name: "À propos de nous",
        url: "/about-us",
        highlighted: false,
    },
    {
        name: "Réserver",
        url: phone.href,
        highlighted: true,
    },
];

export const footerPrimary = [
    {
        title: "Navigation",
        items: [
            { name: "accueil", url: "/" },
            { name: "hôtel", url: "/hotel" },
            { name: "menu", url: "/menu" },
            { name: "galerie", url: "/gallery" },
            { name: "à propos de nous", url: "/about-us" },
        ],
    },
];

export const footerSecondary = [
    {
        title: "Services Traiteur",
        items: [
            { name: "traiteur", url: "/catering" },
            { name: "mariage & réception", url: "/catering/wedding" },
            { name: "équipe à domicile", url: "/catering/home-team" },
            { name: "plats à emporter", url: "/catering/takeaway" },
            { name: "nos références", url: "/catering/references" },
        ],
    },
];

export const footerTertiary = [
    {
        title: "Liens",
        items: [
            { name: "politique de confidentialité", url: '/privacy-policy' },
            { name: "contact", url: "/contact" },
            { name: "réserver", url: "/book" },
        ],
    },
];
