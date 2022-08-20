import AstroAuth from "@astro-auth/core";
import { GoogleProvider } from "@astro-auth/providers";

export const all = AstroAuth({
  authProviders: [
    GoogleProvider({
      clientId: import.meta.env.CLIENT_ID,
      clientSecret: import.meta.env.CLIENT_SECRET,
    }),
  ],
});