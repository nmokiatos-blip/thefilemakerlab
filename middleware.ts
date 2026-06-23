import { NextResponse, type NextRequest } from "next/server";

const PREVIEW_COOKIE = "filemaker_lab_preview";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"]
};
