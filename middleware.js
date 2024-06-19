import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  const token = await getToken({ req, secret });

  console.log("Middleware token:", token); // Debugging

  const { pathname } = req.nextUrl;

  if (!token) {
    console.log("No token found, redirecting to home");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/admin") && token.role !== "admin") {
    console.log(
      "User not authorized for admin route, redirecting to unauthorized"
    );
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  } else if (
    pathname.startsWith("/restaurant") &&
    token.role !== "restaurant"
  ) {
    console.log(
      "User not authorized for restaurant route, redirecting to unauthorized"
    );
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  } else if (pathname.startsWith("/user") && token.role !== "user") {
    console.log(
      "User not authorized for user route, redirecting to unauthorized"
    );
    return NextResponse.redirect(new URL("/auth/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/restaurant/:path*", "/user/:path*"],
};
