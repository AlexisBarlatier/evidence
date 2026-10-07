# Agent Instructions — Site Vitrine Coaching Professionnel

## Mission
Tu es l'agent chargé du développement, de la maintenance et de l'intégration de contenu pour le site vitrine d'une coach professionnelle. Ton rôle est de concevoir un site rapide, accessible, sobre, orienté conversion (prise de contact ou appel découverte) et facile à mettre à jour.

---

## 1. Contexte & Objectifs Métier

* Cible : Professionnels en transition, cadres, dirigeants, équipes, particuliers cherchant un accompagnement de carrière ou du développement managérial.
* Tonalité du site : Chaleureux, rigoureux, épuré, crédible. Éviter le jargon ésotérique ou le style « développement personnel » trop générique.
* Objectif prioritaire : Rassurer sur la légitimité (parcours, certifications, méthode) et inciter à la réservation d'un créneau découverte ou à la prise de contact directe.

---

## 2. Stack Technique Recommandée

* Framework : Astro (mode SSG / statique) — performant, zéro JS superflu, idéal pour le SEO et l'intégration de Markdown/MDX.
* Styling : Tailwind CSS.
* Composants d'icônes : Lucide Icons.
* Formulaire & Contact : Formspree, Basin ou intégration directe d'un calendrier (ex. Cal.com ou Calendly).
* Hébergement : Cloudflare Pages, Vercel ou Netlify (déploiement continu via Git).

---

## 3. Structure du Projet

```text
├── src/
│   ├── components/      # Composants réutilisables (Header, Footer, CTA, CardOffre)
│   ├── layouts/         # Layout principal (BaseLayout.astro avec meta SEO)
│   ├── pages/           # Pages statiques (index, a-propos, offres, contact, mentions-legales)
│   ├── content/         # Fiches offres, témoignages ou articles (fichiers .md / collections)
│   └── styles/          # Configuration Tailwind et variables CSS
├── public/              # Favicon, robots.txt, photos et assets statiques
└── astro.config.mjs
```

---

## 4. État du projet (02/10/2026)

Stack installée et fonctionnelle dans ce dossier.

- **Astro 7.3.5** (SSG) + **Tailwind CSS 4.3.3** (via `@tailwindcss/vite`) + `@astrojs/sitemap`
- Node 26 / npm 11 — `npm install` (déjà fait), `npm run dev` (http://localhost:4321), `npm run build` (→ `dist/`), `npm run preview`
- Build vérifié le 02/10/2026 : 9 pages générées, 0 erreur.

Arborescence réelle :

```text
evidence/
├── AGENTS.md
├── contenu/                    # SOURCE DE VÉRITÉ des textes
│   ├── pages/                  # accueil, a-propos, contact (référence de rédaction)
│   ├── accompagnements/        # 1 fichier .md = 1 page /accompagnements/<fichier>/
│   ├── temoignages/
│   ├── A-COMPLETER.md          # questions ouvertes pour Amandine
│   └── source/                 # draft Word d'origine (archive)
├── public/images/              # photos
├── src/
│   ├── components/             # Header, Footer
│   ├── layouts/BaseLayout.astro
│   ├── pages/                  # index, a-propos, accompagnements/, contact, mentions-legales, 404
│   ├── styles/global.css       # tokens de design (@theme Tailwind) : couleurs, typo
│   └── content.config.ts       # collection « accompagnements »
└── astro.config.mjs
```

### Règles de travail

- **Nom affiché partout : « Amandine Barlatier ».** Seules les **mentions légales** utilisent le nom d'état civil **Amandine Fouque**.
- Phrase d'accroche retenue (07/10/2026) : « Évoluer en leader, grandir en équipe, avancer ensemble vers l'autonomie. » — remplace « Ce qui fait réussir un projet, c'est la qualité de ce qui se joue entre les personnes. »
- Pour ajouter un accompagnement : déposer un `.md` dans `contenu/accompagnements/` avec le frontmatter (`titre`, `resume`, `pourQui`, `ordre`) — la page est générée automatiquement.
- Palette et typographie se pilotent depuis `src/styles/global.css` (bloc `@theme`).
- **TODO avant mise en ligne** : nom de domaine, portrait professionnel, email pro, SIRET, hébergeur, lien de réservation, endpoint du formulaire. Détail dans `contenu/A-COMPLETER.md`.

### Régénérer le dossier PDF (Parcours inclusion)

Le dossier de présentation téléchargeable (`public/dossier-parcours-inclusion.pdf`) est construit à partir de `contenu/dossier/dossier-parcours-inclusion.src.html` :

1. Éditer le HTML source (police, couleurs et structure en `@page` A4 en haut du fichier).
2. Y réinliner les images à la place des jetons `__ATELIER__` / `__PORTRAIT__` (data URI base64).
3. Le rendre en PDF via Chrome headless (`Page.printToPDF`) puis le déposer dans `public/`.
4. `npm run build` et vérifier que la page `/accompagnements/coaching-equipe/` propose bien le lien.

La page affiche le bouton de téléchargement **uniquement** si le frontmatter de la fiche contient `dossier: /nom-du-fichier.pdf` (champ optionnel du schéma, `src/content.config.ts`).

### Déploiement (02/10/2026)

- **Dépôt** : `AlexisBarlatier/evidence` (GitHub, **public**) — https://github.com/AlexisBarlatier/evidence
- **Site en ligne** : **GitHub Pages** → https://alexisbarlatier.github.io/evidence/
- **Publication** : automatique à chaque `push` sur `main`, via `.github/workflows/deploy.yml` (`withastro/action` + `actions/deploy-pages`). Aucune action manuelle, aucun coût.
- **`base: '/evidence'`** dans `astro.config.mjs` : GitHub Pages sert le site sous un sous-chemin. **Tous les liens du code passent par `import.meta.env.BASE_URL`** — ne pas réintroduire de `href="/..."` en dur, sinon le lien casse en ligne (il marcherait en local).
- **Passage au domaine définitif** : dans `astro.config.mjs`, remettre `site: SITE_URL` et **supprimer la ligne `base`** ; dans `public/robots.txt`, remettre l'URL du sitemap. Rien d'autre à toucher dans le code.
- **Fichiers non versionnés** (`.gitignore`, car le dépôt est public) : `contenu/A-COMPLETER.md`, `contenu/source/` (brouillon Word), `contenu/photos-candidats/`. Ils restent en local.
