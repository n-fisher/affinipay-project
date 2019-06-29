# Affinipay takehome project

A create-react-app -based page of text with dictionary API lookup capabilities.

### Spec:

- Compiles CSS from SCSS

- Fetches the definition from a Dictionary API

- Highlights the current word that is being looked up

- The highlighted word is not highlighted after its definition is not shown

- Shows the definition of the word looked up in a popover next to the highlighted word

- Browser requirements are that it must work in the last 2 major versions of each popular browser.

## Getting started

This should run on localhost with yarn (https://yarnpkg.com/en/) as the only required dependency. I've stripped out the API key I was using in order to post the repo, the app is using the https://developer.oxforddictionaries.com API and expects `app_id` and `app_key` process.env variables.

(For now I've found it easier to locally edit src/components/ContentBodyContainer.tsx lines :28, :29, :35, :36 with the corresponding values)

To start: 
- Add oxford dictionary keys via env variables or direct editing (happy to provide a copy of this repo privately with prepopulated keys)
- `cd affinipay-project; yarn && yarn start`;

## Implementation notes

### A few thoughts/caveats regarding the implementation and what I'd have done with more time:

- I made an unnecessarily complex nested XMLHttpReq in ContentBodyContainer due to time constraints, with longer it would have been implemented as a redux saga

- I focused entirely on the frontend part of this assignment, and didn't have time to build out a comprehensive backend. Due to this, I recognize I've had to get hacky in:
  - API requests from the frontend exposing the API key to anyone who knows how to open the dev console
  - Proxying unknown requests to the dictionary API as a way to get around CORS restrictions (in package.json)

- Additionally, I had made the redux store keep track of prior lookups to eventually reference that cache over repeated API calls. I didn't have time to build the cache read aspect, but that would be one of my next steps.

- I did break spec by not making the navbar items click-to-searchable. Next steps would be abstracting some of the ContentBody code and using it in the header items as well.

- I broke best practices a little bit between a shoehorned onclick in App.tsx to clear the popup, and a general clearing of all textarea selectionRanges inside a reducer that shouldn't have side effects. Again, those would be some of my next to-dos given more time.

- Finally I didn't write tests as I had hoped to. In a longer timeframe they would also be prioritized.

### But what I'm excited about outside of spec:

- The page is fully responsive, though with some implementation details needing to be worked out (popups near edge of screen are constrained)

- Leveraging <textarea>s and their HTML5 API features instead of individual word components to avoid generating hundreds of components per paragraph

- Does the page look familiar? Not exactly pixel-perfect or using the custom font, but your news section was great inspiration!
