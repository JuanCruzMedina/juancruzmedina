![](https://imgur.com/ggylUmd.png)
---
![GitHub license](https://img.shields.io/github/license/JuanCruzMedina/juancruzmedina)
![GitHub Repo stars](https://img.shields.io/github/stars/JuanCruzMedina/juancruzmedina?style=social)

---

# Juan Cruz Medina's Portfolio

This is the source code for Juan Cruz Medina's personal portfolio website, built with Next.js and HeroUI.

Refer to [Next.js](https://nextjs.org/docs/) and [HeroUI](https://www.heroui.com/docs) documentation to learn more.

Feel free to fork this repository to make your own portfolio, and if you liked the repo, kindly support it by giving it a star ⭐!

## Roadmap
- [ ] Add blog section 📝
- [ ] Add project detail page 📄
- [ ] Implement contact form 📧

## Table of Contents

- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure (Overview)](#project-structure-overview)
- [SEO](#seo)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Built With
- [Next.js](https://nextjs.org/) – React framework
- [HeroUI](https://www.heroui.com/) – UI components
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/JuanCruzMedina/juancruzmedina.git
    ```

2. Navigate to the project directory:

    ```bash
    cd juancruzmedina
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

To start the development server, run:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

### Configuration

Add your site information in `app/config/site.ts` and update the `public/favicon.ico` with your own favicon your images.

## Project Structure (Overview)

- `app/layout.tsx`: Main layout file where global metadata and layout components are defined.
- `app/page.tsx`: Homepage of the site.
- `app/projects/`: Contains project page and layout.
- `app/resume/`: Contains resume page and layout.
- `components/`: Contains reusable UI components.
- `app/config/site`: Configuration file for the site.
- `styles/`: Global CSS files.
- `public/`: Images, icons, and other static files.
- `types/`: TypeScript type definitions.

## SEO
SEO is implemented using the `Head` component from Next.js. Metadata is defined in `app/layout.tsx` and can be customized for individual pages.

Example metadata in `app/layout.tsx`:

```js
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};
```

## Deployment
You can deploy easily by using [Vercel](https://vercel.com/) 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2JuanCruzMedina%2juancruzmedina)

## Contributing
Pull requests are welcome! If you find any issue or have suggestions, feel free to open an issue.


## License
This project is licensed under the MIT License.