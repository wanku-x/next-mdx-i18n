import { NextResponse } from 'next/server'

export function middleware(request) {
    const { pathname, locale } = request.nextUrl

    if (
        pathname === '/' &&
        locale !== 'ru'
    ) {
        return NextResponse.rewrite(new URL(`/index.${locale}/`, request.url))
    }
}

export const config = {
    matcher: [
        '/',
        '/((?!api|_next|favicon.ico).*)',
    ],
}
