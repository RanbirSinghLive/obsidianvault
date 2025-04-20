---
Development: 3 Mature
---
My website is hosted on [Obsidian Publish](https://obsidian.md/publish).

This allows me to seamlessly publish content from my notetaking system to the web.

The only change from the boilerplate template Obsidian provides is some custom styling.

## My Custom CSS:

```CSS
/* HIDE FOLDERS IN THE LEFT NAV */
.tree-item-self[data-path^='garden/Notes'] {
  display: none;
}

/* Theme adjustment RS */
.theme-dark {
  --text-accent: #2695BE;
  --text-accent-hover: #2695BE; 
}

.theme-light {
  --text-accent: #2695BE;
  --text-accent-hover: #2695BE; 
}

/* Graph Colors */
.graph-view.color-fill-highlight {
	color:   #fb941c;

}
.graph-view.color-line-highlight {
	color:   #fb941c;
}

/* Change Site Name Color */
.site-body-left-column-site-name {
  color: #2695BE;
}

/* Footer */
.site-footer {
    display: none;
}

/* Site header */
.site-header {
  color: #2695BE !important;
}

/* if required - change age header color
.page-header {
  color: #2695BE !important;
} */

/* Publish Headers (Links to this page / interactive graph) */
.published-section-header {
  color: #2695BE;
}

.internal-link {
  color:var(--text-accent);
  Text-decoration: none;
}

.markdown-preview-view .internal-link {
  text-decoration: none;
}

.markdown-preview-view .internal-link:hover:not(.internal-link.is-unresolved) {
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-decoration-color: #fb941c;
  text-decoration-skip-ink: none;
}

.tree-item-inner:hover {
  color: #fb941c;
}

/* Custom callouts - must be changed via CSS snippet in your vault as well */
.callout[data-callout="button"] {
    --callout-color: 38 , 149, 190;
    --callout-icon: none;
}
```