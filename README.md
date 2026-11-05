# Heart To Soul Psychotherapy

Standalone rebuild of https://heart-to-soul-psy-97b9e54c.base44.app (React + Vite + Tailwind + shadcn/ui).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

- Pages: `src/pages/` (Home, About, Services, Fees, FAQ, Contact, Blog, BlogPost, ServiceDetail at `/service/:id`)
- Header/footer: `src/components/Layout.jsx`
- Images: `public/images/` (downloaded from the original, no longer depends on Base44 hosting)
- Blog posts: `src/data/blogPosts.js` (empty, as on the live site)
- Contact form: set `VITE_FORM_ENDPOINT` (see `.env.example`), otherwise it opens a pre-filled email to s.beenishjalil@gmail.com
- SPA routing for hosting: `vercel.json` (Vercel) and `public/_redirects` (Netlify)
