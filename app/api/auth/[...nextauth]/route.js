// app/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import { connectToDb } from "@/app/utils/config/mongodb";
import Credentials from "next-auth/providers/credentials";
import Admin from "@/app/utils/models/AdminRegister";
import User from "@/app/utils/models/UserRegister";
import Restaurant from "@/app/utils/models/RestaurantRegister";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDb();
        let user =
          (await Admin.findOne({ email: credentials.email })) ||
          (await User.findOne({ email: credentials.email })) ||
          (await Restaurant.findOne({ email: credentials.email }));

        if (user) {
          // Check if the user is a restaurant and its status
          if (user instanceof Restaurant && user.status !== "approved") {
            return null; // Deny access if the restaurant is not approved
          }

          // Plain text comparison for testing
          if (credentials.password === user.password) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email; // Add email to token if needed
        token.status = user.status; // Add status
        token.profilePicture = user.profilePicture; // Add profile picture
        token.reviews = user.reviews; // Add reviews
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.email = token.email; // Add email to session if needed
      session.user.status = token.status; // Add status
      session.user.profilePicture = token.profilePicture; // Add profile picture
      session.user.reviews = token.reviews; // Add reviews
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
