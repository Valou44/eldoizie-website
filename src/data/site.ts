/**
 * Informations de l'entreprise — source unique pour la page, le SEO et le JSON-LD.
 * Les valeurs marquées TODO sont provisoires : à remplacer avant la mise en ligne.
 */
export const site = {
  name: 'El Taxi Doizie',
  nameParts: ['EL Taxi', 'Doizie'] as const, // logo sur deux lignes : « EL Taxi » / « DOIZIE »
  url: 'https://www.eltaxidoizie.fr', // TODO : domaine définitif (aussi dans astro.config.mjs)
  description:
    'Taxi à Saint-Gervais, Challans, La Roche-sur-Yon : trajets médicaux CPAM, gares, aéroport de Nantes, entreprises. 7 j/7 sur réservation.',

  phone: '06 59 56 02 60',
  phoneHref: 'tel:+33659560260',
  /** Second numéro, affiché dans le pied de page. */
  phone2: '06 60 29 56 28',
  phone2Href: 'tel:+33660295628',
  email: 'eltaxi8520@gmail.com',

  driver: 'Eric',
  city: 'Saint-Gervais',
  /** Commune de rattachement de l'autorisation de stationnement (licence). */
  adsCity: 'La Chapelle-Hermier',
  postalCode: '85230',
  /** Coordonnées de la commune (pas du domicile), pour les données structurées. */
  geo: { lat: 46.9005, lng: -2.0028 },
  region: 'Pays de la Loire',
  department: 'Vendée',

  /** Horaires affichés ; `schema` (format schema.org) reste vide tant que les horaires précis ne sont pas fixés. */
  hours: { label: '7 j/7, sur réservation', schema: [] as string[] },

  vehicle: {
    model: 'DS 7 E‑Tense 300', // espaces et trait d'union insécables // d'après le visuel du client — à confirmer
    seats: '4', // TODO : à confirmer
  },

  /** Réseaux sociaux : affichés dans le pied de page seulement s'ils sont renseignés. */
  socials: { facebook: '', instagram: '' }, // TODO

  legal: {
    owner: 'Eric Doizie',
    status: 'Entrepreneur individuel',
    siret: '877 733 741 00020',
    ape: '4932Z (transports de voyageurs par taxis)',
    address: '19 chemin du Gaveau, 85230 Saint-Gervais',
    host: 'Netlify, Inc., 101 2nd Street, Suite 575, San Francisco, CA 94105, États-Unis — www.netlify.com',
  },

  /** Avis Google : à activer quand la fiche Google Business Profile existera. */
  showReviews: false,
};

export const areaServed = [
  'Saint-Gervais',
  'La Chapelle-Hermier',
  'Challans',
  'La Roche-sur-Yon',
  'Saint-Jean-de-Monts',
  'Saint-Gilles-Croix-de-Vie',
  'Les Sables-d’Olonne',
  'Vendée',
  'Nantes',
  'Angers',
  'Cholet',
];
