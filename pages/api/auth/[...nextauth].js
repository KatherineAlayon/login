import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: 'bee92af408002c51838e',
      clientSecret: '8487b5d54943f75ce065f0ca00598ca95f319867'
    }),
    GoogleProvider({
      clientId:'289865220703-dgkdsgr093hopdsp748jrirgp112pt1k.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
});