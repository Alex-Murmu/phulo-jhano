# Phulo Jhano Medical College & Hospital content

The website reads its directory content from the Markdown files in [`src/content`](./src/content). These files are the content source of truth for the directories.

## Image folders

Local images are organized under [`public/images`](./public/images):

- `branding` — hospital logo and footer artwork
- `doctors` — doctor profile photos
- `management` — management, HOD, and district-official photos
- `nursing`, `cleaners`, `operators`, `pharmacy`, `laboratory`, `security`, `support` — staff-category photos
- `schemes` — government-scheme logos and illustrations
- `facilities`, `care`, and `hero` — facility, service, and landing-page imagery

Use paths beginning with `/images/` in Markdown content, for example `/images/doctors/dr-name.jpg`. Empty folders contain `.gitkeep` until approved local images are added.

## Updating content

- Update [`src/content/doctors.md`](./src/content/doctors.md) for doctor names, specialties, photos, qualifications, experience, languages, availability, and expertise.
- Update [`src/content/facilities.md`](./src/content/facilities.md) for facilities and facility photos.
- Update [`src/content/management.md`](./src/content/management.md) for top management, HODs, district officials, contacts, and official sources.
- Update [`src/content/schemes.md`](./src/content/schemes.md) for government schemes, benefits, eligibility notes, images, and official links shown on the Care page.
- Add staff to the `nursing`, `cleaning`, `operators`, `pharmacy`, `laboratory`, `security`, or `support` arrays in `management.md`. Replace the current role-based team entries with verified individual staff details when available.

Keep the `json` data block valid JSON. The explanatory Markdown above it is for editors and does not render on the website. After saving a file, Vite reloads the website during development; run `npm run build` before publishing.

Only verified information should be added. If an appointment schedule, official title, or contact changes, update the relevant Markdown file and note the verification date in its source notes.
