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
  }),
});

export const collections = { accompagnements };
