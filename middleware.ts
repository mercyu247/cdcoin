import { NextRequest, NextResponse } from "next/server";

export function curentUrl(path: any) {
  if (path === "/maintenance") {
    return true;
  }
}


  const data = await res.json();
  if (parseInt(data?.data?.maintenance_mode_status) === 1) {
    if (curentUrl(req.nextUrl.pathname) === true) {
      return NextResponse.next();
    }
    // return NextResponse.redirect(
    //   `${process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL}maintenance`
    // );
    return NextResponse.redirect(new URL("/maintenance", req.url));
    // return NextResponse.rewrite(new URL("/maintenance", req.url));
  }
  // return NextResponse.rewrite(req.nextUrl);
}

export const config = {
  matcher: [
    "/",
    "/authentication/:path*",
    "/dashboard/:path*",
    "/user/:path*",
    "/exchange/:path*",
    "/user/my-wallet/:path*",
  ],
};
