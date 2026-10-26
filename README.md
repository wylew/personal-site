# lew.in

Wyatt Lewin's personal site: about, resume and projects.

Plain HTML and CSS. No build step, no npm dependencies, no JavaScript, no trackers.

## Editing

- **Content:** everything is in `index.html`. Resume entries are `<li class="job">` blocks; projects are `<article class="project">` blocks.
- **Styles:** `assets/style.css`. Light and dark mode follow the visitor's system setting. The resume section prints cleanly.
- **Project images:** `assets/projects/`.
- **Project links:** each project card ends with a `<ul class="get">` list. Copy-paste snippets for GitHub, Google Play, App Store and itch.io badges, a "coming soon" badge, and a plain doc link are in a comment at the top of the Projects section in `index.html`. The icons are generic glyphs in `assets/icons/`, not the stores' official logos. If you want the official badges, download them from each store's brand page and swap them in.
- **Privacy policies:** `powder-run/privacy/index.html` is served at `lew.in/powder-run/privacy/`. It is boilerplate that assumes no data collection; update it if you add ads, analytics, accounts or Play Games services. Copy the folder to make one for another app.

Preview locally with any static server, for example `python3 -m http.server`.

## Deploying

Every push to `master` deploys the whole repo (except `.git*` and this README) to GitHub Pages via `.github/workflows/pages.yml`.

One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Custom domain:** `lew.in` (this matches the `CNAME` file). Once the certificate is issued, tick **Enforce HTTPS**.
3. DNS at your registrar:
   - `lew.in` → four `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` → `CNAME` to `wylew.github.io`
   - Remove any other `A`, `AAAA` or `ALIAS` records on `lew.in`, such as registrar parking or forwarding.
4. Recommended: verify `lew.in` under your GitHub account's **Settings → Pages → Verified domains**, so nobody else can claim it for their Pages site.

## Security notes

- A Content-Security-Policy `<meta>` tag allows only this site's own styles and images. Scripts are blocked entirely.
- No third-party requests. Fonts are system fonts.
