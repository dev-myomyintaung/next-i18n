import type { LocalePrefixMode } from 'next-intl/routing'

const localePrefix: LocalePrefixMode = 'as-needed'

export const AppConfig = {
    name: 'NextJS i18n',
    locales: ['en', 'mm', 'th'],
    defaultLocale: 'mm',
    localePrefix,
}