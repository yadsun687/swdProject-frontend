import userLogIn from "@/libs/userLogIn";
import nextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions:AuthOptions = {
    providers:[
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              email: { label: "Email", type: "email" , placeholder: "email"},
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {
  
                if(!credentials) return null
                const userData = await userLogIn(credentials.email , credentials.password);
                
                if (!userData) return null
                return userData
            }
          })
    ],
    session:{strategy:"jwt"},
    callbacks:{
        async jwt({token,user}){
            return {...token , ...user}
            // now token will contain {user , token}
        },
        async session({session,token,user}){
            //assign user to the data of token -> {user, token}
            session.user = token as any
            return session
        }
    }
}

const handler = nextAuth(authOptions)

export { handler as GET , handler as POST}