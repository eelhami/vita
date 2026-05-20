# Vision-based Task Assistants — Reading List

A curated GitHub Pages site for posting recent and foundational papers on
vision-based task assistance: temporal action segmentation, progress
estimation, mistake recognition, AR-based guidance, and the egocentric
perception that powers it all.

## File structure

```
.
├── index.html
├── assets/
│   ├── style.css     ← visual styling (Fraunces + IBM Plex)
│   ├── papers.js     ← THE FILE YOU EDIT — add/remove papers here
│   └── main.js       ← rendering and filtering (don't need to touch)
└── README.md
```

## How to publish to GitHub Pages

1. Create a new public GitHub repository (e.g. `vita-reading-list`).
2. Copy every file in this folder into the repo root and push to `main`.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main / root**.
4. After ~1 minute the site is live at
   `https://<your-username>.github.io/vita-reading-list/`.

If you'd rather it live at `https://<your-username>.github.io/` (no subpath),
name the repo `<your-username>.github.io` instead.

## How to add a paper

Open `assets/papers.js` and add a new object to the `PAPERS` array.
Schema:

```js
{
  title:    "Paper title",
  authors:  "A. Author, B. Author, ...",
  venue:    "CVPR",        // venue acronym shown as a small tag
  year:     2025,
  categories: ["temporal-action-segmentation", "egocentric"],
  links: {
    pdf:     "https://arxiv.org/abs/...",
    code:    "https://github.com/...",     // optional
    project: "https://project-page.com",   // optional
  },
  tldr: "One-line summary in your own words." // optional
}
```

Valid category slugs (must match exactly):

| slug                            | display label              |
| ------------------------------- | -------------------------- |
| `temporal-action-segmentation`  | Temporal Action Segmentation |
| `action-detection`              | Action Detection           |
| `progress-estimation`           | Progress Estimation        |
| `mistake-recognition`           | Mistake Recognition        |
| `action-anticipation`           | Action Anticipation        |
| `skill-assessment`              | Skill Assessment           |
| `vision-language`               | Vision–Language            |
| `egocentric`                    | Egocentric Video           |
| `augmented-reality`             | Augmented Reality          |
| `dataset`                       | Dataset / Benchmark        |

You can add a new category by adding it to the `CATEGORIES` map at the top
of `papers.js` — it'll automatically appear as a filter chip.

To update the "Last updated" badge in the hero, edit the `LAST_UPDATED`
constant in `papers.js`.

## Customizing identity

A few places to personalize before publishing:

- `index.html` — footer `Maintained by your-name-here · Northeastern University`
- `index.html` — `<a id="repo-link">` href (point it at your repo URL)
- `index.html` — page `<title>` and `<meta name="description">`
- `assets/style.css` — the `--accent` CSS variable if you want a different
  signal color (current: vermilion `#C8341A`)

## Local preview

Any static server works. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Design notes

- **Fonts**: Fraunces (display serif, variable optical size) +
  IBM Plex Sans (body) + IBM Plex Mono (metadata).
- **Palette**: warm paper background, deep ink text, vermilion accent
  used sparingly for hover states and emphasis.
- **Layout**: editorial single-column with a hairline-rule rhythm
  between sections; papers list uses a left-rail year column and a
  vermilion side-bar accent on hover.
- **Motion**: staggered hero entrance + a slow pulse on the viewfinder
  bounding box. Respects `prefers-reduced-motion`.

## License

The starter content (the few seed papers in `papers.js`) is just
bibliographic metadata that you should verify and adapt. The code is
yours to modify freely.
