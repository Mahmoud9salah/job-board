import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const host = (request.headers.get('host') ?? "").toLowerCase();
    const pathName = request.nextUrl.pathname;
    const url = request.nextUrl;
    console.log("host: ", host);
    console.log("pathName: ", pathName);
    console.log("url: ", url);

    // Rule1 : 
    const isAdminHost = host.includes("admin.wazifa.app");
    if (isAdminHost) {
        // Redirect to the admin dashboard
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    
    // Rule2 :
    const isMainDoamin = host.includes("wazifa.app");
    if (isMainDoamin && pathName.includes("dashboard")) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: '/amzing-jobs/:path*',
}