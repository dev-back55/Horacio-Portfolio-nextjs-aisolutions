"use client";

import React from 'react';
import styles from './DigitalCard.module.css';
import { useTranslations, useLocale } from 'next-intl';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

export default function DigitalCard() {
  const t = useTranslations('tarjeta');
  const locale = useLocale();

  // Parseamos el JSON para generar los servicios y estadísticas de forma limpia
  const servicesList = t.raw('services');
  
  // Como `t.raw` a veces no se comporta bien en componentes del cliente con arreglos según la config, 
  // es mejor hacerlo seguro con elementos concretos si lo necesitas, o usar un map en un array estricto.
  // Pero funcionará con `t.raw` para arreglos simples en next-intl.
  const services = Array.isArray(servicesList) ? servicesList : [
    t('services.0'),
    t('services.1'),
    t('services.2'),
    t('services.3'),
    t('services.4'),
    t('services.5'),
  ];

  const handleShare = async () => {
    const shareData = {
      title: t('metadata.title'),
      text: t('metadata.description'),
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback a WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      window.open(whatsappUrl, '_blank');
      // Copiar al portapapeles si no se usa WhatsApp Web
      navigator.clipboard.writeText(shareData.url);
      toast.success('Link copiado al portapapeles');
    }
  };

  return (
    <div className={styles.container}>
      {/* Importamos las fuentes requeridas solo para este contenedor o globalmente */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');
      `}</style>
      
      <div className="w-full flex flex-col items-center">
        <div className={styles.card}>
          <div className={styles.cardAccent}></div>
          
          <div className={styles.cardHeader}>
            <button 
              className={styles.shareBtn} 
              onClick={handleShare}
              title="Compartir tarjeta"
            >
              <Share2 size={18} />
            </button>
            <div className={styles.avatar}>HA</div>
            <div className={styles.headerInfo}>
              <h1>Horacio Abitú</h1>
              <div className={styles.title}>{t('title')}</div>
              <div className={styles.location}>📍 {t('location')}</div>
            </div>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.sectionLabel}>{t('servicesLabel')}</div>
            <div className={styles.services}>
              {services.map((service, index) => (
                <span key={index} className={styles.tag}>{service}</span>
              ))}
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>{t('stats.experience.num')}</div>
                <div className={styles.statLabel}>{t('stats.experience.label')}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>{t('stats.projects.num')}</div>
                <div className={styles.statLabel}>{t('stats.projects.label')}</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>{t('stats.companies.num')}</div>
                <div className={styles.statLabel}>{t('stats.companies.label')}</div>
              </div>
            </div>

            <div className={styles.aiBadge}>
              <div className={styles.aiIcon}>🤖</div>
              <div className={styles.aiText}>
                <strong>{t('aiBadge.title')}</strong>
                <span>{t('aiBadge.description')}</span>
              </div>
            </div>

            <div className={styles.sectionLabel}>{t('contactLabel')}</div>
            <div className={styles.contacts}>
              <a 
                href={`https://wa.me/542804386944?text=${t('whatsapp.message')}`} 
                className={`${styles.btn} ${styles.btnPrimary}`} 
                target="_blank" 
                rel="noreferrer"
              >
                <div className={styles.btnIcon}>💬</div>
                <div className={styles.btnText}>
                  <span className={styles.btnLabel}>{t('whatsapp.label')}</span>
                  {t('whatsapp.value')}
                </div>
              </a>
              <a 
                href="mailto:contacto@horacioabitu.com" 
                className={`${styles.btn} ${styles.btnSecondary}`} 
                target="_blank" 
                rel="noreferrer"
              >
                <div className={styles.btnIcon}>✉️</div>
                <div className={styles.btnText}>
                  <span className={styles.btnLabel}>{t('email.label')}</span>
                  {t('email.value')}
                </div>
              </a>
              <a 
                href={`/${locale}`} // Enlace interno al idioma seleccionado
                className={`${styles.btn} ${styles.btnSecondary}`} 
              >
                <div className={styles.btnIcon}>🌐</div>
                <div className={styles.btnText}>
                  <span className={styles.btnLabel}>{t('website.label')}</span>
                  {t('website.value')}
                </div>
              </a>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <a href={`/${locale}`}>{t('website.value')}</a>
          </div>
        </div>

        <div className={styles.shareHint}>{t('shareHint')}</div>
      </div>
    </div>
  );
}
