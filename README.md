# Portfolio Website

I'm in the process of designing and building Filipao Nunes' portfolio site, an architecture and interior design studio in Mexico. Instead of presenting several static mockups, I decided to build a static site where my client and I could interact with and explore several design iterations. I decided to build my designs to
  1. present interactive, responsive sites
  2. receive better feedback from my client
  3. learn [Tachyons](http://tachyons.io)
  4. practice web design / development

You can view and interact with the prototypes [here](http://prototypes.netlify.com/).

I've been documenting my design and development process in a series of [tweets](https://twitter.com/claudiovallejop/status/781175709821575168).

I want to share how I work not because I think I know what I'm doing, but rather, because I _don't_ know what I'm doing and would love to learn about how you build your sites. So let me know what you think, [I'd love to hear from you](https://twitter.com/claudiovallejop).


## Design Tools
+ [Swipies](http://www.swipi.es/)
+ [Figma](https://www.figma.com/)

## Development Tools
+ [Atom](https://atom.io/)
+ [Middleman](https://middlemanapp.com/)
+ [Tachyons](http://tachyons.io)
+ [Gulp](http://gulpjs.com/)
+ [Netlify](https://www.netlify.com/)


# Development Notes
As I polish and rebuild the prototypes before the first client evaluation, I'm starting to notice many areas where I could polish and improve my code, for example —
+ `/partials/prototype1/_menu.erb` should only have one unordered list.
+ `tachyons.css` will be optimized and minified to only use the modules and classes needed as well as optimize and personalize all the `rem` values for margins, font sizing, paddings, etc.
