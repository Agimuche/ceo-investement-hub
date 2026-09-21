# CEO Hub Investment Member App — Next.js wrapper

## What this is

Your original file, `CEO-HUB-Investment-Hub-Masterclasses.html`, is a fully
self-contained single-page app: all CSS and JavaScript are inline in one
HTML document, and it even embeds three nested sub-apps as `<iframe
srcdoc="...">` documents (the broker comparison, the IPO/Bamboo guide, and
the IBKR guide).

To convert this to Next.js **without changing anything about the site
itself**, the file is kept 100% byte-for-byte identical (verified with
`md5sum`) and placed in `public/` as a static asset:

```
public/ceo-hub-investment-hub-masterclasses.html
```

The Next.js route at `/` (`app/page.tsx`) simply renders a full-viewport
`<iframe>` pointing at that file. The browser loads and runs your original
HTML/CSS/JS exactly as it always has, in its own isolated document — same
markup, same inline `<style>`/`<script>` blocks, same nav buttons, same
nested iframes, pixel- and behavior-identical.

This is the safest way to bring a hand-written vanilla-JS SPA into Next.js
when "don't alter anything" is a hard requirement: rewriting the inline
`onclick` handlers, the `.page.active` show/hide logic, and the three nested
`srcdoc` iframes into React components risks introducing subtle behavior
differences. Wrapping it avoids that risk entirely.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — you'll see the exact same app.

For production:

```bash
npm run build
npm run start
```

## If you later want it as "real" React/Next.js pages

That's a much bigger, separate project: it means rewriting the vanilla JS
page-switching logic (`.nav button` → `.page.active`) as React state,
turning each `<section class="page" id="...">` into a component/route, and
re-implementing the three nested `srcdoc` mini-apps as their own pages. Say
the word and I can start breaking it down into a page-by-page migration
plan — but that will change how the code is written even if the rendered
result looks the same.
