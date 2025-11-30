import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

// This route is no longer needed with Appwrite as email verification
// is handled differently. Appwrite uses a direct verification link
// that confirms the user automatically.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const next = searchParams.get("next") ?? "/";

  if (userId && secret) {
    // With Appwrite, email verification is typically handled client-side
    // or the verification link directly confirms the account
    // Redirect to the specified page or login
    redirect(next);
  }

  // redirect the user to an error page with some instructions
  redirect(`/auth/error?error=Invalid verification link`);
}
