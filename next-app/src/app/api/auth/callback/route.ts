import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest){
    const RequestUrl = new URL(request.url)
    const code = RequestUrl.searchParams.get("code")

    if(code){
        const supabase = createRouteHandlerClient<Database>({cookies})
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(RequestUrl.origin)
}