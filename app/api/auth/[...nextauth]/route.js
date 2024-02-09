import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import CryptoJS from "crypto-js";
import User from "@/models/users";
import dbConnect from "@/lib/dbConnect";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
        phoneNumber: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" },
        otp_verification: { label: "OTP Verification", type: "boolean" },
        otp_jwt: { label: "OTP Jwt", type: "text" },
      },
      authorize: async (credentials) => {
        await dbConnect();
        let myuser = await User.findOne({
          phoneNumber: { $eq: credentials.phoneNumber },
        });
        if (!myuser) {
          return null; // User not found
        }
        if (credentials.otp_verification) {
          const bytes = CryptoJS.AES.decrypt(
            credentials.otp_jwt,
            process.env.NEXT_PUBLIC_OTP_SECRET
          );
          const jwt_data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          if (jwt_data.ok) {
            return {
              uid: myuser.uid,
              name: myuser.name,
              email: myuser.phoneNumber,
              phoneNumber: myuser.phoneNumber,
            };
          } else return null;
        } else {
          if (bcrypt.compare(credentials.password, myuser.password)) {
            return {
              uid: myuser.uid,
              name: myuser.name,
              email: myuser.phoneNumber,
              phoneNumber: myuser.phoneNumber,
            };
          } else {
            return { error: "Invalid username or password", success: false };
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign_in",
  },
  theme: {
    colorScheme: "light",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      const session_exp = new Date(session.expires);
      token.exp = session_exp.getTime();
      let mysession = {
        user: {
          name: session.user.name || "",
          phoneNumber: session.user.email,
          email: undefined,
          image: undefined,
        },
        expires: session.expires,
        accessToken: token.accessToken,
      };
      // process.env.NODE_ENV === "development" && console.log("MY_SESSION", mysession ?? { error: 'could not found'})
      // process.env.NODE_ENV === "development" && console.log("SESSION:", session ?? { error: 'could not found'}, "::", token, ":")
      return mysession;
    },
  },
});
export { handler as GET, handler as POST };
