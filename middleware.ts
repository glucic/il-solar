// middleware.ts
import {NextRequest, NextResponse} from 'next/server';

const locales = ['de', 'hr'];
const defaultLocale = 'de';

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    // Skip static files, API routes, and already-localized paths
    const isPublicFile = pathname.match(/\.(.*)$/);
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/favicon.ico') ||
        isPublicFile ||
        locales.some((locale) => pathname.startsWith(`/${locale}`))
    ) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'], // excludes all static files like .svg, .png, .jpg, .js, etc.
};