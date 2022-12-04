# Megawatt Website Design and Components

*@Miguel this page is a refresh of previous notes/work:*

- ***Current website summary and assets for info***
    
    [Megawatt - Discover energy](http://www.megawatt.game)
    
    - **GitHub repo**
        - https://github.com/brendan-at-curieus/megawatt.game
        - Lacks well-designed layouts and components to use (hence why we need the design of these new pages and components)
        - Hugo layout templates need to be tidied up a fair bit but I’ll fix this when adding in the new components in
    - Important assets
        - Proxima Vara web font
        - Brand pack (SCSS file in megawatt.game/assets/scss/common/_variables.scss)
            
            ![MegaWatt Brand Pack.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/MegaWatt_Brand_Pack.png)
            
    - Uses Bootstrap 5 and an existing theme (likely to remove this so don’t worry about all of the extra crap in assets/css)
    - Buy button links to Shopify
    - Carousel uses Flickity
        
        [Flickity](https://flickity.metafizzy.co/)
        
    - Tries to follow accessibility guidelines
        
        [a11y stands for accessibility](https://www.a11yproject.com/)
        
    - Generated with Hugo
        
        [The world's fastest framework for building websites](https://gohugo.io/)
        

# What do we need?

- In the short term we need to add some new pages but we don’t have the components we need to build the layouts easily (my questionable HTML + CSS doesn’t help)
- Need a new set of components to use with the existing template framework (e.g. Hugo)
    - Static page(s) and HTML + CSS source code
        - No preference on CSS framework (if used at all) as long as the source code is available to edit and can be used generate the output CSS
    - Assets
        - I expect we’ll be able to provide you some of these from the existing website assets so let us know what you need (e.g. brand colours in SCSS, some optimised images)
- New components need to be able to implement the current home page (same layout quality or better) and new page structures

# New page structures

Tree view which shows where each component could be used and on which pages:

[Octopus.do, Visual Sitemap Tool, Website Planner, Architecture](https://octopus.do/z9z5qy4dqm)

## Components

- Components need to be responsive
    - Current styling breaks at a certain point anyway so happy to change this
- Components need to be able to replicate or improve the current home page
- Below is a first pass at the different components that’ll be needed to build the page templates:
    - **NEW** components will need designed
    - **UPDATE** components already form part of the homepage as a starting point (if needed)

- **NEW: Menu**
    - A simple menu bar similar to:
    
    [Blizzard Entertainment](https://www.blizzard.com/en-gb/)
    
    - Probably have it float when scrolling
    - Links to:
        - Home page (through Megawatt logo)
        - Teachers
        - Partners
        - About
- **NEW: Hero headline**
    - **UPDATE:** Full version for home page works reasonably well but duplicating the logo in the hero and menu doesn’t look right
        - Some ideas that the existing home page hero is based on:
            
            [Marvel.com | The Official Site for Marvel Movies, Characters, Comics, TV](https://www.marvel.com/)
            
            [Free 2D, 3D, VR, & AR software for cross-platform development of games and mobile apps. - Unity Store](https://store.unity.com/products/unity-personal)
            
    - **NEW:** A much simpler version with more room for text on the Teachers and Partners pages, for example:
        
        [Brilliant | Learn interactively](https://brilliant.org/)
        

---

- **UPDATE: Card grid**
    - Existing card grid / carousel works reasonably well but can definitely be improved (looks and speed) so feel free to explore ideas here
    - Think Apple do this style really well with some simple scrolling animations
        
        [Apple Card](https://www.apple.com/apple-card/)
        
        [Apple Music](https://www.apple.com/uk/apple-music/)
        

---

- **UPDATE: Buy Megawatt**
    - Existing buy Megawatt section works fine but can be improved
    - Will still just link to a Shopify checkout

---

- **NEW: Info (Important)**
    - A component to display important information
    - Could use a angled/coloured background like the Figma sketches but will be used sparingly (e.g. only once on a page)
        
        ![Screenshot 2022-11-05 at 13.16.20.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_13.16.20.png)
        
- **NEW: Info (General)**
    - Component(s) to display some more detailed text and/or images in a simple way
    - Needs to have some larger summary text
    - Could have some layout variants (e.g. left and right)
    - **Some simple examples of text layouts that work very well**
        
        [Brilliant | Learn interactively](https://brilliant.org/)
        
        [Connect to Work or Games from Anywhere | Parsec](https://parsec.app/)
        
        ![Screenshot 2022-11-05 at 12.56.38.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_12.56.38.png)
        
        ![Screenshot 2022-11-05 at 12.56.05.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_12.56.05.png)
        
        [Khan Academy | Free Online Courses, Lessons & Practice](https://www.khanacademy.org/)
        
        [Home - BBC Bitesize](https://www.bbc.co.uk/bitesize)
        
- **NEW: Info (Video)**
    - A component to wrap video content (e.g. the Megawatt - In Focus video)
- **UPDATE: Info (Card)**
    - A component to display information about a type of Megawatt card
    - Existing format works well
        
        ![Screenshot 2022-11-05 at 12.49.29.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_12.49.29.png)
        
    - Could be generalised to any image and not just Megawatt cards
- **UPDATE: Info (Link)**
    - A component to refer and link to information on another page (e.g. to the Teachers page from the Home page)
    - Existing format works well
        
        ![Screenshot 2022-11-05 at 12.48.28.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_12.48.28.png)
        
- **UPDATE: Info (Support)**
    - A basic dropdown list for providing answers to common questions, listing out shipping terms or listing out the privacy policy
    
    [Support - Cards Against Humanity](https://www.cardsagainsthumanity.com/support)
    
- **NEW: Info (Table)**
    - A component to display a table of information like partnership and service pricing or how Megawatt matches to the curriculum
        
        ![Screenshot 2022-11-05 at 13.53.08.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_13.53.08.png)
        
- **NEW: Info (Event)**
    - A component to list events that people can get involved with (e.g. conferences, STEM Learning activities)
        - Just needs to be a simple table / list for now
        
        ![Untitled](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Untitled.png)
        
        ![Screenshot 2022-11-05 at 13.56.12.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_13.56.12.png)
        
        ![Screenshot 2022-11-05 at 14.00.48.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_14.00.48.png)
        
- **NEW: Info (Team)**
    - A component to show Miguel’s lovely face, name, title, summary and LinkedIn link

---

- **NEW: Feedback list**
    - A component to show who’s using Megawatt (e.g. who our partners are) and what they think
    
    ![Screenshot 2022-11-05 at 13.06.42.png](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Screenshot_2022-11-05_at_13.06.42.png)
    

---

- **UPDATE: Newsletter**
- **UPDATE: Footer**

## Design ideas and page content notes for reference:

Figma sketch:

[https://www.figma.com/file/kPPoi00BVQHJFqPuVN3Odt/Megawatt-website?node-id=0%3A1](https://www.figma.com/file/kPPoi00BVQHJFqPuVN3Odt/Megawatt-website?node-id=0%3A1)

![Untitled](Megawatt%20Website%20Design%20and%20Components%2083e59de267684e49aae8700661fad7d2/Untitled%201.png)

These page content notes might help with understanding what information could be placed into each component on each page:

[Home page](https://www.notion.so/Home-page-de74cf91a4844c5e93f582f8eded3347)

[Learn / discover](https://www.notion.so/Learn-discover-c7d615e7886f48c4b7be5054ce472138)

[Teachers](https://www.notion.so/Teachers-be1513033ee145b49769815c976c4e0d)

[Partners](https://www.notion.so/Partners-ce0217bb0c074abea9911ad03542914c)

[About Us](https://www.notion.so/About-Us-010273d433724fcc827bac5579e4222e)

[Blog](https://www.notion.so/Blog-161643ae2dc047d894b336a02709bdac)

[Website Brief](https://www.notion.so/Website-Brief-958634d80e6d45fa801fc88dcab3476c)

# ~~Future work (not included)~~

- Buy Megawatt (small) - All pages (e.g. in a blog post or resource page)
- Newsletter (small) - All pages (e.g. at the bottom of a blog post)
- Expanded Teachers page components
- Expanded Resources page components
    - Lesson plans and other text-heavy content
- Technology page components
    - Marvel website characters pages is a great example of how we can make use of the Megawatt artwork
    
    [Marvel Characters, Super Heroes, & Villains List | Marvel](https://www.marvel.com/characters)
    
    [Smashing Magazine - For Web Designers And Developers](https://www.smashingmagazine.com/)