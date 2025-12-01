// proxy.ts
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/auth/login", "/auth/sign-up"]; // Routes that logged-in users shouldn't access

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  // Check if session cookie exists
  const session = req.cookies.get("appwrite-session");

  // Redirect unauthenticated users trying to access protected routes
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // Redirect authenticated users away from login/signup to dashboard
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
