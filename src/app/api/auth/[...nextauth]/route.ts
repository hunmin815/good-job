import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 여기에 인증 로직 구현
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signup",
  },
});

export { handler as GET, handler as POST };
