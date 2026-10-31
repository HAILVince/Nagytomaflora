# Flóra's birthday site

A candlelit birthday surprise for Nagy-Toma Flóra (born 28 October 2005).
Plain HTML, CSS and JavaScript. No build step, no dependencies.

She has to continue five song lines to light the candle and get in, and every right
answer reveals the album cover. After that:
a tarot-style spread of the things she loves, a mushroom hunt, her moon on the day
she was born, a photo gallery and a candle to blow out.
The whole site is in Hungarian.

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

### 1. The song gate

There are five steps. For each one she sees a line (the `clue`) and has to type the
next line or finish it. After every right answer a record sleeve slides out with the
album cover, title and artist, and she presses "Tovább" to continue. After the last
one the candle lights.

The answers are never stored in plain text, only as hashes, so viewing the page
source does not give them away. Typing is very forgiving: capital letters, accents
(`ő` / `o`), punctuation, extra or missing spaces, swapped or missing letters, a wrong
letter or two, even one forgotten word are all fine.

To change an answer:

```bash
node tools/make-gate.cjs "the answer for step 1" "the answer for step 2"
```

Paste each printed `answer: {...}` into the matching step in `gate.steps`. To check
how forgiving it is for a given answer:

```bash
node tools/make-gate.cjs --try "the real answer" "what she might type"
```

Covers live in `assets/covers/`. For a step without a cover use `cover: 'art:record'`
(a music note) or `cover: 'art:birthday'` (a candle and a 21), both drawn in code.

### 2. Photos

Drop the file into `assets/photos/` and add one entry to `photos` (file name, pixel
size, group, alt text and caption, all in Hungarian). Groups: `candle`, `sun`,
`water`, `lens`, `faces`, `together`, `outdoor`, `everyday`. The "All" view mixes the
groups, so you do not need to keep the list in any particular order.

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
js/config.js      gate steps, photo list
js/i18n.js        every visible text
js/gate-core.js   forgiving answer matching (hashes only) for the gate
js/app.js         behaviour
tools/make-gate.cjs  turns answers into hashes
```
