// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  } else if (
    pathname.startsWith("/restaurant") &&
    token.role !== "restaurant"
  ) {
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  } else if (pathname.startsWith("/user") && token.role !== "user") {
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/restaurant/:path*", "/user/:path*"],
};
