# Customer inquiry widget

The floating inquiry widget stores every message in the existing MongoDB database. The admin inbox is available at `/admin/inquiries`.

## Required environment variables

- `MONGODB_URI` — existing MongoDB connection string.
- `INQUIRY_ADMIN_PASSWORD` — password for the private inquiry inbox.
- `INQUIRY_AUTH_SECRET` — random secret with at least 32 characters, used to sign admin sessions.
- `RESEND_API_KEY` — Resend API key used for inquiry and reply notifications.
- `INQUIRY_FROM_EMAIL` — verified sender, such as `Larry Parba <messages@larryparba.com>`.
- `INQUIRY_ADMIN_EMAIL` — address that receives new inquiry notifications. Defaults to the public profile email.
- `NEXT_PUBLIC_SITE_URL` — deployed origin, such as `https://larryparba.com`.

`INQUIRY_IP_HASH_SECRET` is optional. When set, it is used to hash visitor IP addresses for database-backed rate limiting. Raw IP addresses are not stored.

Generate a suitable authentication secret with:

```bash
openssl rand -base64 48
```

## Security and delivery behavior

- Admin sessions use signed, HTTP-only, same-site cookies and expire after 12 hours.
- Every admin API route performs its own authorization check.
- Write requests require a same-origin browser request.
- Public submissions use server-side validation, a honeypot, a minimum completion time, link limits, and a five-messages-per-hour database rate limit.
- Email failures never discard an inquiry or reply. The admin interface reports when a reply was saved but could not be emailed.
