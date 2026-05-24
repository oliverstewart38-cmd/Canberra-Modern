# Rationale
### Live Link: https://oliverstewart38-cmd.github.io/Canberra-Modern/
## Responsive Design
My website was designed with mobile, tablet and desktop in mind, with multiple breakpoints to handle each. The approach is desktop-first, scaling down and adjusting to smaller screen sizes. The biggest challenge when scaling to mobile was fitting all the content onto the screen in a clear, easy-to-read way while keeping navigation accessible.

Multiple CSS techniques were used to achieve this. CSS Grid handles the main layout sections, with the number of columns reducing as the screen gets smaller. Card grids go from four columns on desktop, to two on tablet, to a horizontal scroll on mobile. Flexbox is used for things like navigation and card internals to keep elements aligned correctly at any width.

One key part of the responsive design is the mobile navigation. On smaller screens, the main nav is hidden and replaced with a fixed-position button in the bottom-left corner. Fixed positioning means it stays visible as the user scrolls. Clicking it opens a full-screen overlay, controlled by JavaScript toggling a CSS class to show and hide the menu. Placing it bottom-left means users can reach it comfortably with one hand. Another responsive technique used is CSS scroll-snap, which turns the card sections into swipeable horizontal carousels on mobile with no JavaScript required.


## Low-fi Prototypes
The overall design stayed close to the prototype. The colour palette, typography and layout transferred well into code, and the navigation kept the same simple structure as the prototype. One deliberate change was renaming the "Media" page to "Podcast," which made the page purpose immediately clear and better reflected the content, since the podcast series is one of Canberra Modern's most significant offerings.

One thing I would improve is the hero section. The current design uses absolutely positioned images over a dark background, which worked on desktop but required a significant restructure for mobile. A grid-based hero using larger images as the main focal point would have been more visually striking and easier to make responsive from the start.

### Figma Link: https://www.figma.com/design/Px7cC8TX0DhE3GkaOgWyVM/Canberra-Modern-Redesign-A2?node-id=0-1&t=1D07251i0SPmUqSt-1


## Use of Generative AI
Generative AI was used at certain stages of the website's production. The main use was converting the Figma prototype into a base HTML and CSS structure with some JavaScript. Claude Code (Sonnet 4.6) was used specifically for this, as it can link directly to a Figma file and generate code based on the design. This gave me a strong starting point that I then adjusted and improved — including rewriting sections to use CSS rather than JavaScript, such as converting the event highlights and podcast carousels from JS-driven translateX transforms to CSS scroll-snap and replacing the back-to-top button's inline JavaScript with a plain anchor link.

Using AI also made me more aware of certain CSS features. Reviewing the generated code helped me better understand the difference between position: fixed and position: absolute and how each is applied — for example, why the mobile menu button uses fixed positioning, so it stays on screen while scrolling. It also introduced me to CSS scroll-snap; once I understood how it worked, I was able to apply it in more places than the AI originally had and remove JavaScript that wasn't needed.

The JavaScript in the site is largely AI-generated. With AI assistance I've developed an understanding of when JavaScript is the right tool and how individual functions work, but I'm not yet at a point where I could write complex JavaScript independently without support.


## References
MDN Web Docs. (n.d.). CSS grid layout. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
Useful reference for understanding grid layout, used when structuring the card grids, footer and about sections.

MDN Web Docs. (n.d.). CSS flexible box layout. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
Useful resource for understanding flexbox and troubleshooting alignment issues across the site.

MDN Web Docs. (n.d.). scroll-snap-type. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
Helped me understand how scroll-snap works and how it could be applied in different ways, which led to replacing JavaScript carousels with a CSS-only solution.

MDN Web Docs. (n.d.). position. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/position
Used as an important refresher on CSS positioning and helped me decide when to use fixed versus absolute, particularly for the hero section and mobile navigation button.

MDN Web Docs. (n.d.). Using CSS custom properties. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
Showed me how to create a reusable colour palette using custom properties rather than repeating hex codes throughout the stylesheet.

W3C. (n.d.). Markup validation service. World Wide Web Consortium. https://validator.w3.org/
Used to check HTML validity across all pages before submission.

Google. (n.d.). Google Fonts. https://fonts.google.com/
Source for the Jost and Nunito Sans typefaces used across the site for headings and body text respectively.
