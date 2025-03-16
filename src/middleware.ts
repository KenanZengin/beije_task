import { NextResponse, type NextRequest } from "next/server";


export function middleware(request: NextRequest){
    
    const { nextUrl } = request;

    const token = request.cookies.get("token")?.value;
    const path = nextUrl.pathname;

    const isPublicPath = path === "/login";
    
    if(isPublicPath && token){
        return NextResponse.redirect(new URL("/",request.url))
    }
    
}


export const config = {
    matcher: 
    [
        "/login",
    ],
  }
