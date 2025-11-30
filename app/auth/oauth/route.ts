import { NextResponse } from "next/server";

// This route is no longer needed with Appwrite as OAuth callback
// is handled directly by Appwrite. The success/failure URLs are
// specified when calling createOAuth2Session.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/dashboard";

  // With Appwrite, OAuth is handled automatically via the SDK
  // This route can be used as a fallback redirect
  return NextResponse.redirect(`${origin}${next}`);
}
