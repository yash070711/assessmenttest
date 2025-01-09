import { getAccessControl } from '@/pages/api/resources';
import { NextResponse } from 'next/server';


export function middleware(req: any) {
  // Ensure req.nextUrl is defined before trying to destructure it
  const { nextUrl } = req;
  if (!nextUrl) {
    return NextResponse.next();
  }
  
  const { pathname } = nextUrl;
  const user = req.cookies['user'] ? JSON.parse(req.cookies['user']) : null;

  // Example access control logic (ensure `getAccessControl` is correctly defined)
  const accessControl = getAccessControl();

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const allowedRoles = accessControl[pathname] || [];
  if (!allowedRoles.includes(user.role)) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}

// Specify paths this middleware should apply to (optional)
export const config = {
  matcher: ['/admin', '/dashboard'], // Customize the paths as needed
};
