This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install all packages by navigating to the project folder

(using the package manager of your choice npm, yarn, pnpm)

```bash
npm install
```

### Set env variable for BACKEND API

```bash
export NEXT_PUBLIC_API_SERVICE_URL=https://localhost:3001
```

To run the development server:

```bash
npm run dev

```

To run the production server:

- first build the app
  ```bash
  npm run build
  ```
- then start the app
  ```bash
  npm start
  ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are 3 routes

- `/login` -> to authenticate to app (google login)
- `/comments` -> nested comments
- `/search` -> search tracks for spotify
