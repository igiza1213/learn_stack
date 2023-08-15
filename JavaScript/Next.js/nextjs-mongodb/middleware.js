import { NextResponse } from "next/server";

export function middleware(req) {
    console.log(req.nextUrl);
    console.log(req.cookies);
    console.log(req.headers);
}
