# Portfolio — Calvin Klein Tsefack

Portfolio professionnel de **Calvin Klein Tsefack**, développeur fullstack et étudiant en génie logiciel à l'ENSPD (Douala). Conçu comme une pièce éditoriale : bleu marine, or discret, typographie serif, animations douces, mode sombre, responsive et SEO complet.

La particularité du projet : un **studio d'administration** permet de publier de nouveaux projets sans toucher au code, avec stockage Git (GitHub) ou fichier local.

**En ligne :** <https://tsefackdev.vercel.app> · version française : <https://tsefackdev.vercel.app/fr>

---

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS 4**
- **Motion** pour les animations
- **Lucide React** pour les icônes
- **GitHub Contents API** comme CMS (optionnel)
- Déploiement recommandé : **Vercel** + stockage GitHub

---

## Démarrage

```bash
npm install
cp .env.example .env.local
# Éditez .env.local (au minimum ADMIN_PASSWORD)
npm run dev
```

- Site : http://localhost:3000
- Studio : http://localhost:3000/admin
- En développement, si `ADMIN_PASSWORD` n'est pas défini, le mot de passe de secours est `studio`.

> Le port 3000 peut être occupé par un autre projet : utilisez `npm run dev -- -p 3100`.

---

## Le Studio (`/admin`)

Le studio permet de :

- créer, modifier et supprimer un projet ;
- le garder en **brouillon** ou le publier ;
- le **mettre en avant** dans la grille principale ;
- réordonner les projets ;
- choisir une couverture, un visuel mobile/radar ou une capture d'écran ;
- générer automatiquement sa **page case study** (`/work/[slug]`), son entrée de sitemap et ses métadonnées SEO ;
- revalider immédiatement la page d'accueil.

Les modifications sont écrites dans `content/projects.json`.

### Stockage : deux modes

| Mode | Quand ? | Persistance |
| --- | --- | --- |
| **GitHub** | `GITHUB_TOKEN` + `GITHUB_REPO` définis | Commit dans le dépôt, puis revalidation du site. Recommandé sur Vercel. |
| **Local** | sinon | Écriture dans `content/projects.json` sur le serveur. Recommandé en développement ou sur un VPS. |

Sur un hébergement serverless (Vercel) **sans** configuration GitHub, les écritures locales ne persistent pas. Configurez GitHub pour publier en production.

### Configuration GitHub (recommandée)

1. Créez un dépôt GitHub pour ce portfolio (par exemple `TSEFACKDEV/portfolio`) et poussez le code.
2. Créez un **fine-grained personal access token** GitHub :
   - Repository access : le dépôt du portfolio ;
   - Permissions : **Contents — Read and write**.
3. Ajoutez les variables d'environnement :

```bash
GITHUB_TOKEN=github_pat_...
GITHUB_REPO=TSEFACKDEV/portfolio
GITHUB_BRANCH=main
```

4. Redéployez. Le studio affiche un badge `GITHUB` dans son en-tête lorsque le mode est actif.

Chaque enregistrement crée un commit du type `content: update “LocatCam”` et déclenche également `revalidatePath()` pour une mise à jour immédiate.

### Images

Le studio accepte une **URL d'image** :

- un fichier local déjà présent dans `public/` (ex. `/work/mon-projet.jpg`) ;
- une URL Cloudinary (recommandé pour les nouveaux médias) ;
- toute URL `https://` (chargée sans optimisation Next.js).

Les captures d'écran existantes sont dans `public/work/`.

---

## Déploiement sur Vercel

1. Poussez le dépôt sur GitHub.
2. Importez-le dans Vercel.
3. Renseignez les variables d'environnement :

| Variable | Obligatoire | Rôle |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | oui | URL canonique (SEO, sitemap, Open Graph) |
| `ADMIN_PASSWORD` | oui | Mot de passe du studio |
| `ADMIN_SESSION_SECRET` | recommandé | Signature du cookie de session (`openssl rand -hex 32`) |
| `GITHUB_TOKEN` | recommandé | Publication persistante |
| `GITHUB_REPO` | recommandé | `owner/repo` |
| `GITHUB_BRANCH` | non | `main` par défaut |

4. Déployez, puis connectez-vous sur `/admin`.

> `ADMIN_PASSWORD` doit impérativement être défini en production : sans lui, la connexion est désactivée.

### SEO et version française

Le site est bilingue par routes distinctes, avec un `lang` correct sur chaque document :

| URL | Langue | Cible |
| --- | --- | --- |
| `/` | anglais | portfolio principal, requêtes internationales |
| `/fr` | français | « développeur fullstack », « ingénieur logiciel / informatique Cameroun » |
| `/fr/developpeur-fullstack-cameroun` | français | « développeur fullstack Cameroun / Douala » |
| `/fr/devops-cameroun` | français | « DevOps Cameroun », CI/CD, Docker, Linux |

Chaque page déclare `canonical`, `hreflang` (`fr`, `en`, `x-default`) et son propre JSON-LD (`Person`, `WebPage`, `Service`, `FAQPage`, `BreadcrumbList`). Le sitemap inclut les alternates de langue.

Après le premier déploiement :

1. Vérifier le domaine dans **Google Search Console** (DNS ou balise HTML).
2. Soumettre `https://votre-domaine/sitemap.xml`.
3. Demander l'indexation de `/`, `/fr`, `/fr/developpeur-fullstack-cameroun` et `/fr/devops-cameroun`.
4. Créer une fiche **Google Business Profile** cohérente (nom, Douala, activités, lien du site).
5. Ajouter le site sur LinkedIn et GitHub, et obtenir quelques liens entrants (école, projets, profils professionnels).

Le référencement de requêtes larges comme « informatique Cameroun » prend plusieurs semaines : contenu, indexation, signaux locaux et liens comptent autant que les balises.

### Alternative VPS

Sans variables GitHub, le studio écrit directement dans `content/projects.json`. Sur un VPS (Node + disque persistant), pensez à sauvegarder ce fichier. `npm run build && npm start` suffit.

---

## Personnalisation

| Élément | Fichier |
| --- | --- |
| Profil, bio, expériences, compétences, liens | `lib/content.ts` |
| Projets (contenu publiable) | `content/projects.json` + studio |
| Couleurs, typographie, animations | `app/globals.css` |
| Métadonnées SEO globales, JSON-LD | `app/layout.tsx` |
| Image Open Graph | `app/opengraph-image.tsx` |
| Favicon | `app/icon.svg` |
| CV PDF | `scripts/cv.html` → `bash scripts/build-cv.sh` |
| Photo du hero | `public/portrait.jpg` (déjà intégrée) |

### Photo de profil

La photo est déjà intégrée dans `public/portrait.jpg`. Pour la remplacer, déposez un nouveau portrait au même emplacement (format paysage 5:4, idéalement 1000 × 840) puis relancez le build. Le hero bascule automatiquement vers la photo ; sans fichier, il affiche le monogramme `TCK`.

### CV

Le PDF est généré depuis `scripts/cv.html` avec Chrome headless :

```bash
bash scripts/build-cv.sh
```

Le script produit `public/cv.pdf`. Modifiez le HTML pour mettre le CV à jour.

---

## Structure

```
app/
  (site)/                 # Portfolio public (header/footer)
    page.tsx
    work/[slug]/page.tsx  # Case studies générées
  admin/
    login/                # Connexion
    (studio)/             # Espace protégé
      page.tsx            # Liste des projets
      projects/new|edit   # Formulaire
    actions.ts            # Server Actions (auth, CRUD)
  layout.tsx              # Métadonnées, polices, thème
components/               # Sections publiques + UI du studio
content/projects.json     # Source de vérité des projets
lib/
  content.ts              # Contenu éditorial statique
  projects.ts             # Lecture/écriture locale ou GitHub
  auth.ts                 # Session signée, mot de passe
  covers.ts               # Presets de couvertures
scripts/
  cv.html, build-cv.sh    # Génération du CV
public/
  portrait.jpg            # Photo du hero
  work/                   # Captures des projets
  cv.pdf
```

---

## Scripts

```bash
npm run dev       # Développement
npm run build     # Build production
npm start         # Serveur production
npm run lint      # ESLint
bash scripts/build-cv.sh
```

---

## Notes techniques

- **SEO** : métadonnées par page, canonical, Open Graph/Twitter, JSON-LD `Person` + `CreativeWork`, sitemap dynamique, robots.txt (`/admin` exclu), images optimisées.
- **Accessibilité** : navigation clavier, skip link, focus visibles, labels ARIA, contrastes, `prefers-reduced-motion`.
- **Sécurité** : mot de passe haché en mémoire, cookie `httpOnly` signé HMAC, rate limiting basique sur la connexion, vérification d'authentification dans chaque Server Action, `/admin` en `noindex`.
- **Contenu** : les pages projet sont statiques avec ISR (60 s) et revalidées immédiatement après publication.

---

© 2026 Calvin Klein Tsefack. Tous droits réservés.
