# Jerzy Zborowski - Home page

[![Test](https://github.com/dzbo/jzborowski/actions/workflows/test.yaml/badge.svg?branch=main)](https://github.com/dzbo/jzborowski/actions/workflows/test.yaml)

https://www.jerzyzborowski.pl/

## Stack

- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [mise](https://mise.jdx.dev/)
- [pnpm](https://pnpm.io/)

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on http://127.0.0.1:5173/

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Lint

Lint check for formatting (Prettier), Typescript and Eslint.

```bash
pnpm run lint
```

## Test

```bash
pnpm run test
```

## Publish

Push to `main` branch and [Github action](https://github.com/dzbo/jzborowski/actions/workflows/pages.yml) will deploy to [Github Pages](https://pages.github.com).
