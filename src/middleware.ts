import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = [{ path: "/user" }, { path: "/booking/request" }];

// Define public routes
const publicRoutes = ["/", "/login", "/signup"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const accessToken = token?.accessToken;
  const { pathname } = request.nextUrl;

  // If no token and trying to access protected routes, redirect to login
  if (!accessToken) {
    if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
      return NextResponse.next(); // Allow access to login/signup
    }

    // Check if trying to access protected route
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route.path)
    );
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Allow access to public routes without token
    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If user has token and tries to access auth pages, redirect to home
  if (
    accessToken &&
    (pathname.startsWith("/login") ||
      pathname.startsWith("/signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/user/:path*",
    "/booking/request/:path*",
  ],
};
