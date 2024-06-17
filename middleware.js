import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      console.log('No token found, redirecting to home page.');
      return NextResponse.redirect(new URL("/", req.url));
    }

    const { pathname } = req.nextUrl;

    console.log(`Pathname: ${pathname}, Token Role: ${token.role}`);

    if (pathname.startsWith("/admin") && token.role !== "admin") {
      console.log('Unauthorized access to admin route, redirecting.');
      return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
    } else if (
      pathname.startsWith("/restaurant") &&
      token.role !== "restaurant"
    ) {
      console.log('Unauthorized access to restaurant route, redirecting.');
      return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
    } else if (pathname.startsWith("/user") && token.role !== "user") {
      console.log('Unauthorized access to user route, redirecting.');
      return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/restaurant/:path*", "/user/:path*"],
};
