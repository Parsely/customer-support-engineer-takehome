# Welcome to the Parse.ly Customer Support Engineer Takehome

The goal of this is to test your technical troubleshooting and savviness with the Parse.ly product, NOT netlify or gatsby.

## Deliverable
1. A working fake-blog website (provided) with the Parse.ly tracker successfully implemented and correct metadata.
2. A write-up of any issues you ran into, how you troubleshooted, and your experience of the Parse.ly integration process.

## Steps
1. Fork this repo.

2. Get signed up with Netlify; set up with your forked repo.
NOTE: Once you are connected, every time you push local git changes to your remote github repo, Netlify will build and deploy those changes automatically.
3. Install node and npm https://www.npmjs.com/get-npm
4. Run the site locally. Run `npm install` and `npm install -g gatsby-cli` and `gatsby develop`
Note: You may ignore any npm warnings :)
5. Make sure your site is live. We recommend changing the Netlify provided subdomain.
6. Start tracking with Parse.ly Analytics by going through the self-service integration (Parse.ly/pricing starter tier) by going to https://www.parse.ly/pricing/. If you need to
return to this step at any time, go to https://dash.parsely.com/try/your.url.here.com
7. Add Parse.ly Analytics Gatsby Plugin https://www.gatsbyjs.org/packages/gatsby-plugin-parsely-analytics/ .
8. Check out your dashboard: https://dash.parsely.com/your.url.here.com
Note: There is incomplete metadata!
9. Read docs about tracker, metadata, and how to debug your site:
    1. [https://www.parse.ly/help/integration/basic/](https://www.parse.ly/help/integration/basic/)
    2. [https://www.parse.ly/help/integration/jsonld/](https://www.parse.ly/help/integration/jsonld/)
    3. [https://www.parse.ly/help/post/4332/can-confirm-site-sending-pageviews-parse-ly-2/](https://www.parse.ly/help/post/4332/can-confirm-site-sending-pageviews-parse-ly-2/)
10. Fix JSON LD (references: https://www.parse.ly/help/integration/jsonld/#about-the-json-ld-tag):
    1. Add sections
    2. Fix other omissions for existing blog posts
    3. Hint, start with `/content/blog/hello-world/index.md` , metadata can be found at the top
11. Add your own blog post (with correct metadata)
Hint: Blog posts are located in `/content/blog/`

## Below is Gatbsy's README

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog starter
</h1>

Kick off your project with this blog boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**
    ~
    Use the Gatsby CLI to create a new site, specifying the blog starter.

        ```sh
        # create a new Gatsby site using the blog starter
        gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
        ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
