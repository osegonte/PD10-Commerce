// FILE: src/app/auth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: { session } } = await supabase.auth.exchangeCodeForSession(code);

    if (session?.user?.email) {
      const { data } = await supabase
        .from("admins")
        .select("email")
        .eq("email", session.user.email)
        .maybeSingle();

      if (data) {
        return NextResponse.redirect(new URL("/admin", requestUrl.origin));
      }
    }
  }

  return NextResponse.redirect(new URL("/", requestUrl.origin));
}