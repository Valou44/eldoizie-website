/**
 * Informations de l'entreprise — source unique pour la page, le SEO et le JSON-LD.
 * Les valeurs marquées TODO sont provisoires : à remplacer avant la mise en ligne.
 */
export const site = {
  name: "El Taxi d'Oisy",
  url: 'https://www.eltaxidoisy.fr', // TODO : domaine définitif (aussi dans astro.config.mjs)
  description:
    "Taxi conventionné CPAM en Vendée : transport médical assis (consultations, hôpital, dialyse, chimiothérapie, radiothérapie) et trajets privés vers les gares et l'aéroport de Nantes, dans tout le Pays de la Loire.",

  phone: '02 51 00 00 00', // TODO : numéro réel
  phoneHref: 'tel:+33251000000', // TODO : numéro réel au format international
  email: 'contact@eltaxidoisy.fr', // TODO : adresse réelle

  driver: '[Prénom]', // TODO
  city: '[Commune]', // TODO : commune de rattachement de l'autorisation de stationnement
  postalCode: '85000', // TODO
  region: 'Pays de la Loire',
  department: 'Vendée',

  /** null tant que les horaires ne sont pas définis : le site affiche « sur réservation ». */
  hours: null as null | { label: string; schema: string[] },

  vehicle: {
    model: '[Modèle du véhicule]', // TODO
    seats: '[x]', // TODO
  },

  legal: {
    owner: '[Nom Prénom]', // TODO
    siret: '[SIRET]', // TODO
    adsNumber: '[N° d’autorisation de stationnement]', // TODO
    host: '[Hébergeur : Vercel Inc. ou Netlify Inc.]', // TODO selon l'hébergement retenu
  },

  /** Avis Google : à activer quand la fiche Google Business Profile existera. */
  showReviews: false,
} as const;

export const areaServed = [
  'Vendée',
  'La Roche-sur-Yon',
  'Les Sables-d’Olonne',
  'Challans',
  'Nantes',
  'Saint-Nazaire',
  'Angers',
  'Cholet',
  'Le Mans',
  'Laval',
];
