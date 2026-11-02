# Phulo Jhano Medical College & Hospital content

The website reads its directory content from the Markdown files in [`src/content`](./src/content). These files are the content source of truth for the directories.

## Updating content

- Update [`src/content/doctors.md`](./src/content/doctors.md) for doctor names, specialties, photos, qualifications, experience, languages, availability, and expertise.
- Update [`src/content/facilities.md`](./src/content/facilities.md) for facilities and facility photos.
- Update [`src/content/management.md`](./src/content/management.md) for top management, HODs, district officials, contacts, and official sources.

Keep the `json` data block valid JSON. The explanatory Markdown above it is for editors and does not render on the website. After saving a file, Vite reloads the website during development; run `npm run build` before publishing.

Only verified information should be added. If an appointment schedule, official title, or contact changes, update the relevant Markdown file and note the verification date in its source notes.
