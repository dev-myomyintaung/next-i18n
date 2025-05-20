import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t("welcome")}</h1>
        <p className="text-xl">{t("description")}</p>
        <p>{t("currentLocale")}</p>
      </div>

      <div className="space-y-4">
        <p className="text-center">{t("switchLanguage")}</p>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
