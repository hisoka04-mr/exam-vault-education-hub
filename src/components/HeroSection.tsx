
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative isolate overflow-hidden bg-education-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-education-dark sm:text-6xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('heroDescription')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input type="text" placeholder={t('searchPlaceholder')} />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                {t('search')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
