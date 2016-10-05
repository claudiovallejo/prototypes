# Filipao Nunes's Portfolio Website

Filipao Nunes is an architecture and interior design studio in Monterrey, Mexico. Instead of presenting several static mockups for the first design evaluation, I decided to build a static site where my client and I could interact with and explore several design iterations. I decided to build my designs to
  1. present interactive, responsive sites
  2. receive better feedback from my client
  3. learn [Tachyons](http://tachyons.io)
  4. practice web design / development

You can view and interact with the prototypes [here](http://prototypes.netlify.com/).

## Design Tools
+ [Swipies](http://www.swipi.es/)
+ [Figma](https://www.figma.com/)

## Development Tools
+ [Atom](https://atom.io/)
+ [Hyperterm](https://hyper.is/)
+ [Middleman](https://middlemanapp.com/)
+ [Tachyons](http://tachyons.io)
+ [Gulp](http://gulpjs.com/)
+ [Netlify](https://www.netlify.com/)


# Development Notes
Bugs, syntax, and structural points to work on for final build —
  + The `_menu.erb` partial for each prototype should only have one unordered list. Don't hide/show two different navigations
  + `tachyons.css` classes and scales will be taylored to the measurements of the project. I'm having to write _too much_ CSS for paddings and margins.
  + Fix `pnum` helper in `/helpers/custom_helpers.rb`. It doesn't process the number values being passed.
  + Figure out a way to create responsive background images. For now, Prototype #2 only references `aspect-ratio--6x4` images for any device, but it should reference `aspect-ratio--1x1` for tablets and desktops.
  + Work on optimizing and creating responsive images. Mobile devices should load smaller images than larger devices.
  + For my HTML tags, find the correct element name for each component / section
  + Create a class-adding pattern to keep HTML elements well organized.

# Design Notes
Things to work on for future design explorations and projects and a couple of observations on my experience with this project —
  + Spend more time thinking about the _content_ rather than the experience / visual design. For this particular project, the client had a vague idea of what he wanted to say / how he wanted to portray his studio. Without content and a good understanding of what the studio wants to say, any visuals will be too superficial and useless.
  + After thinking about _what_ will be said, start working on different ways of structuring the content.
  + After having several different content structures, start iterating and exploring with the content in Figma or Sketch
  + Explore as much and as fast as possible. _Don't be afraid to explore_. Create a list of values and limitations to create focused, intentional explorations.
  + When should I prototype? What types of projects should I prototype for?
  + Prototypes are very valuable because they are tangible. They make it super easy for the client to provide quality feedback.
  + Exploring (at least for me) takes time. And it's ok.
  + Communication is _key_ to building and designing _the product_ the client (not the designer) is looking for / needs.
  + Web design is very different from web development. Web development is a bit more objective and there are many resources that serve as guides to help determine what good web development is. But good web design... right now I think it's very subjective. The client may love the final site but other's may question the taste or interaction or other elements. Portfolio web design is very personal. It's not like a digital product. But nonetheless a portfolio site must be usable.

---

# Design Evaluation Meetings

## Wednesday October 4th, 2016
Filipao and I met for the first time since our initial meeting . We went over the three prototypes and Filipao was not satisfied with any of the design ideas / directions of the site. The site he is looking for is not as simple and to the point. He wants more interactions, more 'punch'. He's also not sure about how to present his projects. He also wanted to display his logo more, he wanted his brand to make more of an impact.

These were two websites he opened up as point of reference during the meeting

+ [Filipe Starck](http://www.starck.com/en)
+ [Lázaro Rosa Violán](http://lazarorosaviolan.com/)

One thing he seemed interested about Filipe Starck's project was how they had a unique way of navigating their projects by using a Google Maps that had all their projects pinned.

For the Lázaro Rosa Violán site, he mentioned how he liked that they had a Products section and how it had many other small details that made it feel theirs.

The conclusion for this first meeting was that he needs some time alone to go through the prototypes and write down what he thinks is missing or how his brand can be included more. For now, there is no set date as to when he'll make the time to write down the feedback, but he did say it should be sometime before October 16th.

In the meantime, I'll dedicate a one or two hours a day to look for interesting ideas and interactions I think he might enjoy. I'll make a link and pin these ideas here for reference.
