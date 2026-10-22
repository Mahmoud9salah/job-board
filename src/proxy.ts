import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const host = (request.headers.get('host') ?? "").toLowerCase();
    const pathName = request.nextUrl.pathname;
    const url = request.nextUrl;
    console.log("Host: ", host);
    console.log("Path Name: ", pathName);



    if (pathName === '/') {
    return NextResponse.redirect(new URL('/', request.url));
    }

    if (pathName === '/admin' || pathName.startsWith('/admin/')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
    '/((?!api/|_next/static|_next/image|sw\\.js).*)',
  ]
};