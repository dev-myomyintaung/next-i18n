'use client';

import { useRouter, usePathname } from '@/libs/i18n-navigation';
import { AppConfig } from '@/utils/app-config';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="flex gap-2">
      {AppConfig.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}