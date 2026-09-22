import DigitalCard from '@/components/DigitalCard';
import { getTranslations } from 'next-intl/server';

// Generar metadata dinámicamente según el idioma
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tarjeta.metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function TarjetaPage() {
  return (
    <main className="w-full">
      <DigitalCard />
    </main>
  );
}
