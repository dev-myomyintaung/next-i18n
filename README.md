# Next.js i18n Project Documentation
This is a Next.js project bootstrapped with create-next-app featuring internationalization (i18n) support.

## Features
- Multi-language support (English, Burmese, Thai)
- Language switching functionality
- Server and Client component support
## Project Structure
```
src/
  ├── app/             # Next.js app directory
  ├── components/      # React components
  ├── locales/         # Translation files
  │   ├── en.json     # English translations
  │   ├── mm.json     # Burmese translations
  │   └── th.json     # Thai translations
  ├── libs/           # i18n configuration
  │   ├── i18n.ts
  │   ├── i18n-routing.ts
  │   └── i18n-navigation.ts
  └── utils/          # Utility functions
```
## Getting Started
1. Install dependencies:
```
npm install
```
2. Run the development server:
```
npm run dev
```
3. Open http://localhost:3000 with your browser to see the result.
## Working with Translations
### Adding New Translation Keywords
1. Add new keys to src/locales/en.json :
```
{
  "HomePage": {
    "newKey": "New translation value"
  }
}
```
2. Add the same key to other language files with appropriate translations:
- src/locales/mm.json (Burmese)
- src/locales/th.json (Thai)

### Adding a New Language
1. Create a new JSON file in src/locales/[language-code].json
2. Copy the structure from existing language files
3. Add translations for all existing keys
4. Update the language configuration in your `AppConfig.ts` settings
### Using Translations In Server Components:
```
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
``` In Client Components:
```
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
```
## Language Switching
The project includes a LanguageSwitcher component that allows users to change languages dynamically. Available languages:

- English (en)
- Burmese (mm)
- Thai (th)

## Learn More
- Next.js Documentation
- next-intl Documentation

## Contributing
1. Maintain consistent translation key structure
2. Add translations for all supported languages
3. Update type definitions when adding new keys
4. Test language switching functionality
5. Follow the existing code style
## Deploy
Deploy your i18n-enabled Next.js app using Vercel Platform .

For more deployment options, check out the Next.js deployment documentation .