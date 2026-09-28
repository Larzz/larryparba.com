# Blog storage on Vercel

The blog currently reads from `lib/blog-data.ts`, so it works locally and after deployment with no credentials. The page components only call `getBlogPosts()` and `getBlogPostBySlug()`. Keep those function names when moving the content to a database.

## Recommended setup

Use two storage services for different jobs:

1. A Postgres integration from the Vercel Marketplace (Neon or Supabase) for post records.
2. A public Vercel Blob store for cover images and other public article media.

Vercel Postgres is no longer offered for new projects. Vercel now provisions external database providers through Marketplace integrations and injects their credentials as environment variables.

Useful official documentation:

- [Storage on Vercel Marketplace](https://vercel.com/docs/marketplace-storage)
- [Postgres on Vercel](https://vercel.com/docs/postgres)
- [Vercel Blob](https://vercel.com/docs/vercel-blob)
- [Vercel Blob SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk)

## Suggested post model

```text
id                UUID / generated primary key
slug              unique text
title             text
excerpt           text
content           text or JSON
tags              text array or related table
cover_image_url   nullable text
status            draft | published
published_at      nullable timestamp
created_at        timestamp
updated_at        timestamp
```

Keep `slug` unique and query only `published` posts on public pages. Store image URLs in the database, but put the image files themselves in Blob.

## Dashboard steps

1. Open the Vercel project and select **Storage**.
2. Create a Postgres database through a Marketplace provider such as Neon or Supabase.
3. Connect it to the Production, Preview, and Development environments you want to use.
4. Create a separate **public** Blob store for public blog images.
5. Pull the injected environment variables into local development with the Vercel CLI.
6. Add the posts table and migrate the two starter articles from `lib/blog-data.ts`.
7. Replace the two exported data functions with database queries.
8. Add a protected authoring page or use the database provider’s dashboard until an editor is needed.

## Security and publishing rules

- Never expose database credentials or `BLOB_READ_WRITE_TOKEN` to Client Components.
- Authenticate every create, update, delete, and upload route.
- Validate slugs, file types, file sizes, and content on the server.
- Use public Blob only for content that is meant to be public and indexable.
- Treat Blob files as immutable: upload a new pathname when replacing an image, then update the database URL.
- Keep drafts out of public queries and out of generated metadata.

## Practical next implementation

The smallest production-ready next step is:

1. Connect Neon in Vercel.
2. Add a `posts` table and server-only database client.
3. Move the starter posts into that table.
4. Connect public Vercel Blob for cover images.
5. Add a password-protected `/admin/blog` editor with draft/publish controls.

That leaves the current `/blog` and `/blog/[slug]` UI unchanged while replacing only the data source.
