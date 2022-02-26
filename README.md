Proof of concept `11ty` documentation website for `cubing.js`.

# Filemap

## General

- **_src**: "input" folder: what 11ty looks at to generate the website
- **docs**: "output" folder: 11ty's auto-generated site files - we have no control over this
- **.eleventy.js**: config file, defining input/output files and recognising `css` and `js` files
- *other self-explanatory files*

## `_src` contents

- **_data**: defines variables used in nunjucks scripts - currently used for navbar component
- **_includes**: page templates which influence how `.md` files are converted into `html` (which page template a `.md` file will use is specified in its front matter, or in the `pages.json` file which will set folder-level settings for a group of files)
- **assets**: stores image files
- **css**: stores `styles.css`, stylesheet for the website (importantly, defines the layout/positioning of elements in addition to just semantics)
- **pages**: stores `.md` files for documentation pages (ie, primary documentation content)
- **scripts**: stores `scripts.js`, which is used to generate the sidebar containing header anchors. There may be a way to do this with nunjucks, but I haven't figured it out yet

# TODO

## Basics: 

- [x] Basic setup
- [x] Check that 11ty works with js
- [x] Deploy to gh pages 

## Other: 

- [x] Create a navbar
    - [x] get basic navbar generation with nunjucks working
    - [x] style the navbar
    - [x] add other navbar items
- [x] Creating a heading sidebar
    - [x] make a sketchy js script to add h2's
    - [x] get the thing to scroll with me
    - [x] add anchors

- [x] Get basic CSS looks going
- [x] Create flexbox layout

## Actually set the website up
- [x] get images working
- [x] homepage
- [x] page layout
- [x] check that pages work 
- [x] reduce the absurd amount of css in bulma.css

## Refinement

- [ ] Navbar formatting for when you're already on a page/at a heading
- [ ] Make code sections look less rubbish
- [ ] Change px values to be reactive
- [ ] Make width of content section uniform
- [ ] sidebar overhaul
    - [ ] add h3's as children of h2's 
    - [ ] change position: fixed to sticky and troubleshoot

## Troubleshooting

- [x] Figure out why CSS isn't being applied to non-index pages