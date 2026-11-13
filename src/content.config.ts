import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Les accompagnements sont des fichiers Markdown déposés dans `contenu/accompagnements/`.
 * Pour ajouter une prestation : créer un fichier .md dans ce dossier, rien d'autre à faire
 * (une page /accompagnements/<nom-du-fichier> est générée automatiquement).
 */
const accompagnements = defineCollection({
  loader: glob({ pattern: '*.md', base: './contenu/accompagnements' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    pourQui: z.string(),
    ordre: z.number().default(99),
    brouillon: z.boolean().default(false),
    /** Chemin d'un PDF dans `public/` à mettre en téléchargement sur la page, ex. "/dossier-parcours-inclusion.pdf". */
    dossier: z.string().optional(),
  }),
});

export const collections = { accompagnements };
