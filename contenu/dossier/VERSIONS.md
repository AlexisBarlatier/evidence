# Dossier « Parcours d'inclusion et de maintien dans l'emploi » — registre des versions

**Version publiée le 13/11/2026 : le parcours UNIK reconstruit en 9 pages 16/9 (PDF texte, 172 Ko), à partir du deck UNIK transmis par Amandine.**

Toute modification ultérieure doit produire une **nouvelle version** ci-dessous, sans écraser celle-ci.

---

## Version publiée — 13/11/2026 — « UNIK » 9 pages

| | |
|---|---|
| Fichier en ligne | `public/dossier-parcours-inclusion-unik.pdf` |
| URL | https://alexisbarlatier.github.io/evidence/dossier-parcours-inclusion-unik.pdf |
| Source éditable | `contenu/dossier/unik-parcours-9-pages.src.html` (suivi dans git) |
| Origine | deck UNIK 9 slides transmis le 13/11/2026 (capture 3×3), **reconstruit** en HTML/CSS — texte vectoriel, aucune image de fond |
| Pages / format | 9 pages, 841,92 × 473,04 pts (297 × 167 mm, 16/9) |
| Poids | 172 068 octets |
| SHA-256 | `7336165d728f2295d051527eae3bd31e8b96545cd408a7ab58159297e29911ba` |
| Lien depuis | `/accompagnements/coaching-equipe/` (champ `dossier` du frontmatter) |
| Recette de rendu | `print_pdf.js` de la skill `html-to-pdf-cdp` (Chrome headless, `preferCSSPageSize`) |
| Statut | **PUBLIÉE.** Remplace le deck 17 pages comme document lié depuis la page Équipe. |

Écarts assumés par rapport au deck d'origine :
- illustration de couverture remplacée par la marque UNIK (pas d'assets sources) ;
- « 3,5 % de taux d'emploi » remplacé par les chiffres DARES 2024 sourcés (5,1 % au sens légal, 4,0 % des effectifs assujettis) ;
- sources ajoutées en pied de page 2.

---

## Version publiée — figée le 07/10/2026

| | |
|---|---|
| Fichier en ligne | `public/dossier-parcours-inclusion.pdf` |
| URL | https://alexisbarlatier.github.io/evidence/dossier-parcours-inclusion.pdf |
| Origine | deck Canva d'origine d'Amandine (`Dossier_de_présentation_Parcours_Inclusion_au_sein_des_Equipes_v5.pdf`), recompressé 13 Mo → 2,4 Mo |
| Pages / format | 17 pages, 1440 × 810 pts (16/9, format présentation) |
| Poids | 2 395 030 octets |
| SHA-256 | `9fb1e5d23209f0e16a6e3e0d3c6fd41ce3ae2e1eb21d85d6b80204d089268425` |
| Commit | `aadb14a` |
| Lien depuis | `/accompagnements/coaching-equipe/` (champ `dossier` du frontmatter) |
| Statut | **FIGÉE — conserver telle quelle.** Vérifié en ligne : SHA-256 identique au fichier local. |

## Version non publiée — refonte A4 (disponible sur demande)

| | |
|---|---|
| Source éditable | `contenu/dossier/dossier-parcours-inclusion.src.html` (suivi dans git) |
| PDF de référence | 8 pages A4, 654 878 octets, SHA-256 `275119edd934830853124c33e31788e691658f04ba0aff1caf36ff781a363c60` |
| Où le retrouver | commit `9bcd4eb` : `git show 9bcd4eb:public/dossier-parcours-inclusion.pdf > /tmp/refonte-a4.pdf` |
| Recette de rendu | voir `AGENTS.md` § « Régénérer un dossier PDF » et la skill `html-to-pdf-cdp` |
| Statut | **Non publiée.** Mise de côté le 07/10/2026 : Amandine conserve son document d'origine. Conservée pour un usage futur (version imprimable A4, plaquette, dossier par prospect). |

## Version d'origine non recompressée

| | |
|---|---|
| Fichier | `contenu/source/Dossier_Parcours_Inclusion_v5.pdf` (non versionné dans git) |
| Poids | 13 354 513 octets |
| SHA-256 | `ed02d7de856463138220c92e4d89c2ff4e9aa813a77caaf35320edb67b92c394` |
| Statut | archive locale — ne pas rediffuser en l'état (poids). |

---

## Points ouverts sur la version publiée (inchangés, à la demande d'Amandine)

- Les portraits des pages 16 et 17 (Amandine, Anaïs) sont des **illustrations du gabarit Canva**, pas leurs vraies photos.
- Coquilles restantes : « devre » (→ doit être), « péréniser » (→ pérenniser), mot parasite « building ».
- Chiffres non sourcés dans le deck : « 3,5 % de taux d'emploi », « 1 salarié sur 2 en risque de désinsertion professionnelle » (voir les sources officielles dans `contenu/source/` et l'historique de conversation — le chiffre exact DARES 2024 est 4,0 % des effectifs assujettis, 5,1 % au sens légal).

Ces points sont **documentés, pas corrigés** : le document est conservé tel qu'Amandine l'a validé.
