import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/app/utils/config/mongodb";
import Admin from "@/app/utils/models/AdminRegister";
import User from "@/app/utils/models/UserRegister";
import Restaurant from "@/app/utils/models/RestaurantRegister";
import bcrypt from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
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

          // Compare hashed passwords
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordValid) {
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
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = user.email;
        token.status = user.status;
        token.profilePicture = user.profilePicture;
        token.reviews = user.reviews;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.email = token.email;
      session.user.status = token.status;
      session.user.profilePicture = token.profilePicture;
      session.user.reviews = token.reviews;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = (req, res) => NextAuth(req, res, authOptions);

export const GET = async (req, res) => {
  return handler(req, res);
};

export const POST = async (req, res) => {
  return handler(req, res);
};
