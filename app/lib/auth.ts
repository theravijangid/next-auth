import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';


export const NEXT_AUTH = {
    providers: [
        CredentialProvider({
            name: "Email",
            credentials: {     // field for your login  
                username: {label: 'email', type:'text', placeholder: 'email'},
                password: {label: 'password', type:'password', placeholder: 'password'}
            },
            async authorize(credentials: any) {
                console.log(credentials)
                // validation
                return {
                    id: "user1",
                    name: "ravi",
                    email: "ravi@gmail.com"
                };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        session: ({ session, token , user}: any) => {
            console.log(session)
            if(session.user && session) {
                session.user.id = token.sub;
            }
            return session
        } 
    },
    pages: {
        signIn: '/signin'
    }
}