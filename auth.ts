import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GoogleProvider from "next-auth/providers/google"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_SECRET,
      authorization : {params : {prompt : "consent"}},
    })
  ],
})