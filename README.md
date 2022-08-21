# 📷 Supabase Image Gallery

Loads very efficient and optimized images fetched directly from Supabase alongside **Lazy Loading**

- [Hosted Demo](https://image-gallery-7xoxm65bd-sanyampunia.vercel.app/)

## 🤼 Team Members

- [Sanyam](https://github.com/SanyamPunia/)
- [crankyastrologer](https://github.com/crankyastrologer)

## Preview

![image](https://user-images.githubusercontent.com/35108041/185815617-2344f35d-2f36-41bb-9426-dbfa1f42cbb9.png)

## ⚒ Tech Stack

- **Next.js** (Frontend Framework)
- **Supabase** (Database)
- **Tailwind CSS** (CSS Framework)
- **VERCEL** (Deployment)

## 📐 Local Setup & Usage

- Clone the repository
- Install the required dependencies by running the following command on your terminal

```bash
$ npm install
```

- In `.env.local` file, add your credentials

```bash
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY
REVALIDATE_SECRET=
```

- Spin up the local development server

```bash
$ npm run dev
```

## 📅 Supabase Usage
1) Main usage of this project depends upon [PostgreSQL Database](https://supabase.com/docs/guides/database#postgres-or-postgresql)
    * User related information such as `ID`, `username`, `name` and `href` was stored in the `Table Editor`
    * Using `getStaticProps` in `Next.js`, data was fetched from the [Supabase API](https://supabase.com/docs/guides/api)
2) Supabase [Edge Functions](https://supabase.com/docs/guides/functions) were used to activate `revalidation` via **Database Webhooks**