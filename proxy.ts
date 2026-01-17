import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

export function proxy(request) {
    const handleI18nRouting = createMiddleware(routing);
    return handleI18nRouting(request);
}

export const config = {
    matcher: ['/', '/(es|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
