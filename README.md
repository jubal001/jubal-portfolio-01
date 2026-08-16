# Sambo Jubal KpeiNom — World-Class Portfolio

A premium React + TypeScript + Vite portfolio designed around Data Analytics, Business Intelligence and AI/ML.

## 1. Install on Windows

You do **not** need Bash.

1. Install Node.js LTS from the official Node.js website.
2. Extract this project folder.
3. Open the folder in VS Code.
4. In VS Code, choose **Terminal → New Terminal**. Windows PowerShell is fine.
5. Run:

```powershell
npm install
npm run dev
```

6. Open the local address Vite prints, normally `http://localhost:5173`.

## 2. Add your professional picture

Create this file:

`public/profile.jpg`

The website already has a safe fallback if the file is not present.

For best results use a high-resolution professional portrait with the original aspect ratio preserved. The website uses `object-fit: cover`, so your image will not be stretched.

## 3. Add your CV

Place your CV here:

`public/Sambo-Jubal-KpeiNom-CV.pdf`

If you use another filename, update `cv` in:

`src/data/portfolio.ts`

## 4. Edit portfolio content

Nearly all editable portfolio information is centralized in:

`src/data/portfolio.ts`

You can edit:
- name and headline
- roles
- email
- GitHub
- LinkedIn
- CV filename
- about text
- skills
- experience
- education
- projects
- certifications

## 5. LinkedIn

The LinkedIn field is intentionally empty because no verified LinkedIn URL was supplied. Add the exact URL later:

```ts
linkedin: "https://www.linkedin.com/in/your-profile/",
```

## 6. Project links

Each project has `github` and `demo`. Replace the GitHub placeholders with the exact repository URLs when each repository is ready. Leave `demo` empty until you have a real live deployment.

## 7. Contact form

The current form is intentionally safe and frontend-only: it does not pretend to send an email.

For production, connect it to a form service or your own backend/API and keep the current fields.

## 8. Production build

```powershell
npm run build
npm run preview
```

The production files are generated in:

`dist/`

## 9. Deployment

### Vercel
1. Create a GitHub repository.
2. Push the project.
3. Import the repository into Vercel.
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify
1. Import the GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`

## 10. Quality checks

Before publishing:
- Add the real profile photo.
- Add the CV.
- Add verified LinkedIn URL.
- Replace project GitHub placeholders with exact repositories.
- Add real live demos only where they exist.
- Connect the contact form.
- Run `npm run build`.
- Test desktop, tablet and mobile.
- Test keyboard navigation.
- Test reduced-motion mode.
- Check browser console for errors.
- Run Lighthouse after deployment.

## Design direction

Dark premium technology aesthetic, data-intelligence visual language, restrained cyan/blue accents, glass surfaces, strong typography, subtle motion and responsive layouts.

No Bash-specific workflow is required.
