/**
 * Informations de l'entreprise — source unique pour la page, le SEO et le JSON-LD.
 * Les valeurs marquées TODO sont provisoires : à remplacer avant la mise en ligne.
 */
export const site = {
  name: 'El Taxi Doizie',
  nameParts: ['EL Taxi', 'Doizie'] as const, // logo sur deux lignes : « EL Taxi » / « DOIZIE »
  url: 'https://www.eltaxidoizie.fr', // TODO : domaine définitif (aussi dans astro.config.mjs)
  description:
    "Taxi conventionné CPAM et transport haut de gamme en Vendée, au départ de Saint-Gervais : trajets médicaux, transferts gares et aéroport de Nantes, déplacements professionnels, dans tout le Pays de la Loire.",

  phone: '02 51 00 00 00', // TODO : numéro réel
  phoneHref: 'tel:+33251000000', // TODO : numéro réel au format international
  email: 'contact@eltaxidoizie.fr', // TODO : adresse réelle

  driver: '[Prénom]', // TODO
  city: 'Saint-Gervais', // d'après le visuel du client — à confirmer
  postalCode: '85230',
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
    owner: '[Nom Prénom]', // TODO
    siret: '[SIRET]', // TODO
    adsNumber: '[N° d’autorisation de stationnement]', // TODO
    host: '[Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis]', // TODO à confirmer
  },

  /** Avis Google : à activer quand la fiche Google Business Profile existera. */
  showReviews: false,
};

export const areaServed = [
  'Saint-Gervais',
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
