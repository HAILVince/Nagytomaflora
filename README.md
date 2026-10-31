# Flóra's birthday site

A candlelit birthday surprise for Nagy-Toma Flóra (born 28 October 2005).
Plain HTML, CSS and JavaScript. No build step, no dependencies.

She has to write the lyrics of a song to light the candle and get in. After that:
a tarot-style spread of the things she loves, a mushroom hunt, her moon on the day
she was born, a photo gallery, the party details and a candle to blow out.
Hungarian by default, with an EN/HU switch in the corner.

## Hosting on Cloudflare Pages

Create a Pages project from this repo and use:

| Setting | Value |
| --- | --- |
| Production branch | the branch you want live (usually `main`) |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |

Every push redeploys it. The site tells search engines not to index it, but the URL
itself is public. For a real lock, add Cloudflare Access in front of it.

## Things you will edit (all in `js/config.js`)

### 1. The song lyrics (the gate)

The lyrics are never stored in the repo, only a hash of each word, so viewing the
page source does not give them away. Case, accents and punctuation are ignored when
she types, so `ő` / `o` and `Hogy vagy?` / `hogy vagy` all count as the same.

```bash
node tools/make-gate.cjs "first part of the lyrics" "second part of the lyrics"
```

Each quoted text becomes one step she has to get through. Paste each printed
`answer: [...]` into the matching step in `gate.steps`, and write the step's `prompt`
(what she sees above the box) and an optional `hint` in Hungarian and English.

The gate currently ships with a **test step**: type `lángolj, gyertya, lángolj`.

### 2. The party details

Fill in `party.when`, `party.where`, `party.note` and optionally `party.mapUrl`.
While they are all `null`, the page says the details are still a secret.

### 3. Photos

Drop the file into `assets/photos/` and add one entry to `photos` (file name, pixel
size, group, Hungarian/English alt text and caption). Groups: `candle`, `sun`,
`water`, `lens`, `faces`.

## Testing locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Add `?lock` to the address to reset the saved
"already unlocked" state and see the gate again, or use the small "Back to the gate"
link at the bottom of the page.

## Layout

```
index.html        page structure and shared SVG art
css/style.css     all styling (fonts are self-hosted from assets/fonts)
js/config.js      lyrics hashes, party details, photo list
js/i18n.js        every visible text, Hungarian and English
js/gate-core.js   word normalising and hashing for the gate
js/app.js         behaviour
tools/make-gate.cjs  turns lyrics into hashes
```
