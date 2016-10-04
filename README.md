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


# Things to Improve on
As I polish and rebuild the prototypes before the first client evaluation, I'm starting to notice many areas where I could polish and improve my design process, my development process, and coding syntax and structure, for example —
  + `/partials/prototype1/_menu.erb` should only have one unordered list. Don't hide/show two different navigations
  + `tachyons.css` classes and scales will be taylored to the measurements of the project. I'm having to write _too much_ CSS just to accomodate the paddings and margins I designed. Also, I find hard to remember the values for each spacing, font size, etc. I think I'll probably use a literal-style notation next time. For example, `f1` is equal to `font-size: 1rem;`, `mb05` is equal to `margin-bottom: 0.5rem;`, and so on.
  + Fix `pnum` helper in `/helpers/custom_helpers.rb`. It doesn't process the number values being passed.
  + Figure out a way to create responsive background images. For now, Prototype #2 only references `aspect-ratio--6x4` images for any device, but it should reference `aspect-ratio--1x1` for tablets and desktops.
  + Work on optimizing and creating responsive images. Mobile devices should display smaller images than larger devices.
  + The first thing I need to work on is content strategy. I just realized that as I'm about to present my client three different prototypes, all three prototypes display similar content, just different layouts. There are some sections, like the product detail for example, in which my client specifically stated he wanted something short, with not much text, and big focus on imagery. But then there are other sections, like the 'Studio' section, in which he had no idea what to say. During the meeting I plan on asking him more detail about what he wants to say, instead of having thought through what I think he _should_ say, or how to say it. But I've already designed three very similar 'Studio' sections... Big mistake there.
  + For my HTML tags, find the correct element name for each component / section. For example the use of `<article>`, `<figure>`, `<header>`, etc.
  + Create rules as to how to add classes to an element. For example, first add display, position, float, and position classes, then width and height classes, then margin and padding classes... and so on. I'd like to keep my classes well organized and create a habit of adding/removing classes in a certain way.
  + Whichever design is selected, I create conditional statements in the template files to control the layout from within the `.json` files rather than doing everything manually.
  + If 'Other Projects' with 3 cards is selected, make sure to think through and carefully create the appropriate classes align that section. I haven't given that section enough time to make sure its perfect.
