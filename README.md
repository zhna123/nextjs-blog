This is a starter template for [Learn Next.js](https://nextjs.org/learn).

1. Create next app
```
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

2. Navigate pages <br>
Created `pages/posts/first-post.js` file (need to `export default` component) <br>
Route: `/posts/first-post`
* Code spliting <br>
Each page only loads what’s necessary for that page.
* Client-side navigation <br>
  - Page transition happens using JavaScript <br>
  - Create routes as files under pages and use the built-in Link component
* Prefetching (in production) <br>
Whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.

3. Assets, Metadata, and CSS<br>
* Image component <br>
  Added image under `public` directory
  - Image resizing and optimization (on-demand)
  - Lazy load
  - Avoid Cumulative Layout Shift
* Head component - modify `<head>` of a page<br>
  Added Head component to first-post
* Script Component - Add third-party JS <br>
  Exampe:
  ```
  <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`)
        }}
      />
  ```
* CSS modules - component level style <br>
  Added layout.js 
  - Generates unique class names
  - Code splitting ensures minimal amount of css is loaded for each page
* Gloabal styles
  - Added `pages/_app.js` - need to restart server
  - import global styles in `_app.js`
* Styling tips
  - toggle classes - `clsx` library
  - customize PostCSS config
  - Add Tailwind CSS
  - Using Sass

4. Pre-rendering and data fetching
* Pre-rendering
 - static generation - html generated at build time and reused for each request(except for dev mode)
 - server side rendering - html generated on each request 
    - can be used when data needs to be up to date with each request
* data fetching
  - This example used file system to store data in markdown files
  - create utility functions(in `/lib` directory) to parse data files 
  - can also fetch data from other sources, like external API, or query DB directly
* Implement `getStaticProps` - pre-render with data
  - this method returns props that pass to the exported component
  - this method only runs on server-side
  - run at build time(in prod)
* fetch data at request time - server side rendering
  - export `getServerSideProps`
* In the case of not needing to pre-render data (eg: Private, user-specific pages where SEO is not relevant)
  - client side rendering
  - SWR - react hook for data fetching

5. Dynamic routes
  - create `[id].js` inside `pages/posts` 
    - this is like accessing values of the object returned by `getStaticPaths`
  - implement `getStaticPaths` method - returns an array of possible id values
    - need to return an array of objects with `params` key, and contain an object with the file name key, in this case, it is `id`.
    - can fetch data from external source
  - implement `getStaticProps` to fetch data with params id
  - catch all route `/posts/[...id].js` - id value will be an array
  - custom 404 page `pages/404.js` - statically generated at build time

6. API routes
* Do Not Fetch an API Route from getStaticProps or getStaticPaths
  - write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function)
* preview/draft mode - bypass static generation <br>
[draft mode](https://nextjs.org/docs/pages/building-your-application/configuring/draft-mode)
* dynamic API route

7. Deploy app




