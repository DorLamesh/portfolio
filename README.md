# Dor Lamesh — Portfolio

Personal portfolio site for [dorlamesh.com](https://dorlamesh.com), built as a static GitHub Pages site.
No build step, no framework, no dependencies — just HTML, CSS, and vanilla JS.

## Stack

- **HTML/CSS/JS** — fully static, no bundler
- **GitHub Pages** — hosting via CNAME
- **3-phase theme toggle** — dark / grey / light, persisted in `localStorage`

## Structure

```
portfolio/
├── index.html   # All content and markup
├── style.css    # Themes, layout, components
├── script.js    # Theme toggle + nav active state
└── CNAME        # Custom domain (dorlamesh.com)
```

## Local development

No install needed. Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Deployment

Push to `main` — GitHub Pages picks it up automatically.

## Sections

- **Intro** — Who I am and what I do
- **Projects** — Real work: SCM migration, build systems, CI/CD pipeline, DevEx tooling
- **Writing** — Articles on systems thinking and engineering culture
- **About** — Background, tech stack, current certifications
