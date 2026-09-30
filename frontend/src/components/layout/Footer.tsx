import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Container } from './Container';

export function Footer() {
  const { t } = useTranslation();
  return <footer className="bg-[var(--color-primary-dark)] text-white"><Container className="grid gap-12 py-16 md:grid-cols-[1.25fr_0.75fr_1fr]"><div><Link to="/" className="text-xl font-semibold text-white">{siteConfig.name}</Link><p className="mt-4 max-w-sm text-white/85">{siteConfig.tagline}</p><div className="mt-7 flex gap-3">{[[Facebook, siteConfig.socials.facebook], [Instagram, siteConfig.socials.instagram], [Linkedin, siteConfig.socials.linkedin]].map(([Icon, href], index) => { const SocialIcon = Icon as typeof Facebook; return <a key={index} href={href as string} aria-label="Social media" className="rounded-md border border-white/25 p-2 text-white transition hover:bg-white/10"><SocialIcon size={17} /></a>; })}</div></div><div><h2 className="font-semibold text-white">{t('footer.quickLinks')}</h2><div className="mt-4 grid gap-3">{navigation.slice(0, 5).map((item) => <Link key={item.href} to={item.href} className="text-sm text-white/80 transition hover:text-white">{t(`nav.${item.key}`)}</Link>)}</div></div><div><h2 className="font-semibold text-white">{t('footer.contact')}</h2><div className="mt-4 grid gap-3 text-sm text-white/85"><span className="flex gap-2"><MapPin size={17} className="shrink-0" />{siteConfig.contact.address}</span><a className="flex gap-2" href={`tel:${siteConfig.contact.phone}`}><PhoneCall size={17} className="shrink-0" />{siteConfig.contact.phone}</a><a className="flex gap-2" href={`mailto:${siteConfig.contact.email}`}><Mail size={17} className="shrink-0" />{siteConfig.contact.email}</a></div></div></Container><div className="border-t border-white/20 py-5"><Container><p className="text-sm text-white/70">{t('footer.copyright', { year: new Date().getFullYear(), name: siteConfig.name })}</p></Container></div></footer>;
}
