import type { Lang } from '../data/site';

const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

/** A file under public/ (assets, brand files, legal pages). */
export const asset = (path: string): string => `${BASE}${path.replace(/^\//, '')}`;

/** A page in one language: '' is home, 'brand/' the brand page. English at the root, Turkish under tr/. */
export const page = (lang: Lang, path = ''): string => `${BASE}${lang === 'tr' ? 'tr/' : ''}${path.replace(/^\//, '')}`;
