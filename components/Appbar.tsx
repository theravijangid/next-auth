"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export const Appbar = () => {
    const session = useSession();   // this hook helps us to get logged in user detailswhich are returned during signin
    const router = useRouter();
    const user = JSON.stringify(session)
    console.log(user)
    return (
        <div className="w-screen">
            <div className="w-full flex justify-center mt-20">
            <button className="rounded-full mr-2 border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => signIn()  }>Sign In</button>
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => signOut()  }>Logout</button>
            </div>

            <p>Welcome {session.data?.user?.name}</p>
            {user}
        </div>
    )
}