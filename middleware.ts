import { NextResponse, type NextRequest } from "next/server";

const PREVIEW_COOKIE = "filemaker_lab_preview";

const allowedPublicPaths = new Set([
  "/",
  "/robots.txt",
  "/sitemap.xml",
  "/google10a430ab2c9cbc43.html"
]);

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".jpg") ||
    pathname.endsWith(".jpeg") ||
    pathname.endsWith(".webp") ||
    pathname.endsWith(".avif") ||
    pathname.endsWith(".svg")
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (allowedPublicPaths.has(pathname) || isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/lab-preview" || pathname.startsWith("/lab-preview/")) {
    const response = NextResponse.next();
    response.cookies.set(PREVIEW_COOKIE, "1", {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });
    return response;
  }

  if (request.cookies.get(PREVIEW_COOKIE)?.value === "1") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!api).*)"]
};
