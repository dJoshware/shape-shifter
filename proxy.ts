import { updateSession } from '@/lib/middleware';
import type { NextRequest } from 'next/server';

export async function proxy(req: NextRequest) {
    return await updateSession(req);
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image  (image optimization)
         * - favicon.ico, sitemap.xml, robots.txt
         * - Public files with extensions
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
