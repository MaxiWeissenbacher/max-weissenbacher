# Portfolio Maximilian Weissenbacher

## Project info

**URL**: https://maxiweissenbacher.github.io/max-weissenbacher/

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Github Pages

To update the Github Pages site under: "https://maxiweissenbacher.github.io/max-weissenbacher/", change the relevant file and enter:

```sh
npm run build && rm -rf docs && mkdir docs && cp -r dist/* docs/ && touch docs/.nojekyll && git add docs src/components/Hero.tsx && git commit -m "Update download link path" && git push
```