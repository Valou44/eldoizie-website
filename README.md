# El Taxi d'Oisy — site vitrine

Landing page d'un taxi conventionné CPAM en Vendée. Astro 7 + Tailwind 4, site statique (Vercel ou Netlify).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie dans dist/
```

## Où modifier quoi

- `src/data/site.ts` : nom, téléphone, e-mail, commune, horaires, véhicule, mentions légales. **Les valeurs `TODO` sont provisoires.**
- `src/data/faq.ts` : questions fréquentes (page + JSON-LD `FAQPage`).
- `src/styles/global.css` : couleurs (bleu nuit + or), polices (Jost + Figtree auto-hébergées), animations.
- `src/components/` : une section par fichier.

## Avant la mise en ligne

- Domaine définitif : `astro.config.mjs` (`site`), `src/data/site.ts` (`url`), `public/robots.txt`.
- Vrai numéro, e-mail, commune, SIRET, n° d'autorisation de stationnement, hébergeur.
- Photos du client à la place des photos d'illustration de `public/img/` (banquette arrière, établissement de soins, gare, aéroport, paysage) et du portrait du chauffeur ; mettre à jour `src/pages/credits-photos.astro`.
- Image de partage `public/og-image.png` (1200×630).
- Avis Google : passer `showReviews` à `true` quand la fiche Google Business Profile existera.
