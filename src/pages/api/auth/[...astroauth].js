import AstroAuth from "@astro-auth/core";
// Import the Credential provider(s)
import { CredentialProvider } from "@astro-auth/providers";

export const all = AstroAuth({
  authProviders: [
    CredentialProvider({
      // Here, we are simply checking if the email matches and allow the user to login
      authorize: "http://localhost:8000/login"
    }),
  ],
});