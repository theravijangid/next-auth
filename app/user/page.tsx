import { getServerSession } from "next-auth"
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
    // to render user details on server component we use getServerSession
    const session = await getServerSession(NEXT_AUTH);
    const user = JSON.stringify(session)
    return(
        <div>
            Welcome {session?.user?.name}
            {user}
        </div>
    )
}